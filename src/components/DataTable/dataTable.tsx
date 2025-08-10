import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
  type Table as TableType,
  type Updater,
  type VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  type ForwardedRef,
} from "react";
import { Skeleton } from "../ui/skeleton";
import SelectInput, { type SelectOption } from "../SelectInput/index.tsx";
import AppPagination from "../AppPagination/index.tsx";
import { cn } from "@/lib/utils.ts";

export interface DataTableHandle<TData> {
  table: TableType<TData>;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  filterColumn?: string;
  page: number;
  limit: number;
  total: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
  isPagination?: boolean;
  actions?: (row: TData) => React.ReactNode;
  columnVisibility?: VisibilityState;
  setColumnVisibility?: (updater: Updater<VisibilityState>) => void;
  isActionsFixed?: boolean;
}

function DataTableInner<TData, TValue>(
  {
    columns,
    data,
    isLoading = false,
    page,
    limit,
    total,
    actions,
    onPageChange,
    isPagination = true,
    onLimitChange,
    columnVisibility,
    setColumnVisibility,
    isActionsFixed = false,
  }: DataTableProps<TData, TValue>,
  ref: ForwardedRef<DataTableHandle<TData>>
) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      pagination: {
        pageIndex: page - 1,
        pageSize: limit,
      },
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: (updater) => setColumnVisibility?.(updater),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: Math.ceil(total / limit),
  });

  useImperativeHandle(ref, () => ({ table }), [table]);

  const renderSkeleton = () =>
    [...Array(limit)].map((_, rowIndex) => (
      <TableRow key={`skeleton-${rowIndex}`}>
        {columns.map((_, colIndex) => (
          <TableCell key={`skeleton-cell-${colIndex}`} className="p-2 sm:p-4">
            <Skeleton className="h-4 w-full sm:h-6" />
          </TableCell>
        ))}
        {actions && (
          <TableCell className="flex items-center justify-end p-2 text-right sm:p-4">
            <Skeleton className="h-4 w-12 sm:h-6 sm:w-16" />
          </TableCell>
        )}
      </TableRow>
    ));

  // Calculate the start and end record numbers for display
  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  const limitOptions: SelectOption[] = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "50", label: "50" },
  ];

  return (
    <div className="flex w-full flex-col space-y-4">
      {/* Table Container with Horizontal Scroll */}
      <Table>
        <TableHeader className="[&_tr]:border-b-0">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="bg-border/50 hover:bg-border/50"
            >
              {headerGroup.headers.map((header, i) => (
                <TableHead
                  key={i}
                  className={`text-foreground px-2 py-2 text-center sm:px-8 sm:py-3`}
                  style={{ width: header.column.getSize() }}
                >
                  <div className="truncate">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </div>
                </TableHead>
              ))}
              {actions && (
                <TableHead
                  className={cn("w-[60px] px-2 py-2 text-center sm:px-8", {
                    "sticky right-0 z-50 bg-primary": isActionsFixed,
                  })}
                >
                  <div className="truncate">Actions</div>
                </TableHead>
              )}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isLoading ? (
            renderSkeleton()
          ) : table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="hover:bg-muted border-border/30 my-1 border-t text-center last:border-b sm:my-2"
              >
                {row.getVisibleCells().map((cell, i) => (
                  <TableCell
                    key={i}
                    style={{ width: cell.column.getSize() }}
                    className={`px-2 py-2 text-xs sm:px-8 sm:py-3 sm:text-sm`}
                  >
                    <div className="truncate">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  </TableCell>
                ))}

                {actions && (
                  <TableCell
                    className={cn(
                      "w-[60px] px-2 py-2 text-xs sm:px-8 sm:py-3 sm:text-sm",
                      {
                        "sticky right-0 z-50 bg-primary shadow-md":
                          isActionsFixed,
                      }
                    )}
                  >
                    <div className="flex justify-center">
                      {actions(row.original)}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-muted-foreground h-16 px-2 py-4 text-center text-xs sm:h-24 sm:px-4 sm:py-6 sm:text-sm"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Section */}
      {isPagination && (
        <div className="flex flex-col items-center justify-between gap-3 px-2 sm:flex-row sm:gap-4 sm:px-4">
          <div className="order-2 flex items-center text-center text-xs text-[#54607A] sm:text-left sm:text-sm">
            <span className="block sm:inline">
              Showing {start} to {end} of {total} results
            </span>
            <span className="mr-2 block sm:ml-1 sm:inline">
              of {total} entries
            </span>
            <SelectInput
              options={limitOptions}
              value={limit.toString()}
              onValueChange={(value) => onLimitChange(Number(value))}
              placeholder="Select limit"
              triggerClassName="bg-transparent shadow-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0"
            />
          </div>
          <div className="order-1">
            <AppPagination
              total={total}
              limit={limit}
              page={page}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export const DataTable = forwardRef(DataTableInner) as <
  TData,
  TValue = unknown
>(
  props: DataTableProps<TData, TValue> & {
    ref?: React.Ref<DataTableHandle<TData>>;
  }
) => ReturnType<typeof DataTableInner>;

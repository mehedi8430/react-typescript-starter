import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import type { Table, VisibilityState } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import SearchInput from "../SearchInput";
import DateTimePicker from "../DateTimePicker";

interface ColumnDef {
  id: string;
  displayName: string;
  canHide?: boolean;
}

interface DataTableFilterProps<T> {
  searchTerm: string;
  handleFilterChange: (search: string) => void;
  setSelectedDate?: (date: string | null) => void;
  table: Table<T>;
  columns: ColumnDef[];
  searchPlaceholder?: string;
  showDatePicker?: boolean;
  showExportButton?: boolean;
  exportButtonText?: string;
  onExportClick?: () => void;
  searchInputClassName?: string;
  columnVisibility?: VisibilityState;
}

export function DataTableFilter<T>({
  searchTerm,
  handleFilterChange,
  setSelectedDate,
  table,
  columns,
  searchPlaceholder = "Search...",
  showDatePicker = false,
  showExportButton = false,
  exportButtonText = "Export",
  onExportClick,
  searchInputClassName = "w-full lg:w-[443px]",
  columnVisibility,
}: DataTableFilterProps<T>) {
  // Get filterable columns (exclude select and actions columns if present)
  const getFilterableColumns = () => {
    return columns.filter(
      (col) =>
        (col.canHide ?? true) && col.id !== "select" && col.id !== "actions"
    );
  };

  const toggleColumnVisibility = (columnId: string) => {
    const column = table.getColumn(columnId);
    if (column) {
      column.toggleVisibility();
    }
  };

  const filterableColumns = getFilterableColumns();

  return (
    <div className="p-4">
      <div className="flex flex-col items-center justify-between gap-4 xl:flex-row">
        <div className="flex items-center justify-center gap-3">
          <SearchInput
            value={searchTerm}
            onChange={handleFilterChange}
            placeholder={searchPlaceholder}
            debounceDelay={300}
            className={searchInputClassName}
          />
          {showDatePicker && setSelectedDate && (
            <DateTimePicker
              onDateTimeChange={(dateTime) => {
                setSelectedDate(dateTime ? dateTime.toString() : null);
                console.log("Selected DateTime:", dateTime);
              }}
            />
          )}
        </div>

        {/* Column filter dropdown */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="filter_button"
                className="flex items-center gap-2"
              >
                <ChevronDown className="h-4 w-4" />
                Column Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {filterableColumns.map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={columnVisibility?.[column.id] ?? true}
                  onCheckedChange={() => toggleColumnVisibility(column.id)}
                  onSelect={(event) => event.preventDefault()}
                >
                  {column.displayName}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {showExportButton && (
            <Button
              variant="filter_button"
              className="hidden rounded-lg lg:flex lg:self-end"
              onClick={onExportClick}
            >
              {exportButtonText}
            </Button>
          )}
        </div>
      </div>

      <div className="">
        {showExportButton && (
          <Button
            variant="filter_button"
            className="rounded-lg lg:hidden"
            onClick={onExportClick}
          >
            {exportButtonText}
          </Button>
        )}
      </div>
    </div>
  );
}

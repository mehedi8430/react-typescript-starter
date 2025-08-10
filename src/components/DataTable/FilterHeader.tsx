import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Filter } from "lucide-react";

interface FilterHeaderProps {
  headerText: string;
  filterValue: string;
  onFilterChange: (value: string) => void;
  options: { value: string; label: string }[];
  allLabel?: string;
}

export const FilterHeader = ({
  headerText,
  filterValue,
  onFilterChange,
  options,
  allLabel = "All",
}: FilterHeaderProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span>{headerText}</span>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="cursor-pointer hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0"
        >
          <Button variant="ghost" size="sm" className="h-6 px-2">
            <Filter className="size-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem
            onClick={() => onFilterChange("")}
            className={`cursor-pointer ${
              filterValue === "" ? "bg-accent" : ""
            }`}
          >
            {allLabel}
          </DropdownMenuItem>
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onFilterChange(option.value)}
              className={`cursor-pointer ${
                filterValue === option.value ? "bg-accent" : ""
              }`}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

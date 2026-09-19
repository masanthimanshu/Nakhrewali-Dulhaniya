import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { PriceFilter, SortOption } from "../types";

interface FilterSortControlsProps {
  filterPrice: PriceFilter;
  onFilterChange: (filter: PriceFilter) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  filterLabel?: string;
}

const PRICE_FILTERS: { id: PriceFilter; label: string }[] = [
  { id: "all", label: "All Prices" },
  { id: "under1000", label: "Under ₹1,000" },
  { id: "1000to1500", label: "₹1,000 - ₹1,500" },
  { id: "above1500", label: "₹1,500+" },
];

export const FilterSortControls: React.FC<FilterSortControlsProps> = ({
  filterPrice,
  onFilterChange,
  sortBy,
  onSortChange,
  filterLabel = "Filter:",
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 border-b border-[#EAE1D7]">
      <div className="flex items-center space-x-2 text-xs text-[#70605A] overflow-x-auto w-full sm:w-auto no-scrollbar">
        <SlidersHorizontal className="w-3.5 h-3.5 text-[#961A38] shrink-0" />
        <span className="font-semibold text-[#1C1412] shrink-0">
          {filterLabel}
        </span>
        {PRICE_FILTERS.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
              filterPrice === filter.id
                ? "bg-[#1C1412] text-white font-bold"
                : "bg-white border border-[#EAE1D7] text-[#6E5D57] hover:border-[#1C1412]"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-2 self-end sm:self-auto">
        <span className="text-[11px] font-medium text-[#70605A]">Sort:</span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="text-xs bg-white border border-[#DFCFC1] rounded-xl px-2.5 py-1.5 text-[#1C1412] focus:outline-none focus:border-[#961A38] cursor-pointer"
        >
          <option value="popular">Most Loved</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  );
};

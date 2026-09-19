import React, { useState, useMemo } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { FilterSortControls } from "../components/FilterSortControls";
import { useShop } from "../context/ShopContext";
import { CategoryId, PriceFilter, SortOption } from "../types";
import { filterAndSortProducts } from "../utils/productUtils";

export const CollectionPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const { addToCart, isWishlisted, toggleWishlist } = useShop();

  const activeCategory = (categoryId as CategoryId) || "earrings";
  const categoryMeta =
    CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[1];

  const [filterPrice, setFilterPrice] = useState<PriceFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("popular");

  const products = useMemo(
    () =>
      filterAndSortProducts(
        PRODUCTS,
        activeCategory,
        filterPrice,
        sortBy,
        searchQuery,
      ),
    [activeCategory, filterPrice, sortBy, searchQuery],
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-[#8C7A75] mb-6">
          <Link to="/" className="hover:text-[#961A38]">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#C5A880]" />
          <span>Collections</span>
          <ChevronRight className="w-3 h-3 text-[#C5A880]" />
          <span className="text-[#1C1412] font-semibold">
            {categoryMeta.name}
          </span>
        </nav>

        {/* Dedicated Range Masthead Banner (Ad-Ready) */}
        <div className="mb-10 p-6 sm:p-10 bg-white rounded-3xl border border-[#EAE1D7] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FAF2F4]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center space-x-2 text-[11px] font-semibold text-[#8C7A75] uppercase tracking-widest">
                <span>Range {categoryMeta.romanNumeral}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1C1412]">
                {categoryMeta.name}
              </h1>

              <p className="text-sm text-[#6E5D57] font-normal leading-relaxed">
                {categoryMeta.tagline}
              </p>

              <p className="text-xs text-[#961A38] font-medium tracking-wide">
                {categoryMeta.subtitle}
              </p>
            </div>

            {/* Quick Switch to Other Ranges */}
            <div className="flex flex-wrap items-center gap-2 shrink-0 bg-[#FAF7F2] p-2 rounded-2xl border border-[#EAE1D7]">
              {CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                <Link
                  key={c.id}
                  to={`/collection/${c.id}`}
                  className={`px-3 py-1.5 rounded-xl text-xs transition-all font-medium ${
                    activeCategory === c.id
                      ? "bg-[#1C1412] text-white font-bold shadow-2xs"
                      : "text-[#6E5D57] hover:text-[#1C1412] hover:bg-white"
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Filters & Sorting */}
        <FilterSortControls
          filterPrice={filterPrice}
          onFilterChange={setFilterPrice}
          sortBy={sortBy}
          onSortChange={setSortBy}
          filterLabel="Budget:"
        />

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EAE1D7] mt-8 p-6">
            <p className="text-lg font-display font-semibold text-[#1C1412] mb-1">
              No matching pieces found
            </p>
            <p className="text-xs text-[#8C7A75]">
              Try adjusting your budget filter or search terms.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={isWishlisted(product.id)}
                onToggleWishlist={toggleWishlist}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

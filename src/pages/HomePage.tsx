import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { HeroBanner } from "../components/HeroBanner";
import { CategoryShowcase } from "../components/CategoryShowcase";
import { BrandPerks } from "../components/BrandPerks";
import { BoyfriendGuide } from "../components/BoyfriendGuide";
import { AestheticLookbook } from "../components/AestheticLookbook";
import { FaqSection } from "../components/FaqSection";
import { SocialProofWall } from "../components/SocialProofWall";
import { FilterSortControls } from "../components/FilterSortControls";
import { useShop } from "../context/ShopContext";
import { CategoryId, PriceFilter, SortOption } from "../types";
import { filterAndSortProducts } from "../utils/productUtils";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart, isWishlisted, toggleWishlist, setIsHamperBuilderOpen } =
    useShop();

  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");
  const [filterPrice, setFilterPrice] = useState<PriceFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("popular");

  const filteredProducts = useMemo(
    () =>
      filterAndSortProducts(PRODUCTS, selectedCategory, filterPrice, sortBy),
    [selectedCategory, filterPrice, sortBy],
  );

  const activeCategoryMeta = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div>
      {/* 1. Hero Editorial Section */}
      <HeroBanner onSelectCategory={(cat) => setSelectedCategory(cat)} />

      {/* 2. The 4 Distinct Signature Ranges Showcase */}
      <CategoryShowcase
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* 3. Products Catalog Grid Section */}
      <section
        id="catalog-section"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24"
      >
        {/* Category Header (if filtered) */}
        {selectedCategory !== "all" && activeCategoryMeta && (
          <div className="mb-8 p-6 sm:p-8 bg-white rounded-3xl border border-[#EAE1D7] shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-[11px] font-semibold text-[#8C7A75] uppercase tracking-widest mb-1">
                <span>Range {activeCategoryMeta.romanNumeral}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1C1412]">
                {activeCategoryMeta.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#6E5D57] mt-1">
                {activeCategoryMeta.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-xs text-[#8C7A75] hover:text-[#1C1412] px-3 py-1.5 rounded-xl border border-[#EAE1D7] bg-[#FAF7F2] cursor-pointer"
              >
                View All
              </button>
              <button
                onClick={() => navigate(`/collection/${selectedCategory}`)}
                className="text-xs font-semibold text-[#961A38] hover:bg-[#FAF2F4] px-3.5 py-1.5 rounded-xl border border-[#F2D6DC] bg-white transition-colors cursor-pointer"
              >
                Open Dedicated Collection Page →
              </button>
            </div>
          </div>
        )}

        {/* Filter & Sort Controls */}
        <FilterSortControls
          filterPrice={filterPrice}
          onFilterChange={setFilterPrice}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Product Grid (Click navigates to dedicated product page) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={isWishlisted(product.id)}
              onToggleWishlist={toggleWishlist}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </section>

      {/* 4. Brand Advantages & Craft Standards */}
      <BrandPerks />

      {/* 5. The Boyfriend Gifting Survival Guide */}
      <BoyfriendGuide />

      {/* 6. As Seen on Her Pinterest Moodboards (Style Lookbook) */}
      <AestheticLookbook />

      {/* 7. Unboxing Ritual Section */}
      <section className="bg-white py-16 border-t border-[#EAE1D7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold text-[#8C2038] uppercase tracking-[0.2em]">
                The Unboxing Experience
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#140F0D] tracking-tight">
                Crafted for Pure Emotion
              </h3>

              <p className="text-sm text-[#4E3F3A] leading-relaxed">
                Every piece arrives nestled in our signature velvet box, scented with dried rose potpourri, and sealed with a hand-poured crimson wax stamp over your personalized letter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EAE1D7]">
                  <h5 className="text-xs font-bold text-[#140F0D]">
                    Wax-Sealed Letter
                  </h5>
                  <p className="text-xs text-[#594843] mt-1 leading-normal">
                    Custom message on calligraphy parchment.
                  </p>
                </div>
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EAE1D7]">
                  <h5 className="text-xs font-bold text-[#140F0D]">
                    Weightless Craft
                  </h5>
                  <p className="text-xs text-[#594843] mt-1 leading-normal">
                    Hollow brass core for all-night wear.
                  </p>
                </div>
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EAE1D7]">
                  <h5 className="text-xs font-bold text-[#140F0D]">
                    Signature Velvet Box
                  </h5>
                  <p className="text-xs text-[#594843] mt-1 leading-normal">
                    Scented keepsake trunk ready to gift.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF7F2] p-8 rounded-2xl border border-[#EAE1D7] shadow-2xs text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#140F0D] flex items-center justify-center text-[#D4AF37] mx-auto text-xl">
                🎁
              </div>
              <h4 className="text-xl font-display font-bold text-[#140F0D]">
                Curate A Bespoke Hamper
              </h4>
              <p className="text-xs sm:text-sm text-[#4E3F3A] max-w-sm mx-auto leading-relaxed">
                Combine your favorite earrings, bangles, and hair accessories to build a personalized gifting trunk with complimentary wax seal and savings.
              </p>
              <button
                id="unboxing-hamper-btn"
                onClick={() => setIsHamperBuilderOpen(true)}
                className="w-full py-3.5 bg-[#140F0D] hover:bg-[#961A38] text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Launch Hamper Studio</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Customer Love & Reviews Chronicles */}
      <SocialProofWall />

      {/* 9. Frequently Asked Questions Accordion */}
      <FaqSection />
    </div>
  );
};

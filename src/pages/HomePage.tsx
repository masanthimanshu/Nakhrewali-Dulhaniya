import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { SlidersHorizontal, ArrowRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { HeroBanner } from "../components/HeroBanner";
import { CategoryShowcase } from "../components/CategoryShowcase";
import { BrandPerks } from "../components/BrandPerks";
import { BoyfriendGuide } from "../components/BoyfriendGuide";
import { AestheticLookbook } from "../components/AestheticLookbook";
import { FaqSection } from "../components/FaqSection";
import { SocialProofWall } from "../components/SocialProofWall";
import { useShop } from "../context/ShopContext";
import { CategoryId } from "../types";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const {
    addToCart,
    isWishlisted,
    toggleWishlist,
    setIsHamperBuilderOpen,
    setIsGiftQuizOpen,
  } = useShop();

  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");
  const [filterPrice, setFilterPrice] = useState<
    "all" | "under1000" | "1000to1500" | "above1500"
  >("all");
  const [sortBy, setSortBy] = useState<
    "popular" | "price-asc" | "price-desc" | "rating"
  >("popular");

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (filterPrice === "under1000") {
      list = list.filter((p) => p.price < 1000);
    } else if (filterPrice === "1000to1500") {
      list = list.filter((p) => p.price >= 1000 && p.price <= 1500);
    } else if (filterPrice === "above1500") {
      list = list.filter((p) => p.price > 1500);
    }

    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, filterPrice, sortBy]);

  const activeCategoryMeta = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div>
      {/* 1. Hero Editorial Section */}
      <HeroBanner
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenHamperBuilder={() => setIsHamperBuilderOpen(true)}
        onOpenGiftQuiz={() => setIsGiftQuizOpen(true)}
      />

      {/* 2. The 4 Distinct Signature Ranges Showcase */}
      <CategoryShowcase
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* 3. Products Catalog Grid Section */}
      <section
        id="catalog-section"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 border-b border-[#EAE1D7]">
          <div className="flex items-center space-x-2 text-xs text-[#70605A] overflow-x-auto w-full sm:w-auto no-scrollbar">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#961A38] shrink-0" />
            <span className="font-semibold text-[#1C1412] shrink-0">
              Filter:
            </span>
            {(["all", "under1000", "1000to1500", "above1500"] as const).map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setFilterPrice(filter)}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
                    filterPrice === filter
                      ? "bg-[#1C1412] text-white font-bold"
                      : "bg-white border border-[#EAE1D7] text-[#6E5D57] hover:border-[#1C1412]"
                  }`}
                >
                  {filter === "all"
                    ? "All Prices"
                    : filter === "under1000"
                      ? "Under ₹1,000"
                      : filter === "1000to1500"
                        ? "₹1,000 - ₹1,500"
                        : "₹1,500+"}
                </button>
              ),
            )}
          </div>

          <div className="flex items-center space-x-2 self-end sm:self-auto">
            <span className="text-[11px] font-medium text-[#70605A]">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs bg-white border border-[#DFCFC1] rounded-xl px-2.5 py-1.5 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
            >
              <option value="popular">Most Loved</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid (Click navigates to dedicated product page) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={isWishlisted(product.id)}
              onToggleWishlist={toggleWishlist}
              onAddToCart={() => addToCart(product)}
              onOpenQuickView={() => navigate(`/product/${product.id}`)}
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
              <div className="inline-flex items-center space-x-1.5 text-[11px] font-semibold text-[#7A152E] uppercase tracking-widest bg-[#FAF2F4] px-3.5 py-1 rounded-full border border-[#F2D6DC]">
                <span>💌</span>
                <span>The Unboxing Ritual</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1C1412]">
                Packed Like A Bollywood Climax
              </h3>

              <p className="text-xs sm:text-sm text-[#6E5D57] leading-relaxed">
                Every parcel from <strong>nakhrewalidulhaniya.com</strong> is
                packed to evoke pure emotion. You choose her favorite piece
                across our 4 ranges, and our atelier completes the magic with
                rose-scented potpourri, a signature Gulabi velvet box, and a
                hand-poured crimson wax seal enclosing your personalized
                Bollywood love letter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EAE1D7]">
                  <span className="text-lg">💌</span>
                  <h5 className="text-xs font-bold text-[#1C1412] mt-1.5">
                    Wax-Sealed Letter
                  </h5>
                  <p className="text-[11px] text-[#8C7A75] mt-0.5">
                    Calligraphy parchment letter included free.
                  </p>
                </div>
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EAE1D7]">
                  <span className="text-lg">👑</span>
                  <h5 className="text-xs font-bold text-[#1C1412] mt-1.5">
                    Weightless Craft
                  </h5>
                  <p className="text-[11px] text-[#8C7A75] mt-0.5">
                    Hollow brass core for pain-free dancing.
                  </p>
                </div>
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EAE1D7]">
                  <span className="text-lg">🌹</span>
                  <h5 className="text-xs font-bold text-[#1C1412] mt-1.5">
                    Gulabi Velvet Box
                  </h5>
                  <p className="text-[11px] text-[#8C7A75] mt-0.5">
                    Scented rose potpourri keepsake box.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF7F2] p-8 rounded-3xl border border-[#EAE1D7] shadow-xs text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C1412] border border-[#C5A880]/40 flex items-center justify-center text-[#D4AF37] mx-auto text-xl">
                🎁
              </div>
              <h4 className="text-lg sm:text-xl font-display font-bold text-[#1C1412]">
                Curate A Bespoke Hamper
              </h4>
              <p className="text-xs text-[#6E5D57] max-w-sm mx-auto leading-relaxed">
                Mix and match pieces across Haye Jhumka, Bole Chudiyan, and Yeh
                Reshmi Zulfen to create a custom royal gift box with automatic
                15% privilege savings.
              </p>
              <button
                onClick={() => setIsHamperBuilderOpen(true)}
                className="w-full py-3.5 bg-[#1C1412] hover:bg-[#2D201C] text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
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

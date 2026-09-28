import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { CategoryId } from "../types";
import { StarRating } from "./StarRating";
import { useShop } from "../context/ShopContext";

interface HeroBannerProps {
  onSelectCategory?: (cat: CategoryId) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onSelectCategory }) => {
  const { setIsHamperBuilderOpen, setIsGiftQuizOpen } = useShop();

  const handleSelectRange = (cat: CategoryId) => {
    onSelectCategory?.(cat);
    const target =
      document.getElementById("ranges-section") ||
      document.getElementById("catalog-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRanges = () => {
    const target =
      document.getElementById("ranges-section") ||
      document.getElementById("catalog-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] border-b border-[#EAE1D7] py-10 sm:py-16">
      {/* Subtle ambient luxury warmth */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#F4E3D3]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#EAD6D9]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: High-End Editorial Storytelling */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Clean Monogram Kicker */}
            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#8C2038] tracking-[0.2em] uppercase">
              <span className="text-[#C5A880]">✦</span>
              <span>The Bollywood Gifting Atelier</span>
              <span className="text-[#C5A880]">✦</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-display font-bold text-[#140F0D] leading-[1.14] tracking-tight">
              She isn’t high maintenance, she’s{" "}
              <span className="font-serif-romance italic font-normal text-[#961A38] block sm:inline">
                Nakhrewali.
              </span>
            </h1>

            {/* Clear, Punchy Subtitle - Zero Bluff */}
            <p className="text-base sm:text-lg text-[#3E312C] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Heirloom jhumkas, velvet bangles, and bespoke gift trunks — handcrafted with 22K anti-tarnish finish for timeless romance.
            </p>

            {/* Premium CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                id="hero-explore-ranges-btn"
                onClick={scrollToRanges}
                className="px-7 py-3.5 bg-[#961A38] hover:bg-[#7D152E] text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-sm hover:shadow-md transition-all flex items-center space-x-2 group cursor-pointer"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-90 text-[#F5EFEB] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-hamper-btn"
                onClick={() => setIsHamperBuilderOpen(true)}
                className="px-6 py-3.5 bg-[#140F0D] hover:bg-[#251A17] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase rounded-full shadow-sm transition-all flex items-center space-x-2 group cursor-pointer"
              >
                <span>Curate A Hamper</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                id="hero-quiz-btn"
                onClick={() => setIsGiftQuizOpen(true)}
                className="px-5 py-3.5 bg-white hover:bg-[#F7F2EC] text-[#2C211E] border border-[#D9C8B8] font-semibold text-xs tracking-wider uppercase rounded-full transition-all cursor-pointer"
              >
                <span>Gift Concierge</span>
              </button>
            </div>

            {/* Understated Trust Proofs - Crisp Typography */}
            <div className="pt-4 border-t border-[#EAE1D7] flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#52443F] font-medium">
              <div className="flex items-center space-x-1.5">
                <StarRating rating={5} />
                <span className="font-semibold text-[#140F0D]">4.9 / 5</span>
                <span>(14,000+ reviews)</span>
              </div>
              <span aria-hidden="true" className="text-[#C5A880]">·</span>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                <span>22K Anti-Tarnish Finish</span>
              </div>
              <span aria-hidden="true" className="text-[#C5A880]">·</span>
              <span>Complimentary Wax-Sealed Note</span>
            </div>
          </div>

          {/* Right Column: Refined Editorial Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-2xl p-3 bg-white border border-[#E8DDD2] shadow-xl">
              {/* Main Portrait Showcase Image - Clickable to scroll to Range IV */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleSelectRange("romantic-gifts")}
                className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F5EFEB] cursor-pointer group"
                title="View Range IV: Dil Tu Jaan Tu"
              >
                <img
                  src="https://i.pinimg.com/1200x/67/b4/b4/67b4b4c4f8eb32d68b45123acb0e0f90.jpg"
                  alt="Nakhrewali Dulhaniya Signature Trunk"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold block">
                    Range IV · Bridal Keepsake Trunk
                  </span>
                  <p className="font-display font-bold text-lg text-white mt-0.5">
                    Dil Tu Jaan Tu
                  </p>
                  <p className="text-xs text-[#EAD8C7] line-clamp-1 mt-0.5">
                    Velvet keepsake trunk with wax-sealed parchment note
                  </p>
                  <span className="inline-flex items-center text-xs text-[#FAF7F2] font-semibold mt-2 group-hover:text-[#D4AF37] transition-colors">
                    <span>View Collection</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Four Range Quick Switcher Strip Below */}
              <div className="grid grid-cols-4 gap-1.5 pt-3">
                <button
                  type="button"
                  onClick={() => handleSelectRange("earrings")}
                  className="p-2 rounded-lg text-center bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#E8DDD2] transition-colors group cursor-pointer"
                  title="View Range I: Haye Jhumka"
                >
                  <span className="text-[10px] text-[#7A6B65] block uppercase font-medium">
                    I · Jhumkas
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectRange("bangles")}
                  className="p-2 rounded-lg text-center bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#E8DDD2] transition-colors group cursor-pointer"
                  title="View Range II: Bole Chudiyan"
                >
                  <span className="text-[10px] text-[#7A6B65] block uppercase font-medium">
                    II · Bangles
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectRange("hair")}
                  className="p-2 rounded-lg text-center bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#E8DDD2] transition-colors group cursor-pointer"
                  title="View Range III: Yeh Reshmi Zulfen"
                >
                  <span className="text-[10px] text-[#7A6B65] block uppercase font-medium">
                    III · Hair
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectRange("romantic-gifts")}
                  className="p-2 rounded-lg text-center bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#E8DDD2] transition-colors group cursor-pointer"
                  title="View Range IV: Dil Tu Jaan Tu"
                >
                  <span className="text-[10px] text-[#7A6B65] block uppercase font-medium">
                    IV · Hampers
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

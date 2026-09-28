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
            {/* Range Monogram Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F0E6DC] border border-[#DFCFC1] text-[#7A152E] text-[11px] font-semibold tracking-widest uppercase">
              <span className="text-[#C5A880]">✦</span>
              <span>The Bollywood Gifting Atelier</span>
              <span className="text-[#C5A880]">✦</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-[#1C1412] leading-[1.16]">
              She isn’t high maintenance, she’s{" "}
              <span className="font-serif-romance italic font-normal text-[#961A38] block sm:inline">
                Nakhrewali.
              </span>
            </h1>

            {/* Subtitle with interactive range links that scroll down */}
            <p className="text-sm sm:text-base text-[#61514B] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Curated across four distinct cinematic ranges:{" "}
              <button
                type="button"
                onClick={() => handleSelectRange("earrings")}
                className="text-[#1C1412] font-semibold underline decoration-[#C5A880] underline-offset-2 hover:text-[#961A38] hover:decoration-[#961A38] transition-colors cursor-pointer"
              >
                Haye Jhumka
              </button>
              ,{" "}
              <button
                type="button"
                onClick={() => handleSelectRange("bangles")}
                className="text-[#1C1412] font-semibold underline decoration-[#C5A880] underline-offset-2 hover:text-[#961A38] hover:decoration-[#961A38] transition-colors cursor-pointer"
              >
                Bole Chudiyan
              </button>
              ,{" "}
              <button
                type="button"
                onClick={() => handleSelectRange("hair")}
                className="text-[#1C1412] font-semibold underline decoration-[#C5A880] underline-offset-2 hover:text-[#961A38] hover:decoration-[#961A38] transition-colors cursor-pointer"
              >
                Yeh Reshmi Zulfen
              </button>
              , and heirloom{" "}
              <button
                type="button"
                onClick={() => handleSelectRange("romantic-gifts")}
                className="text-[#1C1412] font-semibold underline decoration-[#C5A880] underline-offset-2 hover:text-[#961A38] hover:decoration-[#961A38] transition-colors cursor-pointer"
              >
                Dil Tu Jaan Tu
              </button>{" "}
              keepsakes.
            </p>

            {/* Premium CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                id="hero-explore-ranges-btn"
                onClick={scrollToRanges}
                className="px-6 py-3.5 bg-[#961A38] hover:bg-[#7D152E] text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-sm hover:shadow-md transition-all flex items-center space-x-2 group cursor-pointer"
              >
                <span>Explore The 4 Ranges</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-90 text-[#F5EFEB] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-hamper-btn"
                onClick={() => setIsHamperBuilderOpen(true)}
                className="px-5 py-3.5 bg-[#1C1412] hover:bg-[#2D201C] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase rounded-full shadow-sm hover:shadow-md transition-all flex items-center space-x-2 group cursor-pointer"
              >
                <span>Curate Hamper</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-quiz-btn"
                onClick={() => setIsGiftQuizOpen(true)}
                className="px-5 py-3.5 bg-white hover:bg-[#F7F2EC] text-[#2C211E] border border-[#D9C8B8] font-semibold text-xs tracking-wider uppercase rounded-full transition-all cursor-pointer"
              >
                <span>Gift Concierge</span>
              </button>
            </div>

            {/* Understated Trust Proofs */}
            <div className="pt-4 border-t border-[#EAE1D7] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#7A6B65]">
              <div className="flex items-center space-x-1.5">
                <StarRating rating={5} />
                <span className="font-semibold text-[#1C1412]">4.9 / 5</span>
                <span>(14,200+ lovers)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                <span>22K Anti-Tarnish Polish</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-[#961A38]">💌</span>
                <span>Wax-Sealed Love Note Included</span>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Editorial Showcase (No angled stickers or chaotic clutter) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-2xl p-3 bg-white border border-[#E8DDD2] shadow-xl">
              {/* Main Portrait Showcase Image - Clickable to scroll to Range IV */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleSelectRange("romantic-gifts")}
                className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F5EFEB] cursor-pointer group"
                title="Click to view Range IV Dil Tu Jaan Tu"
              >
                <img
                  src="https://i.pinimg.com/1200x/67/b4/b4/67b4b4c4f8eb32d68b45123acb0e0f90.jpg"
                  alt="Nakhrewali Dulhaniya Signature Trunk"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* Top Subtle Seal */}
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#1C1412] tracking-wider uppercase border border-[#E0D2C2]">
                  Handcrafted Atelier
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] block font-medium">
                    Range IV • Dil Tu Jaan Tu
                  </span>
                  <p className="font-display font-bold text-base text-white mt-0.5">
                    Tujh Mein Rab Dikhta Hai
                  </p>
                  <p className="font-serif-romance italic text-xs text-[#EAD8C7]">
                    Velvet bridal trunk with complimentary wax-sealed parchment
                    note.
                  </p>
                  <span className="inline-flex items-center text-[11px] text-[#F5EFEB] font-medium mt-1 underline decoration-[#D4AF37] underline-offset-2">
                    View Range IV below ↓
                  </span>
                </div>
              </div>

              {/* Four Range Quick Switcher Strip Below */}
              <div className="grid grid-cols-4 gap-1.5 pt-3">
                <button
                  type="button"
                  onClick={() => handleSelectRange("earrings")}
                  className="p-1.5 rounded-lg text-center bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#E8DDD2] transition-colors group cursor-pointer"
                  title="View Range I: Haye Jhumka"
                >
                  <span className="text-[9px] text-[#9E8E89] block uppercase tracking-wider font-semibold">
                    I
                  </span>
                  <span className="text-[10px] font-bold text-[#1C1412] block truncate group-hover:text-[#961A38]">
                    Jhumka
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectRange("bangles")}
                  className="p-1.5 rounded-lg text-center bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#E8DDD2] transition-colors group cursor-pointer"
                  title="View Range II: Bole Chudiyan"
                >
                  <span className="text-[9px] text-[#9E8E89] block uppercase tracking-wider font-semibold">
                    II
                  </span>
                  <span className="text-[10px] font-bold text-[#1C1412] block truncate group-hover:text-[#961A38]">
                    Chudiyan
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectRange("hair")}
                  className="p-1.5 rounded-lg text-center bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#E8DDD2] transition-colors group cursor-pointer"
                  title="View Range III: Yeh Reshmi Zulfen"
                >
                  <span className="text-[9px] text-[#9E8E89] block uppercase tracking-wider font-semibold">
                    III
                  </span>
                  <span className="text-[10px] font-bold text-[#1C1412] block truncate group-hover:text-[#961A38]">
                    Zulfen
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectRange("romantic-gifts")}
                  className="p-1.5 rounded-lg text-center bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#E8DDD2] transition-colors group cursor-pointer"
                  title="View Range IV: Dil Tu Jaan Tu"
                >
                  <span className="text-[9px] text-[#9E8E89] block uppercase tracking-wider font-semibold">
                    IV
                  </span>
                  <span className="text-[10px] font-bold text-[#1C1412] block truncate group-hover:text-[#961A38]">
                    Dil Tu
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

import React from "react";
import { ArrowRight } from "lucide-react";
import { CategoryId } from "../types";
import { handleImageError } from "../utils/imageFallback";

interface CategoryShowcaseProps {
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const ranges = [
    {
      id: "earrings" as const,
      roman: "Range I",
      title: "Haye Jhumka",
      subtitle: "Statement Chandbalis, Kundan Drops & Royal Meenakari",
      image:
        "https://i.pinimg.com/1200x/69/06/d9/6906d9d10843730960f22245a47b64f5.jpg",
      count: "Earrings & Drops",
      quote: "“Aankhon ki gustakhiyan maaf hon...”",
    },
    {
      id: "bangles" as const,
      roman: "Range II",
      title: "Bole Chudiyan",
      subtitle: "Velvet Stacks, Resham Bangles & Latkan Kadas",
      image:
        "https://i.pinimg.com/1200x/8e/92/9b/8e929bd4037d189c792ad059dd01b878.jpg",
      count: "Bangles & Kadas",
      quote: "“The sweet musical chime of royal glass.”",
    },
    {
      id: "hair" as const,
      roman: "Range III",
      title: "Yeh Reshmi Zulfen",
      subtitle: "Silk Organza Bows, Pearl Vines & Embroidered Bands",
      image:
        "https://i.pinimg.com/736x/49/0e/6e/490e6ee4b020f17df2722c794465331a.jpg",
      count: "Hair Adornments",
      quote: "“Sharbat jaise meethi zulfon ke liye.”",
    },
    {
      id: "romantic-gifts" as const,
      roman: "Range IV",
      title: "Dil Tu Jaan Tu",
      subtitle: "Curated Trunks, Wax-Sealed Notes & Scented Keepsakes",
      image:
        "https://i.pinimg.com/1200x/67/b4/b4/67b4b4c4f8eb32d68b45123acb0e0f90.jpg",
      count: "Romantic Hampers",
      quote: "“Grand cinematic love stories in a box.”",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-[#EAE1D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 text-[11px] font-semibold text-[#8C7A75] uppercase tracking-[0.25em]">
            <span>✦ The Four Distinct Ranges ✦</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1C1412]">
            Curated by Cinematic Tradition
          </h2>
          <p className="text-xs sm:text-sm text-[#70605A] leading-relaxed">
            Four signature chapters of romance, from featherlight mirror jhumkas
            to heirloom velvet gifting trunks.
          </p>
        </div>

        {/* 4 Architectural Collection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ranges.map((range) => {
            const isSelected = selectedCategory === range.id;
            return (
              <button
                key={range.id}
                id={`cat-card-${range.id}`}
                onClick={() => onSelectCategory(range.id)}
                className={`group text-left relative rounded-2xl overflow-hidden bg-[#FAF7F2] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "border-[#961A38] ring-1 ring-[#961A38] shadow-md"
                    : "border-[#EAE1D7] hover:border-[#C5A880] hover:shadow-lg"
                }`}
              >
                {/* Image Container with Elegant Portrait Framing */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F2ECE4]">
                  <img
                    src={range.image}
                    alt={range.title}
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Top Roman Numeral Monogram */}
                  <div className="absolute top-3 left-3 bg-[#1C1412]/85 backdrop-blur-xs text-[#EAD8C7] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#C5A880]/30 tracking-wider uppercase">
                    {range.roman}
                  </div>

                  {/* Bottom Title Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <h3 className="font-display font-bold text-xl text-white leading-tight">
                      {range.title}
                    </h3>
                  </div>
                </div>

                {/* Subtitle & Action */}
                <div className="p-4 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <span className="text-[10px] font-semibold text-[#8C7A75] uppercase tracking-wider block">
                      {range.count}
                    </span>
                    <p className="text-xs text-[#6E5D57] mt-1 leading-snug line-clamp-2">
                      {range.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center justify-between text-xs font-semibold">
                    <span
                      className={`text-[11px] font-medium transition-colors ${
                        isSelected
                          ? "text-[#961A38]"
                          : "text-[#8C7A75] group-hover:text-[#1C1412]"
                      }`}
                    >
                      {isSelected ? "Viewing Range" : "Explore Range"}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${
                        isSelected ? "text-[#961A38]" : "text-[#8C7A75]"
                      }`}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

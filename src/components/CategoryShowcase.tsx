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
  const handleCategoryCardClick = (catId: CategoryId) => {
    onSelectCategory(catId);
    const catalogEl = document.getElementById("catalog-section");
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ranges = [
    {
      id: "earrings" as const,
      roman: "Range I",
      title: "Haye Jhumka",
      subtitle: "Chandbalis, kundan drops & hand-enameled jhumkas",
      image:
        "https://i.pinimg.com/1200x/69/06/d9/6906d9d10843730960f22245a47b64f5.jpg",
      count: "Earrings & Drops",
    },
    {
      id: "bangles" as const,
      roman: "Range II",
      title: "Bole Chudiyan",
      subtitle: "Velvet bangle stacks, kadas & resonant choodiyan",
      image:
        "https://i.pinimg.com/1200x/8e/92/9b/8e929bd4037d189c792ad059dd01b878.jpg",
      count: "Bangles & Kadas",
    },
    {
      id: "hair" as const,
      roman: "Range III",
      title: "Yeh Reshmi Zulfen",
      subtitle: "Silk organza bows, pearl pins & embroidered bands",
      image:
        "https://i.pinimg.com/736x/49/0e/6e/490e6ee4b020f17df2722c794465331a.jpg",
      count: "Hair Adornments",
    },
    {
      id: "romantic-gifts" as const,
      roman: "Range IV",
      title: "Dil Tu Jaan Tu",
      subtitle: "Curated velvet bridal trunks with wax-sealed notes",
      image:
        "https://i.pinimg.com/1200x/67/b4/b4/67b4b4c4f8eb32d68b45123acb0e0f90.jpg",
      count: "Romantic Hampers",
    },
  ];

  return (
    <section
      id="ranges-section"
      className="py-14 bg-white border-b border-[#EAE1D7] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-semibold text-[#8C2038] uppercase tracking-[0.2em]">
            Signature Collections
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#140F0D] tracking-tight">
            Four Iconic Chapters
          </h2>
          <p className="text-sm text-[#4E3F3A] leading-relaxed">
            From featherlight jhumkas to heirloom velvet trunks, choose a collection to explore.
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
                onClick={() => handleCategoryCardClick(range.id)}
                className={`group text-left relative rounded-2xl overflow-hidden bg-[#FAF7F2] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "border-[#961A38] ring-2 ring-[#961A38] shadow-md"
                    : "border-[#EAE1D7] hover:border-[#C5A880] hover:shadow-lg"
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F2ECE4]">
                  <img
                    src={range.image}
                    alt={range.title}
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  {/* Top Monogram */}
                  <div className="absolute top-3 left-3 bg-[#140F0D]/90 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20 tracking-wider uppercase">
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
                    <span className="text-[10px] font-bold text-[#8C2038] uppercase tracking-wider block">
                      {range.count}
                    </span>
                    <p className="text-xs text-[#4F403B] mt-1 leading-normal">
                      {range.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center justify-between text-xs font-semibold">
                    <span
                      className={`text-xs font-semibold transition-colors ${
                        isSelected
                          ? "text-[#961A38]"
                          : "text-[#594843] group-hover:text-[#140F0D]"
                      }`}
                    >
                      {isSelected ? "Viewing Collection" : "Explore Collection"}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${
                        isSelected ? "text-[#961A38]" : "text-[#594843]"
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

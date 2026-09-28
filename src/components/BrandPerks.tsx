import React from "react";
import { Feather, ShieldCheck, Mail, Package, Sparkles } from "lucide-react";

export const BrandPerks: React.FC = () => {
  const perks = [
    {
      icon: Feather,
      title: "Weightless Comfort",
      description:
        "Hollowed brass cores ensure effortless, pain-free wear through long festivities without pulling on earlobes.",
      metric: "Under 16 Grams",
    },
    {
      icon: ShieldCheck,
      title: "22K Anti-Tarnish Finish",
      description:
        "Micro-plated in 22K gold with a protective nano-seal resistant to perfumes, sweat, and humid weather.",
      metric: "Lasting Luster",
    },
    {
      icon: Mail,
      title: "Wax-Sealed Keepsake Letter",
      description:
        "Each order includes your personal quote printed on deckle-edge parchment and sealed with crimson wax.",
      metric: "Complimentary Included",
    },
    {
      icon: Package,
      title: "Signature Velvet Packaging",
      description:
        "Presented in our velvet keepsake trunk with zero exterior price tags for a picture-perfect surprise.",
      metric: "Ready to Gift",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] border-t border-[#EAE1D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-semibold text-[#8C2038] uppercase tracking-[0.2em]">
            Craft Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#140F0D] tracking-tight">
            Heirloom Quality & Detail
          </h2>
          <p className="text-sm text-[#4E3F3A] leading-relaxed">
            Thoughtfully engineered for all-day comfort, enduring luster, and unforgettable presentation.
          </p>
        </div>

        {/* 4 Bento Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#EAE1D7] shadow-2xs flex flex-col justify-between hover:border-[#C5A880] transition-all hover:shadow-sm space-y-4"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#EAE1D7] flex items-center justify-center text-[#961A38] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-[#140F0D] leading-snug">
                    {perk.title}
                  </h3>

                  <p className="text-xs text-[#52443F] leading-relaxed mt-2">
                    {perk.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2ECE4]">
                  <span className="text-[11px] font-semibold text-[#8C2038] uppercase tracking-wider">
                    {perk.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

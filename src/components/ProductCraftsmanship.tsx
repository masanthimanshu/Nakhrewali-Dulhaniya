import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Feather,
  Gem,
  CheckCircle,
  HeartHandshake,
} from "lucide-react";
import { Product } from "../types";

interface ProductCraftsmanshipProps {
  product: Product;
}

export const ProductCraftsmanship: React.FC<ProductCraftsmanshipProps> = ({
  product,
}) => {
  const isEarring = product.category === "earrings";
  const isBangle = product.category === "bangles";
  const isHair = product.category === "hair";

  const specs = [
    {
      label: "Core Metal",
      value: "Recycled Hypoallergenic Brass Alloy",
    },
    {
      label: "Gold Plating",
      value: "22K Micro-Gold with Nano-Ceramic Shield",
    },
    {
      label: "Weight",
      value: isEarring
        ? "14.2g (Ultra Featherlight Pair)"
        : isBangle
          ? "38g (Velvet Comfort Stack)"
          : "18g (Silk Organza Air)",
    },
    {
      label: "Dimensions",
      value: isEarring
        ? "7.2 cm Drop Length × 3.5 cm Chandelier Width"
        : isBangle
          ? "Standard 2.4 - 2.6 Free Exchange Size"
          : "14 cm Bow Span × 18 cm Ribbon Tail",
    },
    {
      label: "Closure & Fit",
      value: isEarring
        ? "Comfort Push-Back with Silicone Support Disc"
        : isBangle
          ? "Flexible Velvet / Spring Screw Kada"
          : "French Alligator Hair Barrette",
    },
    {
      label: "Stone & Accents",
      value: "Grade-AAA Faceted Kundan & Cultured Glass Pearls",
    },
    {
      label: "Skin Tolerance",
      value: "100% Nickel-Free, Lead-Free & Hypoallergenic",
    },
    {
      label: "Finish Warranty",
      value: "Lifetime Anti-Tarnish Assurance",
    },
  ];

  const craftPillars = [
    {
      icon: ShieldCheck,
      title: "22K Micro-Gold Nano Glaze",
      description:
        "Layered with genuine 22K micro gold and sealed with a nano-ceramic finish. Resists party perfumes, humid wedding heat, and sweat without peeling or turning dull.",
      highlight: "Zero Tarnishing",
    },
    {
      icon: Feather,
      title: "Hollow-Core Featherweight Craft",
      description:
        "Engineered with hollowed brass chambers by Master Karigars. Weighs under 16 grams so she can dance to Bole Chudiyan for 8 hours without sore, droopy earlobes.",
      highlight: "Under 16 Grams",
    },
    {
      icon: Gem,
      title: "Foil-Backed AAA Kundan Stones",
      description:
        "Hand-cut glass crystals individually seated in reflective silver foil bezels. Glows with a warm candlelight shimmer reminiscent of vintage Mughal heirlooms.",
      highlight: "Candlelight Luster",
    },
    {
      icon: HeartHandshake,
      title: "Hypoallergenic Silicone Cushion",
      description:
        "Equipped with surgical-grade posts and broad silicone stabilizer discs that distribute weight evenly across the earlobe, preventing tearing or skin redness.",
      highlight: "All-Day Gentle",
    },
  ];

  const careRules = [
    {
      step: "01",
      title: "Perfume First, Jewels Second",
      desc: "Allow perfumes, hairsprays, and body lotions to settle on the skin for 2 minutes before wearing.",
    },
    {
      step: "02",
      title: "Soft Microfiber Wipe Down",
      desc: "Gently wipe off natural body oils and dance-floor humidity with a dry microfiber cloth after wearing.",
    },
    {
      step: "03",
      title: "Gulabi Velvet Sanctuary",
      desc: "Store each piece individually in our airtight velvet pouch to prevent surface friction and scratching.",
    },
    {
      step: "04",
      title: "Water-Free Longevity",
      desc: "Remove before swimming pools, steam saunas, or hot showers to preserve the nano-ceramic barrier.",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-[#EAE1D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF2F4] text-[#7A152E] text-[11px] font-semibold uppercase tracking-widest border border-[#F2D6DC]">
            <Sparkles className="w-3.5 h-3.5 text-[#961A38]" />
            <span>Master Karigar Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1C1412]">
            The Anatomy of Royal Craftsmanship
          </h2>
          <p className="text-xs sm:text-sm text-[#70605A]">
            Why Bollywood heroines and modern sweethearts choose Nakhrewali over
            heavy, painful traditional jewelry.
          </p>
        </div>

        {/* 2. Craft Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {craftPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#EAE1D7] flex flex-col justify-between hover:border-[#C5A880] transition-all hover:shadow-xs group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAE1D7] flex items-center justify-center text-[#961A38] mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#1C1412] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#6E5D57] leading-relaxed mt-2.5">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DFCFC1]/60">
                  <span className="inline-block px-2.5 py-1 bg-white text-[#1C1412] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#DFCFC1]">
                    {pillar.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Detailed Specifications Matrix */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#EAE1D7]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#DFCFC1]/60">
            <div>
              <span className="text-[11px] font-bold text-[#961A38] uppercase tracking-widest block">
                ✦ Certified Atelier Quality ✦
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1C1412]">
                Detailed Specifications & Dimensions
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 self-start sm:self-auto">
              <CheckCircle className="w-4 h-4 text-emerald-700" />
              <span>100% Quality Inspected</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-[#EAE1D7] flex flex-col justify-between"
              >
                <span className="text-[11px] font-semibold text-[#8C7A75] uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <span className="text-xs font-bold text-[#1C1412] leading-snug">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Care & Longevity Rituals ("Preserve Her Sparkle") */}
        <div className="border-t border-[#EAE1D7] pt-12">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1C1412]">
              Preserve Her Sparkle: 4 Golden Rules
            </h3>
            <p className="text-xs text-[#70605A]">
              Follow these simple rituals to keep this piece heirloom-fresh for
              every wedding and romantic dinner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careRules.map((rule, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-2xl border border-[#EAE1D7] flex flex-col justify-between hover:border-[#C5A880] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#961A38]">
                    {rule.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                </div>
                <h4 className="text-xs font-bold text-[#1C1412] mb-1.5">
                  {rule.title}
                </h4>
                <p className="text-[11px] text-[#6E5D57] leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

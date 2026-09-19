import React from "react";
import { Sparkles, Heart, ShieldCheck, Lock } from "lucide-react";

export const ProductGiftingJourney: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Artisanal Inspection & Polish",
      subtitle: "Ultrasonic cleansing",
      description:
        "Every single piece is scrutinized under magnifying jeweler lamps, wiped with lint-free microfiber, and given an ultrasonic polish to guarantee immaculate shine.",
      badge: "Step 1: Purity",
    },
    {
      num: "02",
      title: "Wax-Sealed Love Letter",
      subtitle: "Deckle-edge vintage parchment",
      description:
        "Your custom romantic quote or iconic Bollywood dialogue is laser-printed on fibrous vintage ivory parchment, then hand-stamped with genuine molten crimson red wax.",
      badge: "Step 2: Romance",
    },
    {
      num: "03",
      title: "Gulabi Velvet Presentation Trunk",
      subtitle: "Bed of fragrant dried roses",
      description:
        "Your jewelry is nestled inside our signature Gulabi Velvet keepsake box, bedded in real fragrant dried rose petals. It smells like an imperial Mughal garden the second she lifts the lid.",
      badge: "Step 3: Goosebumps",
    },
    {
      num: "04",
      title: "100% Discreet Surprise Parcel",
      subtitle: "Zero prices or invoices inside",
      description:
        "Shipped in a plain, unmarked courier box. She will never suspect what is inside. Invoices and payment proofs are sent strictly to your private email address.",
      badge: "Step 4: The Surprise",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] border-b border-[#EAE1D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF2F4] text-[#7A152E] text-[11px] font-semibold uppercase tracking-widest border border-[#F2D6DC]">
            <Heart className="w-3.5 h-3.5 text-[#961A38] fill-[#961A38]" />
            <span>The Gifting Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1C1412]">
            From Our Atelier Bench To Her Doorstep
          </h2>
          <p className="text-xs sm:text-sm text-[#70605A]">
            A gift from Nakhrewali is not just a parcel; it is a cinematic
            slow-burn reveal engineered to make her eyes widen with delight.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#EAE1D7] flex flex-col justify-between hover:border-[#C5A880] transition-all hover:shadow-xs relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif-romance font-bold text-[#961A38]">
                    {step.num}
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#FAF2F4] text-[#7A152E] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#F2D6DC]">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1C1412] leading-snug mb-1">
                  {step.title}
                </h3>
                <span className="text-[11px] font-medium text-[#C5A880] block mb-2.5">
                  {step.subtitle}
                </span>

                <p className="text-xs text-[#6E5D57] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EAE1D7] flex items-center text-[11px] font-semibold text-[#8C7A75]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880] mr-1.5 shrink-0" />
                <span>Handcrafted with Care</span>
              </div>
            </div>
          ))}
        </div>

        {/* Discreet Packing Callout Banner */}
        <div className="bg-[#1C1412] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#332420] flex items-center justify-center text-[#C5A880] shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold">
                Planning a Stealth Surprise? We Have Your Back.
              </h4>
              <p className="text-xs text-[#DECFC2] leading-relaxed max-w-xl">
                The outer courier carton gives away zero clues. No logos, no
                brand stamps, and no pricing stickers. She won't suspect a thing
                until she unboxes the inner Gulabi velvet trunk.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs font-semibold bg-[#2D1F1C] border border-[#4D352F] px-4 py-2.5 rounded-full text-[#E8DCD1] shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Surprise Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

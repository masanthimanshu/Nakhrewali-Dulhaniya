import React from 'react';
import { Feather, ShieldCheck, Mail, Package, Sparkles } from 'lucide-react';

export const BrandPerks: React.FC = () => {
  const perks = [
    {
      icon: Feather,
      title: 'Featherlight Hollow Craft',
      description:
        'Engineered with hollowed brass cores so she can dance to Bole Chudiyan all night without heavy, pulled earlobes or sore ears.',
      metric: 'Under 16 Grams',
    },
    {
      icon: ShieldCheck,
      title: '22K Anti-Tarnish Shield',
      description:
        'Electro-plated with 22K micro gold and sealed with a nano-ceramic barrier. Impervious to party perfumes, humid weather, and sweat.',
      metric: 'Lifetime Finish Assurance',
    },
    {
      icon: Mail,
      title: 'Wax-Sealed Bollywood Letter',
      description:
        'Every order includes your personal quote printed on vintage deckle-edge parchment, hand-sealed with authentic crimson wax.',
      metric: 'Complimentary ₹199 Gift',
    },
    {
      icon: Package,
      title: '100% Discreet Gift Packaging',
      description:
        'Shipped in a plain outer box so she won’t suspect a thing. Inside is our signature Gulabi velvet box with zero price tags or receipts.',
      metric: 'Doorstep Ready',
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] border-t border-[#EAE1D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF2F4] text-[#7A152E] text-[11px] font-semibold uppercase tracking-widest border border-[#F2D6DC]">
            <Sparkles className="w-3.5 h-3.5 text-[#961A38]" />
            <span>Craft & Gifting Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1C1412]">
            Why A Nakhrewali Gift Hits Different
          </h2>
          <p className="text-xs sm:text-sm text-[#70605A]">
            We threw out heavy costume jewelry and generic brown courier boxes. Here is why she will scream when she opens this.
          </p>
        </div>

        {/* 4 Bento Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-[#EAE1D7] shadow-xs flex flex-col justify-between hover:border-[#C5A880] transition-all hover:shadow-md space-y-4"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EAE1D7] flex items-center justify-center text-[#961A38] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-[#1C1412] leading-snug">
                    {perk.title}
                  </h3>

                  <p className="text-xs text-[#6E5D57] leading-relaxed mt-2">
                    {perk.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE1D7]/80">
                  <span className="inline-block px-2.5 py-1 bg-[#FAF7F2] text-[#1C1412] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#DFCFC1]">
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

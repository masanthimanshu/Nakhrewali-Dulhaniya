import React from "react";
import { Sparkles, Heart, Gift, ShieldCheck } from "lucide-react";

export const AnnouncementTicker: React.FC = () => {
  const items = [
    {
      icon: Gift,
      text: "COMPLIMENTARY WAX-SEALED LOVE LETTER WITH EVERY ORDER",
    },
    {
      icon: Sparkles,
      text: "THE FOUR SIGNATURE RANGES: HAYE JHUMKA • BOLE CHUDIYAN • YEH RESHMI ZULFEN • DIL TU JAAN TU",
    },
    { icon: Heart, text: "USE CODE 'NAKHRA10' FOR 10% PRIVILEGE SAVINGS" },
    {
      icon: ShieldCheck,
      text: "HANDCRAFTED 22K GOLD POLISH • HYPOALLERGENIC & WEIGHTLESS",
    },
    {
      icon: Gift,
      text: "EXPRESS GIFTING: DISPATCHED WITHIN 24 HOURS IN GULABI VELVET TRUNKS",
    },
  ];

  return (
    <div className="bg-[#1C1412] text-[#EAD8C7] py-2 overflow-hidden text-[11px] font-medium tracking-widest uppercase select-none border-b border-[#2E201C]">
      <div className="flex animate-marquee">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center space-x-2.5 mx-8 whitespace-nowrap"
            >
              <Icon className="w-3 h-3 text-[#D4AF37] shrink-0" />
              <span>{item.text}</span>
              <span className="text-[#C5A880]/50 ml-6 font-serif-romance text-sm">
                ✦
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React from "react";
import { Sparkles, Heart, Gift, ShieldCheck } from "lucide-react";

export const AnnouncementTicker: React.FC = () => {
  const items = [
    {
      icon: Gift,
      text: "Complimentary wax-sealed love letter with every order",
    },
    {
      icon: Heart,
      text: "Use code NAKHRA10 for 10% off your first order",
    },
    {
      icon: ShieldCheck,
      text: "22K anti-tarnish finish · Hypoallergenic & lightweight",
    },
    {
      icon: Sparkles,
      text: "Express dispatch within 24 hours in signature velvet trunks",
    },
  ];

  return (
    <div className="bg-[#191210] text-[#E8DCD4] py-2 overflow-hidden text-xs font-medium select-none border-b border-[#2C1F1B]">
      <div className="flex animate-marquee items-center">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center space-x-2.5 mx-8 whitespace-nowrap"
            >
              <Icon className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="tracking-wide">{item.text}</span>
              <span className="text-[#C5A880]/60 ml-6 text-xs">
                ✦
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

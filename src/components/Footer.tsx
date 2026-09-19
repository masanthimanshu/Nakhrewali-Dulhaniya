import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Send, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { CategoryId } from "../types";

interface FooterProps {
  onSelectCategory?: (cat: CategoryId) => void;
  onOpenHamperBuilder?: () => void;
  onOpenGiftQuiz?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenHamperBuilder,
  onOpenGiftQuiz,
}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const handleRangeClick = (cat: CategoryId) => {
    navigate(`/collection/${cat}`);
    if (onSelectCategory) onSelectCategory(cat);
  };

  return (
    <footer className="bg-[#1C1412] text-[#B5A49D] pt-14 pb-8 border-t border-[#2E201C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Feature Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-[#2E201C] text-xs">
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-xl bg-[#2A1D1A] text-[#D4AF37] shrink-0 border border-[#C5A880]/20">
              <span className="text-sm">👑</span>
            </div>
            <div>
              <h4 className="font-semibold text-white text-xs">
                Bollywood Romance
              </h4>
              <p className="text-[#8C7A75] mt-0.5">
                Bespoke jewelry & keepsakes for your drama queen.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-xl bg-[#2A1D1A] text-[#D4AF37] shrink-0 border border-[#C5A880]/20">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-xs">
                22K Anti-Tarnish
              </h4>
              <p className="text-[#8C7A75] mt-0.5">
                Tested for sensitive skin and featherlight comfort.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-xl bg-[#2A1D1A] text-[#D4AF37] shrink-0 border border-[#C5A880]/20">
              <Truck className="w-4 h-4 text-[#C5A880]" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-xs">
                Express Gifting
              </h4>
              <p className="text-[#8C7A75] mt-0.5">
                Dispatched in 24 hours in velvet presentation trunks.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-xl bg-[#2A1D1A] text-[#D4AF37] shrink-0 border border-[#C5A880]/20">
              <RefreshCw className="w-4 h-4 text-[#C5A880]" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-xs">
                Seamless Exchange
              </h4>
              <p className="text-[#8C7A75] mt-0.5">
                Complimentary sizing assistance and doorstep exchanges.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="block">
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-display font-bold text-white">
                  Nakhrewali
                </span>
                <span className="text-2xl font-serif-romance italic text-[#C5A880]">
                  Dulhaniya
                </span>
              </div>
              <p className="text-[10px] text-[#8C7A75] tracking-[0.18em] uppercase mt-0.5">
                nakhrewalidulhaniya.com
              </p>
            </Link>

            <p className="text-xs text-[#8C7A75] leading-relaxed">
              Curated with high drama, deep romance, and cinematic nostalgia.
              The premier gifting haven for lovers, bride squads, and hopeless
              romantics.
            </p>

            <div className="text-xs text-[#8C7A75] space-y-1">
              <p>📍 Atelier: Mumbai & Jaipur</p>
              <p>WhatsApp Concierge: +91 98200 12345</p>
            </div>
          </div>

          {/* Distinct 4 Category Collections */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#EAD8C7]">
              The Four Ranges
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleRangeClick("earrings")}
                  className="hover:text-[#FAF7F2] transition-colors text-left flex items-center space-x-1.5 cursor-pointer"
                >
                  <span className="text-[#C5A880] text-[10px]">I.</span>
                  <span>Haye Jhumka</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleRangeClick("bangles")}
                  className="hover:text-[#FAF7F2] transition-colors text-left flex items-center space-x-1.5 cursor-pointer"
                >
                  <span className="text-[#C5A880] text-[10px]">II.</span>
                  <span>Bole Chudiyan</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleRangeClick("hair")}
                  className="hover:text-[#FAF7F2] transition-colors text-left flex items-center space-x-1.5 cursor-pointer"
                >
                  <span className="text-[#C5A880] text-[10px]">III.</span>
                  <span>Yeh Reshmi Zulfen</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleRangeClick("romantic-gifts")}
                  className="hover:text-[#FAF7F2] transition-colors text-left flex items-center space-x-1.5 cursor-pointer"
                >
                  <span className="text-[#C5A880] text-[10px]">IV.</span>
                  <span>Dil Tu Jaan Tu</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Gifting & Services */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#EAD8C7]">
              Concierge
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenHamperBuilder}
                  className="hover:text-[#FAF7F2] transition-colors text-left cursor-pointer"
                >
                  Curate Bespoke Hamper
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGiftQuiz}
                  className="hover:text-[#FAF7F2] transition-colors text-left cursor-pointer"
                >
                  Filmy Gift Concierge
                </button>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="hover:text-[#FAF7F2] transition-colors text-left"
                >
                  Track Order Dispatch
                </Link>
              </li>
              <li>
                <span className="text-[#6E5D57]">
                  Corporate & Sangeet Favors
                </span>
              </li>
            </ul>
          </div>

          {/* Love Letters Newsletter */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#EAD8C7]">
              Filmy Love Letters
            </h4>
            <p className="text-xs text-[#8C7A75] leading-relaxed">
              Get secret drops, anniversary reminders, and Bollywood dialogue
              poetry once a month.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#2A1D1A] rounded-xl text-xs text-[#C5A880] border border-[#C5A880]/30 flex items-center space-x-2">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>You are on our VIP Lover list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full text-xs bg-[#241714] border border-[#3E2D27] rounded-xl pl-3 pr-9 py-2.5 text-white placeholder-[#705F59] focus:outline-none focus:border-[#C5A880]"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#C5A880] hover:text-white"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#705F59] block">
                  Zero spam. 100% Bollywood romance.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-[#2E201C] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#705F59] gap-4">
          <p>
            © {new Date().getFullYear()} Nakhrewali Dulhaniya
            (nakhrewalidulhaniya.com). All rights reserved.
          </p>
          <div className="flex space-x-4">
            <span className="hover:text-[#B5A49D] cursor-pointer">
              Privacy & Cookie Policy
            </span>
            <span>•</span>
            <span className="hover:text-[#B5A49D] cursor-pointer">
              Terms of Gifting
            </span>
            <span>•</span>
            <span className="hover:text-[#B5A49D] cursor-pointer">
              Shipping & Returns
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

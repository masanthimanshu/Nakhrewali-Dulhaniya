import React, { useState } from 'react';
import { X, Sparkles, Heart, ArrowRight, RefreshCw } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface GiftFinderQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
}

export const GiftFinderQuizModal: React.FC<GiftFinderQuizModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  onOpenQuickView,
}) => {
  if (!isOpen) return null;

  const [vibe, setVibe] = useState<'drama-queen' | 'pinterest' | 'classic-simran' | 'royal-rani'>('drama-queen');
  const [occasion, setOccasion] = useState<'anniversary' | 'apology' | 'birthday' | 'just-because'>('anniversary');
  const [budget, setBudget] = useState<'budget' | 'mid' | 'luxury'>('mid');
  const [submitted, setSubmitted] = useState(false);

  // Recommendation engine based on quiz answers
  const getRecommendations = (): Product[] => {
    let list = [...PRODUCTS];

    if (vibe === 'drama-queen') {
      list = list.filter((p) => p.category === 'earrings' || p.id === 'gift-6');
    } else if (vibe === 'pinterest') {
      list = list.filter((p) => p.category === 'hair' || p.id === 'gift-3');
    } else if (vibe === 'classic-simran') {
      list = list.filter((p) => p.category === 'bangles' || p.id === 'gift-4');
    } else if (vibe === 'royal-rani') {
      list = list.filter((p) => p.category === 'romantic-gifts' || p.id === 'jhumka-3');
    }

    if (occasion === 'apology') {
      // Apology requires big romantic gestures
      const apologyFav = PRODUCTS.find((p) => p.id === 'gift-1');
      if (apologyFav && !list.some((p) => p.id === apologyFav.id)) {
        list.unshift(apologyFav);
      }
    }

    if (budget === 'budget') {
      list = list.filter((p) => p.price <= 1000);
    } else if (budget === 'luxury') {
      list = list.filter((p) => p.price >= 1500);
    }

    // Fallback if filter is too narrow
    if (list.length < 2) {
      list = PRODUCTS.slice(0, 3);
    }

    return list.slice(0, 3);
  };

  const results = getRecommendations();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        id="gift-quiz-modal"
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 p-6 border-b border-rose-200/60 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FF4D8D] text-white flex items-center justify-center shadow-md">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-display font-bold text-[#2B1B17]">
                The Boyfriend Survival Guide 💡
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                Answer 3 quick questions to find her foolproof romantic gift
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white text-stone-600 hover:text-black flex items-center justify-center shadow-xs"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {!submitted ? (
            <div className="space-y-6">
              
              {/* Question 1: Her Vibe */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#E60050] text-white text-[11px] flex items-center justify-center">1</span>
                  <span>What is her dominant vibe?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    {
                      id: 'drama-queen' as const,
                      emoji: '👑',
                      title: 'Geet from Jab We Met',
                      desc: 'Full of drama, speaks fast, loves heavy jhumkas & grand romantic gestures',
                    },
                    {
                      id: 'pinterest' as const,
                      emoji: '🎀',
                      title: 'Aesthetic Pinterest Girlie',
                      desc: 'Clean girl look, oversized organza hair bows, pearls & soft pastels',
                    },
                    {
                      id: 'classic-simran' as const,
                      emoji: '💚',
                      title: 'Classic Simran Saree Lover',
                      desc: 'Old-school romance, tinkling glass choodiyan & vintage melodies',
                    },
                    {
                      id: 'royal-rani' as const,
                      emoji: '✨',
                      title: 'Opulent Royal Rani',
                      desc: 'Loves luxury trunks, 22k gold finish kundan, and high drama unboxings',
                    },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setVibe(item.id)}
                      className={`p-3 text-left rounded-xl border transition-all ${
                        vibe === item.id
                          ? 'border-[#E60050] bg-rose-50/50 ring-1 ring-[#E60050]'
                          : 'border-stone-200 hover:border-pink-300 bg-white'
                      }`}
                    >
                      <span className="text-xl mb-1 block">{item.emoji}</span>
                      <span className="text-xs font-bold text-stone-900 block">{item.title}</span>
                      <span className="text-[11px] text-stone-500 line-clamp-2 mt-0.5">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Occasion */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#E60050] text-white text-[11px] flex items-center justify-center">2</span>
                  <span>What’s the gifting emergency / occasion?</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'anniversary' as const, emoji: '🥂', label: 'Anniversary' },
                    { id: 'apology' as const, emoji: '🚨', label: 'Urgent Apology' },
                    { id: 'birthday' as const, emoji: '🎂', label: 'Her Birthday' },
                    { id: 'just-because' as const, emoji: '💖', label: 'Just Because' },
                  ].map((occ) => (
                    <button
                      key={occ.id}
                      onClick={() => setOccasion(occ.id)}
                      className={`p-2.5 text-center rounded-xl border transition-all ${
                        occasion === occ.id
                          ? 'border-[#E60050] bg-rose-50/50 text-[#C2185B] font-bold ring-1 ring-[#E60050]'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-pink-300'
                      }`}
                    >
                      <span className="text-lg block mb-1">{occ.emoji}</span>
                      <span className="text-xs">{occ.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Budget */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#E60050] text-white text-[11px] flex items-center justify-center">3</span>
                  <span>What’s your budget comfort zone?</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'budget' as const, label: 'Under ₹1,000', note: 'Cute sweet tokens' },
                    { id: 'mid' as const, label: '₹1,000 - ₹1,999', note: 'Most popular zone' },
                    { id: 'luxury' as const, label: '₹2,000+', note: 'Full Bollywood hero' },
                  ].map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setBudget(b.id)}
                      className={`p-2.5 text-center rounded-xl border transition-all ${
                        budget === b.id
                          ? 'border-[#E60050] bg-rose-50/50 text-[#C2185B] font-bold ring-1 ring-[#E60050]'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-pink-300'
                      }`}
                    >
                      <span className="text-xs font-bold block">{b.label}</span>
                      <span className="text-[10px] text-stone-500 block mt-0.5">{b.note}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Quiz */}
              <button
                id="submit-gift-quiz-btn"
                onClick={() => setSubmitted(true)}
                className="w-full py-3.5 bg-gradient-to-r from-[#FF4D8D] to-[#E60050] hover:from-[#E60050] hover:to-[#C2185B] text-white font-bold text-sm rounded-xl shadow-lg shadow-pink-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Show Her Curated Bollywood Match</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-4 rounded-2xl border border-rose-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#A51A4C] uppercase tracking-wider block">
                    ✨ 99.8% Heart-Melting Match Found
                  </span>
                  <h3 className="text-base font-display font-extrabold text-[#2B1B17]">
                    Handpicked for your {vibe === 'drama-queen' ? 'Geet Drama Queen' : vibe === 'pinterest' ? 'Aesthetic Girlie' : vibe === 'classic-simran' ? 'Classic Simran' : 'Royal Rani'}!
                  </h3>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 font-semibold"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {results.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-3"
                  >
                    <div>
                      <div className="aspect-square rounded-xl overflow-hidden bg-stone-100 mb-2 relative">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-1.5 right-1.5 bg-[#E60050] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                          Top Match
                        </div>
                      </div>

                      <span className="text-[10px] text-[#A51A4C] font-semibold block uppercase">
                        {prod.categoryLabel}
                      </span>
                      <h4 className="text-xs font-bold text-stone-900 line-clamp-1 mt-0.5">
                        {prod.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 italic line-clamp-1 mt-1 font-serif-romance">
                        {prod.bollywoodDialogue}
                      </p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-black text-stone-900">
                        ₹{prod.price}
                      </span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => {
                            onOpenQuickView(prod);
                            onClose();
                          }}
                          className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 text-[10px] font-bold rounded-lg"
                        >
                          View
                        </button>
                        <button
                          onClick={() => {
                            onAddToCart(prod);
                            onClose();
                          }}
                          className="px-2.5 py-1 bg-[#E60050] hover:bg-[#C2185B] text-white text-[10px] font-bold rounded-lg flex items-center gap-1"
                        >
                          <span>Gift</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#FFF9F5] p-3.5 rounded-xl border border-rose-200 text-xs text-stone-600 flex items-center gap-2">
                <span className="text-lg">💌</span>
                <span>
                  <strong>Tip for Boyfriend:</strong> All gifts come packed in our signature Gulabi gift box with a wax-sealed love letter!
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { X, Heart, Trash2, ShoppingBag, Share2, Check } from "lucide-react";
import { useShop } from "../context/ShopContext";
import { handleImageError } from "../utils/imageFallback";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const { wishlist, toggleWishlist, addToCart } = useShop();
  const [copied, setCopied] = useState(false);

  const handleShareHint = () => {
    const itemNames = wishlist.map((p) => p.name).join(", ");
    const message = `Hey sweetheart 😉 Dropping a little filmy hint for date night! I’m in love with these from Nakhrewali Dulhaniya: ${itemNames} ✨ Check them out at nakhrewalidulhaniya.com`;
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMoveToCart = (product: (typeof wishlist)[0]) => {
    addToCart(product, 1);
    toggleWishlist(product);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          id="wishlist-drawer"
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between relative border-l border-stone-200"
        >
          {/* Header */}
          <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-[#FFFDF9]">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 fill-[#E60050] text-[#E60050]" />
              <h2 className="text-base font-display font-extrabold text-[#2B1B17]">
                Your Wishlist ({wishlist.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hint Share Bar */}
          {wishlist.length > 0 && (
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-3.5 border-b border-rose-100 text-xs text-stone-700 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#A51A4C]">
                  Drop A Subtle Hint 😉
                </p>
                <p className="text-[10px] text-stone-500">
                  Copy your wishlist to send him on WhatsApp.
                </p>
              </div>
              <button
                onClick={handleShareHint}
                className="px-3 py-1.5 bg-white border border-rose-200 rounded-lg text-xs font-semibold text-[#A51A4C] hover:bg-rose-50 transition-colors flex items-center space-x-1"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copy Hint</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Items */}
          <div className="p-5 overflow-y-auto flex-1 space-y-3">
            {wishlist.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-rose-50 text-[#E60050] rounded-full flex items-center justify-center mx-auto text-2xl">
                  💖
                </div>
                <h3 className="text-base font-bold text-stone-800">
                  No saved treasures yet!
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Click the heart icon on any jhumka, bangle stack, or hamper to
                  save it here.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#2B1B17] text-white rounded-full text-xs font-bold cursor-pointer"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              wishlist.map((product) => (
                <div
                  key={product.id}
                  className="flex space-x-3 p-3 rounded-2xl bg-[#FFFDF9] border border-stone-200/80 shadow-xs"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={handleImageError}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-bold text-[#2B1B17] line-clamp-1">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product)}
                          className="text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-[#A51A4C] font-semibold block uppercase">
                        {product.categoryLabel}
                      </span>
                      <p className="text-xs font-black text-stone-900 mt-1">
                        ₹{product.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => handleMoveToCart(product)}
                        className="px-3 py-1.5 bg-[#2B1B17] hover:bg-[#E60050] text-white text-[11px] font-bold rounded-lg transition-colors flex items-center space-x-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Trunk</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-4 border-t border-stone-200 bg-[#FFFDF9]">
              <button
                onClick={() => {
                  wishlist.forEach((p) => handleMoveToCart(p));
                  onClose();
                }}
                className="w-full py-3 bg-[#E60050] hover:bg-[#C2185B] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Move All to Shopping Trunk</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

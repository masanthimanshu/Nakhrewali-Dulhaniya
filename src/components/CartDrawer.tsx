import React, { useState } from "react";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Tag,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useShop } from "../context/ShopContext";
import { handleImageError } from "../utils/imageFallback";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  onOpenCheckout,
}) => {
  if (!isOpen) return null;

  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    cartCount,
    cartSubtotal,
    activeCoupon,
    discountAmount,
    applyCoupon,
    shippingFee,
    finalTotal,
    freeShippingThreshold,
  } = useShop();

  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");

  const progressToFreeShipping = Math.min(
    100,
    (cartSubtotal / freeShippingThreshold) * 100,
  );
  const remainingForFreeShipping = Math.max(
    0,
    freeShippingThreshold - cartSubtotal,
  );

  const handleApply = (codeToApply?: string) => {
    const code = (codeToApply || couponInput).trim().toUpperCase();
    if (!code) return;
    const success = applyCoupon(code);
    if (success) {
      setCouponError("");
      setCouponInput("");
    } else {
      setCouponError("Invalid promo code. Try NAKHRA10 or FILMYLOVE");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          id="cart-drawer"
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between relative border-l border-stone-200"
        >
          {/* Header */}
          <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-[#FFFDF9]">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#E60050]" />
              <h2 className="text-base font-display font-extrabold text-[#2B1B17]">
                Your Filmy Trunk ({cartCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-rose-50/70 p-3.5 border-b border-rose-100 text-xs text-stone-700">
            {remainingForFreeShipping > 0 ? (
              <div className="space-y-1.5">
                <p className="font-semibold text-[#880E4F] flex items-center justify-between">
                  <span>
                    Add ₹{remainingForFreeShipping} more for FREE Express
                    Delivery! 🚚
                  </span>
                  <span className="text-[10px] text-stone-500">
                    {Math.round(progressToFreeShipping)}%
                  </span>
                </p>
                <div className="w-full bg-rose-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#E60050] h-full rounded-full transition-all duration-300"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>
            ) : (
              <p className="font-bold text-emerald-800 flex items-center gap-1.5">
                <span>🎉 Yay! You unlocked FREE Express Gifting Delivery!</span>
              </p>
            )}
          </div>

          {/* Cart Items List */}
          <div className="p-5 overflow-y-auto flex-1 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-rose-50 text-[#E60050] rounded-full flex items-center justify-center mx-auto text-2xl">
                  🛍️
                </div>
                <h3 className="text-base font-bold text-stone-800">
                  Your trunk is feeling lonely!
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Add some dramatic jhumkas, velvet choodiyan, or build a custom
                  gift hamper for your special someone.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#E60050] text-white rounded-full text-xs font-bold shadow-md hover:bg-[#C2185B] transition-colors"
                >
                  Explore Romantic Gifts
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex space-x-3.5 p-3 rounded-2xl bg-[#FFFDF9] border border-stone-200/80 shadow-xs"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0 relative">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      onError={handleImageError}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-bold text-[#2B1B17] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-0.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-[#A51A4C] font-semibold block uppercase">
                        {item.product.categoryLabel}
                      </span>
                      {item.giftNote && (
                        <p className="text-[10px] text-stone-500 italic bg-amber-50/80 px-2 py-0.5 rounded border border-amber-200/60 mt-1 line-clamp-1">
                          💌 Note: "{item.giftNote}"
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-stone-100">
                      {/* Quantity buttons */}
                      <div className="flex items-center space-x-2 bg-white border border-stone-200 rounded-lg px-2 py-0.5">
                        <button
                          onClick={() => updateCartQuantity(item.id, -1)}
                          className="text-stone-500 hover:text-black text-xs cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.id, 1)}
                          className="text-stone-500 hover:text-black text-xs cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Item Total Price */}
                      <span className="text-xs font-black text-stone-900">
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Summary & Actions */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-[#FFFDF9] space-y-4">
              {/* Promo code bar */}
              <div>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Promo code (e.g. NAKHRA10)"
                      value={couponInput}
                      onChange={(e) =>
                        setCouponInput(e.target.value.toUpperCase())
                      }
                      className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-stone-200 rounded-xl uppercase tracking-wider text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#E60050]"
                    />
                  </div>
                  <button
                    onClick={() => handleApply()}
                    className="px-4 py-2 bg-stone-800 hover:bg-black text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Apply
                  </button>
                </div>

                {couponError && (
                  <p className="text-[10px] text-rose-600 mt-1 font-semibold">
                    {couponError}
                  </p>
                )}

                {/* Quick chip shortcuts */}
                {!activeCoupon && (
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-[10px] text-stone-400">Try:</span>
                    <button
                      onClick={() => handleApply("NAKHRA10")}
                      className="text-[10px] bg-rose-50 text-[#E60050] font-bold px-2 py-0.5 rounded border border-rose-200 cursor-pointer"
                    >
                      NAKHRA10 (10% OFF)
                    </button>
                    <button
                      onClick={() => handleApply("FILMYLOVE")}
                      className="text-[10px] bg-rose-50 text-[#E60050] font-bold px-2 py-0.5 rounded border border-rose-200 cursor-pointer"
                    >
                      FILMYLOVE (15% OFF)
                    </button>
                  </div>
                )}

                {activeCoupon && (
                  <div className="flex items-center justify-between text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 mt-2 font-bold">
                    <span>Coupon {activeCoupon} Applied!</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold text-stone-900">
                    ₹{cartSubtotal.toLocaleString()}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount</span>
                    <span>-₹{discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Delivery</span>
                  <span className="font-semibold text-stone-900">
                    {shippingFee === 0 ? "FREE" : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#2B1B17] pt-2 border-t border-stone-200">
                  <span>Total Amount</span>
                  <span className="text-base text-[#E60050]">
                    ₹{finalTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                id="drawer-checkout-btn"
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full py-3.5 bg-[#E60050] hover:bg-[#C2185B] text-white font-bold text-sm rounded-2xl shadow-lg shadow-pink-500/25 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Proceed to Filmy Checkout</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center space-x-4 text-[10px] text-stone-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Secure UPI & Cards
                </span>
                <span>•</span>
                <span>🎁 Free Wax Seal Packaging</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

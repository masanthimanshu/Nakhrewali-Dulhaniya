import React, { useState } from "react";
import { X, Gift, Check, Plus, ArrowRight } from "lucide-react";
import { Product } from "../types";
import { PRODUCTS, BOLLYWOOD_LOVE_NOTES } from "../data/products";
import { handleImageError } from "../utils/imageFallback";

interface HamperBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddHamperToCart: (hamperItem: {
    title: string;
    boxStyle: string;
    items: Product[];
    totalPrice: number;
    loveNote: string;
    toName: string;
    fromName: string;
  }) => void;
}

const BOX_STYLES = [
  {
    id: "gulabi-velvet",
    name: "Gulabi Rani Pink Velvet Box",
    price: 199,
    image:
      "https://i.pinimg.com/1200x/e7/a4/97/e7a49785c30b44fb3c4c234d264e51d4.jpg",
    vibe: "Plush velvet, oversized satin ribbon & gold foil logo",
  },
  {
    id: "emerald-trunk",
    name: "Royal Emerald Keepsake Trunk",
    price: 299,
    image:
      "https://i.pinimg.com/1200x/ee/14/fc/ee14fc1b2d6ad53b35f3a8cafe3068df.jpg",
    vibe: "Vintage brass lock, velvet interior & fairy light string",
  },
  {
    id: "vintage-tin",
    name: "Classic Bollywood Love Box",
    price: 149,
    image:
      "https://i.pinimg.com/1200x/34/26/3c/34263ce3c26d0638d05b3dd1a3b357bd.jpg",
    vibe: "Hand-painted florals, fragrant rose potpourri base",
  },
];

export const HamperBuilderModal: React.FC<HamperBuilderModalProps> = ({
  isOpen,
  onClose,
  onAddHamperToCart,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedBox, setSelectedBox] = useState(BOX_STYLES[0]);
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([
    PRODUCTS[0].id,
    PRODUCTS[5].id,
  ]);
  const [selectedNote, setSelectedNote] = useState(
    BOLLYWOOD_LOVE_NOTES[0].text,
  );
  const [customNote, setCustomNote] = useState("");
  const [toName, setToName] = useState("My Sweetheart");
  const [fromName, setFromName] = useState("");

  const selectedProducts = PRODUCTS.filter((p) =>
    selectedProductIds.includes(p.id),
  );

  const rawItemsPrice = selectedProducts.reduce((sum, p) => sum + p.price, 0);
  const boxPrice = selectedProductIds.length >= 3 ? 0 : selectedBox.price; // Free box on 3+ items
  const discountPercent = 15; // 15% hamper bundle discount
  const discountedItemsPrice = Math.round(
    rawItemsPrice * (1 - discountPercent / 100),
  );
  const finalHamperPrice = discountedItemsPrice + boxPrice;

  const toggleProduct = (productId: string) => {
    if (selectedProductIds.includes(productId)) {
      if (selectedProductIds.length <= 1) return; // Keep at least 1
      setSelectedProductIds(
        selectedProductIds.filter((id) => id !== productId),
      );
    } else {
      if (selectedProductIds.length >= 4) return; // Max 4
      setSelectedProductIds([...selectedProductIds, productId]);
    }
  };

  const finalLoveNote = customNote.trim() ? customNote : selectedNote;

  const handleFinishHamper = () => {
    onAddHamperToCart({
      title: `Custom ${selectedBox.name} (${selectedProducts.length} Treasures)`,
      boxStyle: selectedBox.name,
      items: selectedProducts,
      totalPrice: finalHamperPrice,
      loveNote: finalLoveNote,
      toName: toName.trim() || "My Sweetheart",
      fromName: fromName.trim() || "Your Boyfriend",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        id="hamper-builder-modal"
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 px-6 py-4 border-b border-rose-200/60 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E60050] text-white flex items-center justify-center shadow-md">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg sm:text-xl font-display font-bold text-[#2B1B17]">
                  Bana De Custom Hamper 🎀
                </h2>
                <span className="bg-[#E60050] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  15% Bundle Discount
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium">
                Create the dream unboxing for your Nakhrewali girlfriend
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

        {/* Step Indicator Tabs */}
        <div className="flex border-b border-stone-200 bg-[#FFFDF9] text-xs font-bold shrink-0">
          <button
            onClick={() => setStep(1)}
            className={`flex-1 py-3 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              step === 1
                ? "border-[#E60050] text-[#E60050] bg-rose-50/50"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            <span>1. Pick Luxury Box</span>
          </button>
          <button
            onClick={() => setStep(2)}
            className={`flex-1 py-3 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              step === 2
                ? "border-[#E60050] text-[#E60050] bg-rose-50/50"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            <span>2. Add Treasures ({selectedProductIds.length}/4)</span>
          </button>
          <button
            onClick={() => setStep(3)}
            className={`flex-1 py-3 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              step === 3
                ? "border-[#E60050] text-[#E60050] bg-rose-50/50"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            <span>3. Filmy Love Note</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: PICK BOX */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-stone-800">
                  Step 1: Choose Her Signature Keepsake Box
                </h3>
                <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">
                  ✨ Box is 100% FREE when you add 3+ items!
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {BOX_STYLES.map((box) => {
                  const isSelected = selectedBox.id === box.id;
                  return (
                    <div
                      key={box.id}
                      onClick={() => setSelectedBox(box)}
                      className={`cursor-pointer rounded-2xl p-4 border transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? "border-[#E60050] ring-2 ring-[#E60050]/20 bg-rose-50/30 shadow-md"
                          : "border-stone-200 hover:border-pink-300 bg-white"
                      }`}
                    >
                      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-stone-100 relative">
                        <img
                          src={box.image}
                          alt={box.name}
                          referrerPolicy="no-referrer"
                          onError={(e) => handleImageError(e, "romantic-gifts")}
                          className="w-full h-full object-cover"
                        />
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-[#E60050] text-white p-1 rounded-full">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-stone-900 mt-0.5">
                          {box.name}
                        </h4>
                        <p className="text-xs text-stone-500 mt-1">
                          {box.vibe}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                        <span className="font-extrabold text-stone-800">
                          {selectedProductIds.length >= 3
                            ? "FREE"
                            : `₹${box.price}`}
                        </span>
                        <span className="text-[#E60050] font-bold">
                          {isSelected ? "Selected" : "Select"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: PICK PRODUCTS */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-stone-800">
                    Step 2: Choose 2 to 4 Products for the Hamper
                  </h3>
                  <p className="text-xs text-stone-500">
                    Mix & match jhumkas, velvet bangles, hair accessories &
                    gifts
                  </p>
                </div>
                <div className="text-xs font-bold bg-pink-100 text-[#C2185B] px-3 py-1 rounded-full">
                  Selected: {selectedProductIds.length} / 4 items
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {PRODUCTS.map((prod) => {
                  const isChecked = selectedProductIds.includes(prod.id);
                  return (
                    <div
                      key={prod.id}
                      onClick={() => toggleProduct(prod.id)}
                      className={`cursor-pointer rounded-xl p-2.5 border transition-all text-left flex flex-col justify-between relative ${
                        isChecked
                          ? "border-[#E60050] bg-rose-50/40 ring-1 ring-[#E60050] shadow-sm"
                          : "border-stone-200 bg-white hover:border-stone-300"
                      }`}
                    >
                      <div className="aspect-square rounded-lg overflow-hidden bg-stone-100 mb-2 relative">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          referrerPolicy="no-referrer"
                          onError={(e) => handleImageError(e, prod.category)}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors ${
                            isChecked
                              ? "bg-[#E60050] text-white shadow-xs"
                              : "bg-white/80 text-stone-400 border border-stone-300"
                          }`}
                        >
                          {isChecked ? (
                            <Check className="w-3 h-3" />
                          ) : (
                            <Plus className="w-3 h-3" />
                          )}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-[#A51A4C] block uppercase">
                          {prod.categoryLabel}
                        </span>
                        <h5 className="text-xs font-bold text-stone-800 line-clamp-1">
                          {prod.name}
                        </h5>
                        <div className="flex items-center space-x-1 mt-1">
                          <span className="text-xs font-extrabold text-[#2B1B17]">
                            ₹{prod.price}
                          </span>
                          <span className="text-[10px] text-stone-400 line-through">
                            ₹{prod.originalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: LOVE NOTE & PERSONALIZATION */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-stone-800">
                  Step 3: Personalize Her Wax-Sealed Bollywood Love Letter
                </h3>
                <p className="text-xs text-stone-500">
                  Every hamper includes this luxury parchment letter sealed with
                  our custom red wax emblem
                </p>
              </div>

              {/* Names input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    To Her (Her Name or Cute Nickname):
                  </label>
                  <input
                    type="text"
                    value={toName}
                    onChange={(e) => setToName(e.target.value)}
                    placeholder="e.g. My Drama Queen, Geet, Priya..."
                    className="w-full text-xs bg-[#FBF7F4] border border-stone-200 rounded-xl px-3 py-2 text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#E60050]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    From (Your Name):
                  </label>
                  <input
                    type="text"
                    value={fromName}
                    onChange={(e) => setFromName(e.target.value)}
                    placeholder="e.g. Your Boyfriend, Kabir..."
                    className="w-full text-xs bg-[#FBF7F4] border border-stone-200 rounded-xl px-3 py-2 text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#E60050]"
                  />
                </div>
              </div>

              {/* Presets */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-700 block">
                  Select Bollywood Quote Template:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {BOLLYWOOD_LOVE_NOTES.map((note) => (
                    <button
                      key={note.id}
                      onClick={() => {
                        setSelectedNote(note.text);
                        setCustomNote("");
                      }}
                      className={`p-3 text-left rounded-xl border text-xs transition-all ${
                        selectedNote === note.text && !customNote
                          ? "border-[#E60050] bg-rose-50/50 text-[#880E4F] font-semibold ring-1 ring-[#E60050]"
                          : "border-stone-200 bg-white text-stone-600 hover:border-pink-300"
                      }`}
                    >
                      <span className="font-bold text-stone-900 block mb-1">
                        🎬 {note.title} ({note.movie})
                      </span>
                      <span className="italic font-serif-romance text-stone-600 line-clamp-2">
                        {note.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Note input */}
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Or write your own custom love message:
                </label>
                <textarea
                  rows={3}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Type anything sweet, romantic, or hilarious here. We will print it on luxury textured parchment paper."
                  className="w-full text-xs bg-[#FBF7F4] border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#E60050]"
                />
              </div>

              {/* Vintage Parchment Letter Live Preview */}
              <div className="bg-[#FFF9F2] p-4 rounded-2xl border border-[#E8D7C6] shadow-inner relative">
                <div className="text-center pb-2 border-b border-[#E8D7C6]">
                  <span className="font-serif-romance italic text-xs text-amber-900 tracking-wider">
                    Official Nakhrewali Love Letter
                  </span>
                </div>
                <div className="py-3 text-center space-y-2">
                  <p className="text-xs font-bold text-amber-950">
                    Dearest {toName || "Sweetheart"},
                  </p>
                  <p className="font-serif-romance italic text-sm text-stone-700 max-w-md mx-auto leading-relaxed">
                    {finalLoveNote}
                  </p>
                  <p className="text-xs font-bold text-amber-950 pt-1">
                    With all my filmy love, <br />
                    {fromName || "Yours Forever"} ❤️
                  </p>
                </div>
                <div className="absolute top-3 right-3 text-rose-700 text-lg">
                  💌
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer: Live Pricing Bar and Actions */}
        <div className="bg-[#FFFDF9] px-6 py-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-black text-[#2B1B17]">
                ₹{finalHamperPrice.toLocaleString()}
              </span>
              <span className="text-xs text-stone-400 line-through">
                ₹{(rawItemsPrice + selectedBox.price).toLocaleString()}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Saved ₹
                {(
                  rawItemsPrice +
                  selectedBox.price -
                  finalHamperPrice
                ).toLocaleString()}{" "}
                (15% Off)
              </span>
            </div>
            <p className="text-[11px] text-stone-500">
              {selectedBox.name} • {selectedProducts.length} Items Included
            </p>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            {step > 1 && (
              <button
                onClick={() => setStep((step - 1) as 1 | 2 | 3)}
                className="px-4 py-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-600 hover:bg-stone-50"
              >
                Back
              </button>
            )}

            {step < 3 ? (
              <button
                onClick={() => setStep((step + 1) as 1 | 2 | 3)}
                className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#2B1B17] hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
              >
                <span>Continue to Step {step + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                id="finish-hamper-btn"
                onClick={handleFinishHamper}
                className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#E60050] hover:bg-[#C2185B] text-white rounded-xl text-xs font-bold shadow-lg shadow-pink-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <Gift className="w-4 h-4" />
                <span>Pack & Add Hamper to Trunk</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

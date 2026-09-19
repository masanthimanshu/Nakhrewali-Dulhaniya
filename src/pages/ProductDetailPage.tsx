import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Heart,
  ShoppingBag,
  Star,
  Sparkles,
  Check,
  Gift,
  ShieldCheck,
  Share2,
  Truck,
  ArrowRight,
  Flame,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { PRODUCTS, BOLLYWOOD_LOVE_NOTES, CATEGORIES } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { handleImageError } from '../utils/imageFallback';
import { ProductCraftsmanship } from '../components/ProductCraftsmanship';
import { ProductGiftingJourney } from '../components/ProductGiftingJourney';
import { ProductReviewsSection } from '../components/ProductReviewsSection';
import { ProductFaqSection } from '../components/ProductFaqSection';
import { BrandPerks } from '../components/BrandPerks';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, isWishlisted, toggleWishlist } = useShop();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  // Gallery images
  const gallery = [
    product.image,
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80',
  ];

  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedNote, setSelectedNote] = useState(BOLLYWOOD_LOVE_NOTES[0].text);
  const [customNote, setCustomNote] = useState('');
  const [recipientName, setRecipientName] = useState('My Sweetheart');
  const [pincode, setPincode] = useState('');
  const [deliveryEstimate, setDeliveryEstimate] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'styling' | 'packaging'>('details');

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const finalNote = customNote.trim() ? customNote : selectedNote;

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6) {
      const days = pincode.startsWith('11') || pincode.startsWith('40') ? 2 : 3;
      const date = new Date();
      date.setDate(date.getDate() + days);
      const formatted = date.toLocaleDateString('en-IN', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      });
      setDeliveryEstimate(`Express Delivery guaranteed by ${formatted} 🚀`);
    } else {
      setDeliveryEstimate('Please enter a valid 6-digit Indian PIN code.');
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, finalNote, customNote, recipientName);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, finalNote, customNote, recipientName);
    navigate('/checkout');
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Pair with recommendations from other collections
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category !== product.category
  ).slice(0, 3);

  const categoryMeta = CATEGORIES.find((c) => c.id === product.category);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* 1. Breadcrumbs & Share Bar */}
      <div className="bg-white/80 border-b border-[#EAE1D7] py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#8C7A75]">
          <nav className="flex items-center space-x-1.5 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#961A38] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#C5A880]" />
            <Link
              to={`/collection/${product.category}`}
              className="hover:text-[#961A38] transition-colors"
            >
              {categoryMeta?.name || product.categoryLabel}
            </Link>
            <ChevronRight className="w-3 h-3 text-[#C5A880]" />
            <span className="text-[#1C1412] font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>

          <button
            onClick={handleShare}
            className="flex items-center space-x-1.5 text-xs text-[#6E5D57] hover:text-[#961A38] font-medium transition-colors ml-4 shrink-0"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? 'Link Copied!' : 'Share Hint with Bae'}</span>
          </button>
        </div>
      </div>

      {/* 2. Main Product Hero (Gallery + Narrative + Conversion Hub) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-white border border-[#EAE1D7] shadow-sm">
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, product.category)}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {product.badge && (
                  <span className="px-3 py-1 bg-[#1C1412]/90 backdrop-blur-xs text-white text-[11px] font-semibold tracking-wider uppercase rounded-full border border-[#C5A880]/30 shadow-xs">
                    {product.badge}
                  </span>
                )}
                <span className="px-3 py-1 bg-[#961A38] text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-xs">
                  Save {discountPercent}%
                </span>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-xs transition-all z-10 ${
                  isWishlisted(product.id)
                    ? 'bg-[#961A38] text-white shadow-md'
                    : 'bg-white/90 text-[#4A3B36] hover:text-[#961A38]'
                }`}
                aria-label="Wishlist"
              >
                <Heart
                  className={`w-4 h-4 ${isWishlisted(product.id) ? 'fill-white' : ''}`}
                />
              </button>

              {/* Social Buzz Micro-Sticker */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#EAE1D7] flex items-center justify-between text-xs text-[#1C1412] shadow-xs">
                <div className="flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-orange-600 animate-pulse" />
                  <span className="font-semibold text-[11px]">
                    46 sweethearts viewing this right now
                  </span>
                </div>
                <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full">
                  In Stock
                </span>
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImage === img
                      ? 'border-[#961A38] scale-102 shadow-xs'
                      : 'border-[#EAE1D7] opacity-75 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, product.category)}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Gen-Z Quick Assurance Card */}
            <div className="p-4 bg-white rounded-2xl border border-[#EAE1D7] grid grid-cols-3 gap-2 text-center text-[11px] text-[#6E5D57]">
              <div className="p-2">
                <span className="block font-bold text-[#1C1412] text-xs">22K Micron</span>
                <span>Anti-Tarnish Shine</span>
              </div>
              <div className="p-2 border-x border-[#EAE1D7]">
                <span className="block font-bold text-[#1C1412] text-xs">Featherlight</span>
                <span>Zero Ear Strain</span>
              </div>
              <div className="p-2">
                <span className="block font-bold text-[#1C1412] text-xs">Velvet Box</span>
                <span>Wax Seal Included</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Narrative, Customizer & Checkout Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header / Category / Title */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#8C7A75] uppercase tracking-widest mb-1.5">
                <span>{product.categoryLabel}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1C1412] leading-snug">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <a
                href="#reviews-section"
                className="inline-flex items-center space-x-2 mt-2.5 group cursor-pointer"
              >
                <div className="flex text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-current'
                          : 'text-[#DECFC2]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#1C1412]">
                  {product.rating} / 5.0
                </span>
                <span className="text-xs text-[#8C7A75] group-hover:text-[#961A38] group-hover:underline transition-colors">
                  ({product.reviewsCount} verified love stories)
                </span>
              </a>
            </div>

            {/* Pricing Section */}
            <div className="p-4 bg-white rounded-2xl border border-[#EAE1D7] flex items-baseline justify-between">
              <div>
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold text-[#1C1412]">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-[#A89893] line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-[#961A38] bg-[#FAF2F4] px-2.5 py-0.5 rounded-full border border-[#F2D6DC]">
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </div>
                <p className="text-[11px] text-[#8C7A75] mt-1">
                  Inclusive of all taxes • Free express shipping on all orders
                </p>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center space-x-1 text-emerald-800 text-[11px] font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
                  <Zap className="w-3 h-3 text-emerald-700" />
                  <span>Ships in 24h</span>
                </span>
              </div>
            </div>

            {/* The Signature Bollywood Dialogue Quote */}
            <div className="p-4 bg-[#F5ECE4] rounded-2xl border border-[#DFCFC1] relative">
              <span className="text-xs text-[#8C7A75] uppercase tracking-wider font-semibold block mb-1">
                The Cinematic Emotion
              </span>
              <p className="font-serif-romance italic text-base sm:text-lg text-[#7A152E] leading-relaxed">
                {product.bollywoodDialogue}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#6E5D57] leading-relaxed">
              {product.description}
            </p>

            {/* Interactive Love Note Personalizer (Crucial Brand Feature) */}
            <div className="p-5 bg-white rounded-2xl border border-[#EAE1D7] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Gift className="w-4 h-4 text-[#961A38]" />
                  <span className="text-xs font-bold text-[#1C1412] uppercase tracking-wider">
                    Complimentary Wax-Sealed Love Letter
                  </span>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">
                  Free ₹199 Gift
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] text-[#70605A] font-medium block">
                  Her name / Nickname:
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="e.g. My Nakhrewali, Simran, Babe..."
                  className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] text-[#70605A] font-medium block">
                  Select iconic dialogue or author personal note:
                </label>
                <select
                  value={selectedNote}
                  onChange={(e) => {
                    setSelectedNote(e.target.value);
                    setCustomNote('');
                  }}
                  className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                >
                  {BOLLYWOOD_LOVE_NOTES.map((note) => (
                    <option key={note.id} value={note.text}>
                      {note.title} ({note.movie})
                    </option>
                  ))}
                </select>

                <textarea
                  placeholder="Or write a customized romantic message for her parchment letter..."
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  rows={2}
                  className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2 text-[#1C1412] placeholder-[#A89893] focus:outline-none focus:border-[#961A38]"
                />
              </div>
            </div>

            {/* Pincode Estimator */}
            <div className="p-4 bg-white rounded-2xl border border-[#EAE1D7]">
              <form onSubmit={handleCheckPincode} className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-[#8C7A75] shrink-0" />
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 6-digit Pincode"
                  className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1C1412] text-white text-xs font-semibold rounded-xl hover:bg-[#332420] transition-colors shrink-0"
                >
                  Check Date
                </button>
              </form>
              {deliveryEstimate && (
                <p className="text-[11px] font-semibold text-emerald-800 mt-2">
                  {deliveryEstimate}
                </p>
              )}
            </div>

            {/* Action Buttons: Quantity, Add to Trunk, Buy Now */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#DFCFC1] rounded-2xl bg-white px-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-3 text-[#6E5D57] hover:text-[#1C1412] text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-bold text-[#1C1412]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-3 text-[#6E5D57] hover:text-[#1C1412] text-sm font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Trunk Button */}
                <button
                  id="add-to-trunk-detail-btn"
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 bg-white hover:bg-[#FAF7F2] text-[#1C1412] border-2 border-[#1C1412] font-semibold text-xs tracking-wider uppercase rounded-2xl shadow-xs transition-all flex items-center justify-center space-x-2 active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4 text-[#961A38]" />
                  <span>Add to Trunk</span>
                </button>

                {/* Direct 1-Click Buy Now Button (High Conversion for Ads!) */}
                <button
                  id="buy-now-detail-btn"
                  onClick={handleBuyNow}
                  className="flex-1 py-3.5 bg-[#961A38] hover:bg-[#7D152E] text-white font-semibold text-xs tracking-wider uppercase rounded-2xl shadow-md transition-all flex items-center justify-center space-x-2 active:scale-98"
                >
                  <span>Instant Buy Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Guarantees */}
              <div className="flex items-center justify-between text-[11px] text-[#8C7A75] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                  Anti-Tarnish Assurance
                </span>
                <span>📦 Velvet Gift Box Included</span>
                <span>💳 COD / UPI Available</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Story & Atelier Tabs */}
      <section className="bg-white border-y border-[#EAE1D7] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-center space-x-3 border-b border-[#EAE1D7] pb-4 mb-6">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-2 text-xs uppercase tracking-wider font-semibold transition-all relative ${
                activeTab === 'details'
                  ? 'text-[#961A38] border-b-2 border-[#961A38]'
                  : 'text-[#8C7A75] hover:text-[#1C1412]'
              }`}
            >
              Why She'll Love It
            </button>
            <button
              onClick={() => setActiveTab('styling')}
              className={`pb-2 text-xs uppercase tracking-wider font-semibold transition-all relative ${
                activeTab === 'styling'
                  ? 'text-[#961A38] border-b-2 border-[#961A38]'
                  : 'text-[#8C7A75] hover:text-[#1C1412]'
              }`}
            >
              Atelier Styling Playbook
            </button>
            <button
              onClick={() => setActiveTab('packaging')}
              className={`pb-2 text-xs uppercase tracking-wider font-semibold transition-all relative ${
                activeTab === 'packaging'
                  ? 'text-[#961A38] border-b-2 border-[#961A38]'
                  : 'text-[#8C7A75] hover:text-[#1C1412]'
              }`}
            >
              The Unboxing Experience
            </button>
          </div>

          <div className="space-y-4">
            {activeTab === 'details' && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#1C1412] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  <span>Artisanal Highlights:</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#6E5D57]">
                  {product.whySheLovesIt.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#EAE1D7] text-xs text-[#70605A] mt-4">
                  <span className="font-bold text-[#1C1412] block mb-1">
                    Material Specification:
                  </span>
                  {product.material}
                </div>
              </div>
            )}

            {activeTab === 'styling' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#6E5D57]">
                <h4 className="text-sm font-bold text-[#1C1412]">
                  How Bollywood Heroines Style This
                </h4>
                <p>{product.stylingTip}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EAE1D7]">
                    <span className="font-semibold text-[#1C1412] block mb-1">
                      Daywear & Brunch:
                    </span>
                    Pair with an oversized crisp white shirt, distressed denim, and silver kolhapuris.
                  </div>
                  <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EAE1D7]">
                    <span className="font-semibold text-[#1C1412] block mb-1">
                      Festive & Sangeet:
                    </span>
                    Compliments blush organza lehengas, raw silk dupattas, and classic gajra hair buns.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'packaging' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#6E5D57]">
                <h4 className="text-sm font-bold text-[#1C1412]">
                  Packed to Create Goosebumps
                </h4>
                <p>
                  Every order arrives in our signature <strong>Gulabi Velvet presentation box</strong>, lined with soft ivory velvet padding, fragrant dried rose petals, and an authentic crimson wax-sealed envelope bearing your chosen love quote.
                </p>
                <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#EAE1D7] text-xs text-[#70605A]">
                  ✦ No price tags or invoices are included inside the luxury box—ready for immediate gifting!
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 4. Atelier Craftsmanship, Material Anatomy & Specifications */}
      <ProductCraftsmanship product={product} />

      {/* 5. The Gifting Journey & Discreet Stealth Delivery */}
      <ProductGiftingJourney />

      {/* 6. Brand Perks & Assurance Standards */}
      <BrandPerks />

      {/* 7. Verified Customer Reviews, Rating Metrics & Story Submission */}
      <ProductReviewsSection product={product} />

      {/* 8. Product-Specific Frequently Asked Questions */}
      <ProductFaqSection product={product} />

      {/* 4. "Complete The Look" / Related Recommendations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[11px] font-semibold text-[#8C7A75] uppercase tracking-widest block">
              ✦ Pair With Other Ranges ✦
            </span>
            <h3 className="text-2xl font-display font-bold text-[#1C1412]">
              Complete Her Cinematic Outfit
            </h3>
          </div>
          <Link
            to="/"
            className="text-xs font-semibold text-[#961A38] hover:underline flex items-center space-x-1"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((relProduct) => (
            <ProductCard
              key={relProduct.id}
              product={relProduct}
              isWishlisted={isWishlisted(relProduct.id)}
              onToggleWishlist={toggleWishlist}
              onAddToCart={() => addToCart(relProduct)}
              onOpenQuickView={() => navigate(`/product/${relProduct.id}`)}
            />
          ))}
        </div>
      </section>

      {/* 5. Sticky Bottom Action Bar for Mobile & Quick Buying */}
      <div className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#EAE1D7] p-3 sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-sm font-bold text-[#1C1412] block">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-[10px] text-emerald-800 font-semibold">
              Free Express Shipping
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAddToCart}
              className="px-4 py-2.5 bg-white border border-[#1C1412] text-[#1C1412] font-semibold text-xs uppercase rounded-xl"
            >
              Add
            </button>
            <button
              onClick={handleBuyNow}
              className="px-5 py-2.5 bg-[#961A38] text-white font-semibold text-xs uppercase rounded-xl shadow-xs"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

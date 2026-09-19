import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ShopProvider, useShop } from './context/ShopContext';
import { AnnouncementTicker } from './components/AnnouncementTicker';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { HamperBuilderModal } from './components/HamperBuilderModal';
import { GiftFinderQuizModal } from './components/GiftFinderQuizModal';
import { ScrollToTop } from './components/ScrollToTop';

// Code-split pages for instant initial paint & smaller entry bundle
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then((m) => ({ default: m.ProductDetailPage })));
const CollectionPage = lazy(() => import('./pages/CollectionPage').then((m) => ({ default: m.CollectionPage })));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage').then((m) => ({ default: m.CheckoutPage })));
const OrderSuccessPage = lazy(() => import('./pages/OrderSuccessPage').then((m) => ({ default: m.OrderSuccessPage })));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#DFCFC1] border-t-[#961A38] rounded-full animate-spin" />
  </div>
);

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const {
    cart,
    wishlist,
    isCartOpen,
    setIsCartOpen,
    isWishlistOpen,
    setIsWishlistOpen,
    isHamperBuilderOpen,
    setIsHamperBuilderOpen,
    isGiftQuizOpen,
    setIsGiftQuizOpen,
    removeFromCart,
    updateCartQuantity,
    toggleWishlist,
    addToCart,
    addHamperToCart,
    cartCount,
    cartSubtotal,
  } = useShop();

  const [activeCoupon, setActiveCoupon] = useState<string | null>('NAKHRA15');
  const [discountAmount, setDiscountAmount] = useState<number>(() => {
    return Math.round(cartSubtotal * 0.15);
  });

  const handleApplyCoupon = (code: string) => {
    if (code === 'NAKHRA10' || code === 'NAKHRA15' || code === 'FILMYLOVE' || code === 'BAE15') {
      setActiveCoupon(code);
      const pct = code === 'NAKHRA10' ? 0.10 : 0.15;
      setDiscountAmount(Math.round(cartSubtotal * pct));
      return true;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1412] flex flex-col font-body selection:bg-[#961A38] selection:text-white">
      <ScrollToTop />

      {/* Top Filmy Announcement Ticker */}
      <AnnouncementTicker />

      {/* Global Multipage Sticky Header */}
      <Navbar
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        cartCount={cartCount}
        cartSubtotal={cartSubtotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenHamperBuilder={() => setIsHamperBuilderOpen(true)}
        onOpenGiftQuiz={() => setIsGiftQuizOpen(true)}
      />

      {/* Multipage Routing Body */}
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/collection/:categoryId" element={<CollectionPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success/:orderId" element={<OrderSuccessPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Atelier Footer */}
      <Footer
        onOpenHamperBuilder={() => setIsHamperBuilderOpen(true)}
        onOpenGiftQuiz={() => setIsGiftQuizOpen(true)}
      />

      {/* Global Shopping Trunk Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={(id, delta) => updateCartQuantity(id, delta)}
        onRemoveItem={(id) => removeFromCart(id)}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          navigate('/checkout');
        }}
        onApplyCoupon={handleApplyCoupon}
        activeCoupon={activeCoupon}
        discountAmount={discountAmount}
      />

      {/* Global Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={(prod) => toggleWishlist(prod)}
        onMoveToCart={(prod) => {
          addToCart(prod, 1);
          toggleWishlist(prod);
        }}
      />

      {/* Bespoke Hamper Studio Modal */}
      <HamperBuilderModal
        isOpen={isHamperBuilderOpen}
        onClose={() => setIsHamperBuilderOpen(false)}
        onAddHamperToCart={(hamper) => {
          addHamperToCart(hamper);
          setIsHamperBuilderOpen(false);
        }}
      />

      {/* Boyfriend Gifting Concierge Quiz Modal */}
      <GiftFinderQuizModal
        isOpen={isGiftQuizOpen}
        onClose={() => setIsGiftQuizOpen(false)}
        onAddToCart={(prod) => addToCart(prod, 1)}
        onOpenQuickView={(prod) => {
          setIsGiftQuizOpen(false);
          navigate(`/product/${prod.id}`);
        }}
      />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <Router>
        <AppContent />
      </Router>
    </ShopProvider>
  );
}

import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { ShopProvider, useShop } from "./context/ShopContext";
import { AnnouncementTicker } from "./components/AnnouncementTicker";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { WishlistDrawer } from "./components/WishlistDrawer";
import { ScrollToTop } from "./components/ScrollToTop";

// Code-split pages for instant initial paint & smaller entry bundle
const HomePage = lazy(() =>
  import("./pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const ProductDetailPage = lazy(() =>
  import("./pages/ProductDetailPage").then((m) => ({
    default: m.ProductDetailPage,
  })),
);
const CollectionPage = lazy(() =>
  import("./pages/CollectionPage").then((m) => ({ default: m.CollectionPage })),
);
const CheckoutPage = lazy(() =>
  import("./pages/CheckoutPage").then((m) => ({ default: m.CheckoutPage })),
);
const OrderSuccessPage = lazy(() =>
  import("./pages/OrderSuccessPage").then((m) => ({
    default: m.OrderSuccessPage,
  })),
);

// Lazy load on-demand modals to keep critical bundle minimal
const HamperBuilderModal = lazy(() =>
  import("./components/HamperBuilderModal").then((m) => ({
    default: m.HamperBuilderModal,
  })),
);
const GiftFinderQuizModal = lazy(() =>
  import("./components/GiftFinderQuizModal").then((m) => ({
    default: m.GiftFinderQuizModal,
  })),
);

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#DFCFC1] border-t-[#961A38] rounded-full animate-spin" />
  </div>
);

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const {
    isCartOpen,
    setIsCartOpen,
    isWishlistOpen,
    setIsWishlistOpen,
    isHamperBuilderOpen,
    setIsHamperBuilderOpen,
    isGiftQuizOpen,
    setIsGiftQuizOpen,
    addToCart,
    addHamperToCart,
  } = useShop();

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1412] flex flex-col font-body selection:bg-[#961A38] selection:text-white">
      <ScrollToTop />

      {/* Top Filmy Announcement Ticker */}
      <AnnouncementTicker />

      {/* Global Multipage Sticky Header */}
      <Navbar />

      {/* Multipage Routing Body */}
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route
              path="/collection/:categoryId"
              element={<CollectionPage />}
            />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route
              path="/order-success/:orderId"
              element={<OrderSuccessPage />}
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Atelier Footer */}
      <Footer />

      {/* Global Shopping Trunk Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          navigate("/checkout");
        }}
      />

      {/* Global Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />

      {/* Bespoke Hamper Studio Modal (Code-split) */}
      {isHamperBuilderOpen && (
        <Suspense fallback={null}>
          <HamperBuilderModal
            isOpen={isHamperBuilderOpen}
            onClose={() => setIsHamperBuilderOpen(false)}
            onAddHamperToCart={(hamper) => {
              addHamperToCart(hamper);
              setIsHamperBuilderOpen(false);
            }}
          />
        </Suspense>
      )}

      {/* Boyfriend Gifting Concierge Quiz Modal (Code-split) */}
      {isGiftQuizOpen && (
        <Suspense fallback={null}>
          <GiftFinderQuizModal
            isOpen={isGiftQuizOpen}
            onClose={() => setIsGiftQuizOpen(false)}
            onAddToCart={(prod) => addToCart(prod, 1)}
            onOpenQuickView={(prod) => {
              setIsGiftQuizOpen(false);
              navigate(`/product/${prod.id}`);
            }}
          />
        </Suspense>
      )}
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

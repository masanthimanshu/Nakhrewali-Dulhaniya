import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Heart, ShoppingBag, Search, Gift, HelpCircle, X } from 'lucide-react';
import { CategoryId } from '../types';

interface NavbarProps {
  selectedCategory?: CategoryId;
  onSelectCategory?: (cat: CategoryId) => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
  cartCount: number;
  cartSubtotal: number;
  onOpenCart: () => void;
  onOpenHamperBuilder: () => void;
  onOpenGiftQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedCategory = 'all',
  onSelectCategory,
  searchQuery = '',
  onSearchChange,
  wishlistCount,
  onOpenWishlist,
  cartCount,
  cartSubtotal,
  onOpenCart,
  onOpenHamperBuilder,
  onOpenGiftQuiz,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const categories: { id: CategoryId; label: string; roman: string }[] = [
    { id: 'all', label: 'All Drops', roman: '✦' },
    { id: 'earrings', label: 'Haye Jhumka', roman: 'I' },
    { id: 'bangles', label: 'Bole Chudiyan', roman: 'II' },
    { id: 'hair', label: 'Yeh Reshmi Zulfen', roman: 'III' },
    { id: 'romantic-gifts', label: 'Dil Tu Jaan Tu', roman: 'IV' },
  ];

  const handleCategoryClick = (catId: CategoryId) => {
    if (catId === 'all') {
      navigate('/');
      if (onSelectCategory) onSelectCategory('all');
    } else {
      navigate(`/collection/${catId}`);
      if (onSelectCategory) onSelectCategory(catId);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE1D7] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Wordmark (Clean editorial typography, without cluttered icons) */}
          <Link
            to="/"
            id="brand-logo-btn"
            className="text-left focus:outline-none group shrink-0"
          >
            <div className="flex items-baseline space-x-2">
              <span className="text-xl sm:text-2xl font-display font-bold text-[#1C1412] group-hover:text-[#961A38] transition-colors">
                Nakhrewali
              </span>
              <span className="text-xl sm:text-2xl font-serif-romance italic font-normal text-[#961A38]">
                Dulhaniya
              </span>
            </div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#8C7A75] uppercase">
              Haute Filmy Gifting & Accessories
            </p>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9E8E89]" />
              <input
                id="search-input"
                type="text"
                placeholder="Search jhumkas, choodiyan, hair bows..."
                value={searchQuery}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs bg-[#F2ECE4] border border-[#DECFC2] rounded-full text-[#1C1412] placeholder-[#9E8E89] focus:outline-none focus:border-[#961A38] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange && onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Luxury Utility CTAs (Hamper Studio, Quiz, Wishlist, Cart) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Hamper Studio CTA */}
            <button
              id="nav-hamper-btn"
              onClick={onOpenHamperBuilder}
              className="hidden lg:inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-white border border-[#C5A880] text-[#7A152E] rounded-full text-xs font-semibold hover:bg-[#FDF9F5] transition-colors shadow-2xs cursor-pointer"
            >
              <Gift className="w-3.5 h-3.5 text-[#961A38]" />
              <span>Bana De Hamper</span>
            </button>

            {/* Gift Quiz CTA */}
            <button
              id="nav-quiz-btn"
              onClick={onOpenGiftQuiz}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 bg-transparent hover:bg-[#F2ECE4] text-[#4A3B36] border border-[#E0D4C7] rounded-full text-xs font-medium transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#961A38]" />
              <span>Gift Concierge</span>
            </button>

            {/* Wishlist Button */}
            <button
              id="nav-wishlist-btn"
              onClick={onOpenWishlist}
              className="relative p-2 rounded-full text-[#4A3B36] hover:text-[#961A38] hover:bg-[#F2ECE4] transition-colors cursor-pointer"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#961A38] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Trunk Button */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              className="flex items-center space-x-2 pl-3 pr-3.5 py-2 bg-[#1C1412] hover:bg-[#2A1D1A] text-white rounded-full transition-colors shadow-sm cursor-pointer"
              aria-label="Shopping Trunk"
            >
              <div className="relative">
                <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-3.5 h-3.5 bg-[#961A38] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold hidden sm:inline">
                {cartSubtotal > 0 ? `₹${cartSubtotal.toLocaleString()}` : 'Trunk'}
              </span>
            </button>
          </div>
        </div>

        {/* The 4 Distinct Signature Collections Navigation Bar */}
        <div className="border-t border-[#EAE1D7] py-2 flex items-center justify-start sm:justify-center overflow-x-auto space-x-1 sm:space-x-2 no-scrollbar">
          {categories.map((cat) => {
            const isCollectionActive =
              (cat.id === 'all' && location.pathname === '/') ||
              location.pathname === `/collection/${cat.id}`;

            return (
              <button
                key={cat.id}
                id={`cat-pill-${cat.id}`}
                onClick={() => handleCategoryClick(cat.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center space-x-1.5 whitespace-nowrap cursor-pointer ${
                  isCollectionActive
                    ? 'bg-[#1C1412] text-[#F5EFEB] font-bold shadow-xs'
                    : 'text-[#5C4944] hover:text-[#1C1412] hover:bg-[#EFE6DC] font-medium'
                }`}
              >
                <span className={`text-[10px] ${isCollectionActive ? 'text-[#D4AF37]' : 'text-[#A89893]'}`}>
                  {cat.roman}
                </span>
                <span className="tracking-wide">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

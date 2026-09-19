import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SlidersHorizontal, ChevronRight } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { CategoryId } from '../types';

export const CollectionPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { addToCart, isWishlisted, toggleWishlist } = useShop();

  const activeCategory = categoryId as CategoryId || 'earrings';
  const categoryMeta = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[1];

  const [filterPrice, setFilterPrice] = useState<'all' | 'under1000' | '1000to1500' | 'above1500'>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'rating'>('popular');

  const products = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.category === activeCategory);

    if (filterPrice === 'under1000') {
      list = list.filter((p) => p.price < 1000);
    } else if (filterPrice === '1000to1500') {
      list = list.filter((p) => p.price >= 1000 && p.price <= 1500);
    } else if (filterPrice === 'above1500') {
      list = list.filter((p) => p.price > 1500);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [activeCategory, filterPrice, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-[#8C7A75] mb-6">
          <Link to="/" className="hover:text-[#961A38]">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#C5A880]" />
          <span>Collections</span>
          <ChevronRight className="w-3 h-3 text-[#C5A880]" />
          <span className="text-[#1C1412] font-semibold">{categoryMeta.name}</span>
        </nav>

        {/* Dedicated Range Masthead Banner (Ad-Ready) */}
        <div className="mb-10 p-6 sm:p-10 bg-white rounded-3xl border border-[#EAE1D7] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FAF2F4]/50 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center space-x-2 text-[11px] font-semibold text-[#8C7A75] uppercase tracking-widest">
                <span>Range {categoryMeta.romanNumeral}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1C1412]">
                {categoryMeta.name}
              </h1>
              
              <p className="text-sm text-[#6E5D57] font-normal leading-relaxed">
                {categoryMeta.tagline}
              </p>
              
              <p className="text-xs text-[#961A38] font-medium tracking-wide">
                {categoryMeta.subtitle}
              </p>
            </div>

            {/* Quick Switch to Other Ranges */}
            <div className="flex flex-wrap items-center gap-2 shrink-0 bg-[#FAF7F2] p-2 rounded-2xl border border-[#EAE1D7]">
              {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                <Link
                  key={c.id}
                  to={`/collection/${c.id}`}
                  className={`px-3 py-1.5 rounded-xl text-xs transition-all font-medium ${
                    activeCategory === c.id
                      ? 'bg-[#1C1412] text-white font-bold shadow-2xs'
                      : 'text-[#6E5D57] hover:text-[#1C1412] hover:bg-white'
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 border-b border-[#EAE1D7]">
          <div className="flex items-center space-x-2 text-xs text-[#70605A] overflow-x-auto w-full sm:w-auto">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#961A38] shrink-0" />
            <span className="font-semibold text-[#1C1412] shrink-0">Budget:</span>
            {(['all', 'under1000', '1000to1500', 'above1500'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setFilterPrice(filter)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all shrink-0 ${
                  filterPrice === filter
                    ? 'bg-[#1C1412] text-white font-bold'
                    : 'bg-white border border-[#EAE1D7] text-[#6E5D57] hover:border-[#1C1412]'
                }`}
              >
                {filter === 'all'
                  ? 'All Prices'
                  : filter === 'under1000'
                  ? 'Under ₹1,000'
                  : filter === '1000to1500'
                  ? '₹1,000 - ₹1,500'
                  : '₹1,500+'}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 self-end sm:self-auto">
            <span className="text-[11px] font-medium text-[#70605A]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs bg-white border border-[#DFCFC1] rounded-xl px-2.5 py-1.5 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
            >
              <option value="popular">Most Loved</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={isWishlisted(product.id)}
              onToggleWishlist={toggleWishlist}
              onAddToCart={() => addToCart(product)}
              onOpenQuickView={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

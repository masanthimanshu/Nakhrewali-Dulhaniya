import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Product } from "../types";
import { handleImageError } from "../utils/imageFallback";
import { StarRating } from "./StarRating";
import { getDiscountPercent } from "../utils/productUtils";

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) => {
  const discountPercent = getDiscountPercent(
    product.originalPrice,
    product.price,
  );

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative bg-white rounded-3xl overflow-hidden border border-[#EAE1D7] hover:border-[#C5A880] transition-all duration-300 flex flex-col hover:shadow-lg"
    >
      {/* Editorial Portrait Image Area */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2]">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Minimalist Top Badge */}
        {product.badge && (
          <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
            <span className="inline-block px-2.5 py-0.5 bg-white/95 backdrop-blur-xs text-[#1C1412] text-[10px] font-semibold tracking-wider uppercase rounded-full border border-[#DFCFC1] shadow-2xs">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Heart Icon */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3.5 right-3.5 p-2.5 rounded-full backdrop-blur-xs transition-all z-10 ${
            isWishlisted
              ? "bg-[#961A38] text-white shadow-sm"
              : "bg-white/85 hover:bg-white text-[#4A3B36] hover:text-[#961A38]"
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-3.5 h-3.5 ${isWishlisted ? "fill-white text-white" : ""}`}
          />
        </button>

        {/* Hover Quick Action -> Direct Link to Dedicated Product Page */}
        <div className="absolute inset-x-0 bottom-3 px-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <Link
            to={`/product/${product.id}`}
            className="w-full py-2.5 bg-[#1C1412]/95 hover:bg-[#1C1412] text-white text-[11px] font-semibold tracking-wider uppercase rounded-xl shadow-md backdrop-blur-xs flex items-center justify-center space-x-1.5 transition-transform active:scale-98 text-center"
          >
            <span>View Full Piece & Story</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </Link>
        </div>

        {/* Discount Pill */}
        {discountPercent > 0 && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[#961A38] text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border border-[#E8D6D9] pointer-events-none">
            Save {discountPercent}%
          </div>
        )}
      </div>

      {/* Product Details Area */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Distinct Category Tag */}
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#8C7A75] mb-1 font-semibold">
            <span>{product.categoryLabel}</span>
          </div>

          {/* Product Title */}
          <h3 className="text-sm font-semibold text-[#1C1412] line-clamp-1 hover:text-[#961A38] transition-colors leading-snug">
            <Link to={`/product/${product.id}`} title={product.name}>
              {product.name}
            </Link>
          </h3>

          {/* Filmy Dialogue Excerpt */}
          <p className="font-serif-romance italic text-xs text-[#6E5D57] mt-1 line-clamp-1">
            {product.bollywoodDialogue}
          </p>

          {/* Rating */}
          <div className="flex items-center space-x-1.5 mt-2 text-xs text-[#7A6B65]">
            <StarRating rating={product.rating} />
            <span className="font-semibold text-[#1C1412] text-[11px]">
              {product.rating}
            </span>
            <span className="text-[#A89893] text-[10px]">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Pricing & Add to Trunk */}
        <div className="pt-3 mt-3 border-t border-[#F2ECE4] flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-base font-bold text-[#1C1412]">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-xs text-[#A89893] line-through font-normal">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            </div>
            <span className="text-[9px] text-[#7A152E] font-medium tracking-wide uppercase">
              Wax Seal Note Incl.
            </span>
          </div>

          <button
            id={`add-cart-btn-${product.id}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="px-3.5 py-2 bg-[#FAF7F2] hover:bg-[#1C1412] text-[#1C1412] hover:text-white border border-[#DFCFC1] hover:border-[#1C1412] rounded-xl text-xs font-semibold tracking-wider transition-all flex items-center space-x-1.5 shadow-2xs active:scale-95 cursor-pointer"
            title="Add to Shopping Trunk"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#961A38] group-hover:text-[#D4AF37]" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

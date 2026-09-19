import { Product, CategoryId, PriceFilter, SortOption } from "../types";

export const FREE_SHIPPING_THRESHOLD = 999;
export const SHIPPING_FEE = 99;

export const VALID_COUPONS: Record<string, number> = {
  NAKHRA15: 0.15,
  BAE15: 0.15,
  FILMYLOVE: 0.15,
  NAKHRA10: 0.1,
};

export const getDiscountPercent = (
  originalPrice: number,
  price: number,
): number => {
  if (originalPrice <= price || originalPrice <= 0) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

export const formatPrice = (amount: number): string => {
  return `₹${amount.toLocaleString("en-IN")}`;
};

export const filterAndSortProducts = (
  products: Product[],
  category: CategoryId,
  priceFilter: PriceFilter,
  sortBy: SortOption,
  searchQuery?: string,
): Product[] => {
  let list =
    category === "all"
      ? [...products]
      : products.filter((p) => p.category === category);

  if (searchQuery && searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.bollywoodDialogue.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }

  if (priceFilter === "under1000") {
    list = list.filter((p) => p.price < 1000);
  } else if (priceFilter === "1000to1500") {
    list = list.filter((p) => p.price >= 1000 && p.price <= 1500);
  } else if (priceFilter === "above1500") {
    list = list.filter((p) => p.price > 1500);
  }

  if (sortBy === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  }

  return list;
};

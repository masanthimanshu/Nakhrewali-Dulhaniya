import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem, OrderDetails } from "../types";
import { PRODUCTS } from "../data/products";

interface ShopContextType {
  cart: CartItem[];
  wishlist: Product[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isHamperBuilderOpen: boolean;
  setIsHamperBuilderOpen: (open: boolean) => void;
  isGiftQuizOpen: boolean;
  setIsGiftQuizOpen: (open: boolean) => void;
  addToCart: (
    product: Product,
    quantity?: number,
    giftNote?: string,
    customNote?: string,
    recipientName?: string,
  ) => void;
  addHamperToCart: (hamper: {
    title: string;
    boxStyle: string;
    items: Product[];
    totalPrice: number;
    loveNote: string;
    toName: string;
    fromName: string;
  }) => void;
  removeFromCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  cartCount: number;
  cartSubtotal: number;
  cartTotalDiscount: number;
  lastOrder: OrderDetails | null;
  setLastOrder: (order: OrderDetails | null) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Local storage persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("nakhrewali_cart");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default welcome items in bag
    return [
      {
        id: "cart-init-1",
        product: PRODUCTS[0],
        quantity: 1,
        giftBoxChoice: "Gulabi Velvet Box",
        giftNote:
          "“Main apni favorite hoon... par tum mere sabse favorite ho!”",
        giftRecipient: "My Sweetheart",
      },
    ];
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem("nakhrewali_wishlist");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [PRODUCTS[1], PRODUCTS[4]];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isHamperBuilderOpen, setIsHamperBuilderOpen] = useState(false);
  const [isGiftQuizOpen, setIsGiftQuizOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState<OrderDetails | null>(() => {
    try {
      const saved = localStorage.getItem("nakhrewali_last_order");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return null;
  });

  useEffect(() => {
    try {
      localStorage.setItem("nakhrewali_cart", JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("nakhrewali_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    if (lastOrder) {
      try {
        localStorage.setItem(
          "nakhrewali_last_order",
          JSON.stringify(lastOrder),
        );
      } catch (e) {
        console.error(e);
      }
    }
  }, [lastOrder]);

  const addToCart = (
    product: Product,
    quantity = 1,
    giftNote?: string,
    customNote?: string,
    recipientName?: string,
  ) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.product.id === product.id &&
          item.giftNote === giftNote &&
          item.customNote === customNote,
      );

      if (existing) {
        return prev.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      const newItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        product,
        quantity,
        giftBoxChoice: "Gulabi Velvet Box (Complimentary)",
        giftNote:
          giftNote ||
          "“Main apni favorite hoon... par tum mere sabse favorite ho!”",
        customNote,
        giftRecipient: recipientName || "My Nakhrewali Bae",
      };

      return [...prev, newItem];
    });

    setIsCartOpen(true);
  };

  const addHamperToCart = (hamper: {
    title: string;
    boxStyle: string;
    items: Product[];
    totalPrice: number;
    loveNote: string;
    toName: string;
    fromName: string;
  }) => {
    const virtualHamperProduct: Product = {
      id: `custom-hamper-${Date.now()}`,
      name: hamper.title,
      category: "romantic-gifts",
      categoryLabel: "Dil Tu Jaan Tu",
      price: hamper.totalPrice,
      originalPrice: Math.round(hamper.totalPrice * 1.25),
      image:
        hamper.items[0]?.image ||
        "https://i.pinimg.com/1200x/ee/14/fc/ee14fc1b2d6ad53b35f3a8cafe3068df.jpg",
      rating: 5.0,
      reviewsCount: 1,
      badge: "Bespoke Hit",
      bollywoodDialogue: `“To ${hamper.toName}: ${hamper.loveNote} — Forever, ${hamper.fromName}”`,
      description: `Bespoke curated hamper featuring ${hamper.boxStyle} with ${hamper.items.length} handpicked pieces and complimentary calligraphy parchment note.`,
      whySheLovesIt: [
        "Curated with love by you",
        `Includes: ${hamper.items.map((i) => i.name).join(", ")}`,
        "Sealed with crimson wax and fragrant dried rose petals",
      ],
      stylingTip: "Ready for presentation upon delivery.",
      material: "Velvet trunk, brass accents, satin ribbons",
    };

    addToCart(
      virtualHamperProduct,
      1,
      hamper.loveNote,
      `From: ${hamper.fromName} to: ${hamper.toName}`,
      hamper.toName,
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateCartQuantity = (itemId: string, delta: number) => {
    setCart(
      (prev) =>
        prev
          .map((item) => {
            if (item.id === itemId) {
              const newQty = item.quantity + delta;
              return newQty > 0 ? { ...item, quantity: newQty } : null;
            }
            return item;
          })
          .filter(Boolean) as CartItem[],
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isWishlisted = (productId: string) => {
    return wishlist.some((p) => p.id === productId);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const cartTotalDiscount = cart.reduce(
    (sum, item) =>
      sum + (item.product.originalPrice - item.product.price) * item.quantity,
    0,
  );

  return (
    <ShopContext.Provider
      value={{
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
        addToCart,
        addHamperToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isWishlisted,
        cartCount,
        cartSubtotal,
        cartTotalDiscount,
        lastOrder,
        setLastOrder,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

export type CategoryId =
  "all" | "earrings" | "bangles" | "hair" | "romantic-gifts";

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  categoryLabel: string;
  price: number;
  originalPrice: number;
  image: string;
  galleryImages?: string[];
  rating: number;
  reviewsCount: number;
  badge?:
    | "Bestseller"
    | "Trending"
    | "GF Favorite"
    | "Viral Reel"
    | "Romantic Hit"
    | "Limited Stock"
    | "Bespoke Hit";
  vibeTags?: string[];
  bollywoodDialogue: string;
  description: string;
  whySheLovesIt: string[];
  stylingTip: string;
  material: string;
  weightGrams?: string;
  isBestSeller?: boolean;
  inStock?: boolean;
}

export interface CartItem {
  id: string; // unique item id in cart
  product: Product;
  quantity: number;
  giftBoxChoice?: string;
  giftNote?: string;
  customNote?: string;
  giftRecipient?: string;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  paymentMethod: string;
  date: string;
  loveLetter?: string;
  recipientName?: string;
}

export interface HamperState {
  boxType: "gulabi-velvet" | "emerald-trunk" | "vintage-tin";
  selectedProductIds: string[];
  giftNotePreset: string;
  customNote: string;
  recipientName: string;
  senderName: string;
}

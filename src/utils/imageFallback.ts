export const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  earrings: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80',
  bangles: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=80',
  hair: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
  'romantic-gifts': 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80',
  default: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80',
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  category?: string
) => {
  const target = e.currentTarget;
  const fallback = (category && CATEGORY_FALLBACK_IMAGES[category]) || CATEGORY_FALLBACK_IMAGES.default;
  if (target.src !== fallback) {
    target.src = fallback;
  }
};

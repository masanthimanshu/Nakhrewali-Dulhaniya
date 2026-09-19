import React from "react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80";

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
) => {
  const target = e.currentTarget;
  if (target.src !== FALLBACK_IMAGE) {
    target.src = FALLBACK_IMAGE;
  }
};

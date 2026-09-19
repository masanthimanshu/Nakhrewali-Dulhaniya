import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  className?: string;
  starClassName?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  className = "flex text-[#C5A880]",
  starClassName = "w-3 h-3",
}) => {
  const roundedRating = Math.floor(rating);

  return (
    <div
      className={className}
      aria-label={`${rating} out of ${maxStars} stars`}
    >
      {Array.from({ length: maxStars }, (_, i) => {
        const isFilled = i < roundedRating;
        return (
          <Star
            key={i}
            className={`${starClassName} ${
              isFilled ? "fill-current" : "fill-transparent text-[#DFCFC1]"
            }`}
          />
        );
      })}
    </div>
  );
};

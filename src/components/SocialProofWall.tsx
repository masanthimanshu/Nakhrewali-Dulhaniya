import React from "react";
import { Star, Heart, Camera } from "lucide-react";
import { REVIEWS_WALL } from "../data/products";

export const SocialProofWall: React.FC = () => {
  return (
    <section className="py-14 bg-[#FAF7F2] border-t border-[#EAE1D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F0E6DC] text-[#7A152E] text-[11px] font-semibold uppercase tracking-widest">
            <span>✦ The Unboxing Chronicles ✦</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1C1412]">
            Loved by Sweethearts & Drama Queens
          </h2>
          <p className="text-xs sm:text-sm text-[#70605A]">
            Real reactions, tearful unboxings, and boyfriend lifesavers across
            India.
          </p>
        </div>

        {/* Reviews Cards - Editorial 4 Column Grid in max-w-6xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {REVIEWS_WALL.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-5 border border-[#EAE1D7] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars & Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#C5A880]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[9px] font-semibold text-[#7A152E] bg-[#FAF2F4] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {rev.tag}
                  </span>
                </div>

                {/* Comment */}
                <p className="font-serif-romance text-sm text-[#3E312D] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-3.5 mt-3.5 border-t border-[#F2ECE4] flex items-center space-x-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-[#D9C8B8]"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold text-[#1C1412] truncate">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] text-[#8C7A75] truncate">
                    {rev.city} •{" "}
                    <span className="text-[#961A38]">{rev.productName}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Instagram Banner */}
        <div className="mt-10 bg-[#1C1412] text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 border border-[#2E201C] shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#2A1D1A] border border-[#C5A880]/30 flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-display font-bold text-[#FAF7F2]">
                Join the @nakhrewalidulhaniya Circle
              </h3>
              <p className="text-xs text-[#B5A49D] mt-0.5">
                Tag your filmy unboxings to be featured in our monthly keepsake
                editorial.
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#FAF7F2] hover:bg-white text-[#1C1412] font-semibold text-xs tracking-wider uppercase rounded-full transition-colors shrink-0 flex items-center space-x-1.5 shadow-xs"
          >
            <span>Follow Atelier</span>
            <Heart className="w-3.5 h-3.5 text-[#961A38] fill-current" />
          </a>
        </div>
      </div>
    </section>
  );
};

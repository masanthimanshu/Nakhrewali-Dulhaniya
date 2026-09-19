import React, { useState } from "react";
import {
  Star,
  ThumbsUp,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Filter,
  X,
} from "lucide-react";
import { Product } from "../types";

interface ReviewItem {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  date: string;
  tag: "Gifting" | "Comfort" | "Wedding" | "Boyfriend Lifesaver";
  headline: string;
  comment: string;
  partnerReaction?: string;
  helpfulCount: number;
}

interface ProductReviewsSectionProps {
  product: Product;
}

export const ProductReviewsSection: React.FC<ProductReviewsSectionProps> = ({
  product,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, boolean>>({});

  // Initial rich reviews tailored to Bollywood keepsakes
  const [reviews, setReviews] = useState<ReviewItem[]>([
    {
      id: "rev-p1",
      name: "Ananya & Rohan Verma",
      city: "Mumbai",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "2 days ago",
      tag: "Gifting",
      headline: "She literally teared up reading the wax-sealed letter!",
      comment:
        "I ordered this for our 2nd dating anniversary. The jewelry itself is stunning—she put it on immediately—but the wax-sealed letter with the Jab We Met dialogue broke her heart in the sweetest way. Thank you Nakhrewali for making me look like the most romantic boyfriend alive.",
      partnerReaction:
        "“You remembered my favorite dialogue? This is the prettiest thing anyone has ever given me.”",
      helpfulCount: 38,
    },
    {
      id: "rev-p2",
      name: "Dr. Meera Swaminathan",
      city: "Chennai",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "5 days ago",
      tag: "Comfort",
      headline: "Danced for 7 hours at a Sangeet with ZERO ear strain.",
      comment:
        "I usually avoid statement traditional jewelry because heavy earrings give me migraine headaches within two hours. These are featherlight hollowed pieces! The silicone comfort disc at the back distributes the weight evenly. Genuinely impressed by the Karigar craftsmanship.",
      partnerReaction:
        "“No aching earlobes even after dancing non-stop to London Thumakda!”",
      helpfulCount: 29,
    },
    {
      id: "rev-p3",
      name: "Kabir & Tara",
      city: "Delhi NCR",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "1 week ago",
      tag: "Boyfriend Lifesaver",
      headline: "Best gift investment of 2024. 100 boyfriend points scored.",
      comment:
        "Gentlemen, if you messed up or just want to treat your girl like royalty, stop searching and get this. The Gulabi velvet box smells of dried rose petals the moment you unbox it. The plain shipping box saved me from family teasing too.",
      partnerReaction:
        "“She showed it to all her friends in our college group chat immediately.”",
      helpfulCount: 44,
    },
    {
      id: "rev-p4",
      name: "Zoya Khan",
      city: "Hyderabad",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "2 weeks ago",
      tag: "Wedding",
      headline: "Felt like a Bollywood begum in candlelight.",
      comment:
        "The Kundan foil reflection in candlelight looks like authentic polki diamonds. Paired this with a sage green organza saree for my best friend’s Nikah ceremony. Everyone asked which heritage jeweler in Jaipur I got it from!",
      partnerReaction:
        "“Countless compliments from aunties and bridesmaids all evening.”",
      helpfulCount: 21,
    },
    {
      id: "rev-p5",
      name: "Aditya & Simran",
      city: "Pune",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "3 weeks ago",
      tag: "Gifting",
      headline: "Flawless finish and the fastest express delivery.",
      comment:
        "Arrived in Pune in barely 36 hours. The anti-tarnish micro-gold shine is rich and matte, not cheap brassy yellow. The wax seal looks like something from a period drama movie set. Truly bespoke.",
      partnerReaction:
        "“Kept the wax-sealed envelope in her keepsake memory drawer forever.”",
      helpfulCount: 16,
    },
  ]);

  // Form State for Write Review Modal
  const [formName, setFormName] = useState("");
  const [formCity, setFormCity] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formTag, setFormTag] = useState<
    "Gifting" | "Comfort" | "Wedding" | "Boyfriend Lifesaver"
  >("Gifting");
  const [formHeadline, setFormHeadline] = useState("");
  const [formComment, setFormComment] = useState("");
  const [formReaction, setFormReaction] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleHelpfulClick = (id: string) => {
    if (helpfulVotes[id]) return;
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r,
      ),
    );
    setHelpfulVotes((prev) => ({ ...prev, [id]: true }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formComment.trim() || !formHeadline.trim()) return;

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: formName.trim(),
      city: formCity.trim() || "India",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      rating: formRating,
      date: "Just now",
      tag: formTag,
      headline: formHeadline.trim(),
      comment: formComment.trim(),
      partnerReaction: formReaction.trim()
        ? `“${formReaction.trim()}”`
        : undefined,
      helpfulCount: 1,
    };

    setReviews([newReview, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setIsWriteModalOpen(false);
      setFormName("");
      setFormCity("");
      setFormHeadline("");
      setFormComment("");
      setFormReaction("");
    }, 1800);
  };

  const filteredReviews =
    activeFilter === "all"
      ? reviews
      : reviews.filter(
          (r) => r.tag.toLowerCase() === activeFilter.toLowerCase(),
        );

  return (
    <section
      id="reviews-section"
      className="py-16 bg-white border-b border-[#EAE1D7]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EAE1D7]">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF2F4] text-[#7A152E] text-[11px] font-semibold uppercase tracking-widest border border-[#F2D6DC] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#961A38]" />
              <span>Verified Love Stories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1C1412]">
              Loved by Nakhrewalis Across India
            </h2>
            <p className="text-xs sm:text-sm text-[#70605A] mt-1">
              Read real reactions, tearful unboxings, and girlfriend reviews for{" "}
              {product.name}.
            </p>
          </div>

          <button
            onClick={() => setIsWriteModalOpen(true)}
            className="px-5 py-2.5 bg-[#961A38] hover:bg-[#7D152E] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-xs transition-colors self-start md:self-auto flex items-center space-x-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Share Your Love Story</span>
          </button>
        </div>

        {/* Rating Metrics & Breakdown Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#EAE1D7]">
          {/* Overall Rating Score */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-2 lg:border-r lg:border-[#EAE1D7] lg:pr-8">
            <div className="flex items-baseline justify-center lg:justify-start space-x-2">
              <span className="text-5xl font-display font-bold text-[#1C1412]">
                4.9
              </span>
              <span className="text-base text-[#8C7A75] font-semibold">
                / 5.0
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start text-[#C5A880] space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs font-semibold text-[#1C1412]">
              Based on {product.reviewsCount + reviews.length - 5} verified
              customers
            </p>
            <p className="text-[11px] text-emerald-800 font-medium">
              ✦ 98% of recipients recommended this as their favorite romantic
              gift
            </p>
          </div>

          {/* Star Distribution Bars */}
          <div className="lg:col-span-5 space-y-2">
            {[
              { stars: "5 Stars", pct: "94%", count: 133 },
              { stars: "4 Stars", pct: "5%", count: 7 },
              { stars: "3 Stars", pct: "1%", count: 2 },
              { stars: "2 Stars", pct: "0%", count: 0 },
              { stars: "1 Star", pct: "0%", count: 0 },
            ].map((bar, idx) => (
              <div key={idx} className="flex items-center text-xs space-x-3">
                <span className="w-14 text-[#70605A] text-[11px] font-medium">
                  {bar.stars}
                </span>
                <div className="flex-1 h-2 bg-white rounded-full overflow-hidden border border-[#EAE1D7]">
                  <div
                    className="h-full bg-[#C5A880] rounded-full"
                    style={{ width: bar.pct }}
                  />
                </div>
                <span className="w-8 text-right text-[11px] text-[#8C7A75] font-mono">
                  {bar.pct}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Highlight Metrics */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-white rounded-2xl border border-[#EAE1D7]">
              <span className="block text-xl font-bold text-[#961A38]">
                100%
              </span>
              <span className="text-[10px] text-[#6E5D57] uppercase font-semibold">
                Surprise Proof
              </span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-[#EAE1D7]">
              <span className="block text-xl font-bold text-[#961A38]">
                &lt;16g
              </span>
              <span className="text-[10px] text-[#6E5D57] uppercase font-semibold">
                Featherlight
              </span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-[#EAE1D7]">
              <span className="block text-xl font-bold text-[#961A38]">
                22K
              </span>
              <span className="text-[10px] text-[#6E5D57] uppercase font-semibold">
                Anti-Tarnish
              </span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-[#EAE1D7]">
              <span className="block text-xl font-bold text-[#961A38]">
                24h
              </span>
              <span className="text-[10px] text-[#6E5D57] uppercase font-semibold">
                Air Dispatch
              </span>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-semibold text-[#8C7A75] uppercase tracking-wider mr-2 shrink-0 flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {[
            { id: "all", label: `All Stories (${reviews.length})` },
            { id: "gifting", label: "💖 Gifting & Surprises" },
            { id: "comfort", label: "🪶 Featherlight Comfort" },
            { id: "wedding", label: "👑 Sangeet & Weddings" },
            { id: "boyfriend lifesaver", label: "🔥 Boyfriend Lifesaver" },
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => setActiveFilter(chip.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 border ${
                activeFilter === chip.id
                  ? "bg-[#1C1412] text-white border-[#1C1412]"
                  : "bg-[#FAF7F2] text-[#6E5D57] border-[#DFCFC1] hover:border-[#961A38]"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => {
            const hasVoted = helpfulVotes[rev.id];
            return (
              <div
                key={rev.id}
                className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#EAE1D7] flex flex-col justify-between hover:border-[#C5A880] transition-all hover:shadow-xs space-y-4"
              >
                <div>
                  {/* Rating Stars & Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-[#C5A880]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 bg-white text-[#7A152E] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#DFCFC1]">
                      {rev.tag}
                    </span>
                  </div>

                  {/* Headline */}
                  <h4 className="text-sm font-bold text-[#1C1412] leading-snug mb-2">
                    {rev.headline}
                  </h4>

                  {/* Comment */}
                  <p className="text-xs text-[#6E5D57] leading-relaxed">
                    {rev.comment}
                  </p>

                  {/* Partner Reaction Quote (if present) */}
                  {rev.partnerReaction && (
                    <div className="mt-3 p-3 bg-white rounded-xl border border-[#DFCFC1]/70">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#961A38] block mb-0.5">
                        Her Exact Words:
                      </span>
                      <p className="text-xs font-serif-romance italic text-[#7A152E] leading-snug">
                        {rev.partnerReaction}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer: Author & Helpful Counter */}
                <div className="pt-4 border-t border-[#DFCFC1]/60 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full object-cover ring-1 ring-[#C5A880]"
                    />
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs font-bold text-[#1C1412]">
                          {rev.name}
                        </span>
                        <CheckCircle className="w-3 h-3 text-emerald-700" />
                      </div>
                      <span className="text-[10px] text-[#8C7A75]">
                        {rev.city} • {rev.date}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleHelpfulClick(rev.id)}
                    disabled={hasVoted}
                    className={`flex items-center space-x-1 text-[11px] px-2 py-1 rounded-lg transition-colors ${
                      hasVoted
                        ? "text-emerald-800 bg-emerald-50 font-bold"
                        : "text-[#8C7A75] hover:text-[#1C1412] hover:bg-white"
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>{rev.helpfulCount}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal: Write a Review */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#EAE1D7] shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsWriteModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#8C7A75] hover:text-[#1C1412] rounded-full hover:bg-[#FAF7F2] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 space-y-1">
              <span className="text-[11px] font-bold text-[#961A38] uppercase tracking-widest">
                ✦ Your Love Story ✦
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1C1412]">
                Review {product.name}
              </h3>
              <p className="text-xs text-[#70605A]">
                Help other boyfriends, sweethearts, and brides pick their
                perfect Bollywood keepsake.
              </p>
            </div>

            {submittedMessage ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#1C1412]">
                  Thank You For Sharing Your Story!
                </h4>
                <p className="text-xs text-[#6E5D57]">
                  Your review has been published with verified purchase
                  credentials.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Rating Stars Selector */}
                <div>
                  <label className="text-xs font-semibold text-[#1C1412] block mb-1.5">
                    Your Rating:
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormRating(star)}
                        className="p-1 text-[#C5A880] hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= formRating
                              ? "fill-current"
                              : "text-[#DECFC2]"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#1C1412] ml-2">
                      {formRating} Star{formRating > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-[#1C1412] block mb-1">
                      Your Name / Couple Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Aryan & Simran"
                      className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#1C1412] block mb-1">
                      City:
                    </label>
                    <input
                      type="text"
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      placeholder="e.g. Mumbai, Delhi, Jaipur"
                      className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1C1412] block mb-1">
                    Occasion or Tag:
                  </label>
                  <select
                    value={formTag}
                    onChange={(e) => setFormTag(e.target.value as any)}
                    className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                  >
                    <option value="Gifting">💖 Romantic Gifting</option>
                    <option value="Comfort">
                      🪶 Featherlight Weight & Comfort
                    </option>
                    <option value="Wedding">👑 Wedding & Sangeet</option>
                    <option value="Boyfriend Lifesaver">
                      🔥 Boyfriend Lifesaver
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1C1412] block mb-1">
                    Review Headline:
                  </label>
                  <input
                    type="text"
                    required
                    value={formHeadline}
                    onChange={(e) => setFormHeadline(e.target.value)}
                    placeholder="e.g. She cried happy tears when unboxing!"
                    className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1C1412] block mb-1">
                    Detailed Experience:
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formComment}
                    onChange={(e) => setFormComment(e.target.value)}
                    placeholder="Tell us about the craftsmanship, lightweight comfort, or how she reacted to the wax seal..."
                    className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1C1412] block mb-1">
                    Her Exact Reaction / Quote (Optional):
                  </label>
                  <input
                    type="text"
                    value={formReaction}
                    onChange={(e) => setFormReaction(e.target.value)}
                    placeholder="e.g. This is the sweetest gift anyone ever gave me!"
                    className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#961A38] hover:bg-[#7D152E] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-xs"
                  >
                    Publish Verified Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

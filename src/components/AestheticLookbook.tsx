import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

interface LookbookItem {
  id: string;
  tag: string;
  vibe: string;
  image: string;
  heading: string;
  pairingQuote: string;
  featuredProductId: string;
  featuredProductName: string;
  price: number;
}

export const AestheticLookbook: React.FC = () => {
  const looks: LookbookItem[] = [
    {
      id: 'look-1',
      tag: 'Festive & Sangeet',
      vibe: 'Kajra Re Chandbali + Lucknowi Chikankari',
      image: 'https://i.pinimg.com/1200x/69/06/d9/6906d9d10843730960f22245a47b64f5.jpg',
      heading: 'The Sangeet Showstopper',
      pairingQuote: '“Heavy on drama, featherlight on the ears. For the girl who won’t leave the dancefloor until the DJ stops.”',
      featuredProductId: 'jhumka-1',
      featuredProductName: 'Kajra Re Mirror Chandbali',
      price: 1199,
    },
    {
      id: 'look-2',
      tag: 'Bollywood Poo Era',
      vibe: 'Velvet Bangles + Emerald Latkan Kadas',
      image: 'https://i.pinimg.com/1200x/8e/92/9b/8e929bd4037d189c792ad059dd01b878.jpg',
      heading: 'The Modern Begum Stack',
      pairingQuote: '“Soft velvet against the skin with the gentle romantic chime of brass ghungroos.”',
      featuredProductId: 'bangle-2',
      featuredProductName: 'Noor-e-Kashmir Resham Bangles',
      price: 899,
    },
    {
      id: 'look-3',
      tag: 'Pinterest Girl Aesthetic',
      vibe: 'Silk Organza Bow + Minimal Pearl Drops',
      image: 'https://i.pinimg.com/736x/49/0e/6e/490e6ee4b020f17df2722c794465331a.jpg',
      heading: 'Sunday Cafe & Brunch',
      pairingQuote: '“Effortless French-meets-Bollywood chic for linen dresses, cozy sweaters, and soft hair waves.”',
      featuredProductId: 'hair-1',
      featuredProductName: 'Nazakat Silk Organza Bow',
      price: 649,
    },
    {
      id: 'look-4',
      tag: 'Anniversary Gift Trunk',
      vibe: 'The Dil Tu Jaan Tu Keepsake Trunk',
      image: 'https://i.pinimg.com/1200x/ee/14/fc/ee14fc1b2d6ad53b35f3a8cafe3068df.jpg',
      heading: 'The Ultimate Royal Hamper',
      pairingQuote: '“Filled with dried red rose petals, crimson wax seal letter, and her dream jewelry pieces.”',
      featuredProductId: 'gift-1',
      featuredProductName: 'Deewani Mastani Royal Box',
      price: 1899,
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-[#EAE1D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF2F4] text-[#7A152E] text-[11px] font-semibold uppercase tracking-widest border border-[#F2D6DC]">
              <Sparkles className="w-3.5 h-3.5 text-[#961A38]" />
              <span>As Seen On Her Pinterest Boards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1C1412]">
              Style The Bollywood Aesthetic
            </h2>
            <p className="text-xs sm:text-sm text-[#70605A]">
              How our Nakhrewali community pairs each piece with contemporary outfits, college kurtis, and wedding lehengas.
            </p>
          </div>

          <Link
            to="/collection/earrings"
            className="text-xs font-semibold text-[#961A38] hover:underline flex items-center space-x-1 self-start md:self-auto"
          >
            <span>Explore All 4 Signature Collections</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4-Card Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {looks.map((look) => (
            <div
              key={look.id}
              className="group bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#EAE1D7] hover:border-[#C5A880] transition-all duration-300 flex flex-col hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                <img
                  src={look.image}
                  alt={look.heading}
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(e, 'earrings')}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 bg-white/95 backdrop-blur-xs text-[#1C1412] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#DFCFC1]">
                    {look.tag}
                  </span>
                </div>

                {/* Hover CTA */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                  <Link
                    to={`/product/${look.featuredProductId}`}
                    className="px-4 py-2 bg-white text-[#1C1412] text-xs font-bold uppercase tracking-wider rounded-full shadow-md flex items-center space-x-1.5 hover:bg-[#1C1412] hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#961A38]" />
                    <span>Shop This Vibe</span>
                  </Link>
                </div>
              </div>

              {/* Text & Product Link */}
              <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#1C1412] group-hover:text-[#961A38] transition-colors">
                    {look.heading}
                  </h3>
                  <p className="font-serif-romance italic text-xs text-[#7A152E]">
                    {look.vibe}
                  </p>
                  <p className="text-[11px] text-[#6E5D57] leading-relaxed pt-1">
                    {look.pairingQuote}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#EAE1D7] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#8C7A75] block">Featured:</span>
                    <span className="text-xs font-semibold text-[#1C1412]">
                      ₹{look.price.toLocaleString()}
                    </span>
                  </div>

                  <Link
                    to={`/product/${look.featuredProductId}`}
                    className="text-[11px] font-bold text-[#961A38] hover:underline flex items-center gap-1"
                  >
                    <span>View Piece</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

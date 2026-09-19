import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Gift,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  AlertCircle,
} from "lucide-react";
import { PRODUCTS } from "../data/products";
import { useShop } from "../context/ShopContext";

interface GuideScenario {
  id: string;
  tabLabel: string;
  emoji: string;
  occasion: string;
  situation: string;
  heroProduct: (typeof PRODUCTS)[0];
  recommendedDialogue: string;
  greenFlagMove: string;
  avoidThisMistake: string;
  boxColor: string;
}

export const BoyfriendGuide: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart, setIsHamperBuilderOpen, setIsGiftQuizOpen } = useShop();

  const scenarios: GuideScenario[] = [
    {
      id: "birthday",
      tabLabel: "Her Birthday / V-Day",
      emoji: "🎂",
      occasion: "Birthday or Major Milestone",
      situation:
        'She says "I don’t want anything expensive", but she definitely wants to feel like the main character of a Dharma movie.',
      heroProduct: PRODUCTS[0], // Kajra Re Chandbali
      recommendedDialogue:
        "“Main apni favorite hoon... par tum mere sabse favorite ho!”",
      greenFlagMove:
        "Pair the grand Chandbalis with our complimentary Gulabi Velvet box and a handwritten love note. Film her reaction as she cracks the wax seal.",
      avoidThisMistake:
        "Do NOT give her cash or an unbranded courier box. Presentation is 80% of the emotion.",
      boxColor: "from-rose-50 to-pink-50",
    },
    {
      id: "apology",
      tabLabel: "You Messed Up (Apology)",
      emoji: "🥺",
      occasion: "Emergency Romantic Patch-Up",
      situation:
        'You replied late, forgot a small detail, or she is giving you the classic Bollywood "silent treatment".',
      heroProduct: PRODUCTS[1], // Mastani Meenakari Lotus
      recommendedDialogue:
        "“Kismat badi kutti cheez hai... par tum meri sabse pyari kismat ho. Sorry baba!”",
      greenFlagMove:
        "Soft pastel lotus jhumkas that match everything. The wax seal note says you are genuinely sorry before you even speak.",
      avoidThisMistake:
        "Don’t buy cheap generic chocolates. A keepsake piece of jewelry shows lasting effort and remorse.",
      boxColor: "from-amber-50 to-rose-50",
    },
    {
      id: "anniversary",
      tabLabel: "Anniversary / 6-Months",
      emoji: "💍",
      occasion: "Celebrating Your Love Story",
      situation:
        "You want to show her that your love has only grown deeper since day one.",
      heroProduct: PRODUCTS[5], // Noor-e-Kashmir Resham Bangles
      recommendedDialogue:
        "“Aap hume bhool jao hume koi gham nahi... jis din humne aapko bhula diya, samajh lijiyega hum duniya chhod gaye.”",
      greenFlagMove:
        "A velvet bangle stack or custom multi-piece trunk. When she hears the soft chime of the kadas, she’ll think of you all day.",
      avoidThisMistake:
        "Guessing wrong ring sizes. Bangles & earrings have zero sizing risk and fit guaranteed.",
      boxColor: "from-emerald-50 to-teal-50",
    },
    {
      id: "surprise",
      tabLabel: "Just Because / Date Night",
      emoji: "✨",
      occasion: 'Spontaneous "Saw This & Thought of You"',
      situation:
        "No reason at all—just a surprise drop at her door or across the dinner table before a college fest or weekend cafe date.",
      heroProduct: PRODUCTS[8], // Nazakat Organza Bow
      recommendedDialogue:
        "“Tumhare baalon mein ye clip dekh kar, hum shayar ban gaye!”",
      greenFlagMove:
        "A delicate silk hair bow or mirror latkan kada. Effortless under-₹1000 flex that will be on her Instagram stories within 10 minutes.",
      avoidThisMistake:
        "Waiting only for annual birthdays. Unannounced little gifts create 10x more dopamine.",
      boxColor: "from-purple-50 to-pink-50",
    },
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>("birthday");
  const currentScenario =
    scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <section className="py-16 bg-[#FAF7F2] border-t border-[#EAE1D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF2F4] text-[#7A152E] text-[11px] font-semibold uppercase tracking-widest border border-[#F2D6DC]">
            <Sparkles className="w-3.5 h-3.5 text-[#961A38]" />
            <span>The Boyfriend Cheat Sheet</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1C1412]">
            How To Score 1000 Green Flag Points
          </h2>
          <p className="text-xs sm:text-sm text-[#70605A] leading-relaxed">
            Stuck on what she actually wants? We decoded female psychology,
            Bollywood nostalgia, and aesthetic moodboards so you never miss.
          </p>
        </div>

        {/* Occasion Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar">
          {scenarios.map((scenario) => {
            const isSelected = scenario.id === activeScenarioId;
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all flex items-center space-x-2 shrink-0 border cursor-pointer ${
                  isSelected
                    ? "bg-[#1C1412] text-white border-[#1C1412] shadow-sm"
                    : "bg-white text-[#6E5D57] border-[#EAE1D7] hover:border-[#1C1412]"
                }`}
              >
                <span>{scenario.emoji}</span>
                <span>{scenario.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Scenario Card */}
        <div className="bg-white rounded-3xl border border-[#EAE1D7] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: The Strategic Playbook */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-[#961A38] bg-[#FAF2F4] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {currentScenario.occasion}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1C1412] leading-tight">
                  "{currentScenario.situation}"
                </h3>

                {/* Green Flag Move vs Avoid Mistake */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-xs space-y-1">
                    <span className="font-bold text-emerald-900 flex items-center gap-1.5 uppercase tracking-wide text-[10px]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      The Certified Green Flag Move:
                    </span>
                    <p className="text-emerald-800 leading-relaxed pl-5">
                      {currentScenario.greenFlagMove}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 text-xs space-y-1">
                    <span className="font-bold text-rose-900 flex items-center gap-1.5 uppercase tracking-wide text-[10px]">
                      <AlertCircle className="w-4 h-4 text-rose-700 shrink-0" />
                      Common Mistake to Avoid:
                    </span>
                    <p className="text-rose-800 leading-relaxed pl-5">
                      {currentScenario.avoidThisMistake}
                    </p>
                  </div>
                </div>

                {/* Dialogue Preview for the Wax Seal */}
                <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#DFCFC1] space-y-1">
                  <span className="text-[10px] font-bold text-[#8C7A75] uppercase tracking-wider block">
                    Recommended Wax-Sealed Parchment Quote:
                  </span>
                  <p className="font-serif-romance italic text-sm sm:text-base text-[#7A152E]">
                    {currentScenario.recommendedDialogue}
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#EAE1D7]">
                <button
                  onClick={() => setIsHamperBuilderOpen(true)}
                  className="px-4 py-2.5 bg-[#FAF7F2] hover:bg-[#1C1412] text-[#1C1412] hover:text-white border border-[#DFCFC1] rounded-xl text-xs font-semibold transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <Gift className="w-3.5 h-3.5 text-[#961A38]" />
                  <span>Build A Multi-Piece Hamper</span>
                </button>

                <button
                  onClick={() => setIsGiftQuizOpen(true)}
                  className="px-4 py-2.5 bg-transparent hover:bg-[#FAF7F2] text-[#6E5D57] border border-[#DFCFC1] rounded-xl text-xs font-semibold transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#961A38]" />
                  <span>Take 3-Question Vibe Quiz</span>
                </button>
              </div>
            </div>

            {/* Right Column: The Recommended Hero Piece Spotlight */}
            <div className="lg:col-span-5 bg-[#FAF7F2] p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-[#EAE1D7] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A75] block mb-3">
                  ✦ Foolproof Hero Piece ✦
                </span>

                <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-[#EAE1D7] shadow-xs group">
                  <img
                    src={currentScenario.heroProduct.image}
                    alt={currentScenario.heroProduct.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#1C1412]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border border-[#DFCFC1]/30">
                      {currentScenario.heroProduct.badge || "Hero Gift"}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#961A38] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Includes Velvet Trunk & Letter
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#8C7A75]">
                      {currentScenario.heroProduct.categoryLabel}
                    </span>
                    <span className="text-xs font-semibold text-[#961A38] bg-[#FAF2F4] px-2 py-0.5 rounded-full border border-[#F2D6DC]">
                      Curated Pick
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#1C1412] leading-snug">
                    {currentScenario.heroProduct.name}
                  </h4>
                  <div className="flex items-baseline space-x-2 pt-1">
                    <span className="text-base font-bold text-[#1C1412]">
                      ₹{currentScenario.heroProduct.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#A89893] line-through">
                      ₹
                      {currentScenario.heroProduct.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-5 space-y-2">
                <Link
                  to={`/product/${currentScenario.heroProduct.id}`}
                  className="w-full py-3 bg-[#961A38] hover:bg-[#7D152E] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs transition-all flex items-center justify-center space-x-2 text-center"
                >
                  <span>View Full Product Page & Customize</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() =>
                    addToCart(
                      currentScenario.heroProduct,
                      1,
                      currentScenario.recommendedDialogue,
                    )
                  }
                  className="w-full py-2.5 bg-white hover:bg-[#1C1412] text-[#1C1412] hover:text-white border border-[#1C1412] text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  Instant 1-Click Add To Bag
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Boyfriend Rule Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded-2xl border border-[#EAE1D7] flex items-start space-x-3">
            <span className="text-xl">🤫</span>
            <div className="text-xs">
              <h5 className="font-bold text-[#1C1412]">Zero Invoices Inside</h5>
              <p className="text-[#8C7A75] mt-0.5">
                We never display prices or receipts in the gift box.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#EAE1D7] flex items-start space-x-3">
            <span className="text-xl">💌</span>
            <div className="text-xs">
              <h5 className="font-bold text-[#1C1412]">
                Free Wax-Sealed Letter
              </h5>
              <p className="text-[#8C7A75] mt-0.5">
                Hand-poured crimson wax seal on vintage calligraphy parchment.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#EAE1D7] flex items-start space-x-3">
            <span className="text-xl">🔄</span>
            <div className="text-xs">
              <h5 className="font-bold text-[#1C1412]">Free Doorstep Swaps</h5>
              <p className="text-[#8C7A75] mt-0.5">
                If she wants a different color, we exchange it free via
                WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

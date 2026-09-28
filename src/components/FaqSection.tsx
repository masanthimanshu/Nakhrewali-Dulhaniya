import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "gifting" | "sizing" | "shipping" | "quality";
}

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [activeTab, setActiveTab] = useState<
    "all" | "gifting" | "sizing" | "shipping"
  >("all");

  const faqs: FaqItem[] = [
    {
      id: "faq-1",
      category: "sizing",
      question: "What if I don't know her exact earring or bangle size?",
      answer:
        "All earrings and chandbalis feature universal sizing with hypoallergenic silicone comfort stoppers. For bangles, our kadas feature openable hinges to fit any wrist comfortably, and free doorstep exchanges are provided if needed.",
    },
    {
      id: "faq-2",
      category: "gifting",
      question: "Will the recipient see the price tag or invoice inside?",
      answer:
        "No. Every parcel arrives in a discreet, unbranded outer box. Inside is our signature velvet keepsake trunk with dried rose petals and your wax-sealed letter. Invoices and receipts are sent exclusively to your private email.",
    },
    {
      id: "faq-3",
      category: "gifting",
      question: "How does the Wax-Sealed Keepsake Letter work?",
      answer:
        "It is complimentary with every order. You can select from curated romantic notes or write your own custom message. Our atelier prints it on textured deckle-edge parchment and seals it by hand with crimson wax.",
    },
    {
      id: "faq-4",
      category: "shipping",
      question: "How quickly does express delivery arrive?",
      answer:
        "All orders are dispatched within 24 hours via air express. Metro cities receive delivery within 2 business days, and 3–4 days across the rest of India. You can test your pincode on any product page for live estimates.",
    },
    {
      id: "faq-5",
      category: "quality",
      question: "Will the jewelry tarnish or cause skin sensitivity?",
      answer:
        "Every piece is crafted from solid brass with 22K micro gold plating and sealed with a nano-ceramic anti-tarnish barrier. All items are 100% nickel-free, lead-free, and hypoallergenic.",
    },
    {
      id: "faq-6",
      category: "shipping",
      question: "Is Cash on Delivery (COD) available?",
      answer:
        "Yes, Cash on Delivery is available across all serviceable pin codes in India alongside UPI, credit cards, debit cards, and net banking.",
    },
    {
      id: "faq-7",
      category: "gifting",
      question: "What if she wants a different color or style?",
      answer:
        "We offer a 7-day hassle-free doorstep exchange policy. Simply message our concierge on WhatsApp, and we will arrange a reverse pickup and send her preferred piece right away.",
    },
  ];

  const filteredFaqs =
    activeTab === "all" ? faqs : faqs.filter((f) => f.category === activeTab);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white border-t border-[#EAE1D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="text-xs font-semibold text-[#8C2038] uppercase tracking-[0.2em]">
            Help & Guidance
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#140F0D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#4E3F3A] leading-relaxed">
            Essential information regarding sizing, discreet packaging, craft quality, and delivery.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center space-x-2 pb-6 mb-6 border-b border-[#EAE1D7] overflow-x-auto no-scrollbar">
          {(["all", "gifting", "sizing", "shipping"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-[#1C1412] text-white"
                  : "bg-[#FAF7F2] text-[#6E5D57] hover:bg-[#EAE1D7]"
              }`}
            >
              {tab === "all" ? "All Questions" : `${tab} & Delivery`}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#C5A880] bg-[#FAF7F2] shadow-2xs"
                    : "border-[#EAE1D7] bg-white hover:border-[#DFCFC1]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-[#1C1412]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8C7A75] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#961A38]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#6E5D57] leading-relaxed border-t border-[#EAE1D7]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Concierge Callout Box */}
        <div className="mt-10 p-6 bg-[#FAF7F2] rounded-3xl border border-[#DFCFC1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#1C1412]">
              Need help picking something she'll love?
            </h4>
            <p className="text-xs text-[#70605A]">
              Our personal styling concierge helps boyfriends choose the right
              piece in 2 minutes on WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/919820012345?text=Hi%20Nakhrewali%20Dulhaniya%2C%20I%20need%20help%20picking%20a%20gift%20for%20my%20girlfriend"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center space-x-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

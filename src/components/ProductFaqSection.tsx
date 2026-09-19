import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Product } from "../types";

interface ProductFaqSectionProps {
  product: Product;
}

export const ProductFaqSection: React.FC<ProductFaqSectionProps> = ({
  product,
}) => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs = [
    {
      id: "faq-1",
      question: `How light does ${product.name} feel on the ears during long events?`,
      answer:
        "All our statement pieces are engineered with an ultra-light hollowed brass core, keeping the total pair weight under 16 grams. She can dance through an entire 8-hour sangeet or wedding reception without heavy pulling, redness, or sore earlobes. Each pair also includes our broad hypoallergenic silicone comfort backing disc for extra weight distribution.",
    },
    {
      id: "faq-2",
      question:
        "Will the 22K gold polish turn dull, black, or peel with perfume and sweat?",
      answer:
        "Never. We electro-plate each piece with 22K micro gold and cure it with a proprietary nano-ceramic glaze barrier. This locks in the imperial candlelight sheen and shields it against party perfumes, humid wedding heat, and perspiration. It is also 100% lead-free and nickel-free for sensitive skin.",
    },
    {
      id: "faq-3",
      question: "Is the outer courier package 100% surprise-proof for gifting?",
      answer:
        "Absolutely. The external shipping carton is completely plain and unbranded. There are zero brand logos, product descriptions, or pricing labels printed on the outside. Inside is our signature Gulabi Velvet keepsake box with dried rose petals and your wax-sealed envelope. All payment receipts and invoices are sent strictly to your personal email.",
    },
    {
      id: "faq-4",
      question:
        "Can I change my love note text or recipient name after placing the order?",
      answer:
        "Yes! If you want to refine your note or alter the recipient name, simply WhatsApp our concierge (+91 98765 43210) or reply to your order confirmation email within 4 hours of ordering. We will hand-stamp your revised parchment before sealing the crimson wax.",
    },
    {
      id: "faq-5",
      question: "What if she wants a different design or needs an exchange?",
      answer:
        "We offer a seamless 7-day doorstep exchange policy across India! If she prefers another colorway, style, or collection, our courier partner will pick up the parcel directly from her location with zero hassle.",
    },
    {
      id: "faq-6",
      question: "How fast will my order arrive? Can I track the live dispatch?",
      answer:
        "All orders are prioritized and dispatched within 24 hours via Bluedart Air Express. Metro cities (Mumbai, Delhi-NCR, Bangalore, Hyderabad, Chennai, Kolkata, Pune) arrive in 2 business days. You will receive real-time SMS and WhatsApp tracking updates the moment the parcel leaves our Delhi atelier.",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] border-b border-[#EAE1D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF2F4] text-[#7A152E] text-[11px] font-semibold uppercase tracking-widest border border-[#F2D6DC]">
            <HelpCircle className="w-3.5 h-3.5 text-[#961A38]" />
            <span>Answers For Sweethearts & Gifters</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1C1412]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#70605A]">
            Everything you need to know about craftsmanship, discreet surprise
            packaging, and comfort.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#EAE1D7] overflow-hidden transition-all hover:border-[#C5A880]"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1C1412] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#EAE1D7] flex items-center justify-center shrink-0 text-[#961A38] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#FAF2F4]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6E5D57] leading-relaxed border-t border-[#FAF7F2]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need Help WhatsApp Concierge Footer */}
        <div className="p-6 bg-white rounded-3xl border border-[#EAE1D7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF2F4] text-[#961A38] flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1C1412]">
                Have a quick question or custom request?
              </h4>
              <p className="text-xs text-[#8C7A75]">
                Our Mumbai atelier concierge is available on WhatsApp 7 days a
                week.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210?text=Hi%20Nakhrewali%20team,%20I%20have%20a%20question%20about%20gifting!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#1C1412] hover:bg-[#332420] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shrink-0"
          >
            Chat with Concierge
          </a>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'gifting' | 'sizing' | 'shipping' | 'quality';
}

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeTab, setActiveTab] = useState<'all' | 'gifting' | 'sizing' | 'shipping'>('all');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'sizing',
      question: 'Bro, I don’t know her earring or bangle size. What should I buy?',
      answer:
        'Zero stress! All our earrings and chandbalis (Haye Jhumka) are universal one-size-fits-all with hypoallergenic silicone comfort stoppers. For bangles (Bole Chudiyan), our royal kadas feature openable screw or spring hinges that fit any wrist smoothly, and velvet stacks come in standard free-exchange 2.4/2.6 sizes. If anything needs adjusting, we swap it at her doorstep for free!',
    },
    {
      id: 'faq-2',
      category: 'gifting',
      question: 'Will she see the price tag or billing invoice in the box?',
      answer:
        'Never! Every order arrives in an unbranded, tamper-proof courier parcel on the outside. Inside, you’ll find our pristine Gulabi Velvet keepsake box with dried rose petals and your wax-sealed letter. All invoices and billing receipts are strictly sent to your private email only.',
    },
    {
      id: 'faq-3',
      category: 'gifting',
      question: 'How does the Wax-Sealed Bollywood Love Letter work?',
      answer:
        'It is 100% complimentary with every order! You can pick from iconic Bollywood dialogues (DDLJ, K3G, Jab We Met, Om Shanti Om) or type your personal message on the product or checkout page. Our atelier prints it on vintage deckle-edge parchment paper, folds it, and seals it with genuine hand-poured crimson red wax.',
    },
    {
      id: 'faq-4',
      category: 'shipping',
      question: 'How fast will my order arrive? Can I get it for an upcoming date or birthday?',
      answer:
        'We dispatch all parcels within 24 hours via Bluedart Air Express. Metro cities (Mumbai, Delhi-NCR, Bangalore, Pune, Hyderabad, Chennai, Kolkata) arrive within 2 business days. Rest of India arrives in 3-4 days. You can test your exact 6-digit pincode directly on any product page for live delivery dates!',
    },
    {
      id: 'faq-5',
      category: 'quality',
      question: 'Will the jewelry turn black, tarnish, or cause skin allergies?',
      answer:
        'Not at all. Every piece is handcrafted with a solid brass core, layered with 22K micro gold polish, and sealed with our proprietary nano-ceramic anti-tarnish glaze. They are 100% lead-free, nickel-free, and hypoallergenic for sensitive skin.',
    },
    {
      id: 'faq-6',
      category: 'shipping',
      question: 'Is Cash on Delivery (COD) available?',
      answer:
        'Yes! We accept UPI (Google Pay, PhonePe, Paytm), Debit/Credit cards, Net Banking, and Cash on Delivery across 19,000+ Indian pincodes. For COD orders, a quick 1-click WhatsApp confirmation is triggered before dispatch.',
    },
    {
      id: 'faq-7',
      category: 'gifting',
      question: 'What if she wants a different color or doesn’t like the design?',
      answer:
        'We offer a 7-day hassle-free doorstep exchange policy. Simply message our concierge on WhatsApp (+91 98200 12345), and we will arrange a reverse pickup and send her preferred piece right away.',
    },
  ];

  const filteredFaqs =
    activeTab === 'all' ? faqs : faqs.filter((f) => f.category === activeTab);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white border-t border-[#EAE1D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF2F4] text-[#7A152E] text-[11px] font-semibold uppercase tracking-widest border border-[#F2D6DC]">
            <HelpCircle className="w-3.5 h-3.5 text-[#961A38]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1C1412]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#70605A]">
            Everything you need to know about gifting, sizing, discreet packaging, and express delivery.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center space-x-2 pb-6 mb-6 border-b border-[#EAE1D7] overflow-x-auto no-scrollbar">
          {(['all', 'gifting', 'sizing', 'shipping'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#1C1412] text-white'
                  : 'bg-[#FAF7F2] text-[#6E5D57] hover:bg-[#EAE1D7]'
              }`}
            >
              {tab === 'all' ? 'All Questions' : `${tab} & Delivery`}
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
                    ? 'border-[#C5A880] bg-[#FAF7F2] shadow-2xs'
                    : 'border-[#EAE1D7] bg-white hover:border-[#DFCFC1]'
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
                      isOpen ? 'rotate-180 text-[#961A38]' : ''
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
              Our personal styling concierge helps boyfriends choose the right piece in 2 minutes on WhatsApp.
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

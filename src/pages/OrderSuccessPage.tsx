import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Gift, Truck, Calendar, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const OrderSuccessPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { lastOrder } = useShop();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const displayId = orderId || lastOrder?.orderId || 'ND-894210';
  const customer = lastOrder?.customerName || 'Romantic Soul';
  const recipient = lastOrder?.recipientName || 'My Nakhrewali Bae';
  const items = lastOrder?.items || [];
  const total = lastOrder?.total || 1199;

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Celebration Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE1D7] text-center shadow-sm space-y-4">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-xs border border-emerald-100">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="inline-block px-3 py-1 bg-[#FAF2F4] text-[#961A38] text-[11px] font-bold tracking-widest uppercase rounded-full">
            Order Confirmed
          </span>

          <h1 className="text-2xl sm:text-3xl font-display font-bold text-[#1C1412]">
            Aapka Bollywood Gift Box Is Getting Sealed! 🎉
          </h1>

          <p className="text-xs sm:text-sm text-[#6E5D57] max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{customer}</strong>! Your order for <strong>{recipient}</strong> has reached our master jewelers and calligraphy desk.
          </p>

          <div className="p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#DFCFC1] inline-flex items-center space-x-3 text-xs">
            <span className="text-[#8C7A75]">Order Reference:</span>
            <span className="font-mono font-bold text-[#1C1412] text-sm">#{displayId}</span>
          </div>
        </div>

        {/* Live Atelier Timeline Tracker */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE1D7] shadow-xs space-y-5">
          <h3 className="text-sm font-bold text-[#1C1412] uppercase tracking-wider flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#961A38]" />
            <span>Live Atelier Gifting Timeline</span>
          </h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#1C1412] block">Order Verified</span>
                <span className="text-[#8C7A75]">Payment confirmed & receipt sent to email.</span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-[#1C1412] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 animate-pulse">
                2
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#1C1412] block">Hand-Crafted Wax Sealing & Scenting</span>
                <span className="text-[#8C7A75]">Parchment love letter is being printed and sealed with crimson wax.</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 opacity-60">
              <div className="w-6 h-6 rounded-full bg-[#DFCFC1] text-[#70605A] flex items-center justify-center text-xs shrink-0 mt-0.5">
                3
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#1C1412] block">Gulabi Velvet Boxing</span>
                <span className="text-[#8C7A75]">Cushioned in dried rose petals & satin ribbons.</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 opacity-60">
              <div className="w-6 h-6 rounded-full bg-[#DFCFC1] text-[#70605A] flex items-center justify-center text-xs shrink-0 mt-0.5">
                4
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#1C1412] block">Air Express Dispatch</span>
                <span className="text-[#8C7A75]">Bluedart Express tracking link will be sent to your WhatsApp.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#EAE1D7] flex items-center justify-between text-xs text-[#70605A]">
            <span className="flex items-center gap-1.5 font-semibold text-[#1C1412]">
              <Calendar className="w-4 h-4 text-[#961A38]" />
              Estimated Arrival:
            </span>
            <span className="font-bold text-emerald-800">
              Within 2-3 Business Days
            </span>
          </div>
        </div>

        {/* Order Details Preview */}
        {items.length > 0 && (
          <div className="bg-white rounded-3xl p-6 border border-[#EAE1D7] shadow-xs space-y-3">
            <h4 className="text-xs font-bold text-[#1C1412] uppercase tracking-wider">
              Enclosed Treasures ({items.length})
            </h4>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-xs py-1.5 border-b border-[#F5ECE4] last:border-0">
                  <div className="flex items-center space-x-2">
                    <img
                      src={item.product.image}
                      alt=""
                      className="w-10 h-10 rounded-lg object-cover border border-[#EAE1D7]"
                    />
                    <div>
                      <span className="font-semibold text-[#1C1412] block">
                        {item.product.name}
                      </span>
                      <span className="text-[10px] text-[#8C7A75]">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-[#1C1412]">
                    ₹{(item.product.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-2 flex justify-between text-sm font-bold text-[#1C1412]">
              <span>Total Paid</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="text-center pt-2">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#1C1412] hover:bg-[#332420] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm transition-all"
          >
            <span>Return to Atelier Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

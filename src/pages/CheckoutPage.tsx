import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  Gift,
  CheckCircle,
  Truck,
  ArrowLeft,
  Tag,
  CreditCard,
  QrCode,
  Banknote,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { OrderDetails } from '../types';
import { handleImageError } from '../utils/imageFallback';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateCartQuantity, clearCart, setLastOrder } = useShop();

  // Customer & Shipping State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    pincode: '',
    recipientName: '',
    specialInstructions: '',
  });

  // Payment Selection: 'upi' | 'card' | 'cod'
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [couponCode, setCouponCode] = useState('NAKHRA15');
  const [isCouponApplied, setIsCouponApplied] = useState(true);
  const [couponError, setCouponError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discount = isCouponApplied ? Math.round(subtotal * 0.15) : 0;
  const shipping = subtotal > 800 ? 0 : 99;
  const total = subtotal - discount + shipping;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'NAKHRA15' || couponCode.toUpperCase() === 'BAE15') {
      setIsCouponApplied(true);
      setCouponError('');
    } else {
      setIsCouponApplied(false);
      setCouponError('Invalid coupon code. Try NAKHRA15 for 15% off.');
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      alert('Please fill in your name, contact phone number, address, and pincode.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedOrderId = `ND-${Math.floor(100000 + Math.random() * 900000)}`;
      const order: OrderDetails = {
        orderId: generatedOrderId,
        customerName: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city || 'Mumbai',
        pincode: formData.pincode,
        items: [...cart],
        subtotal,
        discount,
        shipping,
        total,
        paymentMethod:
          paymentMethod === 'upi'
            ? 'UPI (Instant / QR)'
            : paymentMethod === 'card'
            ? 'Credit/Debit Card'
            : 'Cash on Delivery (Verified)',
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        loveLetter: cart[0]?.giftNote || 'Forever & always my favorite.',
        recipientName: formData.recipientName || 'My Nakhrewali Bae',
      };

      setLastOrder(order);
      clearCart();
      setIsSubmitting(false);
      navigate(`/order-success/${generatedOrderId}`);
    }, 900);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] py-20 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-[#EAE1D7] text-center space-y-4">
          <div className="w-16 h-16 bg-[#FAF2F4] text-[#961A38] rounded-full flex items-center justify-center mx-auto text-2xl">
            💌
          </div>
          <h2 className="text-2xl font-display font-bold text-[#1C1412]">
            Your Trunk is Empty
          </h2>
          <p className="text-xs text-[#8C7A75]">
            Pick a romantic piece from our 4 signature ranges to begin.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-[#1C1412] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#332420] transition-colors"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link & Brand Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EAE1D7]">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xs font-semibold text-[#8C7A75] hover:text-[#961A38] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>

          <div className="flex items-center space-x-2 text-xs text-emerald-800 font-semibold bg-emerald-50 px-3 py-1 rounded-full">
            <Lock className="w-3.5 h-3.5" />
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Form & Payment Selection */}
          <div className="lg:col-span-7 space-y-6">
            <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Section 1: Customer Contact */}
              <div className="bg-white p-6 rounded-3xl border border-[#EAE1D7] shadow-xs space-y-4">
                <div className="flex items-center space-x-2 text-sm font-bold text-[#1C1412]">
                  <span className="w-6 h-6 rounded-full bg-[#1C1412] text-white flex items-center justify-center text-xs">
                    1
                  </span>
                  <span>Contact & Delivery Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#70605A] block mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2.5 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#70605A] block mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2.5 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#70605A] block mb-1">
                    Email Address (For Dispatch Tracking)
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2.5 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#70605A] block mb-1">
                    Complete Street Address (Flat / House No., Apartment, Street) *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. 402, Lotus Residency, Linking Road"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2.5 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#70605A] block mb-1">
                      City *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Mumbai"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2.5 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#70605A] block mb-1">
                      State *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Maharashtra"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2.5 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#70605A] block mb-1">
                      6-Digit PIN *
                    </label>
                    <input
                      required
                      maxLength={6}
                      type="text"
                      placeholder="e.g. 400050"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })}
                      className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2.5 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Gifting & Wax-Sealed Parchment Confirmation */}
              <div className="bg-white p-6 rounded-3xl border border-[#EAE1D7] shadow-xs space-y-3">
                <div className="flex items-center space-x-2 text-sm font-bold text-[#1C1412]">
                  <span className="w-6 h-6 rounded-full bg-[#1C1412] text-white flex items-center justify-center text-xs">
                    2
                  </span>
                  <span>Complimentary Gifting Details</span>
                </div>

                <div className="p-3.5 bg-[#FAF2F4] rounded-2xl border border-[#F2D6DC] flex items-start space-x-3">
                  <Gift className="w-5 h-5 text-[#961A38] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-[#1C1412] block">
                      Signature Gulabi Velvet Presentation Box Included
                    </span>
                    <p className="text-[#7A152E] mt-0.5">
                      Hand-sealed with crimson wax and fragrant dried rose petals. No billing prices on box.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#70605A] block mb-1">
                    Bae / Recipient Name on Envelope:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. To My Dearest Simran"
                    value={formData.recipientName}
                    onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                    className="w-full text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2.5 text-[#1C1412] focus:outline-none focus:border-[#961A38]"
                  />
                </div>
              </div>

              {/* Section 3: Payment Options */}
              <div className="bg-white p-6 rounded-3xl border border-[#EAE1D7] shadow-xs space-y-4">
                <div className="flex items-center space-x-2 text-sm font-bold text-[#1C1412]">
                  <span className="w-6 h-6 rounded-full bg-[#1C1412] text-white flex items-center justify-center text-xs">
                    3
                  </span>
                  <span>Select Payment Method</span>
                </div>

                <div className="space-y-2.5">
                  {/* UPI */}
                  <label
                    onClick={() => setPaymentMethod('upi')}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-[#961A38] bg-[#FAF2F4]'
                        : 'border-[#DFCFC1] bg-white hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="text-[#961A38] focus:ring-[#961A38]"
                      />
                      <QrCode className="w-5 h-5 text-[#961A38]" />
                      <div>
                        <span className="text-xs font-bold text-[#1C1412] block">
                          Instant UPI / QR Code (GPay, PhonePe, Paytm)
                        </span>
                        <span className="text-[10px] text-[#70605A]">
                          Zero transaction fee • Instant dispatch confirmation
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">
                      Fastest
                    </span>
                  </label>

                  {/* Cards */}
                  <label
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#961A38] bg-[#FAF2F4]'
                        : 'border-[#DFCFC1] bg-white hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="text-[#961A38] focus:ring-[#961A38]"
                      />
                      <CreditCard className="w-5 h-5 text-[#6E5D57]" />
                      <div>
                        <span className="text-xs font-bold text-[#1C1412] block">
                          Credit / Debit Card / Net Banking
                        </span>
                        <span className="text-[10px] text-[#70605A]">
                          Visa, Mastercard, RuPay, Amex accepted
                        </span>
                      </div>
                    </div>
                  </label>

                  {/* COD */}
                  <label
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#961A38] bg-[#FAF2F4]'
                        : 'border-[#DFCFC1] bg-white hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="text-[#961A38] focus:ring-[#961A38]"
                      />
                      <Banknote className="w-5 h-5 text-[#6E5D57]" />
                      <div>
                        <span className="text-xs font-bold text-[#1C1412] block">
                          Cash on Delivery (Pay at Doorstep)
                        </span>
                        <span className="text-[10px] text-[#70605A]">
                          OTP verification via SMS before dispatch
                        </span>
                      </div>
                    </div>
                  </label>
                </div>

                {paymentMethod === 'upi' && (
                  <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#DFCFC1] text-xs text-[#70605A] space-y-1">
                    <p className="font-semibold text-[#1C1412]">
                      📱 After clicking "Place Order", a dynamic UPI QR code and Google Pay/PhonePe one-click intent will open instantly.
                    </p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                id="place-order-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#961A38] hover:bg-[#7A152E] text-white font-semibold text-sm tracking-wider uppercase rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2 active:scale-98 cursor-pointer disabled:opacity-50"
              >
                <Lock className="w-4 h-4" />
                <span>
                  {isSubmitting
                    ? 'Sealing Order in Atelier...'
                    : `Place Order • ₹${total.toLocaleString()}`}
                </span>
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary & Coupon */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#EAE1D7] shadow-xs space-y-4">
              <h3 className="text-base font-bold text-[#1C1412] pb-3 border-b border-[#EAE1D7]">
                Your Order Summary ({cart.length} {cart.length === 1 ? 'Piece' : 'Pieces'})
              </h3>

              {/* Items List */}
              <div className="divide-y divide-[#EAE1D7] max-h-80 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.id} className="py-3 flex items-center space-x-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, item.product.category)}
                      className="w-14 h-16 object-cover rounded-xl border border-[#EAE1D7] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-[#1C1412] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[10px] text-[#8C7A75]">
                        Qty: {item.quantity} • {item.product.categoryLabel}
                      </p>
                      <p className="text-[10px] font-serif-romance italic text-[#961A38] truncate">
                        "{item.giftNote}"
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-[#1C1412] block">
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] text-[#A89893] hover:text-red-700 mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Code Bar */}
              <form onSubmit={handleApplyCoupon} className="pt-2">
                <div className="flex items-center space-x-2">
                  <Tag className="w-4 h-4 text-[#8C7A75] shrink-0" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="Coupon Code"
                    className="flex-1 text-xs bg-[#FAF7F2] border border-[#DFCFC1] rounded-xl px-3 py-2 text-[#1C1412] uppercase focus:outline-none focus:border-[#961A38]"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#1C1412] text-white text-xs font-semibold rounded-xl hover:bg-[#332420]"
                  >
                    Apply
                  </button>
                </div>
                {isCouponApplied && (
                  <p className="text-[10px] font-semibold text-emerald-800 mt-1.5 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Coupon NAKHRA15 applied: 15% Bollywood Lover discount!</span>
                  </p>
                )}
                {couponError && (
                  <p className="text-[10px] text-red-600 mt-1">{couponError}</p>
                )}
              </form>

              {/* Cost Breakdown */}
              <div className="space-y-2 pt-3 border-t border-[#EAE1D7] text-xs text-[#6E5D57]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1C1412]">
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-800">
                    <span>Coupon Discount (15%)</span>
                    <span className="font-semibold">-₹{discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Luxury Velvet Trunk & Parchment Seal</span>
                  <span className="font-semibold text-emerald-800">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Express Shipping</span>
                  <span className="font-semibold text-emerald-800">
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>

                <div className="flex justify-between pt-3 border-t border-[#EAE1D7] text-base font-bold text-[#1C1412]">
                  <span>Total Amount</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 text-[11px] text-[#8C7A75] space-y-1.5">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>22K Anti-Tarnish Lifetime Polish Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Dispatched via Bluedart Air Courier in 24 Hours</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

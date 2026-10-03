import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  Truck,
  ShieldCheck,
  CreditCard,
  Wallet,
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  MapPin,
  Lock,
  Download,
  Share2
} from 'lucide-react';
import { PAKISTAN_CITIES } from '../data/products';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    discountAmount,
    shippingFee,
    cartGrandTotal,
    formatPrice,
    clearCart,
    user,
    setUser,
    showToast,
    setIsTrackerOpen
  } = useShop();

  const [fullName, setFullName] = useState(user.name || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [address, setAddress] = useState(user.address || '');
  const [city, setCity] = useState(user.city || 'Peshawar');
  const [orderNotes, setOrderNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod', 'jazzcash', 'bank'

  const [orderSuccess, setOrderSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim() || !address.trim()) {
      showToast('Please fill all required delivery details', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const orderId = `NX-${Math.floor(10000 + Math.random() * 90000)}`;
      const newOrder = {
        id: orderId,
        date: new Date().toISOString().split('T')[0],
        items: cart.map(item => `${item.name} (${item.selectedColor}) x${item.quantity}`),
        total: cartGrandTotal,
        customer: fullName,
        phone,
        address: `${address}, ${city}`,
        paymentMethod: paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : paymentMethod === 'jazzcash' ? 'JazzCash / EasyPaisa' : 'Direct Bank Transfer',
        status: 'Order Placed (Pending Verification)'
      };

      // Add to user orders
      setUser(prev => ({
        ...prev,
        pastOrders: [newOrder, ...prev.pastOrders]
      }));

      setOrderSuccess(newOrder);
      clearCart();
      setIsSubmitting(false);
      showToast('🎉 Order placed successfully!', 'success');
    }, 1200);
  };

  const handleClose = () => {
    setOrderSuccess(null);
    setIsCheckoutOpen(false);
  };

  // WhatsApp confirmation text
  const whatsappShareUrl = orderSuccess ? `https://wa.me/923082200040?text=${encodeURIComponent(
    `Hello NexaGadgets PK! I just placed Order #${orderSuccess.id} for ${formatPrice(orderSuccess.total)} via ${orderSuccess.paymentMethod}. Please verify and dispatch to ${orderSuccess.customer} in ${city}.`
  )}` : '#';

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '840px',
          maxHeight: '92vh',
          borderRadius: '24px',
          overflowY: 'auto',
          background: '#0d1322',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
          position: 'relative',
          padding: '30px'
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#cbd5e1',
            zIndex: 10
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {!orderSuccess ? (
          /* Checkout Form */
          <div>
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#06b6d4',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '4px'
              }}>
                <Lock size={13} />
                <span>SSL Encrypted Checkout</span>
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>
                Complete Your Order
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Pay with Cash on Delivery at your doorstep in {city} or nationwide.
              </p>
            </div>

            <form onSubmit={handlePlaceOrder}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '28px'
              }}>
                {/* Left Column: Delivery Details */}
                <div>
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <MapPin size={18} color="#06b6d4" />
                    <span>Shipping Information</span>
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Muhammad Hamza"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                        WhatsApp / Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0300-1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-input"
                      />
                      <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '4px' }}>
                        We will send order confirmation & courier tracking link to this number.
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                        Destination City *
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="form-select"
                      >
                        {PAKISTAN_CITIES.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                        Complete Street Address *
                      </label>
                      <textarea
                        required
                        rows="3"
                        placeholder="House / Apartment #, Street #, Sector / Mohallah / Area"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-input"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                        Delivery Instructions (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Call before delivery, leave with guard"
                        value={orderNotes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Payment & Order Review */}
                <div>
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <Wallet size={18} color="#10b981" />
                    <span>Payment Method</span>
                  </h3>

                  {/* Payment Options Radio Cards */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    {/* COD Option */}
                    <label
                      onClick={() => setPaymentMethod('cod')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        background: paymentMethod === 'cod' ? 'rgba(6, 182, 212, 0.12)' : '#131b2e',
                        border: paymentMethod === 'cod' ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: paymentMethod === 'cod' ? '5px solid #06b6d4' : '2px solid #64748b'
                        }} />
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>
                            Cash on Delivery (COD)
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                            Pay with cash when courier delivers parcel
                          </div>
                        </div>
                      </div>
                      <span style={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: '#10b981',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}>
                        POPULAR
                      </span>
                    </label>

                    {/* JazzCash / EasyPaisa Option */}
                    <label
                      onClick={() => setPaymentMethod('jazzcash')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        background: paymentMethod === 'jazzcash' ? 'rgba(6, 182, 212, 0.12)' : '#131b2e',
                        border: paymentMethod === 'jazzcash' ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: paymentMethod === 'jazzcash' ? '5px solid #06b6d4' : '2px solid #64748b'
                        }} />
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>
                            JazzCash / EasyPaisa
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                            Direct wallet transfer with transaction ID
                          </div>
                        </div>
                      </div>
                      <Wallet size={18} color="#f59e0b" />
                    </label>

                    {/* Bank Transfer */}
                    <label
                      onClick={() => setPaymentMethod('bank')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        background: paymentMethod === 'bank' ? 'rgba(6, 182, 212, 0.12)' : '#131b2e',
                        border: paymentMethod === 'bank' ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: paymentMethod === 'bank' ? '5px solid #06b6d4' : '2px solid #64748b'
                        }} />
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>
                            Online Bank Transfer / Raast
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                            Meezan / HBL / Bank Alfalah accounts
                          </div>
                        </div>
                      </div>
                      <CreditCard size={18} color="#8b5cf6" />
                    </label>
                  </div>

                  {/* Order Review Box */}
                  <div style={{
                    background: 'rgba(19, 27, 46, 0.7)',
                    borderRadius: '14px',
                    padding: '18px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                      Order Summary ({cart.length} unique items)
                    </div>

                    <div style={{ maxHeight: '140px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                      {cart.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#cbd5e1' }}>
                          <span className="line-clamp-1" style={{ maxWidth: '220px' }}>
                            {item.name} ({item.selectedColor}) x{item.quantity}
                          </span>
                          <span style={{ fontWeight: 600, color: '#fff' }}>
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                        <span>Subtotal:</span>
                        <span style={{ color: '#fff' }}>{formatPrice(cartSubtotal)}</span>
                      </div>

                      {discountAmount > 0 && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981' }}>
                          <span>Discount Applied:</span>
                          <span>-{formatPrice(discountAmount)}</span>
                        </div>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                        <span>Delivery Charges:</span>
                        <span>{shippingFee === 0 ? <strong style={{ color: '#10b981' }}>FREE</strong> : formatPrice(shippingFee)}</span>
                      </div>

                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: '#fff',
                        marginTop: '6px',
                        paddingTop: '6px',
                        borderTop: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        <span>Payable Amount:</span>
                        <span style={{ color: '#06b6d4', fontFamily: 'var(--font-heading)' }}>
                          {formatPrice(cartGrandTotal)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || cart.length === 0}
                    className="btn btn-emerald"
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '1.05rem',
                      justifyContent: 'center',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    {isSubmitting ? (
                      <span>Verifying & Generating Order...</span>
                    ) : (
                      <>
                        <ShieldCheck size={20} />
                        <span>Place Order (Cash On Delivery)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Order Confirmation View */
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981',
              margin: '0 auto 20px auto',
              boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
            }}>
              <CheckCircle2 size={44} />
            </div>

            <div style={{
              fontSize: '0.85rem',
              color: '#10b981',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '6px'
            }}>
              Order Placed Successfully!
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              Thank You, {orderSuccess.customer}!
            </h2>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 24px auto' }}>
              Your order has been recorded. Our team will verify your address via WhatsApp/Call before dispatching the sealed parcel via courier.
            </p>

            {/* Order Details Card */}
            <div style={{
              maxWidth: '520px',
              margin: '0 auto 28px auto',
              background: 'rgba(19, 27, 46, 0.8)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '20px',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Tracking Order ID:</span>
                <strong style={{ color: '#06b6d4', fontSize: '1rem', fontFamily: 'monospace' }}>
                  #{orderSuccess.id}
                </strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '0.85rem' }}>
                <span style={{ color: '#94a3b8' }}>Payment Method:</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>{orderSuccess.paymentMethod}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '0.85rem' }}>
                <span style={{ color: '#94a3b8' }}>Total Payable:</span>
                <strong style={{ color: '#10b981', fontSize: '1.05rem' }}>
                  {formatPrice(orderSuccess.total)}
                </strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', fontSize: '0.85rem' }}>
                <span style={{ color: '#94a3b8' }}>Shipping To:</span>
                <span style={{ color: '#cbd5e1', textAlign: 'right', maxWidth: '240px' }}>
                  {orderSuccess.address}
                </span>
              </div>
            </div>

            {/* Actions: Share to WhatsApp & Track */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '12px 20px', textDecoration: 'none' }}
              >
                <Share2 size={16} />
                <span>Confirm Order on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  handleClose();
                  setIsTrackerOpen(true);
                }}
                className="btn btn-primary"
                style={{ padding: '12px 20px' }}
              >
                <Clock size={16} />
                <span>Track Order Live</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

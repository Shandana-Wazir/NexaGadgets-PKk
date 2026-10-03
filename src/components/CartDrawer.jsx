import React, { useState } from 'react';
import { useShop, FREE_SHIPPING_THRESHOLD } from '../context/ShopContext';
import {
  X,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Truck,
  Tag,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartItemCount,
    discountAmount,
    shippingFee,
    cartGrandTotal,
    freeShippingProgress,
    amountNeededForFreeShipping,
    formatPrice,
    promoCode,
    setPromoCode,
    appliedDiscount,
    promoMessage,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen
  } = useShop();

  const [inputCoupon, setInputCoupon] = useState('');

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <div
        className="drawer-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        {/* Drawer Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#0d1322'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(6, 182, 212, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#06b6d4'
            }}>
              <ShoppingCart size={18} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>Your Shopping Cart</h2>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#cbd5e1'
            }}
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div style={{
          padding: '12px 24px',
          background: 'rgba(6, 182, 212, 0.08)',
          borderBottom: '1px solid rgba(6, 182, 212, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Truck size={15} color="#06b6d4" />
              {amountNeededForFreeShipping > 0 ? (
                <>Add <strong style={{ color: '#06b6d4' }}>{formatPrice(amountNeededForFreeShipping)}</strong> more for <strong>FREE Delivery!</strong></>
              ) : (
                <span style={{ color: '#10b981', fontWeight: 700 }}>🎉 You qualified for FREE Delivery nationwide!</span>
              )}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{freeShippingProgress}%</span>
          </div>

          <div style={{
            width: '100%',
            height: '6px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${freeShippingProgress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #06b6d4, #10b981)',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={`${item.id}-${item.selectedColor}-${index}`}
                style={{
                  display: 'flex',
                  gap: '14px',
                  padding: '14px',
                  background: 'rgba(19, 27, 46, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '74px',
                    height: '74px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />

                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#f8fafc',
                      lineHeight: 1.3
                    }} className="line-clamp-2">
                      {item.name}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id, item.selectedColor)}
                      style={{ color: '#64748b', padding: '2px', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div style={{ fontSize: '0.75rem', color: '#06b6d4', marginTop: '3px' }}>
                    Color: {item.selectedColor}
                  </div>

                  <div style={{
                    marginTop: 'auto',
                    paddingTop: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    {/* Stepper */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#090d18',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                        style={{ padding: '4px 8px', color: '#94a3b8' }}
                        aria-label="Decrease"
                      >
                        <Minus size={13} />
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, padding: '0 8px', color: '#fff' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                        style={{ padding: '4px 8px', color: '#94a3b8' }}
                        aria-label="Increase"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    {/* Price */}
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>
                        {formatPrice(item.price * item.quantity)}
                      </div>
                      {item.quantity > 1 && (
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                          {formatPrice(item.price)} each
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              margin: 'auto 0'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                margin: '0 auto 16px auto'
              }}>
                <ShoppingCart size={28} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '8px' }}>Your cart is empty</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '20px' }}>
                Looks like you haven't added any smart gadgets yet.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-primary btn-sm"
              >
                Browse Gadgets Now
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer with Totals and Checkout */}
        {cart.length > 0 && (
          <div style={{
            padding: '20px 24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: '#090d18'
          }}>
            {/* Promo Code Input */}
            <div style={{ marginBottom: '16px' }}>
              {appliedDiscount > 0 ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '0.825rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: 600 }}>
                    <Tag size={14} />
                    <span>Coupon Applied: {appliedDiscount}% OFF</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 600 }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    placeholder="Voucher code (try 'NEXA10')"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    style={{
                      flex: 1,
                      background: '#131b2e',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      fontSize: '0.85rem',
                      color: '#fff',
                      outline: 'none'
                    }}
                  />
                  <button
                    onClick={() => {
                      if (inputCoupon.trim()) {
                        applyCoupon(inputCoupon);
                        setInputCoupon('');
                      }
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                <span>Subtotal:</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>{formatPrice(cartSubtotal)}</span>
              </div>

              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981' }}>
                  <span>Voucher Discount ({appliedDiscount}%):</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                <span>Shipping Fee:</span>
                <span>
                  {shippingFee === 0 ? (
                    <strong style={{ color: '#10b981' }}>FREE</strong>
                  ) : (
                    formatPrice(shippingFee)
                  )}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '8px',
                marginTop: '4px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#fff'
              }}>
                <span>Total Amount:</span>
                <span style={{ color: '#06b6d4', fontFamily: 'var(--font-heading)' }}>
                  {formatPrice(cartGrandTotal)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckoutClick}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '1rem',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(6, 182, 212, 0.4)'
              }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>

            <div style={{
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '0.75rem',
              color: '#64748b'
            }}>
              🔒 100% Safe Cash on Delivery (COD) across Pakistan
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

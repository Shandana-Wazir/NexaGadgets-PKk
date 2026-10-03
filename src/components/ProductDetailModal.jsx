import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  Heart,
  ShoppingCart,
  Phone,
  Plus,
  Minus,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';

export default function ProductDetailModal() {
  const {
    activeProductModal,
    setActiveProductModal,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPrice,
    setIsCheckoutOpen
  } = useShop();

  if (!activeProductModal) return null;

  const product = activeProductModal;
  const wishlisted = isInWishlist(product.id);

  const [selectedImage, setSelectedImage] = useState(product.gallery ? product.gallery[0] : product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('features'); // 'features', 'specs', 'box', 'warranty'

  // Pre-filled WhatsApp message for this specific product + variant
  const whatsappUrl = `https://wa.me/923082200040?text=${encodeURIComponent(
    `Hello NexaGadgets PK! I want to order "${product.name}" in ${selectedColor} (Qty: ${quantity}) for ${formatPrice(product.price * quantity)}. Please confirm stock and delivery to my address.`
  )}`;

  const handleInstantBuy = () => {
    addToCart(product, quantity, selectedColor);
    setActiveProductModal(null);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="modal-overlay" onClick={() => setActiveProductModal(null)}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '90vh',
          borderRadius: '24px',
          overflowY: 'auto',
          background: '#0d1322',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
          position: 'relative',
          padding: '28px'
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveProductModal(null)}
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
            zIndex: 10,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ef4444';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = '#cbd5e1';
          }}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Modal Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '28px'
        }}>
          {/* Left Column: Image Gallery */}
          <div>
            {/* Active Preview */}
            <div style={{
              width: '100%',
              paddingTop: '80%',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#090d18',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '14px'
            }}>
              <img
                src={selectedImage}
                alt={product.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {product.discount > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '6px'
                }}>
                  SAVE {product.discount}%
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.gallery && product.gallery.length > 1 && (
              <div style={{ display: 'flex', gap: '10px' }}>
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: selectedImage === img ? '2px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.1)',
                      background: '#090d18',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Actions */}
          <div>
            {/* Brand & Stock */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{
                color: '#06b6d4',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}>
                {product.brand}
              </span>

              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#10b981',
                fontSize: '0.78rem',
                fontWeight: 600
              }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981' }} />
                In Stock ({product.stock} units available)
              </span>
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '10px'
            }}>
              {product.name}
            </h2>

            {/* Rating & Warranty Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b' }}>
                <Star size={16} fill="#f59e0b" />
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>{product.rating}</span>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>({product.reviewsCount} customer reviews)</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: '#34d399',
                fontSize: '0.75rem',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '3px 8px',
                borderRadius: '6px'
              }}>
                <ShieldCheck size={13} />
                <span>{product.warranty}</span>
              </div>
            </div>

            {/* Price section */}
            <div style={{
              background: 'rgba(19, 27, 46, 0.6)',
              borderRadius: '14px',
              padding: '14px 18px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <span style={{
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  color: '#06b6d4',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {formatPrice(product.price)}
                </span>
                <span style={{
                  fontSize: '1rem',
                  color: '#64748b',
                  textDecoration: 'line-through'
                }}>
                  {formatPrice(product.originalPrice)}
                </span>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#10b981',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '3px 8px',
                  borderRadius: '6px'
                }}>
                  Save {formatPrice(product.originalPrice - product.price)}
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>
                Cash on delivery available. Pay when package arrives at your home.
              </div>
            </div>

            {/* Color / Variant Selection */}
            {product.colors && product.colors.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                  Select Color / Variant: <span style={{ color: '#06b6d4' }}>{selectedColor}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {product.colors.map(col => (
                    <button
                      key={col}
                      onClick={() => setSelectedColor(col)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        background: selectedColor === col ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        border: selectedColor === col ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: selectedColor === col ? '#38bdf8' : '#cbd5e1',
                        fontSize: '0.825rem',
                        fontWeight: selectedColor === col ? 700 : 500
                      }}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0' }}>Quantity:</span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: '#131b2e',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ padding: '8px 12px', color: '#94a3b8' }}
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>
                <span style={{ padding: '0 14px', fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  style={{ padding: '8px 12px', color: '#94a3b8' }}
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>

              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Total: <strong style={{ color: '#fff' }}>{formatPrice(product.price * quantity)}</strong>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
              <button
                onClick={() => addToCart(product, quantity, selectedColor)}
                className="btn btn-primary"
                style={{ padding: '12px', justifyContent: 'center' }}
              >
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleInstantBuy}
                className="btn btn-emerald"
                style={{ padding: '12px', justifyContent: 'center' }}
              >
                <Zap size={18} />
                <span>Buy Now (COD)</span>
              </button>
            </div>

            {/* Secondary Actions: WhatsApp Order & Wishlist */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '10px', justifyContent: 'center', textDecoration: 'none' }}
              >
                <Phone size={17} />
                <span>Order via WhatsApp Direct</span>
              </a>

              <button
                onClick={() => toggleWishlist(product)}
                style={{
                  width: '44px',
                  borderRadius: '10px',
                  background: wishlisted ? 'rgba(244, 63, 94, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  border: wishlisted ? '1px solid #f43f5e' : '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: wishlisted ? '#f43f5e' : '#cbd5e1'
                }}
                aria-label="Toggle Wishlist"
              >
                <Heart size={18} fill={wishlisted ? '#f43f5e' : 'none'} />
              </button>
            </div>
          </div>
        </div>

        {/* Tabbed Detailed Specifications Section */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '20px'
        }}>
          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            gap: '8px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '10px',
            marginBottom: '16px',
            overflowX: 'auto',
            scrollbarWidth: 'none'
          }}>
            {[
              { id: 'features', label: 'Key Features & Overview' },
              { id: 'specs', label: 'Technical Specifications' },
              { id: 'box', label: 'In The Box' },
              { id: 'warranty', label: 'Delivery & Warranty' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: activeTab === tab.id ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                  color: activeTab === tab.id ? '#06b6d4' : '#94a3b8',
                  fontSize: '0.85rem',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'features' && (
            <div>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '16px' }}>
                {product.description}
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '10px'
              }}>
                {product.keySpecs.map((spec, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    fontSize: '0.85rem',
                    color: '#e2e8f0'
                  }}>
                    <CheckCircle2 size={16} color="#06b6d4" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Specs */}
          {activeTab === 'specs' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', fontSize: '0.85rem' }}>
                <span style={{ color: '#94a3b8' }}>Brand:</span>
                <strong style={{ color: '#fff' }}>{product.brand}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', fontSize: '0.85rem' }}>
                <span style={{ color: '#94a3b8' }}>Category:</span>
                <strong style={{ color: '#fff', textTransform: 'capitalize' }}>{product.category}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', fontSize: '0.85rem' }}>
                <span style={{ color: '#94a3b8' }}>Model Status:</span>
                <strong style={{ color: '#10b981' }}>Official Original Import</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', fontSize: '0.85rem' }}>
                <span style={{ color: '#94a3b8' }}>Warranty:</span>
                <strong style={{ color: '#fff' }}>{product.warranty}</strong>
              </div>
            </div>
          )}

          {/* Tab 3: In the Box */}
          {activeTab === 'box' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {product.inBox && product.inBox.map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: '#e2e8f0'
                }}>
                  <Package size={16} color="#10b981" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: Delivery & Warranty */}
          {activeTab === 'warranty' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '14px'
            }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#06b6d4', fontWeight: 700, marginBottom: '6px' }}>
                  <Truck size={18} />
                  <span>Fast Courier Delivery</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Delivered via Trax or TCS Courier within 24 to 48 hours in Peshawar, Lahore, and Islamabad; 3 to 4 business days in Karachi, Quetta, and nationwide.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: 700, marginBottom: '6px' }}>
                  <RotateCcw size={18} />
                  <span>7-Day Replacement Policy</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Any manufacturing defect or fault within 7 days qualifies for a free replacement. Simply contact our WhatsApp support team.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useShop } from '../context/ShopContext';
import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
  ShieldCheck,
  Phone,
  Flame,
  Check
} from 'lucide-react';

export default function ProductCard({ product, isFlashSale = false }) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    setActiveProductModal,
    formatPrice
  } = useShop();

  const wishlisted = isInWishlist(product.id);

  // Pre-filled WhatsApp direct ordering message
  const whatsappUrl = `https://wa.me/923082200040?text=${encodeURIComponent(
    `Hello NexaGadgets, I want to order/inquire about "${product.name}" priced at ${formatPrice(product.price)}. Is it in stock for Cash on Delivery?`
  )}`;

  return (
    <div
      style={{
        background: 'rgba(19, 27, 46, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(6, 182, 212, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top Media Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: '80%', // 4:3 Aspect
        overflow: 'hidden',
        background: '#0b101c'
      }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />

        {/* Badges on Top Left */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          zIndex: 2
        }}>
          {product.discount > 0 && (
            <span style={{
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              color: '#fff',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '3px 8px',
              borderRadius: '6px',
              boxShadow: '0 2px 8px rgba(239, 68, 68, 0.5)',
              letterSpacing: '0.04em'
            }}>
              -{product.discount}% OFF
            </span>
          )}

          {product.badge && (
            <span style={{
              background: 'rgba(6, 182, 212, 0.2)',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              color: '#38bdf8',
              fontSize: '0.68rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '6px',
              backdropFilter: 'blur(6px)'
            }}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Top Right Action (Wishlist) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'rgba(13, 18, 31, 0.8)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: wishlisted ? '#f43f5e' : '#cbd5e1',
            zIndex: 3,
            transition: 'all 0.2s'
          }}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Heart size={16} fill={wishlisted ? '#f43f5e' : 'none'} />
        </button>

        {/* Quick View Floating Button on bottom of image */}
        <button
          onClick={() => setActiveProductModal(product)}
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#e2e8f0',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            zIndex: 2,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#06b6d4';
            e.currentTarget.style.color = '#04111d';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(15, 23, 42, 0.9)';
            e.currentTarget.style.color = '#e2e8f0';
          }}
        >
          <Eye size={13} />
          <span>Quick View</span>
        </button>
      </div>

      {/* Card Content */}
      <div style={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        {/* Brand & Warranty Tag */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '6px'
        }}>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#06b6d4',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            {product.brand}
          </span>

          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.68rem',
            color: '#10b981',
            background: 'rgba(16, 185, 129, 0.1)',
            padding: '2px 6px',
            borderRadius: '4px'
          }}>
            <ShieldCheck size={11} />
            <span>Warranty</span>
          </span>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => setActiveProductModal(product)}
          style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: '#f8fafc',
            lineHeight: 1.35,
            marginBottom: '8px',
            cursor: 'pointer',
            minHeight: '2.7em'
          }}
          className="line-clamp-2"
          onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#f8fafc'}
        >
          {product.name}
        </h3>

        {/* Rating & Reviews */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#f59e0b' }}>
            <Star size={13} fill="#f59e0b" />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f8fafc' }}>
              {product.rating}
            </span>
          </div>
          <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
            ({product.reviewsCount} reviews)
          </span>
        </div>

        {/* Feature snippet pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4px',
          marginBottom: '14px',
          minHeight: '24px'
        }}>
          {product.keySpecs.slice(0, 2).map((spec, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.68rem',
                color: '#94a3b8',
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '2px 6px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%'
              }}
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Flash Sale Stock Progress (if flash item) */}
        {isFlashSale && (
          <div style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', marginBottom: '4px' }}>
              <span style={{ color: '#f87171', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Flame size={12} /> Claimed: 82%
              </span>
              <span style={{ color: '#94a3b8' }}>{product.stock} left</span>
            </div>
            <div style={{
              width: '100%',
              height: '5px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '82%',
                height: '100%',
                background: 'linear-gradient(90deg, #ef4444, #f97316)'
              }} />
            </div>
          </div>
        )}

        {/* Price Row */}
        <div style={{
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '14px',
          paddingTop: '8px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              color: '#06b6d4',
              fontFamily: 'var(--font-heading)'
            }}>
              {formatPrice(product.price)}
            </div>
            {product.originalPrice > product.price && (
              <div style={{
                fontSize: '0.78rem',
                color: '#64748b',
                textDecoration: 'line-through'
              }}>
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>

          <div style={{
            fontSize: '0.72rem',
            color: '#10b981',
            fontWeight: 700,
            background: 'rgba(16, 185, 129, 0.1)',
            padding: '2px 6px',
            borderRadius: '4px'
          }}>
            Save {formatPrice(product.originalPrice - product.price)}
          </div>
        </div>

        {/* Action Buttons: Add to Cart & WhatsApp Direct Order */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
          <button
            onClick={() => addToCart(product, 1)}
            className="btn btn-primary btn-sm"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <ShoppingCart size={15} />
            <span>Add to Cart</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '34px',
              borderRadius: '8px',
              background: '#25d366',
              color: '#fff',
              transition: 'all 0.2s',
              boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)'
            }}
            title="Order directly on WhatsApp"
            aria-label="Order on WhatsApp"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Phone size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

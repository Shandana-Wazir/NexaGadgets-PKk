import React from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  Heart,
  ShoppingCart,
  Trash2,
  ArrowRight
} from 'lucide-react';

export default function WishlistDrawer() {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    formatPrice,
    showToast
  } = useShop();

  if (!isWishlistOpen) return null;

  const handleMoveAllToCart = () => {
    wishlist.forEach(product => {
      addToCart(product, 1);
    });
    showToast(`Moved ${wishlist.length} saved items to your cart!`, 'success');
  };

  return (
    <div className="drawer-overlay" onClick={() => setIsWishlistOpen(false)}>
      <div
        className="drawer-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        {/* Header */}
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
              background: 'rgba(244, 63, 94, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f43f5e'
            }}>
              <Heart size={18} fill="#f43f5e" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>Saved Wishlist</h2>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
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
            aria-label="Close wishlist"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {wishlist.length > 0 ? (
            wishlist.map(product => (
              <div
                key={product.id}
                style={{
                  display: 'flex',
                  gap: '14px',
                  padding: '14px',
                  background: 'rgba(19, 27, 46, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px',
                  alignItems: 'center'
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '70px',
                    height: '70px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.75rem', color: '#06b6d4', fontWeight: 700, textTransform: 'uppercase' }}>
                    {product.brand}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#f8fafc',
                    lineHeight: 1.3,
                    marginTop: '2px'
                  }} className="line-clamp-1">
                    {product.name}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span style={{ fontSize: '0.75rem', color: '#64748b', textDecoration: 'line-through' }}>
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <button
                    onClick={() => {
                      addToCart(product, 1);
                      toggleWishlist(product);
                    }}
                    className="btn btn-primary btn-sm"
                    style={{ padding: '6px 10px', fontSize: '0.75rem' }}
                    title="Move to cart"
                  >
                    <ShoppingCart size={13} />
                  </button>

                  <button
                    onClick={() => toggleWishlist(product)}
                    style={{
                      padding: '6px 10px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                    title="Remove from wishlist"
                  >
                    <Trash2 size={13} />
                  </button>
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
                <Heart size={28} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '8px' }}>Your wishlist is empty</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '20px' }}>
                Tap the heart on any gadget to save it here for later.
              </p>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="btn btn-primary btn-sm"
              >
                Start Exploring
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {wishlist.length > 0 && (
          <div style={{
            padding: '20px 24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: '#090d18'
          }}>
            <button
              onClick={handleMoveAllToCart}
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px', justifyContent: 'center' }}
            >
              <ShoppingCart size={17} />
              <span>Move All to Cart</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

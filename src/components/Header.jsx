import React, { useState, useRef, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Phone,
  Truck,
  ShieldCheck,
  Menu,
  X,
  Flame,
  ChevronDown,
  Clock,
  Sparkles,
  Watch,
  Headphones,
  BatteryCharging,
  Zap,
  Gamepad2,
  Volume2,
  Cable
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function Header() {
  const {
    products,
    cartItemCount,
    cartSubtotal,
    wishlist,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsAuthOpen,
    setIsTrackerOpen,
    setActiveProductModal,
    user,
    formatPrice,
    setOnlyFlashDeals,
    onlyFlashDeals
  } = useShop();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);

  // Close search suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered live search suggestions
  const liveResults = searchQuery.trim() === ''
    ? []
    : products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  const handleSelectProduct = (product) => {
    setActiveProductModal(product);
    setIsSearchFocused(false);
  };

  const categoryIcons = {
    all: Sparkles,
    smartwatches: Watch,
    earbuds: Headphones,
    powerbanks: BatteryCharging,
    chargers: Zap,
    gaming: Gamepad2,
    audio: Volume2,
    cables: Cable
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 900, background: '#0a0e17' }}>
      {/* Top Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '6px 0',
        fontSize: '0.8rem',
        color: '#94a3b8'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#67e8f9' }}>
              <Truck size={14} />
              <strong>Cash on Delivery (COD)</strong> across Pakistan
            </span>
            <span style={{ display: 'none', alignItems: 'center', gap: '6px', color: '#a7f3d0' }} className="d-md-flex">
              <ShieldCheck size={14} />
              7 Days Replacement Warranty
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setIsTrackerOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#cbd5e1',
                fontSize: '0.8rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
            >
              <Clock size={13} />
              Track Order
            </button>

            <a
              href="https://wa.me/923082200040?text=Hi%20NexaGadgets,%20I%20have%20an%20inquiry%20regarding%20gadgets"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#25d366',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <Phone size={13} />
              <span>WhatsApp: 0308-2200040</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div style={{
        padding: '14px 0',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(10, 14, 23, 0.95)',
        backdropFilter: 'blur(16px)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory('all');
                setOnlyFlashDeals(false);
                setSearchQuery('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none'
              }}
            >
              {/* Modern Tech Hex Icon */}
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(6, 182, 212, 0.4)',
                position: 'relative'
              }}>
                <Zap size={24} color="#04111d" strokeWidth={2.5} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(90deg, #ffffff, #e2e8f0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    NEXA
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: '#06b6d4'
                  }}>
                    GADGETS
                  </span>
                  <span style={{
                    fontSize: '0.65rem',
                    padding: '2px 5px',
                    borderRadius: '4px',
                    background: '#1e293b',
                    color: '#38bdf8',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    fontWeight: 700
                  }}>
                    PK
                  </span>
                </div>
                <div style={{
                  fontSize: '0.68rem',
                  color: '#94a3b8',
                  letterSpacing: '0.04em',
                  fontWeight: 500,
                  marginTop: '-3px'
                }}>
                  ORIGINAL SMART GADGETS & GEAR
                </div>
              </div>
            </a>
          </div>

          {/* Search Bar with Live Autocomplete */}
          <div
            ref={searchRef}
            style={{
              flex: '1',
              maxWidth: '520px',
              position: 'relative',
              display: 'none'
            }}
            className="d-md-block"
          >
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Search
                size={18}
                color="#64748b"
                style={{ position: 'absolute', left: '14px', pointerEvents: 'none' }}
              />
              <input
                type="text"
                placeholder="Search smartwatches, ANC earbuds, 65W chargers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                style={{
                  width: '100%',
                  background: 'rgba(19, 27, 46, 0.85)',
                  border: isSearchFocused ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '11px 40px 11px 42px',
                  color: '#f8fafc',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxShadow: isSearchFocused ? '0 0 15px rgba(6, 182, 212, 0.2)' : 'none'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    color: '#94a3b8',
                    padding: '4px',
                    borderRadius: '50%'
                  }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Live Search Results Dropdown */}
            {isSearchFocused && liveResults.length > 0 && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                left: 0,
                right: 0,
                background: '#0f172a',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
                zIndex: 100,
                overflow: 'hidden',
                animation: 'fadeInScale 0.15s ease-out'
              }}>
                <div style={{
                  padding: '8px 12px',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#64748b',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span>Matching Products</span>
                  <span>{liveResults.length} found</span>
                </div>
                {liveResults.map(product => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      cursor: 'pointer',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(6, 182, 212, 0.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '42px',
                        height: '42px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#f1f5f9',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {product.name}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                        <span style={{ color: '#06b6d4', fontWeight: 700, fontSize: '0.825rem' }}>
                          {formatPrice(product.price)}
                        </span>
                        <span style={{
                          textDecoration: 'line-through',
                          color: '#64748b',
                          fontSize: '0.75rem'
                        }}>
                          {formatPrice(product.originalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions (Wishlist, Cart, Profile) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* User Account Button */}
            <button
              onClick={() => setIsAuthOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#e2e8f0',
                fontSize: '0.85rem',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              }}
            >
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(6, 182, 212, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#06b6d4'
              }}>
                <User size={16} />
              </div>
              <span style={{ display: 'none' }} className="d-sm-inline">
                {user.isLoggedIn ? user.name.split(' ')[0] : 'Account'}
              </span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              style={{
                position: 'relative',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e2e8f0',
                transition: 'all 0.2s'
              }}
              aria-label="Open wishlist"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.4)';
                e.currentTarget.style.background = 'rgba(244, 63, 94, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              }}
            >
              <Heart size={19} color={wishlist.length > 0 ? '#f43f5e' : 'currentColor'} fill={wishlist.length > 0 ? '#f43f5e' : 'none'} />
              {wishlist.length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: '#f43f5e',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(244, 63, 94, 0.5)'
                }}>
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 14px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(14, 165, 233, 0.05))',
                border: '1px solid rgba(6, 182, 212, 0.35)',
                color: '#38bdf8',
                transition: 'all 0.2s'
              }}
              aria-label="Open cart"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.borderColor = '#06b6d4';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(6, 182, 212, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.35)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative' }}>
                <ShoppingCart size={20} color="#06b6d4" />
                {cartItemCount > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-7px',
                    right: '-7px',
                    background: '#06b6d4',
                    color: '#04111d',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(6, 182, 212, 0.5)'
                  }}>
                    {cartItemCount}
                  </span>
                )}
              </div>
              <div style={{ textAlign: 'left', display: 'none' }} className="d-sm-block">
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', lineHeight: 1 }}>Cart Total</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', lineHeight: 1.2 }}>
                  {formatPrice(cartSubtotal)}
                </div>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e2e8f0'
              }}
              className="d-md-none-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="container d-md-none" style={{ marginTop: '10px' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} color="#64748b" style={{ position: 'absolute', left: '12px', top: '12px' }} />
            <input
              type="text"
              placeholder="Search gadgets, watches, earbuds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: '#131b2e',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '10px 36px 10px 38px',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: '12px', top: '10px', color: '#94a3b8' }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <div style={{
        background: '#0d121f',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px',
          whiteSpace: 'nowrap'
        }}>
          {/* Flash Deals Pill */}
          <button
            onClick={() => {
              setOnlyFlashDeals(!onlyFlashDeals);
              setSelectedCategory('all');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: onlyFlashDeals ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'rgba(239, 68, 68, 0.12)',
              border: onlyFlashDeals ? '1px solid #ef4444' : '1px solid rgba(239, 68, 68, 0.3)',
              color: onlyFlashDeals ? '#fff' : '#f87171',
              fontSize: '0.825rem',
              fontWeight: 700,
              boxShadow: onlyFlashDeals ? '0 2px 10px rgba(239, 68, 68, 0.4)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <Flame size={15} color={onlyFlashDeals ? '#fff' : '#f87171'} />
            <span>Flash Deals</span>
          </button>

          {/* Categories */}
          {CATEGORIES.map(cat => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            const isActive = selectedCategory === cat.id && !onlyFlashDeals;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOnlyFlashDeals(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  background: isActive ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? '1px solid #22d3ee' : '1px solid rgba(255, 255, 255, 0.06)',
                  color: isActive ? '#031726' : '#cbd5e1',
                  fontSize: '0.825rem',
                  fontWeight: isActive ? 700 : 500,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#cbd5e1';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  }
                }}
              >
                <Icon size={14} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(5, 8, 15, 0.95)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          animation: 'fadeInScale 0.2s ease-out'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#06b6d4' }}>Explore Categories</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '8px', borderRadius: '8px', background: '#1e293b' }}
            >
              <X size={20} color="#fff" />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
            <button
              onClick={() => {
                setOnlyFlashDeals(true);
                setSelectedCategory('all');
                setMobileMenuOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#f87171',
                fontWeight: 700
              }}
            >
              <Flame size={18} />
              <span>Limited Time Flash Deals</span>
            </button>

            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOnlyFlashDeals(false);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: selectedCategory === cat.id ? 'rgba(6, 182, 212, 0.15)' : '#131b2e',
                  color: selectedCategory === cat.id ? '#06b6d4' : '#e2e8f0',
                  textAlign: 'left'
                }}
              >
                <span>{cat.name}</span>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>({cat.count})</span>
              </button>
            ))}

            <div style={{ marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
              <button
                onClick={() => {
                  setIsTrackerOpen(true);
                  setMobileMenuOpen(false);
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '12px',
                  background: '#1e293b',
                  color: '#38bdf8',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Clock size={16} /> Track Your Order
              </button>

              <a
                href="https://wa.me/923082200040"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '12px',
                  background: '#25d366',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontWeight: 700
                }}
              >
                <Phone size={16} /> WhatsApp Sales Support
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive helper styles */}
      <style>{`
        @media (min-width: 768px) {
          .d-md-flex { display: flex !important; }
          .d-md-block { display: block !important; }
          .d-md-none { display: none !important; }
          .d-md-none-btn { display: none !important; }
        }
        @media (min-width: 640px) {
          .d-sm-inline { display: inline !important; }
          .d-sm-block { display: block !important; }
        }
      `}</style>
    </header>
  );
}

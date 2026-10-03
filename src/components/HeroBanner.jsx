import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  Award,
  Headphones,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { TRUST_PROMISES } from '../data/products';

export default function HeroBanner() {
  const { products, setActiveProductModal, addToCart, formatPrice, setSelectedCategory } = useShop();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      productId: 'sw-01',
      tag: '🔥 FLAGSHIP LAUNCH 2026',
      tagColor: '#06b6d4',
      title: 'Zeblaze Stratos 3 Pro',
      subtitle: 'Rugged Ultra HD AMOLED GPS Calling Smartwatch',
      description: 'Engineered for extreme adventures and everyday luxury. Features built-in 4-satellite GPS, Hi-Fi Bluetooth speakerphone, 1000 nits peak brightness, and 14 days uninterrupted battery life.',
      highlights: ['1.43" Ultra HD AMOLED (1000 Nits)', 'Precision 4-Satellite GPS', 'Military Grade Durability', 'Bluetooth Calling v5.3'],
      price: 9499,
      originalPrice: 14999,
      discount: '37% OFF',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=900&q=80',
      badge: 'COD Available Nationwide',
      glowColor: 'rgba(6, 182, 212, 0.3)'
    },
    {
      productId: 'eb-01',
      tag: '🎧 AUDIOPHILE GRADE WIRELESS',
      tagColor: '#10b981',
      title: 'SoundPEATS Capsule3 Pro+',
      subtitle: 'xMEMS Solid-State Driver + 43dB Hybrid ANC',
      description: 'Experience studio-mastered Hi-Res audio certified with LDAC decoding. Revolutionary xMEMS micro-speakers deliver crystal-clear highs while hybrid ANC cancels city noise effortlessly.',
      highlights: ['Hybrid 43dB Active Noise Cancelling', 'Solid-State xMEMS Driver', 'Hi-Res Wireless & LDAC', '43 Hours Total Playtime'],
      price: 8999,
      originalPrice: 12999,
      discount: '31% OFF',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80',
      badge: '1 Year Brand Warranty',
      glowColor: 'rgba(16, 185, 129, 0.3)'
    },
    {
      productId: 'pb-01',
      tag: '⚡ 140W POWER MONSTER',
      tagColor: '#f59e0b',
      title: 'Anker 737 Power Bank (24K)',
      subtitle: 'Ultra-Powerful Two-Way Laptop & Phone Charging',
      description: 'Equipped with Power Delivery 3.1 and bi-directional fast charging. Monitor exact live watts, temperatures, and battery health via the integrated smart digital color OLED screen.',
      highlights: ['140W Max Fast Output & Input', 'Smart OLED Wattage Display', '24,000mAh Extreme Capacity', 'Powers Laptops & Phones'],
      price: 18499,
      originalPrice: 24999,
      discount: '26% OFF',
      image: 'https://images.unsplash.com/photo-1609592424364-893cfbbcfbe7?auto=format&fit=crop&w=900&q=80',
      badge: 'Official Anker 18-Month Warranty',
      glowColor: 'rgba(245, 158, 11, 0.3)'
    }
  ];

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const slide = heroSlides[currentSlide];
  const matchedProduct = products.find(p => p.id === slide.productId);

  const trustIcons = {
    Truck: Truck,
    ShieldCheck: ShieldCheck,
    Award: Award,
    Headphones: Headphones
  };

  return (
    <section style={{
      position: 'relative',
      paddingTop: '24px',
      paddingBottom: '20px',
      overflow: 'hidden'
    }}>
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: slide.glowColor,
        filter: 'blur(140px)',
        opacity: 0.25,
        pointerEvents: 'none',
        transition: 'all 0.8s ease'
      }} />

      <div className="container">
        {/* Main Hero Card */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(19, 27, 46, 0.95) 0%, rgba(13, 18, 31, 0.98) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
          padding: '40px 30px',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '40px',
            width: '100%',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Left Content */}
            <div>
              {/* Top Tag & Discount Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid ${slide.tagColor}`,
                  color: slide.tagColor,
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em'
                }}>
                  <Sparkles size={13} />
                  {slide.tag}
                </span>

                <span style={{
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: '#fff',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  boxShadow: '0 2px 8px rgba(239, 68, 68, 0.4)'
                }}>
                  SAVE {slide.discount}
                </span>

                <span style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '0.72rem',
                  fontWeight: 600
                }}>
                  {slide.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h1 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '10px',
                color: '#fff'
              }}>
                {slide.title}
              </h1>

              <p style={{
                fontSize: '1.05rem',
                color: '#38bdf8',
                fontWeight: 600,
                marginBottom: '14px'
              }}>
                {slide.subtitle}
              </p>

              <p style={{
                fontSize: '0.9rem',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '20px',
                maxWidth: '540px'
              }}>
                {slide.description}
              </p>

              {/* Feature Highlights Pills */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '8px',
                marginBottom: '26px'
              }}>
                {slide.highlights.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.825rem',
                    color: '#e2e8f0'
                  }}>
                    <CheckCircle2 size={16} color="#06b6d4" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Price & Actions */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Special Web Price
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: '#06b6d4',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {formatPrice(slide.price)}
                    </span>
                    <span style={{
                      fontSize: '1.05rem',
                      color: '#64748b',
                      textDecoration: 'line-through'
                    }}>
                      {formatPrice(slide.originalPrice)}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => {
                      if (matchedProduct) {
                        addToCart(matchedProduct, 1);
                      }
                    }}
                    className="btn btn-primary"
                    style={{ padding: '12px 24px', fontSize: '0.95rem' }}
                  >
                    <span>Add to Cart</span>
                    <ArrowRight size={17} />
                  </button>

                  <button
                    onClick={() => {
                      if (matchedProduct) {
                        setActiveProductModal(matchedProduct);
                      }
                    }}
                    className="btn btn-secondary"
                    style={{ padding: '12px 20px', fontSize: '0.95rem' }}
                  >
                    Quick Specs
                  </button>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Glowing circular backdrop */}
              <div style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${slide.glowColor} 0%, transparent 70%)`,
                animation: 'pulseGlow 4s infinite ease-in-out'
              }} />

              {/* Product Image Frame */}
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                maxWidth: '440px',
                width: '100%',
                maxHeight: '380px'
              }}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    width: '100%',
                    height: '380px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Floating stock pill */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  background: 'rgba(13, 18, 31, 0.85)',
                  backdropFilter: 'blur(10px)',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 8px #10b981'
                  }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>
                    In Stock • Ready to Dispatch
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Navigation Buttons */}
          <button
            onClick={() => setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length)}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              zIndex: 10,
              cursor: 'pointer'
            }}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              zIndex: 10,
              cursor: 'pointer'
            }}
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '16px',
            right: '30px',
            display: 'flex',
            gap: '8px',
            zIndex: 10
          }}>
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: currentSlide === idx ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentSlide === idx ? '#06b6d4' : 'rgba(255, 255, 255, 0.25)',
                  transition: 'all 0.3s ease',
                  padding: 0
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges Strip (Inspired by Pakistani customer requirements: COD, Warranty, Original, WhatsApp) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginTop: '20px'
        }}>
          {TRUST_PROMISES.map((promise, index) => {
            const Icon = trustIcons[promise.icon] || ShieldCheck;
            return (
              <div
                key={index}
                style={{
                  background: 'rgba(19, 27, 46, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)';
                  e.currentTarget.style.background = 'rgba(19, 27, 46, 0.8)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.background = 'rgba(19, 27, 46, 0.5)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06b6d4',
                  flexShrink: 0
                }}>
                  <Icon size={22} />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.925rem',
                    fontWeight: 700,
                    color: '#f8fafc',
                    lineHeight: 1.2,
                    marginBottom: '3px'
                  }}>
                    {promise.title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.3 }}>
                    {promise.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

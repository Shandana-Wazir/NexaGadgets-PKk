import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Flame, Clock, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function FlashDeals() {
  const { products, setOnlyFlashDeals, setSelectedCategory } = useShop();

  // 12-hour countdown timer simulation
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 11, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flashProducts = products.filter(p => p.isFlashDeal).slice(0, 4);

  return (
    <section style={{
      padding: '40px 0 20px 0',
      position: 'relative'
    }}>
      <div className="container">
        {/* Flash Deals Header Bar */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(249, 115, 22, 0.08) 100%)',
          border: '1px solid rgba(239, 68, 68, 0.25)',
          borderRadius: '20px',
          padding: '20px 24px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {/* Left Title & Fire icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)'
            }}>
              <Flame size={26} color="#fff" />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#fff',
                  letterSpacing: '-0.02em'
                }}>
                  TODAY'S FLASH DEALS
                </h2>
                <span style={{
                  background: '#ef4444',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '10px',
                  textTransform: 'uppercase'
                }}>
                  Live
                </span>
              </div>
              <p style={{ fontSize: '0.825rem', color: '#cbd5e1', marginTop: '2px' }}>
                Limited inventory wholesale prices — Grab before timer resets!
              </p>
            </div>
          </div>

          {/* Right Live Ticking Countdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fca5a5', fontSize: '0.85rem', fontWeight: 600 }}>
              <Clock size={16} />
              <span>Ends in:</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                background: '#0f172a',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                borderRadius: '8px',
                padding: '6px 10px',
                textAlign: 'center',
                minWidth: '38px'
              }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f87171', fontFamily: 'var(--font-heading)' }}>
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <div style={{ fontSize: '0.6rem', color: '#94a3b8', textTransform: 'uppercase' }}>Hrs</div>
              </div>
              <span style={{ color: '#ef4444', fontWeight: 800 }}>:</span>

              <div style={{
                background: '#0f172a',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                borderRadius: '8px',
                padding: '6px 10px',
                textAlign: 'center',
                minWidth: '38px'
              }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f87171', fontFamily: 'var(--font-heading)' }}>
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <div style={{ fontSize: '0.6rem', color: '#94a3b8', textTransform: 'uppercase' }}>Min</div>
              </div>
              <span style={{ color: '#ef4444', fontWeight: 800 }}>:</span>

              <div style={{
                background: '#0f172a',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                borderRadius: '8px',
                padding: '6px 10px',
                textAlign: 'center',
                minWidth: '38px'
              }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f87171', fontFamily: 'var(--font-heading)' }}>
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <div style={{ fontSize: '0.6rem', color: '#94a3b8', textTransform: 'uppercase' }}>Sec</div>
              </div>
            </div>

            <button
              onClick={() => {
                setOnlyFlashDeals(true);
                setSelectedCategory('all');
                const catalogEl = document.getElementById('catalog-section');
                if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(239, 68, 68, 0.2)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                color: '#fca5a5',
                padding: '8px 16px',
                borderRadius: '10px',
                fontSize: '0.825rem',
                fontWeight: 600,
                marginLeft: '8px'
              }}
            >
              <span>View All</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Flash Deals Product Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {flashProducts.map(product => (
            <ProductCard key={product.id} product={product} isFlashSale={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

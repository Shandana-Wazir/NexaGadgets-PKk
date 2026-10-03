import React from 'react';
import { useShop } from '../context/ShopContext';
import {
  Watch,
  Headphones,
  BatteryCharging,
  Zap,
  Gamepad2,
  Volume2,
  Cable,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function CategorySection() {
  const { selectedCategory, setSelectedCategory, setOnlyFlashDeals } = useShop();

  const iconMap = {
    all: Sparkles,
    smartwatches: Watch,
    earbuds: Headphones,
    powerbanks: BatteryCharging,
    chargers: Zap,
    gaming: Gamepad2,
    audio: Volume2,
    cables: Cable
  };

  const gradients = {
    all: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    smartwatches: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    earbuds: 'linear-gradient(135deg, #10b981, #059669)',
    powerbanks: 'linear-gradient(135deg, #f59e0b, #d97706)',
    chargers: 'linear-gradient(135deg, #ec4899, #db2777)',
    gaming: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    audio: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    cables: 'linear-gradient(135deg, #64748b, #475569)'
  };

  const categorySubtitles = {
    all: 'Explore our complete catalog',
    smartwatches: 'AMOLED, GPS & Bluetooth Calling',
    earbuds: 'Hybrid ANC & Hi-Res Wireless',
    powerbanks: 'Heavy Duty 20K & 140W PD',
    chargers: '65W+ GaN Fast Adapters',
    gaming: '7.1 Surround & Low Latency',
    audio: 'Outdoor Bass & Party Speakers',
    cables: 'PD 100W with Digital Display'
  };

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    setOnlyFlashDeals(false);
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{ padding: '40px 0 20px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
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
              <Sparkles size={14} />
              <span>Browse By Category</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em'
            }}>
              Curated Electronics & Accessories
            </h2>
          </div>

          <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            Genuine brand warranty with testing guarantee
          </div>
        </div>

        {/* Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '16px'
        }}>
          {CATEGORIES.map(cat => {
            const Icon = iconMap[cat.id] || Sparkles;
            const isSelected = selectedCategory === cat.id;
            const gradient = gradients[cat.id] || gradients.all;
            const subtitle = categorySubtitles[cat.id] || 'Top trending tech';

            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                style={{
                  background: isSelected ? 'rgba(6, 182, 212, 0.12)' : 'rgba(19, 27, 46, 0.6)',
                  border: isSelected ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.background = 'rgba(19, 27, 46, 0.9)';
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.background = 'rgba(19, 27, 46, 0.6)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}>
                    <Icon size={22} />
                  </div>

                  <div>
                    <div style={{
                      fontSize: '0.975rem',
                      fontWeight: 700,
                      color: isSelected ? '#38bdf8' : '#f8fafc',
                      lineHeight: 1.2,
                      marginBottom: '3px'
                    }}>
                      {cat.name}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      lineHeight: 1.3
                    }}>
                      {subtitle}
                    </div>
                  </div>
                </div>

                <div style={{
                  color: isSelected ? '#06b6d4' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

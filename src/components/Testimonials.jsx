import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  return (
    <section style={{
      padding: '40px 0 60px 0',
      background: 'linear-gradient(180deg, transparent 0%, rgba(13, 18, 31, 0.8) 100%)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#10b981',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '6px'
          }}>
            <ShieldCheck size={14} />
            <span>Verified Customer Feedback</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.02em',
            marginBottom: '8px'
          }}>
            Trusted by 45,000+ Gadget Lovers Across Pakistan
          </h2>

          <p style={{ fontSize: '0.9rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            From Peshawar wholesale hubs to Karachi doorsteps — here is what our verified buyers say about our quality and speed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {TESTIMONIALS.map(t => (
            <div
              key={t.id}
              style={{
                background: 'rgba(19, 27, 46, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.35)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', gap: '3px', color: '#f59e0b' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" />
                  ))}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{t.date}</span>
              </div>

              <p style={{
                fontSize: '0.875rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '18px',
                flex: 1,
                fontStyle: 'italic'
              }}>
                "{t.comment}"
              </p>

              <div style={{
                paddingTop: '14px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc' }}>
                      {t.name}
                    </span>
                    {t.verified && (
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2px',
                        fontSize: '0.68rem',
                        color: '#10b981',
                        fontWeight: 600
                      }}>
                        <CheckCircle2 size={12} />
                        Verified
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {t.city}
                  </div>
                </div>

                <div style={{
                  fontSize: '0.72rem',
                  color: '#38bdf8',
                  background: 'rgba(6, 182, 212, 0.1)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  maxWidth: '130px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {t.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

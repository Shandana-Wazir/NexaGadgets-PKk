import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Heart,
  ArrowRight,
  Send,
  CheckCircle2
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function Footer() {
  const { setSelectedCategory, setOnlyFlashDeals, setIsTrackerOpen, showToast } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    showToast('Subscribed! Use code "NEXA10" for 10% off', 'success');
    setNewsletterEmail('');
  };

  return (
    <footer style={{
      background: '#070a12',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '60px',
      paddingBottom: '30px',
      color: '#94a3b8',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        {/* Top Newsletter Strip */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(14, 165, 233, 0.05) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.25)',
          borderRadius: '20px',
          padding: '28px 32px',
          marginBottom: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <span style={{
              background: '#06b6d4',
              color: '#04111d',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '3px 8px',
              borderRadius: '4px',
              textTransform: 'uppercase'
            }}>
              SPECIAL VIP CLUB
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>
              Subscribe to Get Rs. 500 Off Your First Order
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
              Receive weekly flash sale drops, new gadget alerts, and exclusive secret voucher codes.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px', maxWidth: '420px', width: '100%' }}>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              style={{
                flex: 1,
                background: '#0f172a',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '10px',
                padding: '10px 14px',
                color: '#fff',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn btn-primary btn-sm" style={{ padding: '0 18px' }}>
              <Send size={15} />
              <span>Join</span>
            </button>
          </form>
        </div>

        {/* Multi-column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#04111d'
              }}>
                <Zap size={22} strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>
                NEXA<span style={{ color: '#06b6d4' }}>GADGETS</span>
              </span>
            </div>

            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#cbd5e1', marginBottom: '16px' }}>
              Pakistan's trusted destination for 100% original smartwatches, ANC earbuds, GaN high-power chargers, and gaming accessories at direct wholesale market prices.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.825rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#25d366' }}>
                <Phone size={15} />
                <strong>0308-2200040 (WhatsApp Helpline)</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="#06b6d4" />
                <span>support@nexagadgets.pk</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} color="#06b6d4" />
                <span>Jamrud Road, Karkhano Hub, Peshawar</span>
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Popular Categories
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {CATEGORIES.slice(1, 6).map(cat => (
                <a
                  key={cat.id}
                  href="#catalog-section"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory(cat.id);
                    setOnlyFlashDeals(false);
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ color: '#94a3b8', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  <ArrowRight size={13} color="#06b6d4" />
                  <span>{cat.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Customer Service & Guarantees */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Customer Assurance
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Truck size={15} color="#10b981" />
                <span>Cash on Delivery (COD) Nationwide</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={15} color="#10b981" />
                <span>7-Day Easy Replacement Warranty</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={15} color="#10b981" />
                <span>24-48 Hours Express Dispatch</span>
              </div>
              <button
                onClick={() => setIsTrackerOpen(true)}
                style={{
                  textAlign: 'left',
                  color: '#38bdf8',
                  padding: 0,
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '6px'
                }}
              >
                <span>Track Existing Order</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Payment & Security */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Payment Methods
            </h4>
            <p style={{ fontSize: '0.825rem', marginBottom: '14px', lineHeight: 1.5 }}>
              We support secure and flexible payment options tailored for Pakistan:
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Cash On Delivery', 'JazzCash', 'EasyPaisa', 'Bank Transfer', 'Raast'].map((m, i) => (
                <span
                  key={i}
                  style={{
                    background: '#131b2e',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    color: '#e2e8f0',
                    fontWeight: 600
                  }}
                >
                  {m}
                </span>
              ))}
            </div>

            <div style={{ marginTop: '16px', fontSize: '0.78rem', color: '#64748b' }}>
              🔒 Protected by 256-bit SSL encryption
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 <strong>NexaGadgets PK</strong>. All Rights Reserved. Inspired by Pakistani Tech Wholesale Excellence.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms & Conditions</span>
            <span style={{ cursor: 'pointer' }}>Warranty Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

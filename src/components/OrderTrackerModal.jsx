import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  Search,
  Truck,
  CheckCircle2,
  Clock,
  Package,
  ShieldCheck,
  MapPin,
  Phone
} from 'lucide-react';

export default function OrderTrackerModal() {
  const { isTrackerOpen, setIsTrackerOpen } = useShop();
  const [orderQuery, setOrderQuery] = useState('NX-89421');
  const [trackedOrder, setTrackedOrder] = useState({
    id: 'NX-89421',
    item: 'Zeblaze Stratos 3 Pro AMOLED GPS Smartwatch',
    destination: 'Peshawar, Khyber Pakhtunkhwa',
    courier: 'Trax Logistics PK (Tracking # TRX-982144)',
    placedAt: '28 Sep 2026, 02:45 PM',
    currentStage: 3 // 0: Placed, 1: Verified, 2: Packed, 3: In Transit, 4: Delivered
  });

  if (!isTrackerOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;

    // Simulate lookup
    setTrackedOrder({
      id: orderQuery.toUpperCase(),
      item: 'Original Gadget Order Package',
      destination: 'Lahore, Pakistan',
      courier: 'TCS Express Pakistan (Tracking # TCS-58910)',
      placedAt: '01 Oct 2026, 11:20 AM',
      currentStage: 2
    });
  };

  const steps = [
    { title: 'Order Placed', desc: 'Received in system', icon: Clock },
    { title: 'WhatsApp Verification', desc: 'Confirmed by sales agent', icon: Phone },
    { title: 'Inspected & Sealed', desc: 'Quality checked & packed', icon: Package },
    { title: 'In Transit', desc: 'En route via Express Courier', icon: Truck },
    { title: 'Delivered (COD)', desc: 'Payment received at doorstep', icon: CheckCircle2 }
  ];

  return (
    <div className="modal-overlay" onClick={() => setIsTrackerOpen(false)}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '620px',
          borderRadius: '24px',
          background: '#0d1322',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
          position: 'relative',
          padding: '28px'
        }}
      >
        <button
          onClick={() => setIsTrackerOpen(false)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#cbd5e1'
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '14px',
            background: 'rgba(6, 182, 212, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#06b6d4',
            margin: '0 auto 12px auto'
          }}>
            <Truck size={24} />
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
            Track Your Parcel Live
          </h2>
          <p style={{ fontSize: '0.825rem', color: '#94a3b8' }}>
            Check the real-time shipping status of your gadget delivery across Pakistan.
          </p>
        </div>

        {/* Search Input */}
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
          <input
            type="text"
            placeholder="Enter Order ID (e.g. NX-89421)"
            value={orderQuery}
            onChange={(e) => setOrderQuery(e.target.value)}
            className="form-input"
            style={{ flex: 1 }}
          />
          <button type="submit" className="btn btn-primary btn-sm" style={{ padding: '0 20px' }}>
            <Search size={16} />
            <span>Track</span>
          </button>
        </form>

        {/* Tracking Information Box */}
        {trackedOrder && (
          <div>
            <div style={{
              background: 'rgba(19, 27, 46, 0.7)',
              borderRadius: '16px',
              padding: '16px 20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Order Number:</span>
                <strong style={{ color: '#06b6d4', fontSize: '0.95rem' }}>#{trackedOrder.id}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.825rem' }}>
                <span style={{ color: '#94a3b8' }}>Item:</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>{trackedOrder.item}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.825rem' }}>
                <span style={{ color: '#94a3b8' }}>Destination:</span>
                <span style={{ color: '#e2e8f0' }}>{trackedOrder.destination}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem' }}>
                <span style={{ color: '#94a3b8' }}>Courier Partner:</span>
                <span style={{ color: '#38bdf8' }}>{trackedOrder.courier}</span>
              </div>
            </div>

            {/* Stepper */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', paddingLeft: '10px' }}>
              {steps.map((step, idx) => {
                const isPassed = idx <= trackedOrder.currentStage;
                const isCurrent = idx === trackedOrder.currentStage;
                const Icon = step.icon;

                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', position: 'relative' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isPassed ? '#06b6d4' : '#1e293b',
                      color: isPassed ? '#04111d' : '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isCurrent ? '0 0 14px rgba(6, 182, 212, 0.6)' : 'none'
                    }}>
                      <Icon size={16} strokeWidth={2.5} />
                    </div>

                    <div>
                      <div style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: isPassed ? '#fff' : '#64748b'
                      }}>
                        {step.title}
                        {isCurrent && (
                          <span style={{
                            marginLeft: '8px',
                            background: 'rgba(6, 182, 212, 0.2)',
                            color: '#38bdf8',
                            fontSize: '0.68rem',
                            padding: '2px 6px',
                            borderRadius: '4px'
                          }}>
                            Current Status
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: isPassed ? '#94a3b8' : '#475569' }}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp Courier Help */}
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <a
                href="https://wa.me/923082200040?text=Hi%20NexaGadgets,%20need%20urgent%20dispatch%20update%20on%20my%20order"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#25d366',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}
              >
                <Phone size={14} />
                <span>Need urgent dispatch update? Contact Trax Helpline via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

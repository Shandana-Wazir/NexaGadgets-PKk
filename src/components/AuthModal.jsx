import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  User,
  Mail,
  Lock,
  Phone,
  CheckCircle2,
  Package,
  Clock,
  LogOut,
  Sparkles,
  MapPin
} from 'lucide-react';

export default function AuthModal() {
  const { isAuthOpen, setIsAuthOpen, user, setUser, showToast, formatPrice } = useShop();
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isAuthOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(prev => ({
      ...prev,
      isLoggedIn: true,
      name: name || prev.name,
      email: email || prev.email,
      phone: phone || prev.phone
    }));
    showToast(`Welcome back, ${user.name.split(' ')[0]}!`, 'success');
    setIsAuthOpen(false);
  };

  const handleDemoLogin = () => {
    setUser(prev => ({
      ...prev,
      isLoggedIn: true
    }));
    showToast('Logged in with Demo Account!', 'success');
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setUser(prev => ({
      ...prev,
      isLoggedIn: false
    }));
    showToast('Logged out successfully', 'info');
  };

  return (
    <div className="modal-overlay" onClick={() => setIsAuthOpen(false)}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          borderRadius: '24px',
          background: '#0d1322',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
          position: 'relative',
          padding: '28px'
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsAuthOpen(false)}
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

        {user.isLoggedIn ? (
          /* User Profile View */
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#04111d',
                fontSize: '1.4rem',
                fontWeight: 800
              }}>
                {user.name.charAt(0)}
              </div>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>{user.name}</h2>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{user.email}</div>
                <div style={{ fontSize: '0.78rem', color: '#06b6d4' }}>{user.phone}</div>
              </div>
            </div>

            {/* Default Delivery Address */}
            <div style={{
              background: 'rgba(19, 27, 46, 0.7)',
              borderRadius: '12px',
              padding: '14px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontSize: '0.825rem', fontWeight: 700, marginBottom: '4px' }}>
                <MapPin size={15} />
                <span>Saved Delivery Location</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                {user.address}, {user.city}
              </div>
            </div>

            {/* Order History */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Package size={16} color="#10b981" />
                <span>Recent Orders</span>
              </div>

              {user.pastOrders && user.pastOrders.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {user.pastOrders.map((ord, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '12px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#06b6d4' }}>
                          Order #{ord.id}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                          {ord.date} • {ord.items.length} item(s)
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
                          {formatPrice(ord.total)}
                        </div>
                        <span style={{
                          fontSize: '0.7rem',
                          color: '#10b981',
                          background: 'rgba(16, 185, 129, 0.1)',
                          padding: '2px 6px',
                          borderRadius: '4px'
                        }}>
                          {ord.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>No orders placed yet.</div>
              )}
            </div>

            {/* Sign Out Button */}
            <button
              onClick={handleLogout}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          /* Sign In / Sign Up View */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
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
                <User size={22} />
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                {isLoginView ? 'Welcome to NexaGadgets' : 'Create an Account'}
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
                {isLoginView ? 'Sign in to track orders, save wishlists, and get loyalty discounts' : 'Join Pakistan’s fastest growing smart gadget community'}
              </p>
            </div>

            {/* Tab switch */}
            <div style={{
              display: 'flex',
              background: '#131b2e',
              borderRadius: '10px',
              padding: '4px',
              marginBottom: '20px'
            }}>
              <button
                type="button"
                onClick={() => setIsLoginView(true)}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '8px',
                  background: isLoginView ? '#06b6d4' : 'transparent',
                  color: isLoginView ? '#04111d' : '#94a3b8',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  transition: 'all 0.2s'
                }}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setIsLoginView(false)}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '8px',
                  background: !isLoginView ? '#06b6d4' : 'transparent',
                  color: !isLoginView ? '#04111d' : '#94a3b8',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  transition: 'all 0.2s'
                }}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {!isLoginView && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Muhammad Bilal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              {!isLoginView && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0300-1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}
              >
                <span>{isLoginView ? 'Sign In to Account' : 'Create Account'}</span>
              </button>
            </form>

            {/* Quick 1-Click Demo Testing Button */}
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '8px' }}>
                — OR TEST QUICKLY —
              </div>
              <button
                type="button"
                onClick={handleDemoLogin}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Sparkles size={14} color="#06b6d4" />
                <span>1-Click Demo Login (Pre-filled Account)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Phone, X, Send, MessageSquare, Sparkles } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'Is Cash on Delivery available in my city?',
    'What is the warranty claim procedure?',
    'I want recommendations for earbuds under Rs. 6,000',
    'How do I track my active parcel?'
  ];

  const handleSendPrompt = (prompt) => {
    const url = `https://wa.me/923082200040?text=${encodeURIComponent(prompt)}`;
    window.open(url, '_blank');
  };

  const handleCustomSend = (e) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const url = `https://wa.me/923082200040?text=${encodeURIComponent(customMsg)}`;
    window.open(url, '_blank');
    setCustomMsg('');
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 850 }}>
      {/* Pop-up Chat Card */}
      {isOpen && (
        <div style={{
          width: '320px',
          background: '#0f172a',
          border: '1px solid rgba(37, 211, 102, 0.3)',
          borderRadius: '18px',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
          overflow: 'hidden',
          marginBottom: '12px',
          animation: 'fadeInScale 0.2s ease-out'
        }}>
          {/* Card Header */}
          <div style={{
            background: 'linear-gradient(135deg, #25d366, #128c7e)',
            padding: '16px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#128c7e'
              }}>
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>NexaGadgets Helpdesk</div>
                <div style={{ fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.9 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />
                  Online • Typically replies in 5 mins
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ color: '#fff', opacity: 0.8, padding: '4px' }}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: '16px', background: '#090d18' }}>
            <p style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '10px' }}>
              👋 Assalam-o-Alaikum! How can our tech team assist you today?
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(prompt)}
                  style={{
                    textAlign: 'left',
                    background: '#131b2e',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '8px 10px',
                    fontSize: '0.78rem',
                    color: '#e2e8f0',
                    transition: 'all 0.15s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#25d366';
                    e.currentTarget.style.background = 'rgba(37, 211, 102, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.background = '#131b2e';
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form onSubmit={handleCustomSend} style={{ display: 'flex', gap: '6px' }}>
              <input
                type="text"
                placeholder="Type your question..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                style={{
                  flex: 1,
                  background: '#131b2e',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  fontSize: '0.8rem',
                  color: '#fff',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  background: '#25d366',
                  color: '#fff',
                  borderRadius: '8px',
                  padding: '0 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d366, #128c7e)',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          position: 'relative',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Chat on WhatsApp"
      >
        <Phone size={26} />
        {/* Pulsing indicator */}
        <span style={{
          position: 'absolute',
          top: '2px',
          right: '2px',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: '#fff',
          border: '2px solid #25d366'
        }} />
      </button>
    </div>
  );
}

import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function ToastContainer() {
  const { toasts, removeToast } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '380px',
      pointerEvents: 'none'
    }}>
      {toasts.map(toast => {
        let bgColor = '#131b2e';
        let borderColor = 'rgba(255, 255, 255, 0.1)';
        let IconComponent = CheckCircle2;
        let iconColor = '#10b981';

        if (toast.type === 'error') {
          bgColor = '#1e111a';
          borderColor = 'rgba(244, 63, 94, 0.3)';
          IconComponent = AlertCircle;
          iconColor = '#f43f5e';
        } else if (toast.type === 'info') {
          bgColor = '#0f172a';
          borderColor = 'rgba(6, 182, 212, 0.3)';
          IconComponent = Info;
          iconColor = '#06b6d4';
        }

        return (
          <div
            key={toast.id}
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '12px 16px',
              background: bgColor,
              border: `1px solid ${borderColor}`,
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              color: '#f8fafc',
              fontSize: '0.9rem',
              backdropFilter: 'blur(10px)',
              animation: 'fadeInScale 0.25s ease-out'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <IconComponent size={20} color={iconColor} style={{ flexShrink: 0 }} />
              <span>{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                color: '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '6px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

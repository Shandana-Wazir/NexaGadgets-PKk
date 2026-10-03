import React from 'react';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import FlashDeals from './components/FlashDeals';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CheckoutModal from './components/CheckoutModal';
import AuthModal from './components/AuthModal';
import OrderTrackerModal from './components/OrderTrackerModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import ToastContainer from './components/Toast';

export default function App() {
  return (
    <ShopProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Navigation & Header */}
        <Header />

        {/* Main Content Flow */}
        <main style={{ flex: 1 }}>
          <HeroBanner />
          <FlashDeals />
          <CategorySection />
          <ProductGrid />
          <Testimonials />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Modals & Drawers */}
        <ProductDetailModal />
        <CartDrawer />
        <WishlistDrawer />
        <CheckoutModal />
        <AuthModal />
        <OrderTrackerModal />
        <WhatsAppWidget />
        <ToastContainer />
      </div>
    </ShopProvider>
  );
}

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext(null);

export const FREE_SHIPPING_THRESHOLD = 3500;
export const STANDARD_SHIPPING_FEE = 199;

export function ShopProvider({ children }) {
  // Products
  const [products, setProducts] = useState(PRODUCTS);
  
  // Cart
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('nexa_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('nexa_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [priceRange, setPriceRange] = useState([1000, 25000]);
  const [sortBy, setSortBy] = useState('featured');
  const [onlyFlashDeals, setOnlyFlashDeals] = useState(false);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState(null);

  // Promo code
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // in percent
  const [promoMessage, setPromoMessage] = useState(null);

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  // Mock User
  const [user, setUser] = useState({
    name: 'Saad Ahmed',
    email: 'saad.tech@gmail.com',
    phone: '0308-2200040',
    city: 'Peshawar',
    address: 'Sector F-4, Phase 6, Hayatabad',
    isLoggedIn: false,
    pastOrders: [
      {
        id: 'NX-89421',
        date: '2026-09-28',
        items: ['Zeblaze Stratos 3 Pro AMOLED GPS Smartwatch'],
        total: 9499,
        status: 'Delivered',
        payment: 'Cash On Delivery'
      }
    ]
  });

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('nexa_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('nexa_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Toast trigger
  const showToast = (message, type = 'success', duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Cart operations
  const addToCart = (product, quantity = 1, selectedColor = null) => {
    const color = selectedColor || (product.colors && product.colors[0]) || 'Standard';
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.id === product.id && item.selectedColor === color);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { ...product, quantity, selectedColor: color }];
      }
    });
    showToast(`Added "${product.name.slice(0, 28)}..." to cart!`, 'success');
  };

  const updateQuantity = (itemId, color, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId, color);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId && item.selectedColor === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (itemId, color) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === itemId && item.selectedColor === color)));
    showToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    const exists = wishlist.some(item => item.id === product.id);
    if (exists) {
      setWishlist(prev => prev.filter(item => item.id !== product.id));
      showToast('Removed from wishlist', 'info');
    } else {
      setWishlist(prev => [...prev, product]);
      showToast('Saved to wishlist!', 'success');
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Coupon handling
  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'NEXA10' || cleanCode === 'AJWA10') {
      setAppliedDiscount(10);
      setPromoMessage({ text: '10% Discount applied successfully!', type: 'success' });
      showToast('Promo code applied! 10% off', 'success');
      return true;
    } else if (cleanCode === 'WELCOME5') {
      setAppliedDiscount(5);
      setPromoMessage({ text: '5% Welcome discount applied!', type: 'success' });
      showToast('Promo code applied! 5% off', 'success');
      return true;
    } else {
      setPromoMessage({ text: 'Invalid coupon code. Try "NEXA10"', type: 'error' });
      showToast('Invalid coupon code', 'error');
      return false;
    }
  };

  const removeCoupon = () => {
    setPromoCode('');
    setAppliedDiscount(0);
    setPromoMessage(null);
  };

  // Cart Calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const discountAmount = Math.round((cartSubtotal * appliedDiscount) / 100);
  const shippingFee = cartSubtotal === 0 || cartSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
  const cartGrandTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  // Price formatter in PKR
  const formatPrice = (amount) => {
    return `Rs. ${Number(amount).toLocaleString('en-PK')}`;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedBrand,
        setSelectedBrand,
        priceRange,
        setPriceRange,
        sortBy,
        setSortBy,
        onlyFlashDeals,
        setOnlyFlashDeals,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAuthOpen,
        setIsAuthOpen,
        isTrackerOpen,
        setIsTrackerOpen,
        activeProductModal,
        setActiveProductModal,
        promoCode,
        setPromoCode,
        appliedDiscount,
        promoMessage,
        applyCoupon,
        removeCoupon,
        toasts,
        showToast,
        removeToast,
        user,
        setUser,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toggleWishlist,
        isInWishlist,
        cartSubtotal,
        cartItemCount,
        discountAmount,
        shippingFee,
        cartGrandTotal,
        freeShippingProgress,
        amountNeededForFreeShipping,
        formatPrice
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

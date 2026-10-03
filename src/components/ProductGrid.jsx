import React from 'react';
import { useShop } from '../context/ShopContext';
import {
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
  Search,
  Flame,
  Check
} from 'lucide-react';
import ProductCard from './ProductCard';
import { BRANDS } from '../data/products';

export default function ProductGrid() {
  const {
    products,
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
    formatPrice
  } = useShop();

  // Filter products based on search, category, brand, price, flash sale
  const filteredProducts = products.filter(product => {
    // Search
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchBrand = product.brand.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchCat && !matchDesc) {
        return false;
      }
    }

    // Category
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }

    // Brand
    if (selectedBrand !== 'All Brands' && product.brand !== selectedBrand) {
      return false;
    }

    // Price
    if (product.price > priceRange[1]) {
      return false;
    }

    // Flash Deals
    if (onlyFlashDeals && !product.isFlashDeal) {
      return false;
    }

    return true;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    }
    if (sortBy === 'price-high') {
      return b.price - a.price;
    }
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    if (sortBy === 'discount') {
      return b.discount - a.discount;
    }
    // Default featured: bestsellers first, then newest
    if (a.isBestSeller && !b.isBestSeller) return -1;
    if (!a.isBestSeller && b.isBestSeller) return 1;
    return 0;
  });

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('All Brands');
    setPriceRange([1000, 25000]);
    setSortBy('featured');
    setOnlyFlashDeals(false);
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'all' ||
    selectedBrand !== 'All Brands' ||
    priceRange[1] < 25000 ||
    onlyFlashDeals ||
    sortBy !== 'featured';

  return (
    <section id="catalog-section" style={{ padding: '40px 0 60px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '14px'
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
              <span>Verified Tech Inventory</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em'
            }}>
              Featured Gadgets & Accessories
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              Showing <strong style={{ color: '#fff' }}>{sortedProducts.length}</strong> of {products.length} items
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetAllFilters}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#f87171',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={13} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div style={{
          background: 'rgba(19, 27, 46, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '16px 20px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {/* Brand Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '4px',
            maxWidth: '100%',
            scrollbarWidth: 'none'
          }}>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, whiteSpace: 'nowrap' }}>
              Brand:
            </span>
            {BRANDS.map(brand => {
              const isSelected = selectedBrand === brand;
              return (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '20px',
                    background: isSelected ? '#06b6d4' : 'rgba(255, 255, 255, 0.05)',
                    color: isSelected ? '#04111d' : '#cbd5e1',
                    border: isSelected ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.8rem',
                    fontWeight: isSelected ? 700 : 500,
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s'
                  }}
                >
                  {brand}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Price Slider & Sorting */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {/* Price Cap Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                Max Price: <strong style={{ color: '#06b6d4' }}>{formatPrice(priceRange[1])}</strong>
              </span>
              <input
                type="range"
                min="3000"
                max="25000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                style={{
                  accentColor: '#06b6d4',
                  cursor: 'pointer',
                  width: '120px'
                }}
              />
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#f8fafc',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  fontSize: '0.825rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="featured">Featured & Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Search / Filter Notification pill */}
        {searchQuery && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(6, 182, 212, 0.15)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            padding: '6px 14px',
            borderRadius: '20px',
            color: '#38bdf8',
            fontSize: '0.85rem',
            marginBottom: '20px'
          }}>
            <Search size={14} />
            <span>Search results for: <strong>"{searchQuery}"</strong></span>
            <button
              onClick={() => setSearchQuery('')}
              style={{ color: '#94a3b8', marginLeft: '6px', fontWeight: 700 }}
            >
              ×
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {sortedProducts.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '24px'
          }}>
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'rgba(19, 27, 46, 0.5)',
            borderRadius: '20px',
            border: '1px dashed rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(6, 182, 212, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#06b6d4',
              margin: '0 auto 16px auto'
            }}>
              <Search size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '8px' }}>
              No gadgets found matching your criteria
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto 20px auto' }}>
              Try adjusting your price range, clearing the search term, or switching the selected category.
            </p>
            <button
              onClick={resetAllFilters}
              className="btn btn-primary btn-sm"
            >
              <RotateCcw size={14} />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

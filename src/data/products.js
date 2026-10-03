// Realistic gadget catalog with Pakistani Rupee (PKR) pricing, real-world specs, and high-quality tech imagery

export const CATEGORIES = [
  { id: 'all', name: 'All Gadgets', icon: 'Sparkles', count: 24 },
  { id: 'smartwatches', name: 'Smartwatches', icon: 'Watch', count: 6 },
  { id: 'earbuds', name: 'Wireless Earbuds', icon: 'Headphones', count: 6 },
  { id: 'powerbanks', name: 'Power Banks', icon: 'BatteryCharging', count: 4 },
  { id: 'chargers', name: 'Fast Chargers & GaN', icon: 'Zap', count: 4 },
  { id: 'gaming', name: 'Gaming Gear', icon: 'Gamepad2', count: 4 },
  { id: 'audio', name: 'Bluetooth Speakers', icon: 'Volume2', count: 3 },
  { id: 'cables', name: 'Cables & Hubs', icon: 'Cable', count: 3 }
];

export const BRANDS = [
  'All Brands',
  'SoundPEATS',
  'Anker',
  'Haylou',
  'Zeblaze',
  'Mcdodo',
  'Faster',
  'Ronin',
  'Audionic'
];

export const PRODUCTS = [
  {
    id: 'sw-01',
    name: 'Zeblaze Stratos 3 Pro AMOLED GPS Smartwatch',
    category: 'smartwatches',
    brand: 'Zeblaze',
    price: 9499,
    originalPrice: 14999,
    discount: 37,
    rating: 4.9,
    reviewsCount: 128,
    isFlashDeal: true,
    isBestSeller: true,
    isNew: false,
    stock: 14,
    badge: 'Hot Seller',
    warranty: '1 Year Official Warranty',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Obsidian Black', 'Titanium Silver', 'Desert Orange'],
    keySpecs: ['1.43" Ultra HD AMOLED (1000 nits)', 'Built-in GPS & Route Import', 'Bluetooth Calling v5.3', 'IP68 5ATM Water Resistant', '14-Day Battery Life'],
    description: 'The Zeblaze Stratos 3 Pro features an Ultra HD AMOLED display with 1000 nits peak brightness, 4-satellite precision GPS, Hi-Fi Bluetooth calling, and over 130 sport modes. Built with aircraft-grade aluminum bezel and zinc alloy case for extreme outdoor durability.',
    inBox: ['Smartwatch with Silicone Strap', 'Magnetic Fast Charging Cable', 'User Manual & Warranty Card']
  },
  {
    id: 'eb-01',
    name: 'SoundPEATS Capsule3 Pro+ Hi-Res ANC Wireless Earbuds',
    category: 'earbuds',
    brand: 'SoundPEATS',
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    rating: 4.8,
    reviewsCount: 215,
    isFlashDeal: true,
    isBestSeller: true,
    isNew: true,
    stock: 19,
    badge: 'Hi-Res Audio',
    warranty: '1 Year Brand Warranty',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Matte Black', 'Pearl White', 'Navy Blue'],
    keySpecs: ['43dB Hybrid Active Noise Cancellation', 'LDAC Codec & Hi-Res Wireless Certified', 'MEMS Solid-State Speaker Driver', '43-Hour Playtime with Case', 'Low Latency Gaming Mode 70ms'],
    description: 'Next-generation acoustics powered by dual drivers (dynamic + xMEMS driver) and LDAC high-fidelity decoding. Hybrid ANC cuts ambient drone noise by up to 43dB, ideal for travel and crowded environments across Pakistan.',
    inBox: ['SoundPEATS Capsule3 Pro+ Earbuds', 'Wireless Charging Case', '3 Pairs Silicone Ear Tips (S/M/L)', 'USB-C Cable', 'Warranty Guide']
  },
  {
    id: 'pb-01',
    name: 'Anker 737 Power Bank (PowerCore 24K) 140W PD 3.1',
    category: 'powerbanks',
    brand: 'Anker',
    price: 18499,
    originalPrice: 24999,
    discount: 26,
    rating: 5.0,
    reviewsCount: 89,
    isFlashDeal: false,
    isBestSeller: true,
    isNew: false,
    stock: 8,
    badge: '140W Beast',
    warranty: '18 Months Anker Warranty',
    image: 'https://images.unsplash.com/photo-1609592424364-893cfbbcfbe7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609592424364-893cfbbcfbe7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Space Gray'],
    keySpecs: ['140W Ultra-Fast 2-Way Charging', 'Smart Digital Display with Wattage Meter', '24,000mAh Heavy Duty Capacity', 'Powers Laptops, MacBooks & Phones', 'ActiveShield 2.0 Temperature Monitoring'],
    description: 'Equipped with the latest Power Delivery 3.1 and bi-directional technology to quickly recharge the portable charger or get a 140W ultra-powerful charge for MacBook Pro 16", iPhones, Samsung devices, and drones simultaneously.',
    inBox: ['Anker 737 Power Bank', '140W USB-C to USB-C Cable (2 ft)', 'Travel Pouch', 'Welcome Guide']
  },
  {
    id: 'ch-01',
    name: 'Mcdodo 67W GaN 5 Pro 3-Port Fast Wall Charger',
    category: 'chargers',
    brand: 'Mcdodo',
    price: 4699,
    originalPrice: 6500,
    discount: 28,
    rating: 4.8,
    reviewsCount: 164,
    isFlashDeal: true,
    isBestSeller: true,
    isNew: false,
    stock: 25,
    badge: 'GaN 5 Tech',
    warranty: '6 Months Replacement Warranty',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Crystal White', 'Carbon Black'],
    keySpecs: ['67W Max High Power Delivery', '2x USB-C + 1x USB-A Ports', 'GaN 5 Pro Chip (Runs 30% Cooler)', 'Fast Charges iPhone 15/16 & Galaxy S24', 'EU/Pakistan 2-Pin Plug'],
    description: 'Compact yet mighty. Fast charge your laptop and smartphone simultaneously with cutting-edge Gallium Nitride 5th Gen technology. Universal compatibility with PD 3.0, QC 4.0+, PPS, and AFC.',
    inBox: ['Mcdodo 67W GaN Charger', 'Manual']
  },
  {
    id: 'sw-02',
    name: 'Haylou Solar Pro Smartwatch with Bluetooth Calling',
    category: 'smartwatches',
    brand: 'Haylou',
    price: 6899,
    originalPrice: 9999,
    discount: 31,
    rating: 4.7,
    reviewsCount: 94,
    isFlashDeal: false,
    isBestSeller: false,
    isNew: true,
    stock: 17,
    badge: 'Popular',
    warranty: '1 Year Warranty',
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Midnight Black', 'Metallic Silver'],
    keySpecs: ['1.43" AMOLED 466*466 Display', 'Rotary Crown Navigation', 'Anti-Corrosive Metal Bezel', 'SOS Emergency Call Button', '100+ Professional Fitness Modes'],
    description: 'Featuring an AMOLED vibrant circular display with rotatable dial crown, continuous 24/7 heart rate and SpO2 tracking, noise-cancelled Bluetooth speakerphone calling, and 20-day standby stamina.',
    inBox: ['Haylou Solar Pro Watch', 'Silicone Strap', 'Charging Cable', 'Manual']
  },
  {
    id: 'eb-02',
    name: 'Faster Z10 Pro True Wireless Gaming Earbuds 35ms',
    category: 'earbuds',
    brand: 'Faster',
    price: 3799,
    originalPrice: 5500,
    discount: 31,
    rating: 4.6,
    reviewsCount: 310,
    isFlashDeal: true,
    isBestSeller: true,
    isNew: false,
    stock: 40,
    badge: 'Budget King',
    warranty: '1 Year Official Faster Warranty',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Neon Green & Black', 'Glacier White'],
    keySpecs: ['35ms Ultra Low Latency for PUBG/FreeFire', 'ENC Quad Mics for Crystal Clear Squad Chat', 'RGB Mecha Breathing Case Lights', '32 Hours Total Playback', 'IPX5 Sweat & Water Resistant'],
    description: 'Designed specially for Pakistani mobile gamers. Instant 35ms response syncs audio flawlessly with gameplay. Powerful 13mm bass drivers deliver thumping explosions and pinpoint enemy footsteps.',
    inBox: ['Faster Z10 Earbuds', 'Cyberpunk RGB Charging Case', 'Type-C Cable', 'Ear Tips Set']
  },
  {
    id: 'gm-01',
    name: 'Redragon H510 Zeus X RGB 7.1 Surround Gaming Headset',
    category: 'gaming',
    brand: 'Faster',
    price: 8499,
    originalPrice: 11999,
    discount: 29,
    rating: 4.9,
    reviewsCount: 78,
    isFlashDeal: false,
    isBestSeller: true,
    isNew: false,
    stock: 11,
    badge: '7.1 Surround',
    warranty: '1 Year Warranty',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Stealth Black', 'Lunar White'],
    keySpecs: ['53mm Audio Drivers with 7.1 Surround Sound', 'Memory Foam Ear Pads with Breathable Fabric', 'Detachable Noise-Cancelling Microphone', 'In-Line EQ & Audio Control Box', 'USB Braided Connection'],
    description: 'Immerse yourself into every battlefield detail with 53mm neodymium directional audio drivers and hardware-level 7.1 virtual surround sound. Durable steel frame with plush memory foam for marathon PC and console gaming sessions.',
    inBox: ['Zeus X RGB Headset', 'Detachable Microphone', 'USB Controller Cable', 'User Manual']
  },
  {
    id: 'pb-02',
    name: 'Ronin R-97 20,000mAh 22.5W Super Fast Power Bank',
    category: 'powerbanks',
    brand: 'Ronin',
    price: 5299,
    originalPrice: 7500,
    discount: 29,
    rating: 4.7,
    reviewsCount: 182,
    isFlashDeal: true,
    isBestSeller: true,
    isNew: false,
    stock: 30,
    badge: 'Bestseller',
    warranty: '1 Year Ronin Warranty',
    image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1609592424364-893cfbbcfbe7?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Graphite Black', 'Alpine White'],
    keySpecs: ['20,000mAh Grade-A Li-Polymer Cell', '22.5W Huawei SuperCharge & PD 20W', 'Digital LED Battery Percentage Display', 'Dual USB-A + Type-C Input/Output', 'Airline Flight Approved'],
    description: 'Pakistan’s favorite high-capacity portable charger. Charge your smartphone up to 4.5 times on a single charge. Features smart chip protection against over-voltage, short circuit, and over-charging during load-shedding.',
    inBox: ['Ronin R-97 Power Bank', 'Micro-USB Cable', 'Warranty Card']
  },
  {
    id: 'sp-01',
    name: 'Audionic Sugar 40 Portable Bluetooth Speaker with Mic',
    category: 'audio',
    brand: 'Audionic',
    price: 4199,
    originalPrice: 5999,
    discount: 30,
    rating: 4.6,
    reviewsCount: 147,
    isFlashDeal: false,
    isBestSeller: false,
    isNew: false,
    stock: 22,
    badge: 'Includes Karaoke Mic',
    warranty: '1 Year Brand Warranty',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Classic Black', 'Ruby Red', 'Royal Blue'],
    keySpecs: ['10W RMS Dynamic Deep Bass Output', 'Included Wired Karaoke Microphone', 'RGB Ambient Party Flame Lights', 'FM Radio / USB / TF Card / AUX / BT', 'Rechargeable 5-Hour Lithium Battery'],
    description: 'The quintessential party companion for outdoor picnics and family gatherings. Delivers punchy treble and warm bass with dynamic RGB flame lights that groove with the beat.',
    inBox: ['Sugar 40 Speaker', 'Wired Karaoke Mic', 'Charging Cable', 'AUX Cable']
  },
  {
    id: 'sw-03',
    name: 'Kieslect Ks Pro Calling Smartwatch with 2.01" AMOLED',
    category: 'smartwatches',
    brand: 'Haylou',
    price: 11499,
    originalPrice: 16500,
    discount: 30,
    rating: 4.8,
    reviewsCount: 104,
    isFlashDeal: false,
    isBestSeller: true,
    isNew: true,
    stock: 12,
    badge: 'Huge AMOLED',
    warranty: '1 Year Official Warranty',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Silver Chrome', 'Dark Metal'],
    keySpecs: ['Massive 2.01" Super AMOLED Screen (60Hz)', 'Kieslect OS with AI Voice Assistant', 'Abnormal Heart Rate & Stress Alert', 'Magnetic Quick-Release Dual Straps', 'IP68 Waterproof'],
    description: 'Boasts an expansive 2.01-inch bezel-less curved AMOLED screen. Make and receive calls effortlessly with built-in HD speaker and microphone. Comes bundled with an extra magnetic Milanese strap in the package.',
    inBox: ['Kieslect Ks Pro Watch', 'Orange/Yellow Magnetic Strap', 'Black Silicone Strap', 'Magnetic Charger', 'Manual']
  },
  {
    id: 'eb-03',
    name: 'Anker Soundcore Life P20i True Wireless Earbuds',
    category: 'earbuds',
    brand: 'Anker',
    price: 5499,
    originalPrice: 7999,
    discount: 31,
    rating: 4.9,
    reviewsCount: 298,
    isFlashDeal: true,
    isBestSeller: true,
    isNew: false,
    stock: 35,
    badge: 'Top Rated',
    warranty: '18 Months Anker Official Warranty',
    image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Black', 'White'],
    keySpecs: ['10mm Oversized Drivers for Thumping Bass', '30 Hours Long Battery (10h Single Charge)', 'Soundcore App Custom EQ (22 Presets)', 'AI-Enhanced 2-Mic Clear Calls', 'IPX5 Waterproof with Lanyard Case'],
    description: 'Exceptional clarity and deep punchy bass trusted by thousands of audio enthusiasts. Personalize sound profiles using the Soundcore companion smartphone app and enjoy marathon listening.',
    inBox: ['Life P20i Earbuds', 'Charging Case with Lanyard', 'Ear Tips (S/M/L)', 'USB-C Cable', 'Warranty Manual']
  },
  {
    id: 'cb-01',
    name: 'Mcdodo 100W PD Digital Display 6A Fast Charging Cable',
    category: 'cables',
    brand: 'Mcdodo',
    price: 1899,
    originalPrice: 2800,
    discount: 32,
    rating: 4.9,
    reviewsCount: 340,
    isFlashDeal: false,
    isBestSeller: true,
    isNew: false,
    stock: 50,
    badge: 'Live Wattage',
    warranty: '6 Months Replacement Warranty',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Space Grey (1.2m)', 'Space Grey (2m)'],
    keySpecs: ['Real-Time Real-Watts LED Display', '100W E-Marker Smart Chip Protection', 'Dual Type-C Connectors with Gold Plating', 'Zinc Alloy Housing with Nylon Braiding', '480Mbps Fast Data Sync'],
    description: 'See your real-time charging speed right on the connector! The embedded digital screen displays instant wattage drawn by your laptop or smartphone. Tested to withstand over 30,000 bends.',
    inBox: ['Mcdodo 100W Digital Cable', 'Velcro Cable Tie', 'Warranty Card']
  },
  {
    id: 'ch-02',
    name: 'Anker 313 Charger (Ace 45W) Super Fast Charger for Samsung',
    category: 'chargers',
    brand: 'Anker',
    price: 4999,
    originalPrice: 6999,
    discount: 28,
    rating: 4.8,
    reviewsCount: 112,
    isFlashDeal: false,
    isBestSeller: true,
    isNew: false,
    stock: 20,
    badge: 'Samsung 45W Ready',
    warranty: '18 Months Anker Warranty',
    image: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Phantom Black', 'White'],
    keySpecs: ['Supports Samsung Super Fast Charging 2.0 (45W)', 'Ultra-Compact Foldable GaN II Technology', 'MultiProtect Comprehensive Safety Guard', 'Charges S24 Ultra to 50% in 20 Mins', 'Universal PD 3.0 PPS Support'],
    description: 'Engineered specifically to unlock Samsung’s maximum 45W Super Fast Charging 2.0 protocol. Powered by GaN II technology to keep the wall plug ultra-compact without overheating.',
    inBox: ['Anker 313 45W Charger', 'Welcome Guide']
  },
  {
    id: 'gm-02',
    name: 'Flydigi Vader 3 Pro Wireless Gaming Controller for PC/Switch/Mobile',
    category: 'gaming',
    brand: 'SoundPEATS',
    price: 13999,
    originalPrice: 18500,
    discount: 24,
    rating: 5.0,
    reviewsCount: 52,
    isFlashDeal: false,
    isBestSeller: false,
    isNew: true,
    stock: 7,
    badge: 'Hall Effect',
    warranty: '6 Months Warranty',
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Shadow Black', 'Special Cyber Edition'],
    keySpecs: ['Hall Effect Drift-Free Joysticks', 'Switchable Micro-Switch / Linear Dual Triggers', '4 Mechanical Re-mappable Back Buttons', '500Hz Polling Rate (Wireless & Wired)', 'RGB Strip & Gyroscope 6-Axis'],
    description: 'The pinnacle of competitive controller gaming. Never worry about stick drift again with contactless Hall Effect sensors. Easily toggle between instant mouse-click trigger stops for FPS shooters or smooth linear analog travel for racing games.',
    inBox: ['Vader 3 Pro Controller', '2.4G Low-Latency USB Wireless Dongle', 'Braided USB-C Cable', 'Manual']
  },
  {
    id: 'pb-03',
    name: 'Faster W20 10,000mAh Magnetic Wireless Power Bank',
    category: 'powerbanks',
    brand: 'Faster',
    price: 4899,
    originalPrice: 6999,
    discount: 30,
    rating: 4.7,
    reviewsCount: 134,
    isFlashDeal: true,
    isBestSeller: true,
    isNew: false,
    stock: 28,
    badge: 'MagSafe Compatible',
    warranty: '1 Year Faster Warranty',
    image: 'https://images.unsplash.com/photo-1609592424364-893cfbbcfbe7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609592424364-893cfbbcfbe7?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Titanium Grey', 'Frost Blue', 'Ivory White'],
    keySpecs: ['Strong MagSafe Snap-On 15W Wireless Charge', '20W PD Fast Cable Output & Input', 'Foldable Kickstand for Hands-Free Viewing', 'Ultra-Slim 14mm Pocket Profile', 'Compatible with iPhone 12-16 & Qi Phones'],
    description: 'Snaps magnetically to the back of your iPhone or MagSafe case. Features an integrated aluminum kickstand so you can stream Netflix, YouTube, or FaceTime hands-free while your device charges.',
    inBox: ['Faster W20 MagSafe Power Bank', 'USB-C to C Braided Cable', 'Magnetic Ring Adapter for Android']
  },
  {
    id: 'sp-02',
    name: 'Anker Soundcore Motion 300 Hi-Res Wireless Speaker',
    category: 'audio',
    brand: 'Anker',
    price: 16999,
    originalPrice: 22000,
    discount: 22,
    rating: 4.9,
    reviewsCount: 63,
    isFlashDeal: false,
    isBestSeller: false,
    isNew: true,
    stock: 9,
    badge: 'Hi-Res Stereo',
    warranty: '18 Months Anker Warranty',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Mirage Black', 'Frost Blue', 'Fern Green'],
    keySpecs: ['Wireless Hi-Res Audio Certified with LDAC', '30W Stereo Sound with SmartTune Technology', 'IPX7 Full Waterproof & Submersible', '13-Hour Long Lasting Playtime', 'Detachable Utility Strap'],
    description: 'Features world-first SmartTune technology that automatically detects the speaker position (standing, lying down, or hanging) to optimize sound projection. Equipped with full LDAC wireless decoding for 3x more audio detail.',
    inBox: ['Soundcore Motion 300 Speaker', 'USB-C Cable', 'Carabiner Lanyard', 'Guide']
  }
];

export const TRUST_PROMISES = [
  {
    icon: 'Truck',
    title: 'Cash On Delivery',
    subtitle: 'Pay at your doorstep all over Pakistan'
  },
  {
    icon: 'ShieldCheck',
    title: '7-Day Replacement',
    subtitle: 'Checking warranty & instant swap'
  },
  {
    icon: 'Award',
    title: '100% Original Tech',
    subtitle: 'Direct imports & official distributor stock'
  },
  {
    icon: 'Headphones',
    title: 'WhatsApp Assistance',
    subtitle: 'Live human support 7 days a week'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Hamza Tariq',
    city: 'Lahore (DHA Phase 5)',
    rating: 5,
    date: '2 days ago',
    verified: true,
    product: 'Zeblaze Stratos 3 Pro',
    comment: 'Ordered via Cash on Delivery and received it within 48 hours in Lahore. Watch is 100% original, AMOLED display is stunning under sunlight, and the calling feature is crystal clear. Highly recommended!'
  },
  {
    id: 2,
    name: 'Sardar Bilal Khan',
    city: 'Peshawar (University Town)',
    rating: 5,
    date: '5 days ago',
    verified: true,
    product: 'SoundPEATS Capsule3 Pro+',
    comment: 'I usually buy gadgets from Karkhano market directly, but ordering from NexaGadgets saved me the trip. Same wholesale rates, sealed box with brand warranty card inside. ANC quality is unbelievable for this price.'
  },
  {
    id: 3,
    name: 'Zainab Mustafa',
    city: 'Karachi (Gulshan-e-Iqbal)',
    rating: 5,
    date: '1 week ago',
    verified: true,
    product: 'Mcdodo 67W GaN Charger & Cable',
    comment: 'Charges my MacBook Air and iPhone simultaneously without heating up at all. Delivery to Karachi was fast via Trax courier. Packaging was super bubble-wrapped.'
  },
  {
    id: 4,
    name: 'Dr. Shahzad Ali',
    city: 'Islamabad (F-10/2)',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    product: 'Anker 737 140W Power Bank',
    comment: 'Authentic Anker product! The digital display showing live watts input/output is super helpful during power outages in summer. Definitely my go-to gadget store now.'
  }
];

export const PAKISTAN_CITIES = [
  'Karachi',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Peshawar',
  'Faisalabad',
  'Multan',
  'Gujranwala',
  'Quetta',
  'Sialkot',
  'Hyderabad',
  'Abbottabad',
  'Mardan',
  'Swat',
  'Bahawalpur',
  'Sargodha',
  'Sukkur'
];

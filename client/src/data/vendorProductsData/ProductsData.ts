export type ProductsDataProps = {
  image: string;
  name: string;
  category: string;
  items: {
    [key: string]: string[];
  };
};
export const ProductsData: ProductsDataProps[] = [
  {
    image: "ProductsCategoryPage/Vector-10.svg",
    category: "beauty",
    name: "Beauty of Skin",
    items: {
      "Radiant Complexion": [
        "Glowing skin",
        "Healthy luminosity",
        "Natural radiance",
        "Youthful brightness",
        "Dewy appearance",
        "Other",
      ],
      "Skin Texture Smoothness": [
        "Slik-like softness",
        "Pore refinement",
        "Flawless finish",
        "Velvety touch",
        "Even skin tone",
        "Other",
      ],
      "Hydration and Moisture": [
        "Supple and plump",
        "Moisture retention",
        "Deep hydration",
        "Nourished skin",
        "Dewy suppleness",
        "Other",
      ],
      "Skin Clarity and Clearness": [
        "Blemish-free beauty",
        "Clear complexion",
        "Transparent skin",
        "Pimple-free radiance",
        "Dewy appearance",
        "Other",
      ],
      "Elasticity and Firmness": [
        "Resilient skin",
        "Firm and toned",
        "Youthful bounce",
        "Elastic suppleness",
        "Tightened appearance",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-3.svg",
    category: "bags",
    name: "Bags",
    items: {
      "Tote Bags": [
        "Spacious and versatile",
        "Ideal for everyday use",
        "Durable materials available",
        "Fashionable designs",
        "Other",
      ],
      Backpacks: [
        "Hands-free carrying option",
        "Great for commuting or travel",
        "Various sizes and styles",
        "Comfortable shoulder straps",
        "Other",
      ],
      "Crossbody Bags": [
        "Adjustable crossbody strap",
        "Compact and easy to carry",
        "Perfect for on-the-go",
        "Stylish and functional",
        "Other",
      ],
      "Clutch Purses": [
        "Small and elegant",
        "Evening or formal events",
        "Minimalist design",
        "Often handheld",
        "Other",
      ],
      "Messenger Bags": [
        "Single shoulder strap",
        "Satchel-style design",
        "Popular for work or school",
        "Multiple compartments",
        "Other",
      ],
      "Duffel Bags": [
        "Large and spacious",
        "Great for travel or sports",
        "Easy access to belongings",
        "Sturdy handles and straps",
        "Other",
      ],
      "Hobo Bags": [
        "Slouchy, crescent shape",
        "Casual and bohemian style",
        "Comfortable to carry",
        "Roomy interior",
        "Other",
      ],
      "Satchel Bags": [
        "Structured and chic",
        "Top handle and crossbody strap",
        "Professional appearance",
        "Organized compartments",
        "Other",
      ],
      "Bucket Bags": [
        "Unique bucket shape",
        "Drawstring closure",
        "Trendy and spacious",
        "Casual yet fashionable",
        "Other",
      ],
      "Wallets and Pouches": [
        "Compact for essentials",
        "Card slots and pockets",
        "Convenient for small items",
        "Often used as accessories",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-12.svg",
    category: "awesome",
    name: "Awesome Lip Care",
    items: {
      "Lip Balm Flavors": [
        "Fruit-infused balms",
        "Minty fresh options",
        "Exotic tropical blends",
        "Natural, unscented choices",
        "Other",
      ],
      "Lip Scrub Varieties": [
        "Sugar scrub options",
        "Exfoliating lip treatments",
        "Flavored scrub selections",
        "Gentle, sensitive formulas",
        "Other",
      ],
      "Lip Mask Benefits": [
        "Hydrating overnight masks",
        "Plumping lip treatments",
        "Nourishing, vitamin-rich masks",
        "Repairing cracked lip masks",
        "Other",
      ],
      "Lip Sunscreen Protection": [
        "SPF-infused lip balms",
        "Sunblock lip sticks",
        "UV lip protection",
        "Broad-spectrum SPF choices",
        "Other",
      ],
      "Lip Tint Options": [
        "Sheer tinted lip balms",
        "Bold, pigmented lip stains",
        "Matte lip color choices",
        "Natural lip enhancers",
        "Other",
      ],
      "Lip Care Tools": [
        "Lip scrub brushes",
        "Lip exfoliation pads",
        "Lip applicator wands",
        "Lip mask silicone molds",
        "Other",
      ],
      "Organic Lip Products": [
        "All-natural lip balms",
        "Organic lip scrubs",
        "Chemical-free lip care",
        "Eco-friendly lip options",
        "Other",
      ],
      "Lip Care for Seasons": [
        "Winter lip protection",
        "Summer sun care",
        "Fall lip hydration",
        "Spring lip renewal",
        "Other",
      ],
      "Lip Care for Special Needs": [
        "Sensitive skin solutions",
        "Vegan lip care products",
        "Gluten-free lip options",
        "Cruelty-free lip care",
        "Other",
      ],
      "DIY Lip Care Recipes": [
        "Homemade lip balms",
        "DIY lip scrubs",
        "Natural lip mask ideas",
        "Custom lip care creations",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector.svg",
    category: "mobileTablets",
    name: "Mobile Tablets",
    items: {
      Android: [
        "Samsung",
        "LG",
        "Sony",
        "Motorola",
        "Asus",
        "Lenovo",
        "TCL",
        "Other",
      ],
      iOS: ["Apple"],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-1.svg",
    category: "necklaces",
    name: "Necklaces",
    items: {
      "Chain Necklaces": [
        "Cable Link Chains",
        "Figaro Chain Styles",
        "Rolo Chain Designs",
        "Snake Chain Varieties",
        "Other",
      ],
      "Layered Necklaces": [
        "Multistrand Necklace Sets",
        "Mixed Metal Layering",
        "Delicate Layered Chains",
        "Personalized Layered Styles",
        "Other",
      ],
      "Pendant Necklaces": [
        "Gemstone Pendants",
        "Initial Letter Charms",
        "Religious Symbols",
        "Locket Pendant Styles",
        "Other",
      ],
      "Choker Necklaces": [
        "Velvet Choker Trends",
        "Gothic Choker Designs",
        "Pearl Choker Styles",
        "Leather Choker Options",
        "Other",
      ],
      "Statement Necklaces": [
        "Bohemian Statement Pieces",
        "Crystal Statement Jewelry",
        "Geometric Statement Necklaces",
        "Vintage-inspired Statements",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-7.svg",
    category: "clothing",
    name: "Clothing",
    items: {
      Tops: ["T-shirts", "Blouses", "Hoodies", "Tank tops", "Other"],
      Bottoms: ["Jeans", "Leggings", "Shorts", "Trousers", "Other"],
      Outerwear: ["Jackets", "Coats", "Vests", "Raincoats", "Other"],
      Dresses: [
        "Evening gowns",
        "Maxi dresses",
        "Cocktail dresses",
        "Shift dresses",
        "Other",
      ],
      Activewear: [
        "Yoga pants",
        "Running shorts",
        "Athletic shirts",
        "Compression leggings",
        "Other",
      ],
      Sleepwear: ["Pajamas", "Nightgowns", "Sleep shirts", "Robes", "Other"],
      Swimwear: [
        "One-pieces",
        "Swim trunks",
        "Rash guards",
        "Cover-ups",
        "Other",
      ],
      Workwear: ["Suits", "Dress shirts", "Slacks", "Work boots", "Other"],
      "Baby clothing": [
        "Onesies",
        "Baby rompers",
        "Infant socks",
        "Baby bibs",
        "Other",
      ],
      Uniforms: [
        "School uniforms",
        "Military uniforms",
        "Medical scrubs",
        "Police uniforms",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-6.svg",
    category: "bluetooth",
    name: "Bluetooth",
    items: {
      "Bluetooth Classic": [
        "Legacy wireless technology",
        "Supports audio and data",
        "Common in older devices",
        "Other",
      ],
      "Bluetooth Low Energy": [
        "Energy-efficient connectivity",
        "Ideal for IoT devices",
        "Lower data transfer rate",
        "Other",
      ],
      "Bluetooth 5.0": [
        "Improved range and speed",
        "Enhanced data throughput",
        "Better coexistence with Wi-Fi",
        "Other",
      ],
      "Bluetooth 5.1": [
        "Precise location tracking",
        "Direction-finding capability",
        "Enhanced security features",
        "Other",
      ],
      "Bluetooth 5.2": [
        "Audio Sharing feature",
        "LE Audio improvements",
        "Enhanced multi-device support",
        "Other",
      ],
      "Bluetooth Mesh": [
        "Mesh network topology",
        "Scalable IoT connectivity",
        "Reliable data transmission",
        "Other",
      ],
      "Bluetooth 5.3": [
        "Future advancements expected",
        "Potential new features",
        "Improved efficiency and security",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-14.svg",
    category: "facial",
    name: "Facial Care",
    items: {
      "Cleansers and Scrubs": [
        "Facial cleansers",
        "Exfoliating scrubs",
        "Micellar water",
        "Makeup removers",
        "Other",
      ],
      "Moisturizers and Serums": [
        "Hydrating moisturizers",
        "Anti-aging serums",
        "Vitamin C serums",
        "Night creams",
        "Other",
      ],
      "Sun Protection": [
        "Sunscreen lotions",
        "SPF lip balms",
        "Sunscreen sprays",
        "After-sun care",
        "Other",
      ],
      "Acne Treatment": [
        "Acne cleansers",
        "Spot treatments",
        "Oil-free moisturizers",
        "Acne masks",
        "Other",
      ],
      "Face Masks and Peels": [
        "Sheet masks",
        "Clay masks",
        "Chemical peels",
        "Hydrating masks",
        "Other",
      ],
      "Eye Care Products": [
        "Eye creams",
        "Under-eye serums",
        "Eye gels",
        "Cooling eye masks",
        "Other",
      ],
      "Facial Tools and Devices": [
        "Facial rollers",
        "Jade gua sha tools",
        "Derma rollers",
        "Electric cleansing brushes",
        "Other",
      ],
      "Toning and Astringents": [
        "Facial toners",
        "Witch hazel",
        "Astringent solutions",
        "pH-balancing tonics",
        "Other",
      ],
      "Makeup Removers": [
        "Makeup wipes",
        "Oil-based removers",
        "Micellar cleansing water",
        "Dual-phase removers",
        "Other",
      ],
      "Anti-Aging Products": [
        "Wrinkle creams",
        "Retinol treatments",
        "Collagen boosters",
        "Firming serums",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-13.svg",
    category: "shoes",
    name: "Shoes",
    items: {
      "Athletic Footwear": [
        "Running Shoes",
        "Basketball Sneakers",
        "Soccer Cleats",
        "Cross Training Shoes",
        "Tennis Court Footwear",
        "Other",
      ],
      "Casual Footwear": [
        "Sneakers and Trainers",
        "Loafers and Slip-Ons",
        "Espadrilles and Flats",
        "Boat Shoes",
        "Moccasins",
        "Other",
      ],
      "Formal Footwear": [
        "Dress Shoes",
        "Oxfords and Brogues",
        "Derby Shoes",
        "Monk Strap Shoes",
        "Tuxedo Footwear",
        "Other",
      ],
      "Boots and Booties": [
        "Ankle Boots",
        "Knee-High Boots",
        "Hiking Boots",
        "Cowboy Boots",
        "Other",
      ],
      "Sandals and Flip-Flops": [
        "Slide Sandals",
        "Gladiator Sandals",
        "Thong Flip-Flops",
        "Wedge Sandals",
        "Espadrille Sandals",
        "Other",
      ],
      "Outdoor and Hiking": [
        "Trail Running Shoes",
        "Mountaineering Boots",
        "Snow Boots",
        "Water Shoes",
        "Climbing Shoes",
        "Other",
      ],
      "Work and Safety": [
        "Steel Toe Boots",
        "Slip-Resistant Shoes",
        "Electric Hazard Boots",
        "Chef's Shoes",
        "Nursing Clogs",
        "Other",
      ],
      "Specialty Footwear": [
        "Dance Shoes",
        "Bowling Shoes",
        "Cycling Shoes",
        "Golf Cleats",
        "Weightlifting Shoes",
        "Other",
      ],
      "Fashion Sneakers": [
        "High-Top Sneakers",
        "Low-Top Sneakers",
        "Platform Sneakers",
        "Chunky Sneakers",
        "Retro Athletic Shoes",
        "Other",
      ],
      "Kids' Footwear": [
        "Children's Sandals",
        "Toddler Sneakers",
        "School Uniform Shoes",
        "Infant Booties",
        "Youth Sports Shoes",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-11.svg",
    category: "cpu",
    name: "CPU",
    items: {
      "Central Processing Unit": [
        "Core modal-windows of computers",
        "Executes instructions, performs calculations",
        "Brain of the computer system",
        "Handles data processing tasks",
        "Other",
      ],
      Microprocessors: [
        "Compact CPU integrated circuits",
        "Power most personal devices",
        "Execute program instructions",
        "Vital for modern computing",
        "Other",
      ],
      "Multi-Core Processors": [
        "Multiple CPUs on one chip",
        "Enhance multitasking performance",
        "Improve overall processing speed",
        "Common in modern computers",
        "Other",
      ],
      "Graphics Processing Unit": [
        "Specialized for graphics rendering",
        "Accelerate 3D graphics tasks",
        "Vital for gaming and design",
        "Parallel processing capabilities",
        "Other",
      ],
      "Embedded Processors": [
        "Found in everyday devices",
        "Power IoT devices",
        "Tailored for specific tasks",
        "Low power consumption",
        "Other",
      ],
      "Server Processors": [
        "Designed for server tasks",
        "Handle heavy workloads",
        "Support multiple users",
        "Offer reliability and scalability",
        "Other",
      ],
      "Mobile Processors": [
        "Power smartphones and tablets",
        "Optimize power efficiency",
        "Incorporate ARM architecture",
        "Enable mobile computing",
        "Other",
      ],
      "Desktop Processors": [
        "Found in traditional PCs",
        "Balance performance and power",
        "Suitable for general tasks",
        "Overclocking capabilities",
        "Other",
      ],
      "Workstation CPUs": [
        "High-end for professional work",
        "Handle demanding applications",
        "Ideal for content creation",
        "Enhanced performance and reliability",
        "Other",
      ],
      "Mainframe Processors": [
        "Large-scale computing systems",
        "Support critical operations",
        "High availability and reliability",
        "Serve enterprise-level needs",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-9.svg",
    category: "discover",
    name: "Discover Skincare",
    items: {
      Cleansing: [
        "Facial Cleansers",
        "Makeup Removers",
        "Exfoliating Scrubs",
        "Cleansing Oils",
        "Micellar Waters",
        "Other",
      ],
      Moisturizing: [
        "Hydrating Creams",
        "Sunscreen Lotions",
        "Anti-Aging Serums",
        "Night Moisturizers",
        "Body Lotions",
        "Other",
      ],
      "Acne Treatment": [
        "Spot Treatments",
        "Acne Cleansers",
        "Salicylic Acid Products",
        "Benzoyl Peroxide Creams",
        "Tea Tree Oil Remedies",
        "Other",
      ],
      "Anti-Aging": [
        "Wrinkle Creams",
        "Collagen Boosters",
        "Retinol Serums",
        "Firming Moisturizers",
        "Peptide Formulas",
        "Other",
      ],
      "Sun Protection": [
        "SPF Sunscreens",
        "Sunblock Lotions",
        "UV Protection Products",
        "Sunscreen Sprays",
        "After-Sun Care",
        "Other",
      ],
      "Serums and Essences": [
        "Hyaluronic Serums",
        "Vitamin C Boosters",
        "Niacinamide Essences",
        "Antioxidant Serums",
        "Skin-Brightening Treatments",
        "Other",
      ],
      "Masks and Treatments": [
        "Sheet Masks",
        "Clay Masks",
        "Overnight Masks",
        "Chemical Peels",
        "Spot Treatment Patches",
        "Other",
      ],
      "Eye Care": [
        "Eye Creams",
        "Dark Circle Serums",
        "Anti-Puffiness Gels",
        "Eye Masks",
        "Lash and Brow Serums",
        "Other",
      ],
      "Specialty Skincare": [
        "Lip Balms",
        "Hand Creams",
        "Scar Treatment",
        "Tattoo Aftercare",
        "Foot Care Products",
        "Other",
      ],
      "Natural and Organic": [
        "Organic Skincare",
        "Vegan Formulas",
        "Clean Beauty",
        "Plant-Based Products",
        "Cruelty-Free Brands",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-4.svg",
    category: "headphones",
    name: "Headphones",
    items: {
      "Over-Ear Headphones": [
        "Full-size ear cups",
        "Noise isolation",
        "Comfortable for long use",
        "Other",
      ],
      "In-Ear Earbuds": [
        "Compact and portable",
        "Noise-cancelling options",
        "Ideal for on-the-go",
        "Other",
      ],
      "On-Ear Headphones": [
        "Smaller ear cups",
        "Lightweight and portable",
        "Good for daily commuting",
        "Other",
      ],
      "Wireless Bluetooth Headphones": [
        "Cordless convenience",
        "Great for workouts",
        "Range of styles available",
        "Other",
      ],
      "Gaming Headsets": [
        "Built-in microphones",
        "Surround sound support",
        "Comfortable for gaming sessions",
        "Other",
      ],
      "Studio Monitor Headphones": [
        "High-fidelity audio",
        "Precise sound reproduction",
        "Preferred by audio professionals",
        "Other",
      ],
      "Sports and Workout Earphones": [
        "Sweat-resistant design",
        "Secure fit during exercise",
        "In-line controls for music",
        "Other",
      ],
      "ANC Headphones": [
        "Blocks external noise",
        "Immersive audio experience",
        "Ideal for travel",
        "Other",
      ],
      "DJ Headphones": [
        "Rotating ear cups",
        "Excellent sound clarity",
        "Durable for DJ use",
        "Other",
      ],
      "Open-Back Headphones": [
        "Natural soundstage",
        "Less sound isolation",
        "Preferred for critical listening",
        "Other",
      ],
      "Closed-Back Headphones": [
        "Enhanced noise isolation",
        "Minimal sound leakage",
        "Great for private listening",
        "Other",
      ],
      "Kids' Headphones": [
        "Volume-limiting for safety",
        "Colorful and durable",
        "Kid-friendly designs",
        "Other",
      ],
      "Audiophile Headphones": [
        "High-end audio quality",
        "Premium materials",
        "Designed for audio enthusiasts",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-8.svg",
    category: "bracelets",
    name: "Bracelets",
    items: {
      "Metallic Bracelets": [
        "Gold, Silver, Copper",
        "Stainless Steel Bands",
        "Other",
      ],
      "Beaded Bracelets": ["Gemstone Beads", "Wood and Seed Beads", "Other"],
      "Leather Bracelets": [
        "Braided Leather Bands",
        "Cuff Leather Straps",
        "Other",
      ],
      "Charm Bracelets": ["Personalized Charms", "Vintage Charms", "Other"],
      "Friendship Bracelets": [
        "Woven Friendship Bands",
        "Matching Bracelet Sets",
        "Other",
      ],
      "Cuff Bracelets": ["Wide Metal Cuffs", "Engraved Cuff Styles", "Other"],
      "Chain Bracelets": [
        "Link Chain Designs",
        "Delicate Chain Bracelets",
        "Other",
      ],
      "Bangle Bracelets": ["Stacking Bangles", "Enamel Bangles", "Other"],
      "Braided Bracelets": ["Macrame Braids", "Paracord Bracelets", "Other"],
      "Wrap Bracelets": ["Leather Wrap Styles", "Boho Wrap Bands", "Other"],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-5.svg",
    category: "smartWatch",
    name: "Smart Watch",
    items: {
      "Fitness Trackers": [
        "Health monitoring features",
        "Step counting capability",
        "Heart rate tracking",
        "Other",
      ],
      "Sport Watches": [
        "GPS for outdoor activities",
        "Workout-specific modes",
        "Robust durability",
        "Other",
      ],
      "Fashion Smartwatches": [
        "Stylish design options",
        "Customizable watch faces",
        "Accessory-focused",
        "Other",
      ],
      "GPS Running Watches": [
        "Precise location tracking",
        "Pace and distance metrics",
        "Training assistance",
        "Other",
      ],
      "Hybrid Smartwatches": [
        "Analog look with smart features",
        "Minimal digital display",
        "Long battery life",
        "Other",
      ],
      "Kids' Smartwatches": [
        "Child safety features",
        "Limited communication",
        "Parental controls",
        "Other",
      ],
      "Luxury Smartwatches": [
        "Premium materials",
        "High-end craftsmanship",
        "Exclusive brand collaborations",
        "Other",
      ],
      "Outdoor Adventure Watches": [
        "Altitude and weather sensors",
        "Navigation tools",
        "Rugged construction",
        "Other",
      ],
      "Medical Wearables": [
        "Health condition monitoring",
        "Medication reminders",
        "Emergency alerts",
        "Other",
      ],
      "Budget Smartwatches": [
        "Affordable price range",
        "Basic smart features",
        "Value for money",
        "Other",
      ],
    },
  },
  {
    image: "ProductsCategoryPage/Vector-2.svg",
    category: "earrings",
    name: "Earrings",
    items: {
      "Stud Earrings": [
        "Diamond studs",
        "Pearl studs",
        "Gemstone studs",
        "Gold stud earrings",
        "Other",
      ],
      "Hoop Earrings": [
        "Small hoop earrings",
        "Silver hoop earrings",
        "Diamond hoop earrings",
        "Bamboo hoop earrings",
        "Other",
      ],
      "Dangle Earrings": [
        "Chandelier dangles",
        "Tassel dangle earrings",
        "Drop earrings",
        "Statement dangles",
        "Other",
      ],
      "Huggee Earrings": [
        "Mini huggie hoops",
        "CZ huggie earrings",
        "Thick huggie hoops",
        "Gold huggee earrings",
        "Other",
      ],
      "Ear Cuffs": [
        "Cartilage ear cuffs",
        "Ear wrap cuffs",
        "Statement ear cuffs",
        "Crystal ear cuffs",
        "Other",
      ],
      "Threader Earrings": [
        "Chain threader earrings",
        "Bar threader earrings",
        "Long threader earrings",
        "Minimalist threaders",
        "Other",
      ],
      "Chandelier Earrings": [
        "Vintage chandeliers",
        "Boho chandelier earrings",
        "Crystal chandeliers",
        "Bridal chandelier earrings",
        "Other",
      ],
      "Clip-On Earrings": [
        "Vintage clip-ons",
        "Clip-on hoop earrings",
        "Non-pierced earrings",
        "Pearl clip-on earrings",
        "Other",
      ],
      "Tassel Earrings": [
        "Fringe tassel earrings",
        "Silk tassel earrings",
        "Beaded tassel dangles",
        "Bohemian tassel earrings",
        "Other",
      ],
      "Statement Earrings": [
        "Oversized earrings",
        "Bold statement studs",
        "Dramatic drop earrings",
        "Exaggerated hoops",
        "Other",
      ],
    },
  },
];

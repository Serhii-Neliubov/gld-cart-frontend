import { Link } from "react-router-dom";
import styles from "./RentingProductsPage.module.scss";
import React, { FC } from "react";

const clearClick: IClearClick = {
  beauty: false,
  bags: false,
  awesome: false,
  mobileTablets: false,
  necklaces: false,
  clothing: false,
  bluetooth: false,
  facial: false,
  shoes: false,
  cpu: false,
  discover: false,
  headphones: false,
  bracelets: false,
  smartWatch: false,
  earrings: false,
  openbeauty: false,
  openbags: false,
  openawesome: false,
  openmobileTablets: false,
  opennecklaces: false,
  openclothing: false,
  openbluetooth: false,
  openfacial: false,
  openshoes: false,
  opencpu: false,
  opendiscover: false,
  openheadphones: false,
  openbracelets: false,
  opensmartWatch: false,
  openearrings: false,
};

interface IClearClick {
  beauty: boolean;
  bags: boolean;
  awesome: boolean;
  mobileTablets: boolean;
  necklaces: boolean;
  clothing: boolean;
  bluetooth: boolean;
  facial: boolean;
  shoes: boolean;
  cpu: boolean;
  discover: boolean;
  headphones: boolean;
  bracelets: boolean;
  smartWatch: boolean;
  earrings: boolean;
  openbeauty: boolean;
  openbags: boolean;
  openawesome: boolean;
  openmobileTablets: boolean;
  opennecklaces: boolean;
  openclothing: boolean;
  openbluetooth: boolean;
  openfacial: boolean;
  openshoes: boolean;
  opencpu: boolean;
  opendiscover: boolean;
  openheadphones: boolean;
  openbracelets: boolean;
  opensmartWatch: boolean;
  openearrings: boolean;
}

const beauty = [
  { name: "Radiant Complexion" },
  { name: "Skin Texture Smoothness" },
  { name: "Hydration and Moisture" },
  { name: "Skin Clarity and Clearness" },
  { name: "Elasticity and Firmness" },
];

const beautySub = [
  { name: "Glowing skin" },
  { name: "Healthy luminosity" },
  { name: "Natural radiance" },
  { name: "Youthful brightness" },
  { name: "Dewy appearance" },
  { name: "Other" },
];

const skinTexture = [
  { name: "Silk-like softness" },
  { name: "Pore refinement" },
  { name: "Flawless finish" },
  { name: "Velvety touch" },
  { name: "Even skin tone" },
  { name: "Other" },
];

const hydration = [
  { name: "Supple and plump" },
  { name: "Moisture retention" },
  { name: "Deep hydration" },
  { name: "Nourished skin" },
  { name: "Dewy suppleness" },
  { name: "Other" },
];

const skinClarity = [
  { name: "Blemish-free beauty" },
  { name: "Clear complexion" },
  { name: "Transparent skin" },
  { name: "Pimple-free radiance" },
  { name: "Dewy appearance" },
  { name: "Other" },
];

const elasticity = [
  { name: "Resilient skin" },
  { name: "Firm and toned" },
  { name: "Youthful bounce" },
  { name: "Elastic suppleness" },
  { name: "Tightened appearance" },
  { name: "Other" },
];

const bags = [
  { name: "Tote Bags" },
  { name: "Backpacks" },
  { name: "Crossbody Bags" },
  { name: "Clutch Purses" },
  { name: "Messenger Bags" },
  { name: "Duffel Bags" },
  { name: "Hobo Bags" },
  { name: "Satchel Bags" },
  { name: "Bucket Bags" },
  { name: "Wallets and Pouches" },
];

const toteBags = [
  { name: "Spacious and versatile" },
  { name: "Ideal for everyday use" },
  { name: "Durable materials available" },
  { name: "Fashionable designs" },
  { name: "Other" },
];

const backpacks = [
  { name: "Hands-free carrying option" },
  { name: "Great for commuting or travel" },
  { name: "Various sizes and styles" },
  { name: "Comfortable shoulder straps" },
  { name: "Other" },
];

const crossbody = [
  { name: "Adjustable crossbody strap" },
  { name: "Compact and easy to carry" },
  { name: "Perfect for on-the-go" },
  { name: "Stylish and functional" },
  { name: "Other" },
];

const clutch = [
  { name: "Small and elegant" },
  { name: "Evening or formal events" },
  { name: "Minimalist design" },
  { name: "Often handheld" },
  { name: "Other" },
];

const messenger = [
  { name: "Single shoulder strap" },
  { name: "Satchel-style design" },
  { name: "Popular for work or school" },
  { name: "Multiple compartments" },
  { name: "Other" },
];

const duffel = [
  { name: "Large and spacious" },
  { name: "Great for travel or sports" },
  { name: "Easy access to belongings" },
  { name: "Sturdy handles and straps" },
  { name: "Other" },
];

const hobo = [
  { name: "Slouchy, crescent shape" },
  { name: "Casual and bohemian style" },
  { name: "Comfortable to carry" },
  { name: "Roomy interior" },
  { name: "Other" },
];

const satchel = [
  { name: "Structured and chic" },
  { name: "Top handle and crossbody strap" },
  { name: "Professional appearance" },
  { name: "Organized compartments" },
  { name: "Other" },
];

const bucket = [
  { name: "Unique bucket shape" },
  { name: "Drawstring closure" },
  { name: "Trendy and spacious" },
  { name: "Casual yet fashionable" },
  { name: "Other" },
];

const wallets = [
  { name: "Compact for essentials" },
  { name: "Card slots and pockets" },
  { name: "Convenient for small items" },
  { name: "Often used as accessories" },
  { name: "Other" },
];

const awesome = [
  { name: "Lip Balm Flavors" },
  { name: "Lip Scrub Varieties" },
  { name: "Lip Mask Benefits" },
  { name: "Lip Sunscreen Protection" },
  { name: "Lip Tint Options" },
  { name: "Lip Care Tools" },
  { name: "Organic Lip Products" },
  { name: "Lip Care for Seasons" },
  { name: "Lip Care for Special Needs" },
  { name: "DIY Lip Care Recipes" },
];
const mobileTablets = [{ name: "Android" }, { name: "iOS" }];
const necklaces = [
  { name: "Chain Necklaces" },
  { name: "Layered Necklaces" },
  { name: "Pendant Necklaces" },
  { name: "Choker Necklaces" },
  { name: "Statement Necklaces" },
];
const clothing = [
  { name: "Tops" },
  { name: "Bottoms" },
  { name: "Outerwear" },
  { name: "Dresses" },
  { name: "Activewear" },
  { name: "Sleepwear" },
  { name: "Swimwear" },
  { name: "Workwear" },
  { name: "Baby clothing" },
  { name: "Uniforms" },
];
const bluetooth = [
  { name: "Bluetooth Classic" },
  { name: "Bluetooth Low Energy" },
  { name: "Bluetooth 5.0" },
  { name: "Bluetooth 5.1" },
  { name: "Bluetooth 5.2" },
  { name: "Bluetooth Mesh" },
  { name: "Bluetooth 5.3" },
];
const facial = [
  { name: "Cleansers and Scrubs" },
  { name: "Moisturizers and Serums" },
  { name: "Sun Protection" },
  { name: "Acne Treatment" },
  { name: "Face Masks and Peels" },
  { name: "Eye Care Products" },
  { name: "Facial Tools and Devices" },
  { name: "Toning and Astringents" },
  { name: "Makeup Removers" },
  { name: "Anti-Aging Products" },
];
const shoes = [
  { name: "Athletic Footwear" },
  { name: "Casual Footwear" },
  { name: "Formal Footwear" },
  { name: "Boots and Booties" },
  { name: "Sandals and Flip-Flops" },
  { name: "Outdoor and Hiking" },
  { name: "Work and Safety" },
  { name: "Specialty Footwear" },
  { name: "Fashion Sneakers" },
  { name: "Kids' Footwear" },
];
const cpu = [
  { name: "Central Processing Unit" },
  { name: "Microprocessors" },
  { name: "Multi-Core Processors" },
  { name: "Graphics Processing Unit" },
  { name: "Embedded Processors" },
  { name: "Server Processors" },
  { name: "Mobile Processors" },
  { name: "Desktop Processors" },
  { name: "Workstation CPUs" },
  { name: "Mainframe Processors" },
];
const discover = [
  { name: "Cleansing" },
  { name: "Moisturizing" },
  { name: "Discover Acne Treatment" },
  { name: "Discover Anti-Aging" },
  { name: "Discover Sun Protection" },
  { name: "Serums and Essences" },
  { name: "Masks and Treatments" },
  { name: "Eye Care" },
  { name: "Specialty Skincare" },
  { name: "Natural and Organic" },
];
const headphones = [
  { name: "Over-Ear Headphones" },
  { name: "In-Ear Earbuds" },
  { name: "On-Ear Headphones" },
  { name: "Wireless Bluetooth Headphones" },
  { name: "Gaming Headsets" },
  { name: "Studio Monitor Headphones" },
  { name: "Sports and Workout Earphones" },
  { name: "ANC Headphones" },
  { name: "DJ Headphones" },
  { name: "Open-Back Headphones" },
  { name: "Closed-Back Headphones" },
  { name: "Kids' Headphones" },
  { name: "Audiophile Headphones" },
];
const bracelets = [
  { name: "Metallic Bracelets" },
  { name: "Beaded Bracelets" },
  { name: "Leather Bracelets" },
  { name: "Charm Bracelets" },
  { name: "Friendship Bracelets" },
  { name: "Cuff Bracelets" },
  { name: "Chain Bracelets" },
  { name: "Bangle Bracelets" },
  { name: "Braided Bracelets" },
  { name: "Wrap Bracelets" },
];

const smartWatch = [
  { name: "Fitness Trackers" },
  { name: "Sport Watches" },
  { name: "Fashion Smartwatches" },
  { name: "GPS Running Watches" },
  { name: "Hybrid Smartwatches" },
  { name: "Kids' Smartwatches" },
  { name: "Luxury Smartwatches" },
  { name: "Outdoor Adventure Watches" },
  { name: "Medical Wearables" },
  { name: "Budget Smartwatches" },
];

const earrings = [
  { name: "Stud Earrings" },
  { name: "Hoop Earrings" },
  { name: "Dangle Earrings" },
  { name: "Huggee Earrings" },
  { name: "Ear Cuffs" },
  { name: "Threader Earrings" },
  { name: "Chandelier Earrings" },
  { name: "Clip-On Earrings" },
  { name: "Tassel Earrings" },
  { name: "Statement Earrings" },
];

const lipBalm = [
  { name: "Fruit-infused balms" },
  { name: "Minty fresh options" },
  { name: "Exotic tropical blends" },
  { name: "Natural, unscented choices" },
  { name: "Other" },
];

const lipScrub = [
  { name: "Sugar scrub options" },
  { name: "Exfoliating lip treatments" },
  { name: "Flavored scrub selections" },
  { name: "Gentle, sensitive formulas" },
  { name: "Other" },
];

const lipMusk = [
  { name: "Hydrating overnight masks" },
  { name: "Plumping lip treatments" },
  { name: "Nourishing, vitamin-rich masks" },
  { name: "Repairing cracked lip masks" },
  { name: "Other" },
];

const lipSunscreen = [
  { name: "SPF-infused lip balms" },
  { name: "Sunblock lip sticks" },
  { name: "UV lip protection" },
  { name: "Broad-spectrum SPF choices" },
  { name: "Other" },
];

const lipTint = [
  { name: "Sheer tinted lip balms" },
  { name: "Bold, pigmented lip stains" },
  { name: "Matte lip color choices" },
  { name: "Natural lip enhancers" },
  { name: "Other" },
];

const lipCare = [
  { name: "Lip scrub brushes" },
  { name: "Lip exfoliation pads" },
  { name: "Lip applicator wands" },
  { name: "Lip mask silicone molds" },
  { name: "Other" },
];
const organicLip = [
  { name: "All-natural lip balms" },
  { name: "Organic lip scrubs" },
  { name: "Chemical-free lip care" },
  { name: "Eco-friendly lip options" },
  { name: "Other" },
];
const lipCareSeasons = [
  { name: "Winter lip protection" },
  { name: "Summer sun care" },
  { name: "Fall lip hydration" },
  { name: "Spring lip renewal" },
  { name: "Other" },
];
const lipCareSpecial = [
  { name: "Sensitive skin solutions" },
  { name: "Vegan lip care products" },
  { name: "Gluten-free lip options" },
  { name: "Cruelty-free lip care" },
  { name: "Other" },
];
const android = [
  { name: "Samsung" },
  { name: "LG" },
  { name: "Sony" },
  { name: "Motorola" },
  { name: "Asus" },
  { name: "Lenovo" },
  { name: "TCL" },
  { name: "Honor" },
];
const iOS = [{ name: "Apple" }];

const chainNeckaces = [
  { name: "Cable Link Chains" },
  { name: "Figaro Chain Styles" },
  { name: "Rolo Chain Designs" },
  { name: "Snake Chain Varieties" },
  { name: "Other" },
];
const layeredNeckaces = [
  { name: "Multistrand Necklace Sets" },
  { name: "Mixed Metal Layering" },
  { name: "Delicate Layered Chains" },
  { name: "Personalized Layered Styles" },
  { name: "Other" },
];
const pandantNeckaces = [
  { name: "Gemstone Pendants" },
  { name: "Initial Letter Charms" },
  { name: "Religious Symbols" },
  { name: "Locket Pendant Styles" },
  { name: "Other" },
];
const chokerNeckaces = [
  { name: "Velvet Choker Trends" },
  { name: "Gothic Choker Designs" },
  { name: "Pearl Choker Styles" },
  { name: "Leather Choker Options" },
  { name: "Other" },
];
const statementNecklaces = [
  { name: "Bohemian Statement Pieces" },
  { name: "Crystal Statement Jewelry" },
  { name: "Geometric Statement Necklaces" },
  { name: "Vintage-inspired Statements" },
  { name: "Other" },
];
const tops = [
  { name: "T-shirts" },
  { name: "Blouses" },
  { name: "Hoodies" },
  { name: "Tank tops" },
  { name: "Other" },
];
const bottoms = [
  { name: "Jeans" },
  { name: "Leggings" },
  { name: "Shorts" },
  { name: "Trousers" },
  { name: "Other" },
];
const outerwear = [
  { name: "Jackets" },
  { name: "Coats" },
  { name: "Vests" },
  { name: "Raincoats" },
  { name: "Other" },
];
const dresses = [
  { name: "Evening gowns" },
  { name: "Maxi dresses" },
  { name: "Cocktail dresses" },
  { name: "Shift dresses" },
  { name: "Other" },
];
const activewear = [
  { name: "Yoga pants" },
  { name: "Running shorts" },
  { name: "Athletic shirts" },
  { name: "Compression leggings" },
  { name: "Other" },
];
const sleepwear = [
  { name: "Pajamas" },
  { name: "Nightgowns" },
  { name: "Sleep shirts" },
  { name: "Robes" },
  { name: "Other" },
];
const swimwear = [
  { name: "One-pieces" },
  { name: "Swim trunks" },
  { name: "Rash guards" },
  { name: "Cover-ups" },
  { name: "Other" },
];

const workwear = [
  { name: "Suits" },
  { name: "Dress shirts" },
  { name: "Slacks" },
  { name: "Work boots" },
  { name: "Other" },
];
const bClassic = [
  { name: "Legacy wireless technology" },
  { name: "Supports audio and data" },
  { name: "Common in older devices" },
  { name: "Other" },
];
const bLowEnergy = [
  { name: "Energy-efficient connectivity" },
  { name: "Ideal for IoT devices" },
  { name: "Lower data transfer rate" },
  { name: "Other" },
];

const bFive = [
  { name: "Improved range and speed" },
  { name: "Enhanced data throughput" },
  { name: "Better coexistence with Wi-Fi" },
  { name: "Other" },
];
const bFiveOne = [
  { name: "Precise location tracking" },
  { name: "Direction-finding capability" },
  { name: "Enhanced security features" },
  { name: "Other" },
];
const bFiveTwo = [
  { name: "Audio Sharing feature" },
  { name: "LE Audio improvements" },
  { name: "Enhanced multi-device support" },
  { name: "Other" },
];
const bMesh = [
  { name: "Mesh network topology" },
  { name: "Scalable IoT connectivity" },
  { name: "Reliable data transmission" },
  { name: "Other" },
];
const bFiveThree = [
  { name: "Future advancements expected" },
  { name: "Potential new features" },
  { name: "Improved efficiency and security" },
  { name: "Other" },
];
const cleansers = [
  { name: "Facial cleansers" },
  { name: "Exfoliating scrubs" },
  { name: "Micellar water" },
  { name: "Makeup removers" },
  { name: "Other" },
];
const uniforms = [
  { name: "School uniforms" },
  { name: "Military uniforms" },
  { name: "Medical scrubs" },
  { name: "Police uniforms" },
  { name: "Other" },
];
const babyClothing = [
  { name: "Onesies" },
  { name: "Baby rompers" },
  { name: "Infant socks" },
  { name: "Baby bibs" },
  { name: "Other" },
];
const serums = [
  { name: "Hydrating moisturizers" },
  { name: "Anti-aging serums" },
  { name: "Vitamin C serums" },
  { name: "Night creams" },
  { name: "Other" },
];
const sunProtection = [
  { name: "Sunscreen lotions" },
  { name: "SPF lip balms" },
  { name: "Sunscreen sprays" },
  { name: "After-sun care" },
  { name: "Other" },
];
const acne = [
  { name: "Acne cleansers" },
  { name: "Spot treatments" },
  { name: "Oil-free moisturizers" },
  { name: "Acne masks" },
  { name: "Other" },
];
const faceMasks = [
  { name: "Sheet masks" },
  { name: "Clay masks" },
  { name: "Chemical peels" },
  { name: "Hydrating masks" },
  { name: "Other" },
];
const eyeCare = [
  { name: "Eye creams" },
  { name: "Under-eye serums" },
  { name: "Eye gels" },
  { name: "Cooling eye masks" },
  { name: "Other" },
];
const facialTools = [
  { name: "Facial rollers" },
  { name: "Jade gua sha tools" },
  { name: "Derma rollers" },
  { name: "Electric cleansing brushes" },
  { name: "Other" },
];
const toning = [
  { name: "Facial toners" },
  { name: "Witch hazel" },
  { name: "Astringent solutions" },
  { name: "pH-balancing tonics" },
  { name: "Other" },
];
const makeup = [
  { name: "Makeup wipes" },
  { name: "Oil-based removers" },
  { name: "Micellar cleansing water" },
  { name: "Dual-phase removers" },
  { name: "Other" },
];
const antiAging = [
  { name: "Wrinkle creams" },
  { name: "Retinol treatments" },
  { name: "Collagen boosters" },
  { name: "Firming serums" },
  { name: "Other" },
];
const athletic = [
  { name: "Running Shoes" },
  { name: "Basketball Sneakers" },
  { name: "Soccer Cleats" },
  { name: "Cross Training Shoes" },
  { name: "Tennis Court Footwear" },
  { name: "Other" },
];
const casual = [
  { name: "Sneakers and Trainers" },
  { name: "Loafers and Slip-Ons" },
  { name: "Espadrilles and Flats" },
  { name: "Boat Shoes" },
  { name: "Moccasins" },
  { name: "Other" },
];
const formal = [
  { name: "Dress Shoes" },
  { name: "Oxfords and Brogues" },
  { name: "Derby Shoes" },
  { name: "Monk Strap Shoes" },
  { name: "Tuxedo Footwear" },
  { name: "Other" },
];
const bootsAndBooties = [
  { name: "Ankle Boots" },
  { name: "Knee-High Boots" },
  { name: "Chelsea Boots" },
  { name: "Hiking Boots" },
  { name: "Cowboy Boots" },
  { name: "Other" },
];
const sandals = [
  { name: "Slide Sandals" },
  { name: "Gladiator Sandals" },
  { name: "Thong Flip-Flops" },
  { name: "Wedge Sandals" },
  { name: "Espadrille Sandals" },
  { name: "Other" },
];
const outdoor = [
  { name: "Trail Running Shoes" },
  { name: "Mountaineering Boots" },
  { name: "Snow Boots" },
  { name: "Water Shoes" },
  { name: "Climbing Shoes" },
  { name: "Other" },
];
const workAndSafety = [
  { name: "Steel Toe Boots" },
  { name: "Slip-Resistant Shoes" },
  { name: "Electric Hazard Boots" },
  { name: "Chef's Shoes" },
  { name: "Nursing Clogs" },
  { name: "Other" },
];
const speciality = [
  { name: "Dance Shoes" },
  { name: "Bowling Shoes" },
  { name: "Cycling Shoes" },
  { name: "Golf Cleats" },
  { name: "Weightlifting Shoes" },
  { name: "Other" },
];
const fashion = [
  { name: "High-Top Sneakers" },
  { name: "Low-Top Sneakers" },
  { name: "Platform Sneakers" },
  { name: "Chunky Sneakers" },
  { name: "Retro Athletic Shoes" },
  { name: "Other" },
];
const kids = [
  { name: "Children's Sandals" },
  { name: "Toddler Sneakers" },
  { name: "School Uniform Shoes" },
  { name: "Infant Booties" },
  { name: "Youth Sports Shoes" },
  { name: "Other" },
];
const centralProcessing = [
  { name: "Core components of computers" },
  { name: "Executes instructions, performs calculations" },
  { name: "Brain of the computer system" },
  { name: "Handles data processing tasks" },
  { name: "Other" },
];
const microprocessors = [
  { name: "Compact CPU integrated circuits" },
  { name: "Power most personal devices" },
  { name: "Execute program instructions" },
  { name: "Vital for modern computing" },
  { name: "Other" },
];
const multiCore = [
  { name: "Multiple CPUs on one chip" },
  { name: "Enhance multitasking performance" },
  { name: "Improve overall processing speed" },
  { name: "Common in modern computers" },
  { name: "Other" },
];
const graphics = [
  { name: "Specialized for graphics rendering" },
  { name: "Accelerate 3D graphics tasks" },
  { name: "Vital for gaming and design" },
  { name: "Parallel processing capabilities" },
  { name: "Other" },
];
const embedded = [
  { name: "Found in everyday devices" },
  { name: "Power IoT devices" },
  { name: "Tailored for specific tasks" },
  { name: "Low power consumption" },
  { name: "Other" },
];
const server = [
  { name: "Designed for server tasks" },
  { name: "Handle heavy workloads" },
  { name: "Support multiple users" },
  { name: "Offer reliability and scalability" },
  { name: "Other" },
];
const mobileProcessors = [
  { name: "Power smartphones and tablets" },
  { name: "Optimize power efficiency" },
  { name: "Incorporate ARM architecture" },
  { name: "Enable mobile computing" },
  { name: "Other" },
];
const desktop = [
  { name: "Found in traditional PCs" },
  { name: "Balance performance and power" },
  { name: "Suitable for general tasks" },
  { name: "Overclocking capabilities" },
  { name: "Other" },
];
const workstation = [
  { name: "High-end for professional work" },
  { name: "Handle demanding applications" },
  { name: "Ideal for content creation" },
  { name: "Enhanced performance and reliability" },
  { name: "Other" },
];
const DIYLipCare = [
  { name: "Homemade lip balms" },
  { name: "DIY lip scrubs" },
  { name: "Natural lip mask ideas" },
  { name: "Custom lip care creations" },
  { name: "Other" },
];
const mainframe = [
  { name: "Large-scale computing systems" },
  { name: "Support critical operations" },
  { name: "High availability and reliability" },
  { name: "Serve enterprise-level needs" },
  { name: "Other" },
];
const cleansing = [
  { name: "Facial Cleansers" },
  { name: "Makeup Removers" },
  { name: "Exfoliating Scrubs" },
  { name: "Cleansing Oils" },
  { name: "Micellar Waters" },
  { name: "Other" },
];
const moisturizing = [
  { name: "Hydrating Creams" },
  { name: "Sunscreen Lotions" },
  { name: "Anti-Aging Serums" },
  { name: "Night Moisturizers" },
  { name: "Body Lotions" },
  { name: "Other" },
];
const acneTreatment = [
  { name: "Spot Treatments" },
  { name: "Acne Cleansers" },
  { name: "Salicylic Acid Products" },
  { name: "Benzoyl Peroxide Creams" },
  { name: "Tea Tree Oil Remedies" },
  { name: "Other" },
];
const discoverAntiAging = [
  { name: "Wrinkle Creams" },
  { name: "Collagen Boosters" },
  { name: "Retinol Serums" },
  { name: "Firming Moisturizers" },
  { name: "Peptide Formulas" },
  { name: "Other" },
];
const discoverSunProtection = [
  { name: "SPF Sunscreens" },
  { name: "Sunblock Lotions" },
  { name: "UV Protection Products" },
  { name: "Sunscreen Sprays" },
  { name: "After-Sun Care" },
  { name: "Other" },
];
const serumsAndEssences = [
  { name: "Hyaluronic Serums" },
  { name: "Vitamin C Boosters" },
  { name: "Niacinamide Essences" },
  { name: "Antioxidant Serums" },
  { name: "Skin-Brightening Treatments" },
  { name: "Other" },
];
const discoverMasks = [
  { name: "Sheet Masks" },
  { name: "Clay Masks" },
  { name: "Overnight Masks" },
  { name: "Chemical Peels" },
  { name: "Spot Treatment Patches" },
  { name: "Other" },
];
const discoverEyeCare = [
  { name: "Eye Creams" },
  { name: "Dark Circle Serums" },
  { name: "Anti-Puffiness Gels" },
  { name: "Eye Masks" },
  { name: "Lash and Brow Serums" },
  { name: "Other" },
];
const specialitySkincare = [
  { name: "Lip Balms" },
  { name: "Hand Creams" },
  { name: "Scar Treatment" },
  { name: "Tattoo Aftercare" },
  { name: "Foot Care Products" },
  { name: "Other" },
];
const nuturalAndOrganic = [
  { name: "Organic Skincare" },
  { name: "Vegan Formulas" },
  { name: "Clean Beauty" },
  { name: "Plant-Based Products" },
  { name: "Cruelty-Free Brands" },
  { name: "Other" },
];
const overEar = [
  { name: "Full-size ear cups" },
  { name: "Noise isolation" },
  { name: "Comfortable for long use" },
  { name: "Other" },
];
const inEar = [
  { name: "Compact and portable" },
  { name: "Noise-cancelling options" },
  { name: "Ideal for on-the-go" },
  { name: "Other" },
];
const onEar = [
  { name: "Smaller ear cups" },
  { name: "Lightweight and portable" },
  { name: "Good for daily commuting" },
  { name: "Other" },
];
const wirelessbluetooth = [
  { name: "Cordless convenience" },
  { name: "Great for workouts" },
  { name: "Range of styles available" },
  { name: "Other" },
];

const gamingHeadsets = [
  { name: "Built-in microphones" },
  { name: "Surround sound support" },
  { name: "Comfortable for gaming sessions" },
  { name: "Other" },
];
const studioMonitor = [
  { name: "High-fidelity audio" },
  { name: "Precise sound reproduction" },
  { name: "Preferred by audio professionals" },
  { name: "Other" },
];
const sportsAndWorkout = [
  { name: "Sweat-resistant design" },
  { name: "Secure fit during exercise" },
  { name: "In-line controls for music" },
  { name: "Other" },
];
const ANCHeadphones = [
  { name: "Blocks external noise" },
  { name: "Immersive audio experience" },
  { name: "Ideal for travel" },
  { name: "Other" },
];
const DJHeadphones = [
  { name: "Rotating ear cups" },
  { name: "Excellent sound clarity" },
  { name: "Durable for DJ use" },
  { name: "Other" },
];
const openBack = [
  { name: "Natural soundstage" },
  { name: "Less sound isolation" },
  { name: "Preferred for critical listening" },
  { name: "Other" },
];
const closedBack = [
  { name: "Enhanced noise isolation" },
  { name: "Minimal sound leakage" },
  { name: "Great for private listening" },
  { name: "Other" },
];
const kidsHeadphones = [
  { name: "Volume-limiting for safety" },
  { name: "Colorful and durable" },
  { name: "Kid-friendly designs" },
  { name: "Other" },
];
const audiophile = [
  { name: "High-end audio quality" },
  { name: "Premium materials" },
  { name: "Designed for audio enthusiasts" },
  { name: "Other" },
];
const beaded = [
  { name: "Gemstone Beads" },
  { name: "Wood and Seed Beads" },
  { name: "Other" },
];
const leather = [
  { name: "Braided Leather Bands" },
  { name: "Cuff Leather Straps" },
  { name: "Other" },
];
const charm = [
  { name: "Personalized Charms" },
  { name: "Vintage Charms" },
  { name: "Other" },
];
const friendship = [
  { name: "Woven Friendship Bands" },
  { name: "Matching Bracelet Sets" },
  { name: "Other" },
];
const metallic = [
  { name: "Gold, Silver, Copper" },
  { name: "Stainless Steel Bands" },
  { name: "Other" },
];
const cuff = [
  { name: "Wide Metal Cuffs" },
  { name: "Engraved Cuff Styles" },
  { name: "Other" },
];
const chain = [
  { name: "Link Chain Designs" },
  { name: "Delicate Chain Bracelets" },
  { name: "Other" },
];
const bangle = [
  { name: "Stacking Bangles" },
  { name: "Enamel Bangles" },
  { name: "Other" },
];

const braided = [
  { name: "Macrame Braids" },
  { name: "Paracord Bracelets" },
  { name: "Other" },
];
const wrap = [
  { name: "Leather Wrap Styles" },
  { name: "Boho Wrap Bands" },
  { name: "Other" },
];
const fitnessTrackers = [
  { name: "Health monitoring features" },
  { name: "Step counting capability" },
  { name: "Heart rate tracking" },
  { name: "Other" },
];
const sportWatches = [
  { name: "GPS for outdoor activities" },
  { name: "Workout-specific modes" },
  { name: "Robust durability" },
  { name: "Other" },
];
const fashionSmartwatches = [
  { name: "Stylish design options" },
  { name: "Customizable watch faces" },
  { name: "Accessory-focused" },
  { name: "Other" },
];
const gpsRunningWatches = [
  { name: "Precise location tracking" },
  { name: "Pace and distance metrics" },
  { name: "Training assistance" },
  { name: "Other" },
];
const hybridSmart = [
  { name: "Analog look with smart features" },
  { name: "Minimal digital display" },
  { name: "Long battery life" },
  { name: "Other" },
];
const kidsWatches = [
  { name: "Child safety features" },
  { name: "Limited communication" },
  { name: "Parental controls" },
  { name: "Other" },
];
const luxuryWatches = [
  { name: "Premium materials" },
  { name: "High-end craftsmanship" },
  { name: "Exclusive brand collaborations" },
  { name: "Other" },
];
const outdoorWatches = [
  { name: "Altitude and weather sensors" },
  { name: "Navigation tools" },
  { name: "Rugged construction" },
  { name: "Other" },
];
const medicalWatches = [
  { name: "Health condition monitoring" },
  { name: "Medication reminders" },
  { name: "Emergency alerts" },
  { name: "Other" },
];
const budgetSmart = [
  { name: "Affordable price range" },
  { name: "Basic smart features" },
  { name: "Value for money" },
  { name: "Other" },
];
const studEarrings = [
  { name: "Diamond studs" },
  { name: "Pearl studs" },
  { name: "Gemstone studs" },
  { name: "Gold stud earrings" },
  { name: "other" },
];
const hoopEarrings = [
  { name: "Small hoop earrings" },
  { name: "Silver hoop earrings" },
  { name: "Diamond hoop earrings" },
  { name: "Bamboo hoop earrings" },
  { name: "other" },
];
const dangleEarrings = [
  { name: "Chandelier dangles" },
  { name: "Tassel dangle earrings" },
  { name: "Drop earrings" },
  { name: "Statement dangles" },
  { name: "other" },
];
const huggeeEarrings = [
  { name: "Mini huggie hoops" },
  { name: "CZ huggie earrings" },
  { name: "Thick huggie hoops" },
  { name: "Gold huggee earrings" },
  { name: "other" },
];
const earCuffs = [
  { name: "Cartilage ear cuffs" },
  { name: "Ear wrap cuffs" },
  { name: "Statement ear cuffs" },
  { name: "Crystal ear cuffs" },
  { name: "other" },
];
const threaderEarrings = [
  { name: "Chain threader earrings" },
  { name: "Bar threader earrings" },
  { name: "Long threader earrings" },
  { name: "Minimalist threaders" },
  { name: "other" },
];
const chandelierEarrings = [
  { name: "Vintage chandeliers" },
  { name: "Boho chandelier earrings" },
  { name: "Crystal chandeliers" },
  { name: "Bridal chandelier earrings" },
  { name: "other" },
];
const cliponEarrings = [
  { name: "Vintage clip-ons" },
  { name: "Clip-on hoop earrings" },
  { name: "Non-pierced earrings" },
  { name: "Pearl clip-on earrings" },
  { name: "other" },
];
const tasselEarrings = [
  { name: "Fringe tassel earrings" },
  { name: "Silk tassel earrings" },
  { name: "Beaded tassel dangles" },
  { name: "Bohemian tassel earrings" },
  { name: "other" },
];
const statementEarrings = [
  { name: "Oversized earrings" },
  { name: "Bold statement studs" },
  { name: "Dramatic drop earrings" },
  { name: "Exaggerated hoops" },
  { name: "other" },
];
const RentingProductsPage: FC = () => {
  const [isClicked, setIsClicked] = React.useState<IClearClick>(clearClick);
  const [selectedButton, setSelectedButton] = React.useState<string | null>(
    null
  );

  const handleButtonClick = (item: string) => {
    setSelectedButton(item);
  };

  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.routings}>
              <div className={styles.routing}>
                <div
                  style={
                    isClicked.beauty ||
                    isClicked.bags ||
                    isClicked.awesome ||
                    isClicked.mobileTablets ||
                    isClicked.necklaces ||
                    isClicked.clothing ||
                    isClicked.bluetooth ||
                    isClicked.facial ||
                    isClicked.shoes ||
                    isClicked.cpu ||
                    isClicked.discover ||
                    isClicked.headphones ||
                    isClicked.bracelets ||
                    isClicked.smartWatch ||
                    isClicked.earrings
                      ? { backgroundColor: "#02A0A0" }
                      : { backgroundColor: "#D9D9D9" }
                  }
                  className={styles.number}
                >
                  1
                </div>
                <span>Category</span>
              </div>
              <div className={styles.routing}>
                <div
                  style={
                    isClicked.openbeauty ||
                    isClicked.openbags ||
                    isClicked.openawesome ||
                    isClicked.openmobileTablets ||
                    isClicked.opennecklaces ||
                    isClicked.openclothing ||
                    isClicked.openbluetooth ||
                    isClicked.openfacial ||
                    isClicked.openshoes ||
                    isClicked.opencpu ||
                    isClicked.opendiscover ||
                    isClicked.openheadphones ||
                    isClicked.openbracelets ||
                    isClicked.opensmartWatch ||
                    isClicked.openearrings
                      ? { backgroundColor: "#02A0A0" }
                      : { backgroundColor: "#D9D9D9" }
                  }
                  className={styles.number}
                >
                  2
                </div>
                <span>Sub Category</span>
              </div>
              <div className={styles.routing}>
                <div
                  style={{ backgroundColor: "#D9D9D9" }}
                  className={styles.number}
                >
                  3
                </div>
                <span>Information</span>
              </div>
              <div className={styles.routing}>
                <div
                  style={{ backgroundColor: "#D9D9D9" }}
                  className={styles.number}
                >
                  4
                </div>
                <span>Photo & Video</span>
              </div>
              <div className={styles.routing}>
                <div
                  style={{ backgroundColor: "#D9D9D9" }}
                  className={styles.number}
                >
                  5
                </div>
                <span>Specifications</span>
              </div>
            </div>
            <div className={styles.content_blocks}>
              <h1>
                Select <span>PRODUCTS</span> Category
              </h1>
              <div className={styles.main_block}>
                <h2>choose a category</h2>
                <div className={styles.main_content}>
                  <div className={styles.main_items_1}>
                    <button
                      style={
                        isClicked.beauty ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() => {
                        setIsClicked({ ...clearClick, beauty: true });
                      }}
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-10.svg" alt="img" />
                      <span>Beauty of Skin</span>
                    </button>
                    <button
                      style={
                        isClicked.bags ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, bags: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-3.svg" alt="img" />
                      <span>Bags</span>
                    </button>
                    <button
                      style={
                        isClicked.awesome ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, awesome: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-12.svg" alt="img" />
                      <span>Awesome Lip Care</span>
                    </button>
                    <button
                      style={
                        isClicked.mobileTablets
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, mobileTablets: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector.svg" alt="img" />
                      <span>Mobile Tablets</span>
                    </button>
                    <button
                      style={
                        isClicked.necklaces
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, necklaces: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-1.svg" alt="img" />
                      <span>Necklaces</span>
                    </button>
                    <button
                      style={
                        isClicked.clothing ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, clothing: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-7.svg" alt="img" />
                      <span>Clothing</span>
                    </button>
                    <button
                      style={
                        isClicked.bluetooth
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, bluetooth: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-6.svg" alt="img" />
                      <span>Bluetooth</span>
                    </button>
                    <button
                      style={
                        isClicked.facial ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, facial: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-14.svg" alt="img" />
                      <span>Facial Care</span>
                    </button>
                    <button
                      style={
                        isClicked.shoes ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, shoes: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-13.svg" alt="img" />
                      <span>Shoes</span>
                    </button>
                    <button
                      style={
                        isClicked.cpu ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() => setIsClicked({ ...clearClick, cpu: true })}
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-11.svg" alt="img" />
                      <span>CPU</span>
                    </button>
                    <button
                      style={
                        isClicked.discover ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, discover: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-9.svg" alt="img" />
                      <span>Discover Skincare</span>
                    </button>
                    <button
                      style={
                        isClicked.headphones
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, headphones: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-4.svg" alt="img" />
                      <span>Headphones</span>
                    </button>
                    <button
                      style={
                        isClicked.bracelets
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, bracelets: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-8.svg" alt="img" />
                      <span>Bracelets</span>
                    </button>
                    <button
                      style={
                        isClicked.smartWatch
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, smartWatch: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-5.svg" alt="img" />
                      <span>Smart Watch</span>
                    </button>
                    <button
                      style={
                        isClicked.earrings ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, earrings: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-2.svg" alt="img" />
                      <span>Earrings</span>
                    </button>
                  </div>
                  {isClicked.beauty && (
                    <div className={styles.main_items_2}>
                      {beauty.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openbeauty: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.bags && (
                    <div className={styles.main_items_2}>
                      {bags.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openbags: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.awesome && (
                    <div className={styles.main_items_2}>
                      {awesome.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.mobileTablets && (
                    <div className={styles.main_items_2}>
                      {mobileTablets.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.necklaces && (
                    <div className={styles.main_items_2}>
                      {necklaces.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.clothing && (
                    <div className={styles.main_items_2}>
                      {clothing.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.bluetooth && (
                    <div className={styles.main_items_2}>
                      {bluetooth.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.facial && (
                    <div className={styles.main_items_2}>
                      {facial.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.shoes && (
                    <div className={styles.main_items_2}>
                      {shoes.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.cpu && (
                    <div className={styles.main_items_2}>
                      {cpu.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.discover && (
                    <div className={styles.main_items_2}>
                      {discover.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.headphones && (
                    <div className={styles.main_items_2}>
                      {headphones.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.bracelets && (
                    <div className={styles.main_items_2}>
                      {bracelets.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.smartWatch && (
                    <div className={styles.main_items_2}>
                      {smartWatch.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.earrings && (
                    <div className={styles.main_items_2}>
                      {earrings.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {selectedButton === "Radiant Complexion" ? (
                    <div className={styles.main_items_3}>
                      {beautySub.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Skin Texture Smoothness" ? (
                    <div className={styles.main_items_3}>
                      {skinTexture.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Hydration and Moisture" ? (
                    <div className={styles.main_items_3}>
                      {hydration.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Skin Clarity and Clearness" ? (
                    <div className={styles.main_items_3}>
                      {skinClarity.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Elasticity and Firmness" ? (
                    <div className={styles.main_items_3}>
                      {elasticity.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Tote Bags" ? (
                    <div className={styles.main_items_3}>
                      {toteBags.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Backpacks" ? (
                    <div className={styles.main_items_3}>
                      {backpacks.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Crossbody Bags" ? (
                    <div className={styles.main_items_3}>
                      {crossbody.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Clutch Purses" ? (
                    <div className={styles.main_items_3}>
                      {clutch.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Messenger Bags" ? (
                    <div className={styles.main_items_3}>
                      {messenger.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Duffel Bags" ? (
                    <div className={styles.main_items_3}>
                      {duffel.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Hobo Bags" ? (
                    <div className={styles.main_items_3}>
                      {hobo.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Satchel Bags" ? (
                    <div className={styles.main_items_3}>
                      {satchel.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bucket Bags" ? (
                    <div className={styles.main_items_3}>
                      {bucket.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Wallets and Pouches" ? (
                    <div className={styles.main_items_3}>
                      {wallets.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Balm Flavors" ? (
                    <div className={styles.main_items_3}>
                      {lipBalm.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Scrub Varieties" ? (
                    <div className={styles.main_items_3}>
                      {lipScrub.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Mask Benefits" ? (
                    <div className={styles.main_items_3}>
                      {lipMusk.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Sunscreen Protection" ? (
                    <div className={styles.main_items_3}>
                      {lipSunscreen.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Tint Options" ? (
                    <div className={styles.main_items_3}>
                      {lipTint.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Care Tools" ? (
                    <div className={styles.main_items_3}>
                      {lipCare.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Organic Lip Products" ? (
                    <div className={styles.main_items_3}>
                      {organicLip.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Care for Seasons" ? (
                    <div className={styles.main_items_3}>
                      {lipCareSeasons.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Care for Special Needs" ? (
                    <div className={styles.main_items_3}>
                      {lipCareSpecial.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "DIY Lip Care Recipes" ? (
                    <div className={styles.main_items_3}>
                      {DIYLipCare.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Android" ? (
                    <div className={styles.main_items_3}>
                      {android.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "iOS" ? (
                    <div className={styles.main_items_3}>
                      {iOS.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Chain Necklaces" ? (
                    <div className={styles.main_items_3}>
                      {chainNeckaces.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Layered Necklaces" ? (
                    <div className={styles.main_items_3}>
                      {layeredNeckaces.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Pendant Necklaces" ? (
                    <div className={styles.main_items_3}>
                      {pandantNeckaces.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Choker Necklaces" ? (
                    <div className={styles.main_items_3}>
                      {chokerNeckaces.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Statement Necklaces" ? (
                    <div className={styles.main_items_3}>
                      {statementNecklaces.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Tops" ? (
                    <div className={styles.main_items_3}>
                      {tops.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bottoms" ? (
                    <div className={styles.main_items_3}>
                      {bottoms.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Outerwear" ? (
                    <div className={styles.main_items_3}>
                      {outerwear.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Dresses" ? (
                    <div className={styles.main_items_3}>
                      {dresses.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Activewear" ? (
                    <div className={styles.main_items_3}>
                      {activewear.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Sleepwear" ? (
                    <div className={styles.main_items_3}>
                      {sleepwear.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Swimwear" ? (
                    <div className={styles.main_items_3}>
                      {swimwear.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Workwear" ? (
                    <div className={styles.main_items_3}>
                      {workwear.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Baby clothing" ? (
                    <div className={styles.main_items_3}>
                      {babyClothing.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Uniforms" ? (
                    <div className={styles.main_items_3}>
                      {uniforms.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth Classic" ? (
                    <div className={styles.main_items_3}>
                      {bClassic.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth Low Energy" ? (
                    <div className={styles.main_items_3}>
                      {bLowEnergy.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth 5.0" ? (
                    <div className={styles.main_items_3}>
                      {bFive.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth 5.1" ? (
                    <div className={styles.main_items_3}>
                      {bFiveOne.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth 5.2" ? (
                    <div className={styles.main_items_3}>
                      {bFiveTwo.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth Mesh" ? (
                    <div className={styles.main_items_3}>
                      {bMesh.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth 5.3" ? (
                    <div className={styles.main_items_3}>
                      {bFiveThree.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Cleansers and Scrubs" ? (
                    <div className={styles.main_items_3}>
                      {cleansers.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Moisturizers and Serums" ? (
                    <div className={styles.main_items_3}>
                      {serums.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Sun Protection" ? (
                    <div className={styles.main_items_3}>
                      {sunProtection.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Acne Treatment" ? (
                    <div className={styles.main_items_3}>
                      {acne.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Face Masks and Peels" ? (
                    <div className={styles.main_items_3}>
                      {faceMasks.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedButton === "Eye Care Products" ? (
                    <div className={styles.main_items_3}>
                      {eyeCare.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Facial Tools and Devices" ? (
                    <div className={styles.main_items_3}>
                      {facialTools.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Toning and Astringents" ? (
                    <div className={styles.main_items_3}>
                      {toning.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Makeup Removers" ? (
                    <div className={styles.main_items_3}>
                      {makeup.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Anti-Aging Products" ? (
                    <div className={styles.main_items_3}>
                      {antiAging.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Athletic Footwear" ? (
                    <div className={styles.main_items_3}>
                      {athletic.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Casual Footwear" ? (
                    <div className={styles.main_items_3}>
                      {casual.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Formal Footwear" ? (
                    <div className={styles.main_items_3}>
                      {formal.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Boots and Booties" ? (
                    <div className={styles.main_items_3}>
                      {bootsAndBooties.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Sandals and Flip-Flops" ? (
                    <div className={styles.main_items_3}>
                      {sandals.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Outdoor and Hiking" ? (
                    <div className={styles.main_items_3}>
                      {outdoor.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Work and Safety" ? (
                    <div className={styles.main_items_3}>
                      {workAndSafety.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Specialty Footwear" ? (
                    <div className={styles.main_items_3}>
                      {speciality.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Fashion Sneakers" ? (
                    <div className={styles.main_items_3}>
                      {fashion.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Kids' Footwear" ? (
                    <div className={styles.main_items_3}>
                      {kids.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Central Processing Unit" ? (
                    <div className={styles.main_items_3}>
                      {centralProcessing.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Microprocessors" ? (
                    <div className={styles.main_items_3}>
                      {microprocessors.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Multi-Core Processors" ? (
                    <div className={styles.main_items_3}>
                      {multiCore.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Graphics Processing Unit" ? (
                    <div className={styles.main_items_3}>
                      {graphics.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Embedded Processors" ? (
                    <div className={styles.main_items_3}>
                      {embedded.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Server Processors" ? (
                    <div className={styles.main_items_3}>
                      {server.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Mobile Processors" ? (
                    <div className={styles.main_items_3}>
                      {mobileProcessors.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Desktop Processors" ? (
                    <div className={styles.main_items_3}>
                      {desktop.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Workstation CPUs" ? (
                    <div className={styles.main_items_3}>
                      {workstation.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Mainframe Processors" ? (
                    <div className={styles.main_items_3}>
                      {mainframe.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Cleansing" ? (
                    <div className={styles.main_items_3}>
                      {cleansing.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Moisturizing" ? (
                    <div className={styles.main_items_3}>
                      {moisturizing.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Discover Acne Treatment" ? (
                    <div className={styles.main_items_3}>
                      {acneTreatment.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Discover Sun Protection" ? (
                    <div className={styles.main_items_3}>
                      {discoverSunProtection.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Discover Anti-Aging" ? (
                    <div className={styles.main_items_3}>
                      {discoverAntiAging.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Serums and Essences" ? (
                    <div className={styles.main_items_3}>
                      {serumsAndEssences.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Masks and Treatments" ? (
                    <div className={styles.main_items_3}>
                      {discoverMasks.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Eye Care" ? (
                    <div className={styles.main_items_3}>
                      {discoverEyeCare.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Specialty Skincare" ? (
                    <div className={styles.main_items_3}>
                      {specialitySkincare.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Natural and Organic" ? (
                    <div className={styles.main_items_3}>
                      {nuturalAndOrganic.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Over-Ear Headphones" ? (
                    <div className={styles.main_items_3}>
                      {overEar.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "In-Ear Earbuds" ? (
                    <div className={styles.main_items_3}>
                      {inEar.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "On-Ear Headphones" ? (
                    <div className={styles.main_items_3}>
                      {onEar.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Wireless Bluetooth Headphones" ? (
                    <div className={styles.main_items_3}>
                      {wirelessbluetooth.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Gaming Headsets" ? (
                    <div className={styles.main_items_3}>
                      {gamingHeadsets.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Studio Monitor Headphones" ? (
                    <div className={styles.main_items_3}>
                      {studioMonitor.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Sports and Workout Earphones" ? (
                    <div className={styles.main_items_3}>
                      {sportsAndWorkout.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "ANC Headphones" ? (
                    <div className={styles.main_items_3}>
                      {ANCHeadphones.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "DJ Headphones" ? (
                    <div className={styles.main_items_3}>
                      {DJHeadphones.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Open-Back Headphones" ? (
                    <div className={styles.main_items_3}>
                      {openBack.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Closed-Back Headphones" ? (
                    <div className={styles.main_items_3}>
                      {closedBack.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Kids' Headphones" ? (
                    <div className={styles.main_items_3}>
                      {kidsHeadphones.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Audiophile Headphones" ? (
                    <div className={styles.main_items_3}>
                      {audiophile.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Metallic Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {metallic.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Beaded Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {beaded.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Leather Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {leather.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Charm Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {charm.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Friendship Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {friendship.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Cuff Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {cuff.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Chain Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {chain.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Bangle Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {bangle.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Braided Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {braided.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Wrap Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {wrap.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Fitness Trackers" ? (
                    <div className={styles.main_items_3}>
                      {fitnessTrackers.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Sport Watches" ? (
                    <div className={styles.main_items_3}>
                      {sportWatches.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Fashion Smartwatches" ? (
                    <div className={styles.main_items_3}>
                      {fashionSmartwatches.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "GPS Running Watches" ? (
                    <div className={styles.main_items_3}>
                      {gpsRunningWatches.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Hybrid Smartwatches" ? (
                    <div className={styles.main_items_3}>
                      {hybridSmart.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Kids' Smartwatches" ? (
                    <div className={styles.main_items_3}>
                      {kidsWatches.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Luxury Smartwatches" ? (
                    <div className={styles.main_items_3}>
                      {luxuryWatches.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Outdoor Adventure Watches" ? (
                    <div className={styles.main_items_3}>
                      {outdoorWatches.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Medical Wearables" ? (
                    <div className={styles.main_items_3}>
                      {medicalWatches.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Budget Smartwatches" ? (
                    <div className={styles.main_items_3}>
                      {budgetSmart.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Stud Earrings" ? (
                    <div className={styles.main_items_3}>
                      {studEarrings.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Hoop Earrings" ? (
                    <div className={styles.main_items_3}>
                      {hoopEarrings.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Dangle Earrings" ? (
                    <div className={styles.main_items_3}>
                      {dangleEarrings.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Huggee Earrings" ? (
                    <div className={styles.main_items_3}>
                      {huggeeEarrings.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Ear Cuffs" ? (
                    <div className={styles.main_items_3}>
                      {earCuffs.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Threader Earrings" ? (
                    <div className={styles.main_items_3}>
                      {threaderEarrings.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Chandelier Earrings" ? (
                    <div className={styles.main_items_3}>
                      {chandelierEarrings.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Clip-On Earrings" ? (
                    <div className={styles.main_items_3}>
                      {cliponEarrings.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Tassel Earrings" ? (
                    <div className={styles.main_items_3}>
                      {tasselEarrings.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Statement Earrings" ? (
                    <div className={styles.main_items_3}>
                      {statementEarrings.map((item) => {
                        return (
                          <Link
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentingProductsPage;

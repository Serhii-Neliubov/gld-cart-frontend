import { Link } from "react-router-dom";
import styles from "./RentingProfservicesPage.module.scss";
import React, { FC } from "react";

const clearClick: IClearClick = {
  cleaning: false,
  repairing: false,
  gardening: false,
  treeCutting: false,
  lawnServices: false,
  handyman: false,
  snowRemoval: false,
  pestControl: false,
  electrical: false,
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
  cleaning: boolean;
  repairing: boolean;
  gardening: boolean;
  treeCutting: boolean;
  lawnServices: boolean;
  handyman: boolean;
  snowRemoval: boolean;
  pestControl: boolean;
  electrical: boolean;
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

const generalCleaning = [
  { name: "Dusting surfaces and furniture." },
  { name: "Wiping down countertops and tables." },
  { name: "Sweeping and mopping floors." },
  { name: "Vacuuming carpets and rugs." },
  { name: "Other" },
];

const kitchenCleaning = [
  { name: "Cleaning and sanitizing countertops." },
  { name: "Cleaning appliances" },
  { name: "Washing dishes or loading the dishwasher." },
  { name: "Cleaning the sink and faucet." },
  { name: "Wiping down cabinet doors." },
  { name: "Other" },
];

const bathroomCleaning = [
  { name: "Cleaning and disinfecting the toilet." },
  { name: "Scrubbing the bathtub and/or shower." },
  { name: "Cleaning bathroom sinks and faucets" },
  { name: "Wiping down mirrors and glass surfaces." },
  { name: "Sweeping and mopping the bathroom floor." },
  { name: "Other" },
];

const bedroomCleaning = [
  { name: "Changing bed linens and making the bed." },
  { name: "Dusting and cleaning furniture." },
  { name: "Vacuuming or sweeping the floor." },
  { name: "Organizing clutter." },
  { name: "Other" },
];

const repairing = [
  { name: "Electronics Repair" },
  { name: "Appliance Repair" },
  { name: "Automotive Repair" },
  { name: "Home Repair" },
  { name: "Jewelry and Watch Repair" },
  { name: "Shoe and Leather Goods Repair" },
  { name: "Bicycle Repair" },
  { name: "Furniture Repair" },
  { name: "Musical Instrument Repair" },
];

const livingRoomCleaning = [
  { name: "Dusting and cleaning electronics" },
  { name: "Vacuuming upholstery and curtains." },
  { name: "Cleaning and organizing shelves." },
  { name: "Wiping down remote controls and surfaces." },
  { name: "Other" },
];

const laundyRoom = [
  { name: "Cleaning the washing machine and dryer." },
  { name: "Wiping down laundry surfaces and shelves." },
  { name: "Emptying the lint trap in the dryer." },
  { name: "Organizing laundry supplies." },
  { name: "Other" },
];

const homeCleaning = [
  { name: "Dusting and cleaning computer equipment." },
  { name: "Organizing paperwork and office supplies." },
  { name: "Vacuuming or sweeping the floor." },
  { name: "Wiping down desks and surfaces." },
  { name: "Other" },
];

const entryRoom = [
  { name: "Sweeping or vacuuming floors." },
  { name: "Cleaning and organizing entryway storage." },
  { name: "Wiping down doorknobs and light switches." },
  { name: "Other" },
];

const messenger = [
  { name: "Sweeping and cleaning porches or decks" },
  { name: "Cleaning outdoor furniture." },
  { name: "Gardening and yard work." },
  { name: "Other" },
];

const duffel = [
  { name: "Mobile phone repair" },
  { name: "Computer and laptop repair" },
  { name: "Television repair" },
  { name: "Game console repair" },
  { name: "Other" },
];

const hobo = [
  { name: "Refrigerator repair" },
  { name: "Washer and dryer repair" },
  { name: "Oven and stove repair" },
  { name: "Dishwasher repair" },
  { name: "Other" },
];

const satchel = [
  { name: "Car engine repair" },
  { name: "Transmission repair" },
  { name: "Brake repair" },
  { name: "Suspension and steering repair" },
  { name: "Other" },
];

const bucket = [
  { name: "Plumbing repair" },
  { name: "Electrical system repair" },
  { name: "Roof repair" },
  { name: "HVAC repair" },
  { name: "Other" },
];

const wallets = [
  { name: "Watch battery replacement" },
  { name: "Jewelry resizing and refurbishing" },
  { name: "Watch movement repair" },
  { name: "Other" },
];

const gardening = [
  { name: "Vegetable Gardening" },
  { name: "Flower Gardening" },
  { name: "Herb Gardening" },
  { name: "Fruit Tree Gardening" },
  { name: "Landscaping" },
  { name: "Container Gardening" },
  { name: "Gardening for Wildlife" },
  { name: "Water Gardening" },
  { name: "Seasonal Gardening" },
];

const treeCutting = [
  { name: "Residential Tree Cutting" },
  { name: "Commercial Tree Cutting" },
  { name: "Forestry and Logging" },
  { name: "Tree Cutting Equipment and Techniques" },
  { name: "Tree Preservation and Conservation" },
];
const lawnServices = [
  { name: "Lawn Maintenance Services" },
  { name: "Landscape Design and Installation" },
  { name: "Lawn Care and Treatment" },
  { name: "Tree and Shrub Care" },
  { name: "Hardscape Services" },
  { name: "Irrigation Services" },
  { name: "Seasonal Cleanups" },
  { name: "Lawn Renovation Services" },
  { name: "Organic and Eco-Friendly Services" },
  { name: "Commercial Lawn Services" },
];
const handyman = [
  { name: "Electrical Services" },
  { name: "Plumbing Services" },
  { name: "Carpentry Services" },
  { name: "Painting Services" },
  { name: "Home Repair and Maintenance" },
];
const snowRemoval = [
  { name: "Residential Snow Removal" },
  { name: "Commercial Snow Removal" },
  { name: "Municipal Snow Removal" },
  { name: "Specialized Snow Removal" },
];
const pestControl = [
  { name: "Insect Extermination Services" },
  { name: "Rodent Management Solutions" },
  { name: "Wildlife Pest Control" },
  { name: "Nuisance Bird Management" },
  { name: "Green and Eco-Friendly Pest" },
  { name: "Commercial Pest Management" },
  { name: "Residential Pest Solutions" },
  { name: "Lawn and Garden Pest Control" },
  { name: "Structural Pest Protection" },
  { name: "Pest Inspection and Prevention" },
];
const electrical = [
  { name: "Power Generation" },
  { name: "Power Distribution" },
  { name: "Electrical Wiring" },
  { name: "Control Systems" },
  { name: "Electronics Design" },
  { name: "Electric Motors" },
  { name: "Electrical Safety" },
  { name: "Renewable Energy Systems" },
  { name: "Lighting Technology" },
  { name: "Power Electronics" },
  { name: "High Voltage Engineering" },
  { name: "Energy Efficiency" },
  { name: "Electric Vehicle Technology" },
  { name: "Robotics and Automation" },
  { name: "Test and Measurement" },
];

const lipBalm = [
  { name: "Shoe sole replacement" },
  { name: "Leather bag repair" },
  { name: "Belt repair and resizing" },
  { name: "Wallet and purse repair" },
  { name: "Other" },
];

const lipScrub = [
  { name: "Tire and tube replacement" },
  { name: "Brake and gear adjustments" },
  { name: "Frame repair" },
  { name: "Other" },
];

const lipMusk = [
  { name: "Upholstery repair" },
  { name: "Furniture refinishing" },
  { name: "Wood furniture repair" },
  { name: "Other" },
];

const lipSunscreen = [
  { name: "Guitar repair and setup" },
  { name: "Piano tuning and repair" },
  { name: "Brass and woodwind instrument repair" },
  { name: "Other" },
];

const lipTint = [
  { name: "Organic vegetable gardening" },
  { name: "Raised bed gardening" },
  { name: "Container vegetable gardening" },
  { name: "Companion planting" },
  { name: "Other" },
];

const lipCare = [
  { name: "Rose gardening" },
  { name: "Perennial flower gardening" },
  { name: "Wildflower gardening" },
  { name: "Cottage garden style" },
  { name: "Other" },
];
const organicLip = [
  { name: "Medicinal herb gardening" },
  { name: "Culinary herb gardening" },
  { name: "Indoor herb gardening" },
  { name: "Herb drying and preservation" },
  { name: "Other" },
];
const lipCareSeasons = [
  { name: "Apple orchard management" },
  { name: "Citrus tree care" },
  { name: "Berry bush cultivation" },
  { name: "Espalier fruit trees" },
  { name: "Other" },
];
const lipCareSpecial = [
  { name: "Landscape design" },
  { name: "Xeriscaping" },
  { name: "Japanese garden design" },
  { name: "Rock garden construction" },
  { name: "Other" },
];
const android = [
  { name: "Butterfly garden" },
  { name: "Bird-friendly gardening" },
  { name: "Pollinator garden" },
  { name: "Bat-friendly garden" },
  { name: "Other" },
];
const iOS = [
  { name: "Koi pond maintenance" },
  { name: "Water lily cultivation" },
  { name: "Aquatic plant care" },
  { name: "Fountain and waterfall design" },
  { name: "Other" },
];

const chainNeckaces = [
  { name: "Spring bulb planting" },
  { name: "Fall garden preparation" },
  { name: "Winter garden protection" },
  { name: "Summer flower maintenance" },
  { name: "Other" },
];
const layeredNeckaces = [
  { name: "Pruning and Trimming" },
  { name: "Tree Removal" },
  { name: "Emergency Tree Removal" },
  { name: "Stump Grinding" },
  { name: "Tree Health Assessment" },
  { name: "Other" },
];
const pandantNeckaces = [
  { name: "Land Clearing" },
  { name: "Arboricultural Consulting" },
  { name: "Urban Tree Management" },
  { name: "Tree Inventory and Management Plans" },
  { name: "Lot Clearing for Development" },
  { name: "Other" },
];
const chokerNeckaces = [
  { name: "Timber Harvesting" },
  { name: "Clearcutting" },
  { name: "Selective Logging" },
  { name: "Sustainable Logging Practices" },
  { name: "Reforestation" },
  { name: "Other" },
];
const statementNecklaces = [
  { name: "Chainsaw Operation" },
  { name: "Aerial Tree Cutting" },
  { name: "Tree Felling Techniques" },
  { name: "Arborist Rigging" },
  { name: "Wood Chipper Operation" },
  { name: "Other" },
];
const tops = [
  { name: "Pruning for Tree Health" },
  { name: "Hazard Assessment and Mitigation" },
  { name: "Wildlife Habitat Preservation" },
  { name: "Historical Tree Preservation" },
  { name: "Community Tree Programs" },
  { name: "Other" },
];
const bottoms = [
  { name: "Mowing and grass cutting" },
  { name: "Edging and trimming" },
  { name: "Lawn fertilization and aeration" },
  { name: "Weed control and removal" },
  { name: "Leaf and debris cleanup" },
  { name: "Other" },
];
const outerwear = [
  { name: "Landscape planning and consultation" },
  { name: "Planting flowers, shrubs, and trees" },
  { name: "Hardscape construction" },
  { name: "Irrigation system installation" },
  { name: "Outdoor lighting installation" },
  { name: "Other" },
];
const dresses = [
  { name: "Lawn disease control" },
  { name: "Pest and insect management" },
  { name: "Soil testing and analysis" },
  { name: "Seasonal lawn treatments" },
  { name: "pH balancing and soil amendments" },
  { name: "Other" },
];
const activewear = [
  { name: "Tree pruning and trimming" },
  { name: "Tree and shrub removal" },
  { name: "Disease diagnosis and treatment" },
  { name: "Arborist services" },
  { name: "Deep root fertilization" },
  { name: "Other" },
];
const sleepwear = [
  { name: "Patio and deck design and construction" },
  { name: "Walkway and driveway installation" },
  { name: "Retaining wall construction" },
  { name: "Stone or brick work" },
  { name: "Outdoor kitchen and firepit installation" },
  { name: "Other" },
];
const swimwear = [
  { name: "Sprinkler system installation" },
  { name: "Sprinkler repair and maintenance" },
  { name: "Drip irrigation system installation" },
  { name: "Smart irrigation system upgrades" },
  { name: "Water-efficient system audits" },
  { name: "Other" },
];

const workwear = [
  { name: "Spring and fall cleanups" },
  { name: "Gutter cleaning and maintenance" },
  { name: "Mulch installation" },
  { name: "Snow removal" },
  { name: "Holiday decoration setup and takedown" },
  { name: "Other" },
];
const bClassic = [
  { name: "Grounds maintenance for businesses" },
  { name: "Large-scale landscaping projects" },
  { name: "Property management services" },
  { name: "Sports field maintenance" },
  { name: "Commercial snow removal" },
  { name: "Other" },
];
const bLowEnergy = [
  { name: "Wiring and rewiring" },
  { name: "Outlet and switch installation" },
  { name: "Lighting fixture installation" },
  { name: "Circuit breaker replacement" },
  { name: "Ceiling fan installation" },
  { name: "Other" },
];

const bFive = [
  { name: "Faucet repair and installation" },
  { name: "Toilet repair and replacement" },
  { name: "Drain cleaning" },
  { name: "Pipe leak repair" },
  { name: "Water heater installation" },
  { name: "Other" },
];
const bFiveOne = [
  { name: "Door installation and repair" },
  { name: "Cabinet assembly and installation" },
  { name: "Deck and fence repair" },
  { name: "Trim and molding installation" },
  { name: "Custom shelving and storage" },
  { name: "Other" },
];
const bFiveTwo = [
  { name: "Interior and exterior painting" },
  { name: "Wall patching and repair" },
  { name: "Deck staining and sealing" },
  { name: "Wallpaper removal" },
  { name: "Texture and faux finish painting" },
  { name: "Other" },
];
const bMesh = [
  { name: "Drywall repair" },
  { name: "Tile and grout repair" },
  { name: "Roof and gutter maintenance" },
  { name: "Insulation installation" },
  { name: "Appliance installation and repair" },
  { name: "Other" },
];
const bFiveThree = [
  { name: "Driveway Snow Plowing" },
  { name: "Sidewalk Clearing" },
  { name: "Roof Snow Removal" },
  { name: "Walkway De-Icing" },
  { name: "Snow Blowing Services" },
  { name: "Other" },
];
const cleansers = [
  { name: "Parking Lot Plowing" },
  { name: "Ice Management" },
  { name: "Snow Hauling" },
  { name: "Salting and Sanding" },
  { name: "Snow Stacking and Removal" },
  { name: "Other" },
];
const uniforms = [
  { name: "Organic lawn care programs" },
  { name: "Chemical-free pest control" },
  { name: "Sustainable landscaping practices" },
  { name: "Rain garden installation" },
  { name: "Xeriscaping" },
  { name: "Other" },
];
const babyClothing = [
  { name: "Complete lawn restoration" },
  { name: "Sod installation" },
  { name: "Grading and leveling" },
  { name: "Hydroseeding" },
  { name: "Erosion control measures" },
  { name: "Other" },
];
const serums = [
  { name: "Road Plowing" },
  { name: "Bridge and Overpass Clearing" },
  { name: "Public Pathway Maintenance" },
  { name: "Emergency Snow Response" },
  { name: "Snow Dump Operations" },
  { name: "Other" },
];
const sunProtection = [
  { name: "Airport Snow Removal" },
  { name: "Ski Resort Snow Grooming" },
  { name: "Snow Removal for Railways" },
  { name: "Hospital and Healthcare Facilities Snow Management" },
  { name: "Snow Removal for Stadiums and Arenas" },
  { name: "Other" },
];
const acne = [
  { name: "Ant Control" },
  { name: "Roach Extermination" },
  { name: "Bed Bug Removal" },
  { name: "Termite Inspections" },
  { name: "Flea and Tick Control" },
  { name: "Other" },
];
const faceMasks = [
  { name: "Rat Removal Services" },
  { name: "Mice Control Experts" },
  { name: "Squirrel Removal" },
  { name: "Vole and Gopher Control" },
  { name: "Muskrat Eradication" },
  { name: "Other" },
];
const eyeCare = [
  { name: "Raccoon Removal" },
  { name: "Bat Exclusion Services" },
  { name: "Bird Deterrent Solutions" },
  { name: "Snake Removal Experts" },
  { name: "Skunk Control Services" },
  { name: "Other" },
];
const facialTools = [
  { name: "Raccoon Removal" },
  { name: "Bat Exclusion Services" },
  { name: "Bird Deterrent Solutions" },
  { name: "Snake Removal Experts" },
  { name: "Skunk Control Services" },
  { name: "Other" },
];
const toning = [
  { name: "Pigeon Control" },
  { name: "Seagull Deterrence" },
  { name: "Sparrow Nest Removal" },
  { name: "Crow and Magpie Control" },
  { name: "Woodpecker Solutions" },
  { name: "Other" },
];
const makeup = [
  { name: "Organic Pest Control" },
  { name: "Non-Toxic Treatments" },
  { name: "Integrated Pest Management" },
  { name: "Eco-Friendly Pesticides" },
  { name: "Sustainable Pest Solutions" },
  { name: "Other" },
];
const antiAging = [
  { name: "Office Building Pest Control" },
  { name: "Restaurant Pest Services" },
  { name: "Hotel Pest Prevention" },
  { name: "Warehouse Pest Control" },
  { name: "Retail Store Extermination" },
  { name: "Other" },
];
const athletic = [
  { name: "Home Pest Inspections" },
  { name: "Apartment Pest Control" },
  { name: "Condo Pest Management" },
  { name: "Townhouse Extermination" },
  { name: "Villa Pest Services" },
  { name: "Other" },
];
const casual = [
  { name: "Lawn Insect Treatments" },
  { name: "Garden Pest Solutions" },
  { name: "Tree and Shrub Care" },
  { name: "Weed Control Services" },
  { name: "Lawn Fungus Management" },
  { name: "Other" },
];
const formal = [
  { name: "Foundation Pest Barriers" },
  { name: "Crawl Space Encapsulation" },
  { name: "Attic Insulation Pest Control" },
  { name: "Basement Waterproofing" },
  { name: "Wall Void Pest Prevention" },
  { name: "Other" },
];
const bootsAndBooties = [
  { name: "Pest Assessment Services" },
  { name: "Preventative Pest Measures" },
  { name: "Annual Pest Inspections" },
  { name: "Pre-Purchase Pest Checks" },
  { name: "Pest-Proofing Advice" },
  { name: "Other" },
];
const sandals = [
  { name: "Renewable Sources" },
  { name: "Thermal Power Plants" },
  { name: "Hydroelectric Facilities" },
  { name: "Nuclear Power Stations" },
  { name: "Wind and Solar Farms" },
  { name: "Other" },
];
const outdoor = [
  { name: "Grid Infrastructure" },
  { name: "Transformers and Substations" },
  { name: "Circuit Breakers" },
  { name: "Switchgear Systems" },
  { name: "Voltage Regulation" },
  { name: "Other" },
];
const workAndSafety = [
  { name: "Residential Wiring" },
  { name: "Commercial Installations" },
  { name: "Industrial Wiring" },
  { name: "Underground Cabling" },
  { name: "Conduit Systems" },
  { name: "Other" },
];
const speciality = [
  { name: "PLC Programming" },
  { name: "Automation Solutions" },
  { name: "SCADA Systems" },
  { name: "Process Control" },
  { name: "Instrumentation" },
  { name: "Other" },
];
const fashion = [
  { name: "PCB Layout and Design" },
  { name: "Analog Circuitry" },
  { name: "Digital Electronics" },
  { name: "Microcontroller Systems" },
  { name: "RF and Communication" },
  { name: "Other" },
];
const kids = [
  { name: "AC Motor Types" },
  { name: "DC Motor Varieties" },
  { name: "Motor Control Methods" },
  { name: "Servo Motors" },
  { name: "Stepper Motors" },
  { name: "Other" },
];
const centralProcessing = [
  { name: "Grounding and Bonding" },
  { name: "Arc Flash Protection" },
  { name: "Electrical Codes" },
  { name: "Safety Equipment" },
  { name: "Lockout/Tagout" },
  { name: "Other" },
];
const microprocessors = [
  { name: "Solar Photovoltaics" },
  { name: "Wind Turbine Systems" },
  { name: "Battery Storage" },
  { name: "Grid Integration" },
  { name: "Inverter Technologies" },
  { name: "Other" },
];
const multiCore = [
  { name: "Inverters and Converters" },
  { name: "Power Factor Correction" },
  { name: "Voltage Regulators" },
  { name: "UPS Systems" },
  { name: "Motor Drives" },
  { name: "Other" },
];
const graphics = [
  { name: "HV Substations" },
  { name: "Insulation Materials" },
  { name: "Surge Protection" },
  { name: "Dielectric Testing" },
  { name: "Lightning Protection" },
  { name: "Other" },
];
const embedded = [
  { name: "Energy Audits" },
  { name: "HVAC Optimization" },
  { name: "Energy Management Systemss" },
  { name: "Green Building Practices" },
  { name: "Energy Conservation" },
  { name: "Other" },
];
const server = [
  { name: "EV Charging Infrastructure" },
  { name: "Battery Technology" },
  { name: "EV Motors and Controllers" },
  { name: "Charging Protocols" },
  { name: "EV Fleet Management" },
  { name: "Other" },
];
const mobileProcessors = [
  { name: "Industrial Robots" },
  { name: "Robotic Arm Design" },
  { name: "Automated Assembly" },
  { name: "Robotics Programming" },
  { name: "Human-Robot Interaction" },
  { name: "Other" },
];
const desktop = [
  { name: "Multimeters and Testers" },
  { name: "Oscilloscopes" },
  { name: "Power Quality Analysis" },
  { name: "Calibration Techniques" },
  { name: "Data Logging Systems" },
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
  { name: "Succulent container gardens" },
  { name: "Patio and balcony gardening" },
  { name: "Indoor plant arrangements" },
  { name: "Terrarium creation" },
  { name: "Other" },
];
const mainframe = [
  { name: "Large-scale computing systems" },
  { name: "Support critical operations" },
  { name: "High availability and reliability" },
  { name: "Serve enterprise-level needs" },
  { name: "Other" },
];
const cleaning = [
  { name: "General Cleaning" },
  { name: "Kitchen Cleaning" },
  { name: "Bathroom Cleaning" },
  { name: "Bedroom Cleaning" },
  { name: "Living Room Cleaning" },
  { name: "Laundry Room Cleaning" },
  { name: "Home Office Cleaning" },
  { name: "Entryway/Hallway Cleaning" },
  { name: "Outdoor Cleaning" },
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
const RentingProfservicesPage: FC = () => {
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
                    isClicked.cleaning ||
                    isClicked.repairing ||
                    isClicked.gardening ||
                    isClicked.treeCutting ||
                    isClicked.lawnServices ||
                    isClicked.handyman ||
                    isClicked.snowRemoval ||
                    isClicked.pestControl ||
                    isClicked.electrical
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
                Select <span>PROFESSIONAL SERVICES</span> Category
              </h1>
              <div className={styles.main_block}>
                <h2>choose a category</h2>
                <div className={styles.main_content}>
                  <div className={styles.main_items_1}>
                    <button
                      style={
                        isClicked.cleaning ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() => {
                        setIsClicked({ ...clearClick, cleaning: true });
                      }}
                      className={styles.main_item_1}
                    >
                      <img src="RentingProfservicesPage/icon1.svg" alt="img" />
                      <span>Cleaning</span>
                    </button>
                    <button
                      style={
                        isClicked.repairing
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, repairing: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="RentingProfservicesPage/icon2.svg" alt="img" />
                      <span>Repairing</span>
                    </button>
                    <button
                      style={
                        isClicked.gardening
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, gardening: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="RentingProfservicesPage/icon3.svg" alt="img" />
                      <span>Gardening</span>
                    </button>
                    <button
                      style={
                        isClicked.treeCutting
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, treeCutting: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="RentingProfservicesPage/icon4.svg" alt="img" />
                      <span>Tree Cutting</span>
                    </button>
                    <button
                      style={
                        isClicked.lawnServices
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, lawnServices: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="RentingProfservicesPage/icon5.svg" alt="img" />
                      <span>Lawn Services</span>
                    </button>
                    <button
                      style={
                        isClicked.handyman ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, handyman: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="RentingProfservicesPage/icon6.svg" alt="img" />
                      <span>Handyman</span>
                    </button>
                    <button
                      style={
                        isClicked.snowRemoval
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, snowRemoval: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="RentingProfservicesPage/icon7.svg" alt="img" />
                      <span>Snow Removal</span>
                    </button>
                    <button
                      style={
                        isClicked.pestControl
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, pestControl: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="RentingProfservicesPage/icon8.svg" alt="img" />
                      <span>Pest Control</span>
                    </button>
                    <button
                      style={
                        isClicked.electrical
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, electrical: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="RentingProfservicesPage/icon9.svg" alt="img" />
                      <span>Electrical</span>
                    </button>
                  </div>
                  {isClicked.cleaning && (
                    <div className={styles.main_items_2}>
                      {cleaning.map((item) => {
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
                  {isClicked.repairing && (
                    <div className={styles.main_items_2}>
                      {repairing.map((item) => {
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
                  {isClicked.gardening && (
                    <div className={styles.main_items_2}>
                      {gardening.map((item) => {
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
                  {isClicked.treeCutting && (
                    <div className={styles.main_items_2}>
                      {treeCutting.map((item) => {
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
                  {isClicked.lawnServices && (
                    <div className={styles.main_items_2}>
                      {lawnServices.map((item) => {
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
                  {isClicked.handyman && (
                    <div className={styles.main_items_2}>
                      {handyman.map((item) => {
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
                  {isClicked.snowRemoval && (
                    <div className={styles.main_items_2}>
                      {snowRemoval.map((item) => {
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
                  {isClicked.pestControl && (
                    <div className={styles.main_items_2}>
                      {pestControl.map((item) => {
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
                  {isClicked.electrical && (
                    <div className={styles.main_items_2}>
                      {electrical.map((item) => {
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
                  {selectedButton === "General Cleaning" ? (
                    <div className={styles.main_items_3}>
                      {generalCleaning.map((item) => {
                        return (
                          <Link
                            to="/personal-services/cleaning"
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
                  {selectedButton === "Kitchen Cleaning" ? (
                    <div className={styles.main_items_3}>
                      {kitchenCleaning.map((item) => {
                        return (
                          <Link
                            to="/personal-services/cleaning"
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
                  {selectedButton === "Bathroom Cleaning" ? (
                    <div className={styles.main_items_3}>
                      {bathroomCleaning.map((item) => {
                        return (
                          <Link
                            to="/personal-services/cleaning"
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
                  {selectedButton === "Bedroom Cleaning" ? (
                    <div className={styles.main_items_3}>
                      {bedroomCleaning.map((item) => {
                        return (
                          <Link
                            to="/personal-services/cleaning"
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
                  {selectedButton === "Living Room Cleaning" ? (
                    <div className={styles.main_items_3}>
                      {livingRoomCleaning.map((item) => {
                        return (
                          <Link
                            to="/personal-services/cleaning"
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
                  {selectedButton === "Laundry Room Cleaning" ? (
                    <div className={styles.main_items_3}>
                      {laundyRoom.map((item) => {
                        return (
                          <Link
                            to="/personal-services/cleaning"
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
                  {selectedButton === "Home Office Cleaning" ? (
                    <div className={styles.main_items_3}>
                      {homeCleaning.map((item) => {
                        return (
                          <Link
                            to="/personal-services/cleaning"
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
                  {selectedButton === "Entryway/Hallway Cleaning" ? (
                    <div className={styles.main_items_3}>
                      {entryRoom.map((item) => {
                        return (
                          <Link
                            to="/personal-services/cleaning"
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
                  {selectedButton === "Outdoor Cleaning" ? (
                    <div className={styles.main_items_3}>
                      {messenger.map((item) => {
                        return (
                          <Link
                            to="/personal-services/cleaning"
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
                  {selectedButton === "Electronics Repair" ? (
                    <div className={styles.main_items_3}>
                      {duffel.map((item) => {
                        return (
                          <Link
                            to="/personal-services/repairing"
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
                  {selectedButton === "Appliance Repair" ? (
                    <div className={styles.main_items_3}>
                      {hobo.map((item) => {
                        return (
                          <Link
                            to="/personal-services/repairing"
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
                  {selectedButton === "Automotive Repair" ? (
                    <div className={styles.main_items_3}>
                      {satchel.map((item) => {
                        return (
                          <Link
                            to="/personal-services/repairing"
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
                  {selectedButton === "Home Repair" ? (
                    <div className={styles.main_items_3}>
                      {bucket.map((item) => {
                        return (
                          <Link
                            to="/personal-services/repairing"
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
                  {selectedButton === "Jewelry and Watch Repair" ? (
                    <div className={styles.main_items_3}>
                      {wallets.map((item) => {
                        return (
                          <Link
                            to="/personal-services/repairing"
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
                  {selectedButton === "Shoe and Leather Goods Repair" ? (
                    <div className={styles.main_items_3}>
                      {lipBalm.map((item) => {
                        return (
                          <Link
                            to="/personal-services/repairing"
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
                  {selectedButton === "Bicycle Repair" ? (
                    <div className={styles.main_items_3}>
                      {lipScrub.map((item) => {
                        return (
                          <Link
                            to="/personal-services/repairing"
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
                  {selectedButton === "Furniture Repair" ? (
                    <div className={styles.main_items_3}>
                      {lipMusk.map((item) => {
                        return (
                          <Link
                            to="/personal-services/repairing"
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
                  {selectedButton === "Musical Instrument Repair" ? (
                    <div className={styles.main_items_3}>
                      {lipSunscreen.map((item) => {
                        return (
                          <Link
                            to="/personal-services/repairing"
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
                  {selectedButton === "Vegetable Gardening" ? (
                    <div className={styles.main_items_3}>
                      {lipTint.map((item) => {
                        return (
                          <Link
                            to="/personal-services/gardening"
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
                  {selectedButton === "Flower Gardening" ? (
                    <div className={styles.main_items_3}>
                      {lipCare.map((item) => {
                        return (
                          <Link
                            to="/personal-services/gardening"
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
                  {selectedButton === "Herb Gardening" ? (
                    <div className={styles.main_items_3}>
                      {organicLip.map((item) => {
                        return (
                          <Link
                            to="/personal-services/gardening"
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
                  {selectedButton === "Fruit Tree Gardening" ? (
                    <div className={styles.main_items_3}>
                      {lipCareSeasons.map((item) => {
                        return (
                          <Link
                            to="/personal-services/gardening"
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
                  {selectedButton === "Landscaping" ? (
                    <div className={styles.main_items_3}>
                      {lipCareSpecial.map((item) => {
                        return (
                          <Link
                            to="/personal-services/gardening"
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
                  {selectedButton === "Container Gardening" ? (
                    <div className={styles.main_items_3}>
                      {DIYLipCare.map((item) => {
                        return (
                          <Link
                            to="/personal-services/gardening"
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
                  {selectedButton === "Gardening for Wildlife" ? (
                    <div className={styles.main_items_3}>
                      {android.map((item) => {
                        return (
                          <Link
                            to="/personal-services/gardening"
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
                  {selectedButton === "Water Gardening" ? (
                    <div className={styles.main_items_3}>
                      {iOS.map((item) => {
                        return (
                          <Link
                            to="/personal-services/gardening"
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
                  {selectedButton === "Seasonal Gardening" ? (
                    <div className={styles.main_items_3}>
                      {chainNeckaces.map((item) => {
                        return (
                          <Link
                            to="/personal-services/gardening"
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
                  {selectedButton === "Residential Tree Cutting" ? (
                    <div className={styles.main_items_3}>
                      {layeredNeckaces.map((item) => {
                        return (
                          <Link
                            to="/personal-services/tree-cutting"
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
                  {selectedButton === "Commercial Tree Cutting" ? (
                    <div className={styles.main_items_3}>
                      {pandantNeckaces.map((item) => {
                        return (
                          <Link
                            to="/personal-services/tree-cutting"
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
                  {selectedButton === "Forestry and Logging" ? (
                    <div className={styles.main_items_3}>
                      {chokerNeckaces.map((item) => {
                        return (
                          <Link
                            to="/personal-services/tree-cutting"
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
                  {selectedButton ===
                  "Tree Cutting Equipment and Techniques" ? (
                    <div className={styles.main_items_3}>
                      {statementNecklaces.map((item) => {
                        return (
                          <Link
                            to="/personal-services/tree-cutting"
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
                  {selectedButton === "Tree Preservation and Conservation" ? (
                    <div className={styles.main_items_3}>
                      {tops.map((item) => {
                        return (
                          <Link
                            to="/personal-services/tree-cutting"
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
                  {selectedButton === "Lawn Maintenance Services" ? (
                    <div className={styles.main_items_3}>
                      {bottoms.map((item) => {
                        return (
                          <Link
                            to="/personal-services/lawn"
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
                  {selectedButton === "Landscape Design and Installation" ? (
                    <div className={styles.main_items_3}>
                      {outerwear.map((item) => {
                        return (
                          <Link
                            to="/personal-services/lawn"
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
                  {selectedButton === "Lawn Care and Treatment" ? (
                    <div className={styles.main_items_3}>
                      {dresses.map((item) => {
                        return (
                          <Link
                            to="/personal-services/lawn"
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
                  {selectedButton === "Tree and Shrub Care" ? (
                    <div className={styles.main_items_3}>
                      {activewear.map((item) => {
                        return (
                          <Link
                            to="/personal-services/lawn"
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
                  {selectedButton === "Hardscape Services" ? (
                    <div className={styles.main_items_3}>
                      {sleepwear.map((item) => {
                        return (
                          <Link
                            to="/personal-services/lawn"
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
                  {selectedButton === "Irrigation Services" ? (
                    <div className={styles.main_items_3}>
                      {swimwear.map((item) => {
                        return (
                          <Link
                            to="/personal-services/lawn"
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
                  {selectedButton === "Seasonal Cleanups" ? (
                    <div className={styles.main_items_3}>
                      {workwear.map((item) => {
                        return (
                          <Link
                            to="/personal-services/lawn"
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
                  {selectedButton === "Lawn Renovation Services" ? (
                    <div className={styles.main_items_3}>
                      {babyClothing.map((item) => {
                        return (
                          <Link
                            to="/personal-services/lawn"
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
                  {selectedButton === "Organic and Eco-Friendly Services" ? (
                    <div className={styles.main_items_3}>
                      {uniforms.map((item) => {
                        return (
                          <Link
                            to="/personal-services/lawn"
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
                  {selectedButton === "Commercial Lawn Services" ? (
                    <div className={styles.main_items_3}>
                      {bClassic.map((item) => {
                        return (
                          <Link
                            to="/personal-services/lawn"
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
                  {selectedButton === "Electrical Services" ? (
                    <div className={styles.main_items_3}>
                      {bLowEnergy.map((item) => {
                        return (
                          <Link
                            to="/personal-services/handyman"
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
                  {selectedButton === "Plumbing Services" ? (
                    <div className={styles.main_items_3}>
                      {bFive.map((item) => {
                        return (
                          <Link
                            to="/personal-services/handyman"
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
                  {selectedButton === "Carpentry Services" ? (
                    <div className={styles.main_items_3}>
                      {bFiveOne.map((item) => {
                        return (
                          <Link
                            to="/personal-services/handyman"
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
                  {selectedButton === "Painting Services" ? (
                    <div className={styles.main_items_3}>
                      {bFiveTwo.map((item) => {
                        return (
                          <Link
                            to="/personal-services/handyman"
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
                  {selectedButton === "Home Repair and Maintenance" ? (
                    <div className={styles.main_items_3}>
                      {bMesh.map((item) => {
                        return (
                          <Link
                            to="/personal-services/handyman"
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
                  {selectedButton === "Residential Snow Removal" ? (
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
                  {selectedButton === "Commercial Snow Removal" ? (
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
                  {selectedButton === "Municipal Snow Removal" ? (
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
                  {selectedButton === "Specialized Snow Removal" ? (
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
                  {selectedButton === "Insect Extermination Services" ? (
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
                  {selectedButton === "Rodent Management Solutions" ? (
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
                  {selectedButton === "Wildlife Pest Control" ? (
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
                  {selectedButton === "Nuisance Bird Management" ? (
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
                  {selectedButton === "Nuisance Bird Management" ? (
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
                  {selectedButton === "Green and Eco-Friendly Pest" ? (
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
                  {selectedButton === "Commercial Pest Management" ? (
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
                  {selectedButton === "Residential Pest Solutions" ? (
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
                  {selectedButton === "Lawn and Garden Pest Control" ? (
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
                  {selectedButton === "Structural Pest Protection" ? (
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
                  {selectedButton === "Pest Inspection and Prevention" ? (
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
                  {selectedButton === "Power Generation" ? (
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
                  {selectedButton === "Power Distribution" ? (
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
                  {selectedButton === "Electrical Wiring" ? (
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
                  {selectedButton === "Control Systems" ? (
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
                  {selectedButton === "Electronics Design" ? (
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
                  {selectedButton === "Electric Motors" ? (
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
                  {selectedButton === "Electrical Safety" ? (
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
                  {selectedButton === "Renewable Energy Systems" ? (
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
                  {selectedButton === "Power Electronics" ? (
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
                  {selectedButton === "High Voltage Engineering" ? (
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
                  {selectedButton === "Energy Efficiency" ? (
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
                  {selectedButton === "Electric Vehicle Technology" ? (
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
                  {selectedButton === "Robotics and Automation" ? (
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
                  {selectedButton === "Test and Measurement" ? (
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

export default RentingProfservicesPage;

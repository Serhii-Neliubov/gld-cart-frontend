type ProfessionalServicesDataType = {
  image: string;
  name: string;
  category: string;
  items: {
    [key: string]: string[];
  };
}[];

export const ProfessionalServicesData: ProfessionalServicesDataType = [
  {
    image: "RentingProfservicesPage/icon1.svg",
    category: "cleaning",
    name: "Cleaning",
    items: {
      "General Cleaning": [
        "Dusting surfaces and furniture.",
        "Wiping down countertops and tables.",
        "Sweeping and mopping floors.",
        "Vacuuming carpets and rugs.",
        "Other",
      ],
      "Kitchen Cleaning": [
        "Cleaning and sanitizing countertops.",
        "Cleaning appliances",
        "Washing dishes or loading the dishwasher.",
        "Cleaning the sink and faucet.",
        "Wiping down cabinet doors.",
        "Other",
      ],
      "Bathroom Cleaning": [
        "Cleaning and disinfecting the toilet.",
        "Scrubbing the bathtub and/or shower.",
        "Cleaning bathroom sinks and faucets",
        "Wiping down mirrors and glass surfaces.",
        "Sweeping and mopping the bathroom floor.",
        "Other",
      ],
      "Bedroom Cleaning": [
        "Changing bed linens and making the bed.",
        "Dusting and cleaning furniture.",
        "Vacuuming or sweeping the floor.",
        "Organizing clutter.",
        "Other",
      ],
      "Living Room Cleaning": [
        "Dusting and cleaning electronics",
        "Vacuuming upholstery and curtains.",
        "Cleaning and organizing shelves.",
        "Wiping down remote controls and surfaces.",
        "Other",
      ],
      "Laundry Room Cleaning": [
        "Cleaning the washing machine and dryer.",
        "Wiping down laundry surfaces and shelves.",
        "Emptying the lint trap in the dryer.",
        "Organizing laundry supplies.",
        "Other",
      ],
      "Home Office Cleaning": [
        "Dusting and cleaning computer equipment.",
        "Organizing paperwork and office supplies.",
        "Vacuuming or sweeping the floor.",
        "Wiping down desks and surfaces.",
        "Other",
      ],
      "Entryway/Hallway Cleaning": [
        "Sweeping or vacuuming floors.",
        "Cleaning and organizing entryway storage.",
        "Wiping down doorknobs and light switches.",
        "Other",
      ],
      "Outdoor Cleaning": [
        "Sweeping and cleaning porches or decks",
        "Cleaning outdoor furniture.",
        "Gardening and yard work.",
        "Other",
      ],
    },
  },
  {
    image: "RentingProfservicesPage/icon2.svg",
    category: "repairing",
    name: "Repairing",
    items: {
      "Electronics Repair": [
        "Mobile phone repair",
        "Computer and laptop repair",
        "Television repair",
        "Game console repair",
        "Other",
      ],
      "Appliance Repair": [
        "Refrigerator repair",
        "Washer and dryer repair",
        "Oven and stove repair",
        "Dishwasher repair",
        "Other",
      ],
      "Automotive Repair": [
        "Car engine repair",
        "Transmission repair",
        "Brake repair",
        "Suspension and steering repair",
        "Other",
      ],
      "Home Repair": [
        "Plumbing repair",
        "Electrical system repair",
        "Roof repair",
        "HVAC repair",
        "Other",
      ],
      "Jewelry and Watch Repair": [
        "Watch battery replacement",
        "Jewelry resizing and refurbishing",
        "Watch movement repair",
        "Other",
      ],
      "Shoe and Leather Goods Repair": [
        "Shoe sole replacement",
        "Leather bag repair",
        "Belt repair and resizing",
        "Wallet and purse repair",
        "Other",
      ],
      "Bicycle Repair": [
        "Tire and tube replacement",
        "Brake and gear adjustments",
        "Frame repair",
        "Other",
      ],
      "Furniture Repair": [
        "Upholstery repair",
        "Furniture refinishing",
        "Wood furniture repair",
        "Other",
      ],
      "Musical Instrument Repair": [
        "Guitar repair and setup",
        "Piano tuning and repair",
        "Brass and woodwind instrument repair",
        "Other",
      ],
    },
  },
  {
    image: "RentingProfservicesPage/icon3.svg",
    category: "gardening",
    name: "Gardening",
    items: {
      "Vegetable Gardening": [
        "Organic vegetable gardening",
        "Raised bed gardening",
        "Container vegetable gardening",
        "Companion planting",
        "Other",
      ],
      "Flower Gardening": [
        "Rose gardening",
        "Perennial flower gardening",
        "Wildflower gardening",
        "Cottage garden style",
        "Other",
      ],
      "Herb Gardening": [
        "Medicinal herb gardening",
        "Culinary herb gardening",
        "Indoor herb gardening",
        "Herb drying and preservation",
        "Other",
      ],
      "Fruit Tree Gardening": [
        "Apple orchard management",
        "Citrus tree care",
        "Berry bush cultivation",
        "Espalier fruit trees",
        "Other",
      ],
      "Landscaping": [
        "Landscape design",
        "Xeriscaping",
        "Japanese garden design",
        "Rock garden construction",
        "Other",
      ],
      "Container Gardening": [
        "Succulent container gardens",
        "Patio and balcony gardening",
        "Indoor plant arrangements",
        "Terrarium creation",
        "Other",
      ],
      "Gardening for Wildlife": [
        "Butterfly garden",
        "Bird-friendly gardening",
        "Pollinator garden",
        "Bat-friendly garden",
        "Other",
      ],
      "Water Gardening": [
        "Koi pond maintenance",
        "Water lily cultivation",
        "Aquatic plant care",
        "Fountain and waterfall design",
        "Other",
      ],
      "Seasonal Gardening": [
        "Spring bulb planting",
        "Fall garden preparation",
        "Winter garden protection",
        "Summer flower maintenance",
        "Other",
      ],
    },
  },
  {
    image: "RentingProfservicesPage/icon4.svg",
    category: "treeCutting",
    name: "Tree Cutting",
    items: {
      "Residential Tree Cutting": [
        "Pruning and Trimming",
        "Tree Removal",
        "Emergency Tree Removal",
        "Stump Grinding",
        "Tree Health Assessment",
        "Other",
      ],
      "Commercial Tree Cutting": [
        "Land Clearing",
        "Arboricultural Consulting",
        "Urban Tree Management",
        "Tree Inventory and Management Plans",
        "Lot Clearing for Development",
        "Other",
      ],
      "Forestry and Logging": [
        "Timber Harvesting",
        "Clearcutting",
        "Selective Logging",
        "Sustainable Logging Practices",
        "Reforestation",
        "Other",
      ],
      "Tree Cutting Equipment and Techniques": [
        "Chainsaw Operation",
        "Aerial Tree Cutting",
        "Tree Felling Techniques",
        "Arborist Rigging",
        "Wood Chipper Operation",
        "Other",
      ],
      "Tree Preservation and Conservation": [
        "Pruning for Tree Health",
        "Hazard Assessment and Mitigation",
        "Wildlife Habitat Preservation",
        "Historical Tree Preservation",
        "Community Tree Programs",
        "Other",
      ],
    },
  },
  {
    image: "RentingProfservicesPage/icon5.svg",
    category: "lawnServices",
    name: "Lawn Services",
    items: {
      "Lawn Maintenance Services": [
        "Mowing and grass cutting",
        "Edging and trimming",
        "Lawn fertilization and aeration",
        "Weed control and removal",
        "Leaf and debris cleanup",
        "Other",
      ],
      "Landscape Design and Installation": [
        "Landscape planning and consultation",
        "Planting flowers, shrubs, and trees",
        "Hardscape construction",
        "Irrigation system installation",
        "Outdoor lighting installation",
        "Other",
      ],
      "Lawn Care and Treatment": [
        "Lawn disease control",
        "Pest and insect management",
        "Soil testing and analysis",
        "Seasonal lawn treatments",
        "pH balancing and soil amendments",
        "Other",
      ],
      "Tree and Shrub Care": [
        "Tree pruning and trimming",
        "Tree and shrub removal",
        "Disease diagnosis and treatment",
        "Arborist services",
        "Deep root fertilization",
        "Other",
      ],
      "Hardscape Services": [
        "Patio and deck design and construction",
        "Walkway and driveway installation",
        "Retaining wall construction",
        "Stone or brick work",
        "Outdoor kitchen and firepit installation",
        "Other",
      ],
      "Irrigation Services": [
        "Sprinkler system installation",
        "Sprinkler repair and maintenance",
        "Drip irrigation system installation",
        "Smart irrigation system upgrades",
        "Water-efficient system audits",
        "Other",
      ],
      "Seasonal Cleanups": [
        "Spring and fall cleanups",
        "Gutter cleaning and maintenance",
        "Mulch installation",
        "Snow removal",
        "Holiday decoration setup and takedown",
        "Other",
      ],
      "Lawn Renovation Services": [
        "Complete lawn restoration",
        "Sod installation",
        "Grading and leveling",
        "Hydroseeding",
        "Erosion control measures",
        "Other",
      ],
      "Organic and Eco-Friendly Services": [
        "Organic lawn care programs",
        "Chemical-free pest control",
        "Sustainable landscaping practices",
        "Rain garden installation",
        "Xeriscaping",
        "Other",
      ],
      "Commercial Lawn Services": [
        "Grounds maintenance for businesses",
        "Large-scale landscaping projects",
        "Property management services",
        "Sports field maintenance",
        "Commercial snow removal",
        "Other",
      ],
    },
  },
  {
    image: "RentingProfservicesPage/icon6.svg",
    category: "handyman",
    name: "Handyman",
    items: {
      "Electrical Services": ["Wiring and rewiring", "Outlet and switch installation", "Lighting fixture installation", "Circuit breaker replacement", "Ceiling fan installation", "Other"],
      "Plumbing Services": ["Faucet repair and installation", "Toilet repair and replacement", "Drain cleaning", "Pipe leak repair", "Water heater installation", "Other"],
      "Carpentry Services": ["Door installation and repair", "Cabinet assembly and installation", "Deck and fence repair", "Trim and molding installation", "Custom shelving and storage", "Other"],
      "Painting Services": [
        "Interior and exterior painting",
        "Wall patching and repair",
        "Deck staining and sealing",
        "Wallpaper removal",
        "Texture and faux finish painting",
        "Other",
      ],
      "Home Repair and Maintenance": [
        "Drywall repair",
        "Tile and grout repair",
        "Roof and gutter maintenance",
        "Insulation installation",
        "Appliance installation and repair",
        "Other",
      ],
    },
  },
  {
    image: "RentingProfservicesPage/icon7.svg",
    category: "snowRemoval",
    name: "Snow Removal",
    items: {
      "Residential Snow Removal": [
        "Driveway Snow Plowing",
        "Sidewalk Clearing",
        "Roof Snow Removal",
        "Walkway De-Icing",
        "Snow Blowing Services",
        "Other",
      ],
      "Commercial Snow Removal": [
        "Parking Lot Plowing",
        "Ice Management",
        "Snow Hauling",
        "Salting and Sanding",
        "Snow Stacking and Removal",
        "Other",
      ],
      "Municipal Snow Removal": [
        "Road Plowing",
        "Bridge and Overpass Clearing",
        "Public Pathway Maintenance",
        "Emergency Snow Response",
        "Snow Dump Operations",
        "Other",
      ],
      "Specialized Snow Removal": [
        "Airport Snow Removal",
        "Ski Resort Snow Grooming",
        "Snow Removal for Railways",
        "Hospital and Healthcare Facilities Snow Management",
        "Snow Removal for Stadiums and Arenas",
        "Other",
      ],
    },
  },
  {
    image: "RentingProfservicesPage/icon8.svg",
    category: "pestControl",
    name: "Pest Control",
    items: {
      "Insect Extermination Services": [
        "Ant Control",
        "Roach Extermination",
        "Bed Bug Removal",
        "Termite Inspections",
        "Flea and Tick Control",
        "Other",
      ],
      "Rodent Management Solutions": [
        "Rat Removal Services",
        "Mice Control Experts",
        "Squirrel Removal",
        "Vole and Gopher Control",
        "Muskrat Eradication",
        "Other",
      ],
      "Wildlife Pest Control": [
        "Raccoon Removal",
        "Bat Exclusion Services",
        "Bird Deterrent Solutions",
        "Snake Removal Experts",
        "Skunk Control Services",
        "Other",
      ],
      "Nuisance Bird Management": [
        "Pigeon Control",
        "Seagull Deterrence",
        "Sparrow Nest Removal",
        "Crow and Magpie Control",
        "Woodpecker Solutions",
        "Other",
      ],
      "Green and Eco-Friendly Pest": [
        "Organic Pest Control",
        "Non-Toxic Treatments",
        "Integrated Pest Management",
        "Eco-Friendly Pesticides",
        "Sustainable Pest Solutions",
        "Other",
      ],
      "Commercial Pest Management": [
        "Office Building Pest Control",
        "Restaurant Pest Services",
        "Hotel Pest Prevention",
        "Warehouse Pest Control",
        "Retail Store Extermination",
        "Other",
      ],
      "Residential Pest Solutions": [
        "Home Pest Inspections",
        "Apartment Pest Control",
        "Condo Pest Management",
        "Townhouse Extermination",
        "Villa Pest Services",
        "Other",
      ],
      "Lawn and Garden Pest Control": [
        "Lawn Insect Treatments",
        "Garden Pest Solutions",
        "Tree and Shrub Care",
        "Weed Control Services",
        "Lawn Fungus Management",
        "Other",
      ],
      "Structural Pest Protection": [
        "Foundation Pest Barriers",
        "Crawl Space Encapsulation",
        "Attic Insulation Pest Control",
        "Basement Waterproofing",
        "Wall Void Pest Prevention",
        "Other",
      ],
      "Pest Inspection and Prevention": [
        "Pest Assessment Services",
        "Preventative Pest Measures",
        "Annual Pest Inspections",
        "Pre-Purchase Pest Checks",
        "Pest-Proofing Advice",
        "Other",
      ],
    },
  },
  {
    image: "RentingProfservicesPage/icon9.svg",
    category: "electrical",
    name: "Electrical",
    items: {
      "Power Generation": [
        "Renewable Sources",
        "Thermal Power Plants",
        "Hydroelectric Facilities",
        "Nuclear Power Stations",
        "Wind and Solar Farms",
        "Other",
      ],
      "Power Distribution": [
        "Grid Infrastructure",
        "Transformers and Substations",
        "Circuit Breakers",
        "Switchgear Systems",
        "Voltage Regulation",
        "Other",
      ],
      "Electrical Wiring": [
        "Residential Wiring",
        "Commercial Installations",
        "Industrial Wiring",
        "Underground Cabling",
        "Conduit Systems",
        "Other",
      ],
      "Control Systems": [
        "PLC Programming",
        "Automation Solutions",
        "SCADA Systems",
        "Process Control",
        "Instrumentation",
        "Other",
      ],
      "Electronics Design": [
        "PCB Layout and Design",
        "Analog Circuitry",
        "Digital Electronics",
        "Microcontroller Systems",
        "RF and Communication",
        "Other",
      ],
      "Electric Motors": [
        "AC Motor Types",
        "DC Motor Varieties",
        "Motor Control Methods",
        "Servo Motors",
        "Stepper Motors",
        "Other",
      ],
      "Electrical Safety": [
        "Grounding and Bonding",
        "Arc Flash Protection",
        "Electrical Codes",
        "Safety Equipment",
        "Lockout/Tagout",
        "Other",
      ],
      "Renewable Energy Systems": [
        "Solar Photovoltaics",
        "Wind Turbine Systems",
        "Battery Storage",
        "Grid Integration",
        "Inverter Technologies",
        "Other",
      ],
      "Lighting Technology": [
        "LED Lighting",
        "Fluorescent Fixtures",
        "Incandescent Lamps",
        "Smart Lighting Systems",
        "Lighting Controls",
        "Other",
      ],
      "Power Electronics": [
        "Inverters and Converters",
        "Power Factor Correction",
        "Voltage Regulators",
        "UPS Systems",
        "Motor Drives",
        "Other",
      ],
      "High Voltage Engineering": [
        "HV Substations",
        "Insulation Materials",
        "Surge Protection",
        "Dielectric Testing",
        "Lightning Protection",
        "Other",
      ],
      "Energy Efficiency": [
        "Energy Audits",
        "HVAC Optimization",
        "Energy Management Systems",
        "Green Building Practices",
        "Energy Conservation",
        "Other",
      ],
      "Electric Vehicle Technology": [
        "EV Charging Infrastructure",
        "Battery Technology",
        "EV Motors and Controllers",
        "Charging Protocols",
        "EV Fleet Management",
        "Other",
      ],
      "Robotics and Automation": [
        "Industrial Robots",
        "Robotic Arm Design",
        "Automated Assembly",
        "Robotics Programming",
        "Human-Robot Interaction",
        "Other",
      ],
      "Test and Measurement": [
        "Multimeters and Testers",
        "Oscilloscopes",
        "Power Quality Analysis",
        "Calibration Techniques",
        "Data Logging Systems",
        "Other",
      ],
    },
  },
];

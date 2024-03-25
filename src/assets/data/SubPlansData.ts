export type SubPlan = {
  img: string;
  title: string;
  subtitle: string;
  price: string;
  color: string;
  advantages: string[];
  popular: boolean;
  lookup_key: string;
};

export const SubPlansData: SubPlan[] = [
  {
    img: "SubPlans/icon1.svg",
    title: "Renting",
    subtitle: "In this Package you can only rent your products",
    price: "100",
    color: "#2283DC",
    advantages: ["Vehicles", "Houses", "Electronics"],
    popular: false,
    lookup_key: "Renting",
  },
  {
    img: "SubPlans/icon2.svg",
    title: "Professional Services",
    subtitle:
      "In this Package you can only Sell your Professional Services to your Clients",
    price: "100",
    color: "rgba(2, 160, 160, 1)",
    advantages: [
      "Cleaning",
      "Repairing",
      "Electrical",
      "Handyman",
      "Other Services",
    ],
    popular: false,
    lookup_key: "Professional Services",
  },
  {
    img: "SubPlans/icon3.svg",
    title: "Products",
    subtitle: "In this Package you can only Sell your Products to your Clients",
    price: "100",
    color: "rgba(220, 168, 34, 1)",
    advantages: [
      "Beauty of Skin",
      "bags",
      "Awesome Lip Care",
      "Mobile & Tabs",
      "Other Products",
    ],
    popular: false,
    lookup_key: "Products",
  },
  {
    img: "SubPlans/icon4.svg",
    title: "Extended RentingCategories",
    subtitle:
      "In this Package you can rent your products & Sell your Professional Services to your Clients",
    price: "150",
    color: "#FAB706",
    advantages: ["RentingCategories Services", "Professional Services"],
    popular: true,
    lookup_key: "Extended RentingCategories",
  },
  {
    img: "SubPlans/icon5.svg",
    title: "All Services Package",
    subtitle:
      "In this Package you can Rent your products, Sell your Professional Services &Sell your Products to your Clients",
    price: "250",
    color: "#7095F1",
    advantages: ["RentingCategories Services", "Professional Services"],
    popular: true,
    lookup_key: "All Services Package",
  },
];

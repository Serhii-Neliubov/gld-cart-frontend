import { Link } from "react-router-dom";
import styles from "./RentingCategoryPage.module.scss";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { updateVehicle } from "../../redux/Slices/vehiclesItemSlice";

const clearClick = {
  vehicles: false,
  houses: false,
  electronics: false,
  openCars: false,
  openCarsType: false,
  openHouseType: false,
  openElectronicsType: false,
};

export interface IClearClick {
  vehicles: boolean;
  houses: boolean;
  electronics: boolean;
  openCars: boolean;
  openCarsType: boolean;
  openHouseType: boolean;
  openElectronicsType: boolean;
}

const cars = [
  { name: "Sedans" },
  { name: "Coupes" },
  { name: "Hatchbacks" },
  { name: "Minivans" },
  { name: "Pickup Trucks" },
  { name: "Luxury Cars" },
  { name: "Electric Cars" },
  { name: "Hybrid Cars" },
  { name: "Full-size cars" },
  { name: "Premium cars" },
  { name: "Economy cars" },
  { name: "Midsize cars" },
  { name: "Sports cars" },
  { name: "Vans" },
  { name: "Jeep" },
];

const carsType = [
  { name: "Toyota" },
  { name: "Honda" },
  { name: "Ford" },
  { name: "Nissan" },
  { name: "Hyundai" },
  { name: "Kia" },
  { name: "Subaru" },
  { name: "Mazda" },
  { name: "BMW" },
  { name: "Mercedes" },
  { name: "Audi" },
  { name: "Lexus" },
  { name: "Others" },
];

const houses = [
  { name: "Single-Family Homes" },
  { name: "Multi-Family Home" },
  { name: "Town House" },
  { name: "Apartments" },
  { name: "Cottages" },
  { name: "Villa" },
  { name: "Cabin" },
  { name: "Tiny House" },
  { name: "Condominium (Condo)" },
  { name: "Historic Home" },
];

const electronics = [
  { name: "Laptops" },
  { name: "Tablets" },
  { name: "Smartphones" },
  { name: "Projectors" },
  { name: "Televisions" },
  { name: "Speakers" },
  { name: "Microphones" },
  { name: "Cameras" },
  { name: "PlayStation" },
  { name: "Drones" },
  { name: "Washing machines" },
  { name: "GPS Navigation Devices" },
  { name: "Power Generators" },
  { name: "Oxygen concentrators" },
  { name: "Fitness trackers" },
];

const laptops = [
  { name: "Apple" },
  { name: "Dell" },
  { name: "HP" },
  { name: "Lenovo" },
  { name: "Acer" },
  { name: "Microsoft" },
  { name: "Toshiba" },
  { name: "Samsung" },
  { name: "Fujitsu" },
  { name: "Huawei" },
  { name: "Other" },
];

const smartphones = [
  { name: "Apple" },
  { name: "Huawei" },
  { name: "Samsung" },
  { name: "Lenovo" },
  { name: "Google" },
  { name: "OnePlus" },
  { name: "Xiaomi" },
  { name: "Oppo" },
  { name: "Vivo" },
  { name: "Sony" },
  { name: "LG" },
  { name: "Lenovo" },
  { name: "Other" },
];

const projectors = [
  { name: "Epson" },
  { name: "Sony" },
  { name: "BenQ" },
  { name: "Optoma" },
  { name: "ViewSonic" },
  { name: "NEC" },
  { name: "LG" },
  { name: "Casio" },
  { name: "Panasonic" },
  { name: "Acer" },
  { name: "Other" },
];

const televisions = [
  { name: "Samsung" },
  { name: "LG" },
  { name: "Sony" },
  { name: "TCL" },
  { name: "Panasonic" },
  { name: "Toshiba" },
  { name: "Other" },
];

const speakers = [
  { name: "Bose" },
  { name: "Sonos" },
  { name: "JBL (by Harman)" },
  { name: "Sony" },
  { name: "KEF" },
  { name: "Polk Audio" },
  { name: "Other" },
];

const microphones = [
  { name: "Shure" },
  { name: "Audio-Technica" },
  { name: "Blue Microphones" },
  { name: "Electro-Voice (EV)" },
  { name: "Neumann" },
  { name: "Microsoft" },
  { name: "Earthworks Audio" },
  { name: "Other" },
];

const cameras = [
  { name: "Canon" },
  { name: "Nikon" },
  { name: "GoPro" },
  { name: "RED Digital Cinema" },
  { name: "Blackmagic Design" },
  { name: "Phase One" },
  { name: "Leica Audio" },
  { name: "RED Hydrogen" },
  { name: "Other" },
];

const playstation = [
  { name: "Sony Interactive Entertainment Europe" },
  { name: "PlayStation Studios" },
  { name: "PlayStation UK" },
  { name: "PlayStation Authorized Retailers" },
  { name: "Other" },
];

const drones = [
  { name: "DJI" },
  { name: "QuestUAV" },
  { name: "sense Fly" },
  { name: "Anafi UK" },
  { name: "Skyports" },
  { name: "PrecisionHawk" },
  { name: "Flyby Technology" },
  { name: "Dronelink" },
  { name: "Altitude Angel" },
  { name: "Drone Safe Register" },
  { name: "Other" },
];

const washingmachines = [
  { name: "Beko" },
  { name: "Bosch" },
  { name: "Hotpoint" },
  { name: "Indesit" },
  { name: "Siemens" },
  { name: "Miele" },
  { name: "AEG" },
  { name: "Samsung" },
  { name: "LG" },
  { name: "Zanussi" },
  { name: "Other" },
];

const gpsnavigation = [
  { name: "Garmin" },
  { name: "TomTom" },
  { name: "Mio" },
  { name: "Snooper" },
  { name: "Cobra Electronic" },
  { name: "Bushnell" },
  { name: "Navman" },
  { name: "Aguri" },
  { name: "Black Vue" },
  { name: "Snooper Truckmate" },
  { name: "Other" },
];

const generators = [
  { name: "Caterpillar" },
  { name: "Cummins" },
  { name: "Perkins Engines" },
  { name: "FG Wilson" },
  { name: "JCB Power Products" },
  { name: "Himoinsa" },
  { name: "SDMO Industries" },
  { name: "Atlas Copco" },
  { name: "Pramac UK" },
  { name: "APR Energy Truckmate" },
  { name: "Other" },
];

const concentrators = [
  { name: "Philips Respironics" },
  { name: "Invacare" },
  { name: "Devilish Healthcare" },
  { name: "Yuwell" },
  { name: "Drive Devilish Healthcare" },
  { name: "GCE Group" },
  { name: "O2 Concepts" },
  { name: "Atlas Copco" },
  { name: "Besco Medical" },
  { name: "Other" },
];

const fitnesstrackers = [
  { name: "Apple" },
  { name: "Fitbit" },
  { name: "Garmin" },
  { name: "Witlings" },
  { name: "Polar" },
  { name: "Suunto" },
  { name: "Oppo" },
  { name: "Amazfit" },
  { name: "Xiaomi" },
  { name: "Huawei" },
  { name: "Other" },
];

const singlefamily = [
  { name: "Ranch House" },
  { name: "Cape Cod House" },
  { name: "Victorian House" },
  { name: "Colonial House" },
  { name: "Craftsman House" },
  { name: "Mediterranean House" },
  { name: "Tudor House" },
  { name: "Contemporary House" },
  { name: "Georgian House" },
  { name: "Pueblo Revival House" },
  { name: "Other" },
];

const multifamily = [
  { name: "Duplex" },
  { name: "Triplex" },
  { name: "Quadplex" },
  { name: "Apartment Building" },
  { name: "Multi-Unit Complex" },
  { name: "Other" },
];

const townhouse = [
  { name: "Rowhouse" },
  { name: "Brownhouse" },
  { name: "Terrace House" },
  { name: "Linked House" },
  { name: "Other" },
];

const apartments = [
  { name: "Studio Apartment" },
  { name: "One-Bedroom Apartment" },
  { name: "Two-Bedroom Apartment" },
  { name: "Penthouse Apartment" },
  { name: "Loft Apartment" },
  { name: "Other" },
];

const cottages = [
  { name: "Beach Cottage" },
  { name: "Mountain Cottage" },
  { name: "Lakeside Cottage" },
  { name: "Other" },
];

const villa = [
  { name: "Tuscan Villa" },
  { name: "Mediterranean Villa" },
  { name: "Caribbean Villa" },
  { name: "Other" },
];
const cabin = [
  { name: "Log Cabin" },
  { name: "A-Frame Cabin" },
  { name: "Rustic Cabin" },
  { name: "Other" },
];
const tinyhouse = [
  { name: "Traditional Tiny House" },
  { name: "Container Home" },
  { name: "Tiny House on Wheels (THOW)" },
  { name: "Other" },
];
const condominium = [
  { name: "High-Rise Condo" },
  { name: "Mid-Rise Condo" },
  { name: "Low-Rise Condo" },
  { name: "Luxury Condo" },
  { name: "Other" },
];
const historic = [
  { name: "Victorian Era Home" },
  { name: "Colonial Revival Home" },
  { name: "Mid-Century Modern Home" },
  { name: "Other" },
];

const RentingCategoryPage: FC = () => {
  const [isClicked, setIsClicked] = React.useState<IClearClick>(clearClick);
  const [selectedButton, setSelectedButton] = React.useState<string | null>(
    null
  );
  const dispatch = useDispatch();
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
                    isClicked.electronics ||
                    isClicked.houses ||
                    isClicked.vehicles
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
                    isClicked.openCarsType ||
                    isClicked.openHouseType ||
                    isClicked.openElectronicsType
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
              <div className={styles.routing}>
                <div
                  style={{ backgroundColor: "#D9D9D9" }}
                  className={styles.number}
                >
                  6
                </div>
                <span>Publish</span>
              </div>
            </div>
            <div className={styles.content_blocks}>
              <h1>
                Select <span>RENTING</span> Category
              </h1>
              <div className={styles.main_block}>
                <h2>choose a category</h2>
                <div className={styles.main_content}>
                  <div className={styles.main_items_1}>
                    <button
                      style={
                        isClicked.vehicles ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() => {
                        setIsClicked({ ...clearClick, vehicles: true });
                      }}
                      className={styles.main_item_1}
                    >
                      <img src="RentingCategory/ph_car.png" alt="img" />
                      <span>Vehicles</span>
                    </button>
                    <button
                      style={
                        isClicked.houses ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, houses: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img
                        src="RentingCategory/game-icons_house.png"
                        alt="img"
                      />
                      <span>Houses</span>
                    </button>
                    <button
                      style={
                        isClicked.electronics
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, electronics: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="RentingCategory/pajamas_mobile.png" alt="img" />
                      <span>Electronics</span>
                    </button>
                  </div>
                  {isClicked.vehicles && (
                    <div className={styles.main_items_2}>
                      {cars.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              dispatch(
                                updateVehicle({
                                  key: "subcategory",
                                  value: item.name,
                                })
                              );
                              setIsClicked({
                                ...isClicked,
                                openCarsType: true,
                              });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.houses && (
                    <div className={styles.main_items_2}>
                      {houses.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({
                                ...isClicked,
                                openHouseType: true,
                              });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.electronics && (
                    <div className={styles.main_items_2}>
                      {electronics.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({
                                ...isClicked,
                                openElectronicsType: true,
                              });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.openCarsType && (
                    <div className={styles.main_items_3}>
                      {carsType.map((item) => {
                        return (
                          <Link
                            onClick={() => {
                              dispatch(
                                updateVehicle({ key: "item", value: item.name })
                              );
                            }}
                            to="/renting-category-page/vehicles"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                  {selectedButton === "Laptops" ? (
                    <div className={styles.main_items_3}>
                      {laptops.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Tablets" ? (
                    <div className={styles.main_items_3}>
                      {laptops.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Smartphones" ? (
                    <div className={styles.main_items_3}>
                      {smartphones.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Projectors" ? (
                    <div className={styles.main_items_3}>
                      {projectors.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Televisions" ? (
                    <div className={styles.main_items_3}>
                      {televisions.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Speakers" ? (
                    <div className={styles.main_items_3}>
                      {speakers.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Microphones" ? (
                    <div className={styles.main_items_3}>
                      {microphones.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Cameras" ? (
                    <div className={styles.main_items_3}>
                      {cameras.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "PlayStation" ? (
                    <div className={styles.main_items_3}>
                      {playstation.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Drones" ? (
                    <div className={styles.main_items_3}>
                      {drones.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Washing machines" ? (
                    <div className={styles.main_items_3}>
                      {washingmachines.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "GPS Navigation Devices" ? (
                    <div className={styles.main_items_3}>
                      {gpsnavigation.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Power Generators" ? (
                    <div className={styles.main_items_3}>
                      {generators.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Oxygen concentrators" ? (
                    <div className={styles.main_items_3}>
                      {concentrators.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Fitness trackers" ? (
                    <div className={styles.main_items_3}>
                      {fitnesstrackers.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/electronics"
                            key={item.name}
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
                  {selectedButton === "Single-Family Homes" ? (
                    <div className={styles.main_items_3}>
                      {singlefamily.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/houses"
                            key={item.name}
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
                  {selectedButton === "Multi-Family Home" ? (
                    <div className={styles.main_items_3}>
                      {multifamily.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/houses"
                            key={item.name}
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
                  {selectedButton === "Town House" ? (
                    <div className={styles.main_items_3}>
                      {townhouse.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/houses"
                            key={item.name}
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
                  {selectedButton === "Apartments" ? (
                    <div className={styles.main_items_3}>
                      {apartments.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/houses"
                            key={item.name}
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
                  {selectedButton === "Cottages" ? (
                    <div className={styles.main_items_3}>
                      {cottages.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/houses"
                            key={item.name}
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
                  {selectedButton === "Villa" ? (
                    <div className={styles.main_items_3}>
                      {villa.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/houses"
                            key={item.name}
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
                  {selectedButton === "Cabin" ? (
                    <div className={styles.main_items_3}>
                      {cabin.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/houses"
                            key={item.name}
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
                  {selectedButton === "Tiny House" ? (
                    <div className={styles.main_items_3}>
                      {tinyhouse.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/houses"
                            key={item.name}
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
                  {selectedButton === "Condominium (Condo)" ? (
                    <div className={styles.main_items_3}>
                      {condominium.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/houses"
                            key={item.name}
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
                  {selectedButton === "Historic Home" ? (
                    <div className={styles.main_items_3}>
                      {historic.map((item) => {
                        return (
                          <Link
                            to="/renting-category-page/houses"
                            key={item.name}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentingCategoryPage;

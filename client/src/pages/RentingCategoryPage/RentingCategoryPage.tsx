import { Link } from "react-router-dom";
import styles from "./RentingCategoryPage.module.scss";
import React from "react";

const clearClick = {
  vehicles: false,
  houses: false,
  electronics: false,
  openCars: false,
  openCarsType: false,
  openHouseType: false,
  openElectronicsType: false,
};

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
const housesType = [
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

const RentingCategoryPage = () => {
  const [isClicked, setIsClicked] = React.useState(clearClick);
  const [selectedButton, setSelectedButton] = React.useState(null);

  const handleButtonClick = (item) => {
    setSelectedButton(item);
  };

  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.routings}>
              <div className={styles.routing}>
                <div className={styles.number}>1</div>
                <span>Category</span>
              </div>
              <div className={styles.routing}>
                <div className={styles.number}>2</div>
                <span>Sub Category</span>
              </div>
              <div className={styles.routing}>
                <div className={styles.number}>3</div>
                <span>Information</span>
              </div>
              <div className={styles.routing}>
                <div className={styles.number}>4</div>
                <span>Photo & Video</span>
              </div>
              <div className={styles.routing}>
                <div className={styles.number}>5</div>
                <span>Specifications</span>
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
                            to="/"
                            key={item.name}
                            className={styles.main_item_3}
                          >
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.openHouseType && (
                    <div className={styles.main_items_3}>
                      {housesType.map((item) => {
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

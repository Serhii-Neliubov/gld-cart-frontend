import { Link } from "react-router-dom";
import styles from "./RentingCategoryPage.module.scss";
import React, {FC, useState} from "react";
import {ProductsData} from "../../data/ProductsData.ts";
import RentingStage from "../../components/RentingStage/RentingStage.tsx";
import {RentingData} from "../../data/RentingData.ts";
interface IClearClick {
  [key: string]: boolean;
}
const clearClick: IClearClick = {
  vehicles: false,
  houses: false,
  electronics: false,
  openCars: false,
  openCarsType: false,
  openHouseType: false,
  openElectronicsType: false,
};

const RentingCategoryPage: FC = () => {
  const [isClicked, setIsClicked] = React.useState<IClearClick>(clearClick);
  const [coloredStage, setColoredStage] = useState(0);
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
            <RentingStage coloredStage={coloredStage} />
            <div className={styles.content_blocks}>
              <h1>
                Select <span>RENTING</span> Category
              </h1>
              <div className={styles.main_block}>
                <h2>choose a category</h2>
                <div className={styles.main_content}>
                  {/* CATEGORY GENERATION */}
                  <div className={styles.main_items_1}>
                    {RentingData.categories.map((category) => (
                        <button
                            key={category.name}
                            style={
                              isClicked[category.name]
                                  ? {backgroundColor: "#02A0A0"}
                                  : {}
                            }
                            onClick={() => {
                              setIsClicked({
                                ...clearClick,
                                [category.name]: true,
                              });
                              setColoredStage(1);
                              setSelectedButton("");
                            }}
                            className={styles.main_item_1}
                        >
                          <img src={category.img} alt="img"/>
                          <span>{category.name}</span>
                        </button>
                    ))}
                  </div>
                  {/* SUBCATEGORY GENERATION */}
                  <div className={styles.main_items_2}>
                    {Object.keys(isClicked).map((key) =>
                        isClicked[key] ? (
                            ProductsData.filter((item) => item.category === key).map(
                                (filteredItem) =>
                                    Object.keys(filteredItem.items).map((name) => (
                                        <button
                                            key={name}
                                            className={styles.main_item_2}
                                            style={{
                                              backgroundColor:
                                                  selectedButton === name ? "#02A0A0" : "",
                                            }}
                                            onClick={() => {
                                              handleButtonClick(name);
                                              setColoredStage(2);
                                            }}
                                        >
                                          <span>{name}</span>
                                        </button>
                                    ))
                            )
                        ) : null
                    )}
                  </div>
                  {/* ITEMS GENERATION */}
                  <div className={styles.main_items_3}>
                    {ProductsData.map((object) =>
                        selectedButton &&
                        Object.keys(object.items).includes(selectedButton) ? (
                            object.items[selectedButton].map((arrayItem, index) => (
                                <Link to="/" key={index} className={styles.main_item_3}>
                                  <span>{arrayItem}</span>
                                </Link>
                            ))
                        ) : null
                    )}
                  </div>
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

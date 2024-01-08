import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RentingProductsPage.module.scss";
import { RentingData } from "../../data/RentingData";
import RentingStage from "../../components/RentingStage/RentingStage";

interface IClearClick {
  [key: string]: boolean;
}

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
};

const RentingProductsPage: FC = () => {
  const [isClicked, setIsClicked] = useState<IClearClick>(clearClick);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [coloredStage, setColoredStage] = useState(0);

  const handleButtonClick = (item: string) => {
    setSelectedButton(item);
  };

  return (
      <div className="__container">
        <div className={styles.body}>
          <div className={styles.content}>
            <RentingStage coloredStage={coloredStage} />
            <div className={styles.content_blocks}>
              <h1>
                Select <span>PRODUCTS</span> Category
              </h1>
              <div className={styles.main_block}>
                <h2>choose a category</h2>
                <div className={styles.main_content}>
                  {/* CATEGORY GENERATION */}
                  <div className={styles.main_items_1}>
                    {RentingData.map((item) => (
                        <button
                            key={item.name}
                            style={
                              isClicked[item.category]
                                  ? { backgroundColor: "#02A0A0" }
                                  : {}
                            }
                            onClick={() => {
                              setIsClicked({
                                ...clearClick,
                                [item.category]: true,
                              });
                              setColoredStage(1);
                              setSelectedButton("");
                            }}
                            className={styles.main_item_1}
                        >
                          <img src={item.image} alt="img" />
                          <span>{item.name}</span>
                        </button>
                    ))}
                  </div>
                  {/* SUBCATEGORY GENERATION */}
                  <div className={styles.main_items_2}>
                    {Object.keys(isClicked).map((key) =>
                        isClicked[key] ? (
                            RentingData.filter((item) => item.category === key).map(
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
                    {RentingData.map((object) =>
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
  );
};

export default RentingProductsPage;

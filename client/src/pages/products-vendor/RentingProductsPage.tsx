import { Link } from "react-router-dom";
import styles from "./RentingProductsPage.module.scss";
import React, { FC, useState } from "react";
import {
  ProductsData,
  RentingProductsData,
} from "../../utils/RentingProductsData";
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
  const [isClicked, setIsClicked] = React.useState(clearClick);
  const [selectedButton, setSelectedButton] = React.useState<string | null>(
    null
  );
  const [coloredStage, setColoredStage] = useState(0);

  const keys = Object.keys(isClicked);
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
                Select <span>PRODUCTS</span> Category
              </h1>
              <div className={styles.main_block}>
                <h2>choose a category</h2>
                <div className={styles.main_content}>
                  {/*CATEGORY GENERATION*/}
                  <div className={styles.main_items_1}>
                    {ProductsData.map((item) => (
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
                  {/*SUBCATEGORY GENERATION*/}
                  {keys.map((key) => {
                    return (
                      isClicked[key] && (
                        <div className={styles.main_items_2}>
                          {RentingProductsData[
                            key as keyof typeof RentingProductsData
                          ].map((item) => {
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
                                    [key]: true,
                                  });
                                  handleButtonClick(item.name);
                                  setColoredStage(2);
                                }}
                              >
                                <span>{item.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      )
                    );
                  })}
                  {/*ITEMS GENERATION*/}
                  {ProductsData.map((object) =>
                    Object.keys(object.items).map((item) =>
                      selectedButton === item ? (
                        <div className={styles.main_items_3} key={item}>
                          {object.items[item].map((arrayItem, index) => (
                            <Link
                              to="/"
                              key={index}
                              className={styles.main_item_3}
                            >
                              <span>{arrayItem}</span>
                            </Link>
                          ))}
                        </div>
                      ) : null
                    )
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

export default RentingProductsPage;

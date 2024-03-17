import styles from "./RentingCategoryPage.module.scss";
import React, {FC, useState} from "react";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";
import {useNavigate} from "react-router-dom";
import {RentingData} from "@/assets/data/vendor-categories/RentingData.ts";

interface IClearClick {
  [key: string]: boolean;
}

const clearClick: IClearClick = {
  vehicles: false,
  houses: false,
  electronics: false,
};

const ROUTES = {
  VEHICLES: 'vehicles',
  HOUSES: 'houses',
  ELECTRONICS: 'electronics'
}

const links = {
  [ROUTES.VEHICLES]: '/renting-category-page/new-vehicle-page',
  [ROUTES.HOUSES]: '/renting-category-page/new-houses-page',
  [ROUTES.ELECTRONICS]: '/renting-category-page/new-electronics-page'
}

const RentingCategoryPage: FC = () => {
  const [category, setCategory] = useState('products');

  const [isClicked, setIsClicked] = React.useState<IClearClick>(clearClick);
  const [coloredStage, setColoredStage] = useState(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const subcategories = Object.keys(isClicked);
  const navigate = useNavigate();

  function productClickHandler(product: string) {
    navigate(`${links[category]}/${category}/${selectedSubCategory}/${product}`);
  }

  return (
    <React.Fragment>
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
                              setCategory(item.category);
                              setColoredStage(1);
                              setSelectedSubCategory("");
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
                    {subcategories.map((key) =>
                        isClicked[key] ? (
                            RentingData.filter((item) => item.category === key).map(
                                (filteredItem) =>
                                    Object.keys(filteredItem.items).map((name) => (
                                        <button
                                            key={name}
                                            className={styles.main_item_2}
                                            style={{
                                              backgroundColor:
                                                  selectedSubCategory === name ? "#02A0A0" : "",
                                            }}
                                            onClick={() => {
                                              setSelectedSubCategory(name);
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
                  {/* PRODUCTS GENERATION */}
                  <div className={styles.main_items_3}>
                    {RentingData.map((object) =>
                        selectedSubCategory &&
                        Object.keys(object.items).includes(selectedSubCategory) ? (
                            object.items[selectedSubCategory].map((arrayItem, index) => (
                                <button
                                    onClick={() => {
                                      productClickHandler(arrayItem)
                                    }}
                                    key={index}
                                    className={styles.main_item_1}
                                >
                                  <span>{arrayItem}</span>
                                </button>
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
    </React.Fragment>
  );
};

export default RentingCategoryPage;

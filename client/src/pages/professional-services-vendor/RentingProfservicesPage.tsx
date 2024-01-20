import styles from "./RentingProfservicesPage.module.scss";
import React, {FC, useState} from "react";
import RentingStage from "../../components/RentingStage/RentingStage.tsx";
import {setVendorSelectedItemValue} from "../../redux/slices/vendorSelectedItemSlice.ts";
import {Bags} from "../products-vendor/modal-windows/bags/Bags.tsx";
import {ProfessionalServicesData} from "../../data/vendorProductsData/ProfessionalServicesData.ts";
import {useDispatch} from "react-redux";

interface IClearClick {
  [key: string]: boolean;
}

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
}

const RentingProfservicesPage: FC = () => {
  const dispatch = useDispatch();
  const [stage, setStage] = useState(0);
  const [isClicked, setIsClicked] = React.useState<IClearClick>(clearClick);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedSubCategoryItem, setSelectedSubCategoryItem] = useState<string | null>(null);
  const [coloredStage, setColoredStage] = useState(0);

  const subcategories = Object.keys(isClicked);

  return (
      <div className="__container">
        <div className={styles.body}>
          <div className={styles.content}>
            <RentingStage coloredStage={coloredStage}/>
            <div className={styles.content_blocks}>
              <h1>
                Select <span>PRODUCTS</span> Category
              </h1>
              <div className={styles.main_block}>
                <h2>choose a category</h2>
                <div className={styles.main_content}>
                  {/* CATEGORY GENERATION */}
                  <div className={styles.main_items_1}>
                    {ProfessionalServicesData.map((item) => (
                        <button
                            key={item.name}
                            style={
                              isClicked[item.category]
                                  ? {backgroundColor: "#02A0A0"}
                                  : {}
                            }
                            onClick={() => {
                              setIsClicked({
                                ...clearClick,
                                [item.category]: true,
                              });
                              setColoredStage(1);
                              setSelectedSubCategory("");
                            }}
                            className={styles.main_item_1}
                        >
                          <img src={item.image} alt="img"/>
                          <span>{item.name}</span>
                        </button>
                    ))}
                  </div>
                  {/* SUBCATEGORY GENERATION */}
                  <div className={styles.main_items_2}>
                    {subcategories.map((key) =>
                        isClicked[key] ? (
                            ProfessionalServicesData.filter((item) => item.category === key).map(
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
                  {/* ITEMS GENERATION */}
                  <div className={styles.main_items_3}>
                    {ProfessionalServicesData.map((object) =>
                        selectedSubCategory &&
                        Object.keys(object.items).includes(selectedSubCategory) ? (
                            object.items[selectedSubCategory].map((arrayItem, index) => (
                                <button
                                    style={{backgroundColor: selectedSubCategoryItem === arrayItem ? "#02A0A0" : "",}}
                                    onClick={() => {
                                      setSelectedSubCategoryItem(arrayItem);
                                      dispatch(setVendorSelectedItemValue(arrayItem));

                                      if (object.category === 'bags') {
                                        setStage(1)
                                      }
                                    }}
                                    key={index}
                                    className={styles.main_item_3}
                                >
                                  <span>{arrayItem}</span>
                                </button>
                            ))
                        ) : null
                    )}
                  </div>
                  <Bags stage={stage} setStage={setStage}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RentingProfservicesPage;

import styles from "./RentingProfservicesPage.module.scss";
import React, {FC, useState} from "react";
import RentingStage from "../../components/RentingStage/RentingStage.tsx";
import {setVendorSelectedItemValue} from "../../redux/slices/vendorSelectedItemSlice.ts";
import {ProfessionalServicesData} from "../../data/vendorProductsData/ProfessionalServicesData.ts";
import {useDispatch} from "react-redux";
import {setProductCategory, setProductName, setProductSubcategory} from "../../redux/slices/vendorProductInfoSlice.ts";
import {useNavigate} from "react-router-dom";

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

const ROUTES = {
  CLEANING: 'cleaning',
  REPAIRING: 'repairing',
  GARDENING: 'gardening',
}

const RentingProfservicesPage: FC = () => {
  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = React.useState<IClearClick>(clearClick);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [coloredStage, setColoredStage] = useState(0);

  const subcategories = Object.keys(isClicked);
  const navigate = useNavigate();

  function productClickHandler(arrayItem: string, category: string) {
    dispatch(setVendorSelectedItemValue(arrayItem));
    dispatch(setProductName(arrayItem));

    if(category === ROUTES.CLEANING){
      navigate('/professional-services/cleaning/basic-information')
    } else if(category === ROUTES.REPAIRING){
      navigate('/professional-services/repairing/basic-information')
    } else if(category === ROUTES.GARDENING){
      navigate('/professional-services/gardening/basic-information')
    }
  }

  return (
      <div className="__container">
        <div className={styles.body}>
          <div className={styles.content}>
            <RentingStage coloredStage={coloredStage}/>
            <div className={styles.content_blocks}>
              <h1>
                Select <span>PROFESSIONAL SERVICES</span> Category
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
                                  ? { backgroundColor: "#02A0A0" }
                                  : {}
                            }
                            onClick={() => {
                              setIsClicked({
                                ...clearClick,
                                [item.category]: true,
                              });
                              dispatch(setProductCategory(item.category));
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
                                              dispatch(setProductSubcategory(name));
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
                    {ProfessionalServicesData.map((object) =>
                        selectedSubCategory &&
                        Object.keys(object.items).includes(selectedSubCategory) ? (
                            object.items[selectedSubCategory].map((arrayItem, index) => (
                                <button
                                    onClick={() => {
                                      productClickHandler(arrayItem, object.category)
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
  );
};

export default RentingProfservicesPage;

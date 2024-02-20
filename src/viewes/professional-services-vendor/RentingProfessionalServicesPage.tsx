import styles from "./RentingProfessionalServicesPage.module.scss";
import React, {FC, useState} from "react";
import RentingStage from "../../components/renting-stages/RentingStage.tsx";
import {setVendorSelectedItemValue} from "@/store/slices/vendorSelectedItemSlice.ts";
import {useDispatch} from "react-redux";
import {setProductCategory, setProductName, setProductSubcategory} from "@/store/slices/vendorProductInfoSlice.ts";
import {useNavigate} from "react-router-dom";
import {ProfessionalServicesData} from "@/assets/data/vendor-categories/ProfessionalServicesData.ts";

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
  TREE_CUTTING: 'treeCutting',
  LAWN_SERVICES: 'lawnServices',
  HANDYMAN: 'handyman',
  SNOW_REMOVAL: 'snowRemoval',
  PEST_CONTROL: 'pestControl',
  ELECTRICAL: 'electrical',
}

const links = {
  [ROUTES.CLEANING]: '/professional-services/new-cleaning-page',
  [ROUTES.REPAIRING]: '/professional-services/new-repairing-page',
  [ROUTES.GARDENING]: '/professional-services/new-gardening-page',
  [ROUTES.TREE_CUTTING]: '/professional-services/new-tree-cutting-page',
  [ROUTES.LAWN_SERVICES]: '/professional-services/new-lawn-services-page',
  [ROUTES.HANDYMAN]: '/professional-services/new-handyman-page',
  [ROUTES.SNOW_REMOVAL]: '/professional-services/new-snow-removal-page',
  [ROUTES.PEST_CONTROL]: '/professional-services/new-pest-control-page',
  [ROUTES.ELECTRICAL]: '/professional-services/new-electrical-page',
}

const RentingProfessionalServicesPage: FC = () => {
  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = React.useState<IClearClick>(clearClick);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [coloredStage, setColoredStage] = useState(0);

  const subcategories = Object.keys(isClicked);
  const navigate = useNavigate();

  function productClickHandler(arrayItem: string, category: string) {
    dispatch(setVendorSelectedItemValue(arrayItem));
    dispatch(setProductName(arrayItem));

    if(links[category]){
      navigate(links[category]);
    } else {
      navigate('/personal-services');
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

export default RentingProfessionalServicesPage;

import React, { FC, useState } from "react";
import styles from "./RentingProductsPage.module.scss";
import {ProductsData} from "../../data/vendorProductsData/ProductsData.ts";
import RentingStage from "../../components/RentingStage/RentingStage";
import { useDispatch } from "react-redux";
import { setVendorSelectedItemValue} from "../../redux/slices/vendorSelectedItemSlice.ts";
import {setProductCategory, setProductName, setProductSubcategory} from "../../redux/slices/vendorProductInfoSlice.ts";
import {useNavigate} from "react-router-dom";

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

const ROUTES = {
  BEAUTY: 'beauty',
  BAGS: 'bags',
  AWESOME: 'awesome',
  MOBILE_TABLETS: 'mobileTablets',
  NECKLACES: 'necklaces',
  CLOTHING: 'clothing',
  BLUETOOTH: 'bluetooth',
  FACIAL_LIP_CARE: 'facial',
  SHOES: 'shoes',
  CPU: 'cpu',
  DISCOVER_SKINCARE: 'discover',
  HEADPHONES: 'headphones',
  BRACELETS: 'bracelets',
  SMART_WATCH: 'smartWatch',
  EARRINGS: 'earrings'
}

const links = {
  [ROUTES.BEAUTY]: '/products-category-page/new-beauty-of-skin-page',
  [ROUTES.BAGS]: '/products-category-page/new-bags-page',
  [ROUTES.AWESOME]: '/products-category-page/new-awesome-lip-care-page',
  [ROUTES.MOBILE_TABLETS]: '/products-category-page/new-mobile-tablets-page',
  [ROUTES.NECKLACES]: '/products-category-page/new-necklaces-page',
  [ROUTES.CLOTHING]: '/products-category-page/new-clothing-page',
  [ROUTES.BLUETOOTH]: '/products-category-page/new-bluetooth-page',
  [ROUTES.FACIAL_LIP_CARE]: '/products-category-page/new-facial-care-page',
  [ROUTES.SHOES]: '/products-category-page/new-shoes-page',
  [ROUTES.CPU]: '/products-category-page/new-cpu-page',
  [ROUTES.DISCOVER_SKINCARE]: '/products-category-page/new-discover-skincare-page',
  [ROUTES.HEADPHONES]: '/products-category-page/new-headphones-page',
  [ROUTES.BRACELETS]: '/products-category-page/new-bracelets-page',
  [ROUTES.SMART_WATCH]: '/products-category-page/new-smartwatch-page',
  [ROUTES.EARRINGS]: '/products-category-page/new-earrings-page'
}

const RentingProductsPage: FC = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState<IClearClick>({...clearClick});
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
      navigate('/products-category-page');
    }
  }

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
                            ProductsData.filter((item) => item.category === key).map(
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
                    {ProductsData.map((object) =>
                        selectedSubCategory &&
                        Object.keys(object.items).includes(selectedSubCategory) ? (
                            object.items[selectedSubCategory].map((arrayItem, index) => (
                                <button
                                    onClick={() => {
                                      productClickHandler(arrayItem, object.category)
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RentingProductsPage;

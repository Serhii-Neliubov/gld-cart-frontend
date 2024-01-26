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
    console.log(arrayItem)

    if(category === ROUTES.BEAUTY){
      navigate('/products-category-page/beauty/basic-information')
    } else if(category == ROUTES.BAGS){
      navigate('/products-category-page/bags/basic-information')
    } else if(category === ROUTES.AWESOME){
      navigate('/products-category-page/awesome/basic-information')
    } else if(category === ROUTES.MOBILE_TABLETS){
      navigate('/products-category-page/mobile-tablets/basic-information')
    } else if(category === ROUTES.NECKLACES){
      navigate('/products-category-page/necklaces/basic-information')
    } else if(category === ROUTES.CLOTHING){
      navigate('/products-category-page/clothing/basic-information')
    } else if(category === ROUTES.BLUETOOTH){
      navigate('/products-category-page/bluetooth/basic-information')
    } else if(category === ROUTES.FACIAL_LIP_CARE){
      navigate('/products-category-page/facial/basic-information')
    } else if(category === ROUTES.SHOES){
      navigate('/products-category-page/shoes/basic-information')
    } else if(category === ROUTES.CPU){
      navigate('/products-category-page/cpu/basic-information')
    } else if(category === ROUTES.DISCOVER_SKINCARE){
      navigate('/products-category-page/discover-skincare/basic-information')
    } else if(category === ROUTES.HEADPHONES){
      navigate('/products-category-page/headphones/basic-information')
    } else if(category === ROUTES.BRACELETS){
      navigate('/products-category-page/bracelets/basic-information')
    } else if(category === ROUTES.SMART_WATCH){
      navigate('/products-category-page/smart-watch/basic-information')
    } else if(category === ROUTES.EARRINGS){
      navigate('/products-category-page/earrings/basic-information')
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

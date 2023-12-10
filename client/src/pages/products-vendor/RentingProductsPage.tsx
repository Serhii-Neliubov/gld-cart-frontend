import { Link } from "react-router-dom";
import styles from "./RentingProductsPage.module.scss";
import React, { FC } from "react";
import { RentingProductsData } from "../../utils/RentingProductsData";
import { IClearClick } from "../../interfaces/interfaces";

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
  openbeauty: false,
  openbags: false,
  openawesome: false,
  openmobileTablets: false,
  opennecklaces: false,
  openclothing: false,
  openbluetooth: false,
  openfacial: false,
  openshoes: false,
  opencpu: false,
  opendiscover: false,
  openheadphones: false,
  openbracelets: false,
  opensmartWatch: false,
  openearrings: false,
};

const RentingProductsPage: FC = () => {
  const [isClicked, setIsClicked] = React.useState<IClearClick>(clearClick);
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
            <div className={styles.routings}>
              <div className={styles.routing}>
                <div
                  style={
                    isClicked.openbeauty ||
                    isClicked.openbags ||
                    isClicked.openawesome ||
                    isClicked.openmobileTablets ||
                    isClicked.opennecklaces ||
                    isClicked.openclothing ||
                    isClicked.openbluetooth ||
                    isClicked.openfacial ||
                    isClicked.openshoes ||
                    isClicked.opencpu ||
                    isClicked.opendiscover ||
                    isClicked.openheadphones ||
                    isClicked.openbracelets ||
                    isClicked.opensmartWatch ||
                    isClicked.openearrings
                      ? { backgroundColor: "#02A0A0" }
                      : { backgroundColor: "#D9D9D9" }
                  }
                  className={styles.number}
                >
                  1
                </div>
                <span>Category</span>
              </div>
              <div className={styles.routing}>
                <div
                  style={
                    isClicked.openbeauty ||
                    isClicked.openbags ||
                    isClicked.openawesome ||
                    isClicked.openmobileTablets ||
                    isClicked.opennecklaces ||
                    isClicked.openclothing ||
                    isClicked.openbluetooth ||
                    isClicked.openfacial ||
                    isClicked.openshoes ||
                    isClicked.opencpu ||
                    isClicked.opendiscover ||
                    isClicked.openheadphones ||
                    isClicked.openbracelets ||
                    isClicked.opensmartWatch ||
                    isClicked.openearrings
                      ? { backgroundColor: "#02A0A0" }
                      : { backgroundColor: "#D9D9D9" }
                  }
                  className={styles.number}
                >
                  2
                </div>
                <span>Sub Category</span>
              </div>
              <div className={styles.routing}>
                <div
                  style={{ backgroundColor: "#D9D9D9" }}
                  className={styles.number}
                >
                  3
                </div>
                <span>Information</span>
              </div>
              <div className={styles.routing}>
                <div
                  style={{ backgroundColor: "#D9D9D9" }}
                  className={styles.number}
                >
                  4
                </div>
                <span>Photo & Video</span>
              </div>
              <div className={styles.routing}>
                <div
                  style={{ backgroundColor: "#D9D9D9" }}
                  className={styles.number}
                >
                  5
                </div>
                <span>Specifications</span>
              </div>
              <div className={styles.routing}>
                <div
                  style={{ backgroundColor: "#D9D9D9" }}
                  className={styles.number}
                >
                  6
                </div>
                <span>Publish</span>
              </div>
            </div>
            <div className={styles.content_blocks}>
              <h1>
                Select <span>PRODUCTS</span> Category
              </h1>
              <div className={styles.main_block}>
                <h2>choose a category</h2>
                <div className={styles.main_content}>
                  <div className={styles.main_items_1}>
                    <button
                      style={
                        isClicked.beauty ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() => {
                        setIsClicked({ ...clearClick, beauty: true });
                      }}
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-10.svg" alt="img" />
                      <span>Beauty of Skin</span>
                    </button>
                    <button
                      style={
                        isClicked.bags ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, bags: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-3.svg" alt="img" />
                      <span>Bags</span>
                    </button>
                    <button
                      style={
                        isClicked.awesome ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, awesome: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-12.svg" alt="img" />
                      <span>Awesome Lip Care</span>
                    </button>
                    <button
                      style={
                        isClicked.mobileTablets
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, mobileTablets: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector.svg" alt="img" />
                      <span>Mobile Tablets</span>
                    </button>
                    <button
                      style={
                        isClicked.necklaces
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, necklaces: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-1.svg" alt="img" />
                      <span>Necklaces</span>
                    </button>
                    <button
                      style={
                        isClicked.clothing ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, clothing: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-7.svg" alt="img" />
                      <span>Clothing</span>
                    </button>
                    <button
                      style={
                        isClicked.bluetooth
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, bluetooth: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-6.svg" alt="img" />
                      <span>Bluetooth</span>
                    </button>
                    <button
                      style={
                        isClicked.facial ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, facial: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-14.svg" alt="img" />
                      <span>Facial Care</span>
                    </button>
                    <button
                      style={
                        isClicked.shoes ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, shoes: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-13.svg" alt="img" />
                      <span>Shoes</span>
                    </button>
                    <button
                      style={
                        isClicked.cpu ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() => setIsClicked({ ...clearClick, cpu: true })}
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-11.svg" alt="img" />
                      <span>CPU</span>
                    </button>
                    <button
                      style={
                        isClicked.discover ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, discover: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-9.svg" alt="img" />
                      <span>Discover Skincare</span>
                    </button>
                    <button
                      style={
                        isClicked.headphones
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, headphones: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-4.svg" alt="img" />
                      <span>Headphones</span>
                    </button>
                    <button
                      style={
                        isClicked.bracelets
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, bracelets: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-8.svg" alt="img" />
                      <span>Bracelets</span>
                    </button>
                    <button
                      style={
                        isClicked.smartWatch
                          ? { backgroundColor: "#02A0A0" }
                          : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, smartWatch: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-5.svg" alt="img" />
                      <span>Smart Watch</span>
                    </button>
                    <button
                      style={
                        isClicked.earrings ? { backgroundColor: "#02A0A0" } : {}
                      }
                      onClick={() =>
                        setIsClicked({ ...clearClick, earrings: true })
                      }
                      className={styles.main_item_1}
                    >
                      <img src="ProductsCategoryPage/Vector-2.svg" alt="img" />
                      <span>Earrings</span>
                    </button>
                  </div>
                  {isClicked.beauty && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.beauty.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openbeauty: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.bags && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.bags.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openbags: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.awesome && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.awesome.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.mobileTablets && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.mobileTablets.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.necklaces && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.necklaces.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.clothing && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.clothing.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.bluetooth && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.bluetooth.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.facial && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.facial.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.shoes && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.shoes.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.cpu && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.cpu.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.discover && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.discover.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.headphones && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.headphones.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.bracelets && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.bracelets.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.smartWatch && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.smartWatch.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {isClicked.earrings && (
                    <div className={styles.main_items_2}>
                      {RentingProductsData.earrings.map((item) => {
                        const isSelected = selectedButton === item.name;
                        return (
                          <button
                            key={item.name}
                            className={styles.main_item_2}
                            style={{
                              backgroundColor: isSelected ? "#02A0A0" : "",
                            }}
                            onClick={() => {
                              setIsClicked({ ...isClicked, openawesome: true });
                              handleButtonClick(item.name);
                            }}
                          >
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {selectedButton === "Radiant Complexion" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.beautySub.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Skin Texture Smoothness" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.skinTexture.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Hydration and Moisture" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.hydration.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Skin Clarity and Clearness" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.skinClarity.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Elasticity and Firmness" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.elasticity.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Tote Bags" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.toteBags.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Backpacks" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.backpacks.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Crossbody Bags" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.crossbody.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Clutch Purses" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.clutch.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Messenger Bags" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.messenger.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Duffel Bags" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.duffel.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Hobo Bags" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.hobo.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Satchel Bags" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.satchel.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bucket Bags" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.bucket.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Wallets and Pouches" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.wallets.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Balm Flavors" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.lipBalm.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Scrub Varieties" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.lipScrub.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Mask Benefits" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.lipMusk.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Sunscreen Protection" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.lipSunscreen.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Tint Options" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.lipTint.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Care Tools" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.lipCare.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Organic Lip Products" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.organicLip.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Care for Seasons" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.lipCareSeasons.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Lip Care for Special Needs" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.lipCareSpecial.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "DIY Lip Care Recipes" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.DIYLipCare.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Android" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.android.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "iOS" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.iOS.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Chain Necklaces" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.chainNeckaces.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Layered Necklaces" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.layeredNeckaces.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Pendant Necklaces" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.pandantNeckaces.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Choker Necklaces" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.chokerNeckaces.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Statement Necklaces" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.statementNecklaces.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Tops" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.tops.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bottoms" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.bottoms.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Outerwear" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.outerwear.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Dresses" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.dresses.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Activewear" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.activewear.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Sleepwear" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.sleepwear.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Swimwear" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.swimwear.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Workwear" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.workwear.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Baby clothing" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.babyClothing.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Uniforms" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.uniforms.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth Classic" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.bClassic.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth Low Energy" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.bLowEnergy.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth 5.0" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.bFive.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth 5.1" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.bFiveOne.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth 5.2" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.bFiveTwo.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth Mesh" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.bMesh.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Bluetooth 5.3" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.bFiveThree.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Cleansers and Scrubs" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.cleansers.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Moisturizers and Serums" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.serums.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Sun Protection" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.sunProtection.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Acne Treatment" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.acne.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Face Masks and Peels" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.faceMasks.map((item) => {
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
                  ) : (
                    ""
                  )}
                  {selectedButton === "Eye Care Products" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.eyeCare.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Facial Tools and Devices" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.facialTools.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Toning and Astringents" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.toning.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Makeup Removers" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.makeup.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Anti-Aging Products" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.antiAging.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Athletic Footwear" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.athletic.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Casual Footwear" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.casual.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Formal Footwear" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.formal.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Boots and Booties" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.bootsAndBooties.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Sandals and Flip-Flops" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.sandals.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Outdoor and Hiking" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.outdoor.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Work and Safety" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.workAndSafety.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Specialty Footwear" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.speciality.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Fashion Sneakers" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.fashion.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Kids' Footwear" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.kids.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Central Processing Unit" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.centralProcessing.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Microprocessors" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.microprocessors.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Multi-Core Processors" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.multiCore.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Graphics Processing Unit" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.graphics.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Embedded Processors" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.embedded.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Server Processors" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.server.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Mobile Processors" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.mobileProcessors.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Desktop Processors" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.desktop.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Workstation CPUs" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.workstation.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Mainframe Processors" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.mainframe.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Cleansing" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.cleansing.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Moisturizing" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.moisturizing.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Discover Acne Treatment" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.acneTreatment.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Discover Sun Protection" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.discoverSunProtection.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Discover Anti-Aging" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.discoverAntiAging.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Serums and Essences" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.serumsAndEssences.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Masks and Treatments" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.discoverMasks.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Eye Care" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.discoverEyeCare.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Specialty Skincare" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.specialitySkincare.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Natural and Organic" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.nuturalAndOrganic.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Over-Ear Headphones" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.overEar.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "In-Ear Earbuds" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.inEar.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "On-Ear Headphones" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.onEar.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Wireless Bluetooth Headphones" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.wirelessbluetooth.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Gaming Headsets" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.gamingHeadsets.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Studio Monitor Headphones" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.studioMonitor.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Sports and Workout Earphones" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.sportsAndWorkout.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "ANC Headphones" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.ANCHeadphones.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "DJ Headphones" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.DJHeadphones.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Open-Back Headphones" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.openBack.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Closed-Back Headphones" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.closedBack.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Kids' Headphones" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.kidsHeadphones.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Audiophile Headphones" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.audiophile.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Metallic Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.metallic.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Beaded Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.beaded.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Leather Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.leather.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Charm Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.charm.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Friendship Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.friendship.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Cuff Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.cuff.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Chain Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.chain.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Bangle Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.bangle.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Braided Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.braided.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Wrap Bracelets" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.wrap.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Fitness Trackers" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.fitnessTrackers.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Sport Watches" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.sportWatches.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Fashion Smartwatches" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.fashionSmartwatches.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "GPS Running Watches" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.gpsRunningWatches.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Hybrid Smartwatches" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.hybridSmart.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Kids' Smartwatches" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.kidsWatches.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Luxury Smartwatches" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.luxuryWatches.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Outdoor Adventure Watches" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.outdoorWatches.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Medical Wearables" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.medicalWatches.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Budget Smartwatches" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.budgetSmart.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Stud Earrings" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.studEarrings.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Hoop Earrings" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.hoopEarrings.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Dangle Earrings" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.dangleEarrings.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Huggee Earrings" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.huggeeEarrings.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Ear Cuffs" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.earCuffs.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Threader Earrings" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.threaderEarrings.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Chandelier Earrings" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.chandelierEarrings.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Clip-On Earrings" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.cliponEarrings.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Tassel Earrings" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.tasselEarrings.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
                  {selectedButton === "Statement Earrings" ? (
                    <div className={styles.main_items_3}>
                      {RentingProductsData.statementEarrings.map((item) => {
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
                  ) : (
                    ""
                  )}{" "}
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

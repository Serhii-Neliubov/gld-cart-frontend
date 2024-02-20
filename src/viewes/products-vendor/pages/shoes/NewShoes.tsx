import React, { useState } from "react";
import styles from "./NewShoes.module.scss";
import { Layout } from "@/components/Vendor/Layout.tsx";
import ItemPublishPage from "@/components/item-published/ItemPublishPage.tsx";
import useCategoryRedirect from "@/hooks/useCategoryRedirect/useCategoryRedirect.tsx";

export const NewShoes = () => {
  const [stage, setStage] = useState(3);

  useCategoryRedirect("shoes", "/products-category-page", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Shoes PRODUCT Form"
          subtitle="Basic information"
          stage={stage - 1}
        >
          {stage == 3 && (
            <React.Fragment>
              <div className={styles.inputTextBox}>
                <label>Service Title</label>
                <input placeholder="70 words max" maxLength={70} />
              </div>
              <div className={styles.inputAreaBox}>
                <label>Products Description</label>
                <textarea
                  minLength={160}
                  maxLength={9000}
                  placeholder="Minimum 160 and maximum 9000 characters"
                />
              </div>
              <div className={styles.inputsRadio}>
                <span>The Product you want to sell is for</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Men</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Women</label>
                  </div>
                </div>
              </div>
              <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                  <div className={styles.inputCheckbox}>
                    <div>
                      <input type="checkbox" />
                      <label>Full Price</label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Price</span>
                          <input placeholder="450$" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.inputCheckbox}>
                    <div>
                      <input type="checkbox" />
                      <label>Discount Price</label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Discount Price</span>
                          <input placeholder="450$" />
                        </div>
                        <div className={styles.inputBox}>
                          <span>Discount</span>
                          <select>
                            <option value="10%">10%</option>
                            <option value="20%">20%</option>
                            <option value="30%">30%</option>
                            <option value="40%">40%</option>
                            <option value="50%">50%</option>
                            <option value="60%">60%</option>
                            <option value="70%">70%</option>
                            <option value="80%">80%</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
          {stage == 4 && (
            <div className={styles.photoBlocksContent}>
              <span className={styles.uploadPhotosTitle}>
                UPLOAD UP TO 06 PHOTOS
              </span>
              <div className={styles.photoBlocks}>
                <div className={styles.photoBlock}>
                  <img src="src/assets/images/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="src/assets/images/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="src/assets/images/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="src/assets/images/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="src/assets/images/photo-and-video-icon.svg" alt="icon" />
                </div>
              </div>
              <div className={styles.inputBlock}>
                <label>Promo Video (Optional)</label>
                <input placeholder="Youtube link here" />
              </div>
            </div>
          )}
          {stage == 5 && (
            <React.Fragment>
              <span className={styles.tipTitle}>
                Select the age group for which the Shoes item is suitable
              </span>
              <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Adult</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Infant</label>
                  </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Teen</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>All Ages</label>
                  </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Child</label>
                  </div>
                </div>
              </div>
              <span className={styles.tipTitle}>Select Size of products</span>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input type="checkbox" />
                  <label>Medium</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input type="checkbox" />
                  <label>Small</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input type="checkbox" />
                  <label>Large</label>
                </div>
              </div>
              <div className={styles.choosingColor}>
                <span>Select the Colour of your product</span>
                <div>
                  <button
                    className={styles.choosingColorItem}
                    style={{ backgroundColor: "#9302A0" }}
                  />
                  <button
                    className={styles.choosingColorItem}
                    style={{ backgroundColor: "#318834" }}
                  />
                  <button
                    className={styles.choosingColorItem}
                    style={{ backgroundColor: "#000000" }}
                  />
                  <button
                    className={styles.choosingColorItem}
                    style={{ backgroundColor: "#282684" }}
                  />
                  <button
                    className={styles.choosingColorItem}
                    style={{ backgroundColor: "#EC0000" }}
                  />
                  <button className={styles.addingColor}>+</button>
                </div>
              </div>
              <span className={styles.tipTitle}>
                Select the type of closure for the shoes
              </span>
              <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Lace-Up</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Zipper</label>
                  </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Velcro</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Buckle</label>
                  </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Slip-On</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Other</label>
                  </div>
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Write the weight of the shoes</label>
                <input type="text" placeholder="0.5 kg" />
              </div>
              <div className={styles.inputBox}>
                <label>Specify the material of the shoe soles</label>
                <input type="text" />
              </div>
              <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input type="number" placeholder="100" />
              </div>
            </React.Fragment>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage category="Shoes" />}
    </React.Fragment>
  );
};

import React, { useState } from "react";
import styles from "./NewEarrings.module.scss";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";

export const NewEarrings = () => {
  const [stage, setStage] = useState(3);

  useCategoryRedirect("earrings", "/products-category-page", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Earrings PRODUCT Form"
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
              <div className={styles.inputsRadio}>
                <span>The product you want to sell is ?</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Branded</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Local</label>
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
                  <img src="../../../../assets/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="../../../../assets/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="../../../../assets/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="../../../../assets/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="../../../../assets/photo-and-video-icon.svg" alt="icon" />
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
              <div className={styles.areaBox}>
                <label>Material</label>
                <textarea placeholder="Write about the primary material used for the bracelets" />
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
              <span className={styles.tipTitle}>
                Select the type of closure for the shoes
              </span>
              <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Stud Earrings</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Chandelier Earrings</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Ear Climbers</label>
                  </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Hoop Earrings</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Drop Earrings</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Ear Cuffs</label>
                  </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Dangle Earrings</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Stud Earrings with Jacket</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Other</label>
                  </div>
                </div>
              </div>
              <span className={styles.tipTitle}>
                Select the type of closure for the shoes
              </span>
              <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Butterfly Back</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Fishhook</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Ear Wire</label>
                  </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Screw Back</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Latch Back</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Other</label>
                  </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Leverback</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Clip-On</label>
                  </div>
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input type="number" placeholder="200" />
              </div>
            </React.Fragment>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage category="Earrings" />}
    </React.Fragment>
  );
};

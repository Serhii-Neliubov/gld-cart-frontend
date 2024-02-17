import React, { useState } from "react";
import styles from "./NewHeadphones.module.scss";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";

export const NewHeadphones = () => {
  const [stage, setStage] = useState(3);

  useCategoryRedirect("headphones", "/products-category-page", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Headphones PRODUCT Form"
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
              <div className={styles.inputsRadio}>
                <span>
                  The range of frequencies the headphones can reproduce (e.g.)
                </span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>20kHz</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>20Hz</label>
                  </div>
                </div>
              </div>
              <div className={styles.inputsRadio}>
                <span>Describe the charging method.</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>USB-C</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Wireless</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>micro-USB</label>
                  </div>
                </div>
              </div>
              <span className={styles.tipTitle}>
                Headphone Type of Property
              </span>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input type="checkbox" />
                  <label>Over-ear</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input type="checkbox" />
                  <label>On-ear</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input type="checkbox" />
                  <label>True wireless</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input type="checkbox" />
                  <label>In-ear</label>
                </div>
              </div>
              <div className={styles.inputsRadio}>
                <span>Types of Colors.</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Black</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>White</label>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage category="Headphones" />}
    </React.Fragment>
  );
};

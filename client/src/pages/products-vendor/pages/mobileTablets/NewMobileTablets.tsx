import React, { useState } from "react";
import styles from "./NewMobileTablets.module.scss";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";

export const NewMobileTablets = () => {
  const [stage, setStage] = useState(3);

  useCategoryRedirect("mobileTablets", "/products-category-page", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Mobile/Tablets PRODUCT Form"
          subtitle="Basic information"
          stage={stage - 1}
        >
          {stage == 3 && (
            <React.Fragment>
              <div className={styles.inputTextBox}>
                <label>Product Title</label>
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
              <div className={styles.inputRadioBox}>
                <span>The product you want to sell is ?</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>New</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Used</label>
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
                  <img src="/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="/photo-and-video-icon.svg" alt="icon" />
                </div>
                <div className={styles.photoBlock}>
                  <img src="/photo-and-video-icon.svg" alt="icon" />
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
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Operating System</label>
                  <input
                    type="text"
                    placeholder="Specify the operating system"
                  />
                </div>
                <div className={styles.inputBox}>
                  <label>Processor</label>
                  <input
                    type="text"
                    placeholder="Provide details about the processor"
                  />
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Memory (RAM)</label>
                <input type="text" placeholder="Specify the RAM capacity" />
              </div>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Storage</label>
                  <input
                    type="text"
                    placeholder="Indicate the storage capacity, e.g., SSD/HDD size"
                  />
                </div>
                <div className={styles.inputBox}>
                  <label>Screen/Display</label>
                  <input
                    type="text"
                    placeholder="Provide information about the screen size, resolution"
                  />
                </div>
              </div>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Camera</label>
                  <input
                    type="text"
                    placeholder="Specify camera features, including megapixels"
                  />
                </div>
                <div className={styles.inputBox}>
                  <label>Battery Life</label>
                  <input
                    type="text"
                    placeholder="Estimate battery life in hours"
                  />
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Connectivity</label>
                <input
                  type="text"
                  placeholder="connectivity options such as Wi-Fi, Bluetooth, USB ports, etc."
                />
              </div>
              <span className={styles.tipTitle}>
                Select the Additional Features of your product
              </span>
              <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Fingerprint Sensor</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Expandable Storage</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Dust Resistance</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Other</label>
                  </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Face Recognition</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Multi-Window Mode</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Keyboard Compatibility</label>
                  </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Stylus Support</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Water Resistance</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Case/Accessory Options</label>
                  </div>
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input type="number" placeholder="100" />
              </div>
            </React.Fragment>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage category="Mobile/Tablets" />}
    </React.Fragment>
  );
};

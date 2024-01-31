import React, { useState } from "react";
import styles from "./NewElectronics.module.scss";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";

export const NewElectronics = () => {
  const [stage, setStage] = useState(3);

  useCategoryRedirect("electronics", "/renting-category-page", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Electronics Renting Form"
          subtitle="Basic information"
          stage={stage - 1}
        >
          {stage == 3 && (
            <React.Fragment>
              <div className={styles.inputBox}>
                <label>Title</label>
                <input placeholder="70 words max" maxLength={70} />
              </div>
              <div className={styles.inputAreaBox}>
                <label>Description</label>
                <textarea
                  minLength={160}
                  maxLength={9000}
                  placeholder="Minimum 160 and maximum 9000 characters"
                />
              </div>
              <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                  <div className={styles.inputCheckbox}>
                    <div>
                      <input type="checkbox" />
                      <label>Renting Packages For Days </label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Rent Price</span>
                          <input placeholder="450$" />
                        </div>
                        <div className={styles.inputBox}>
                          <span>Day</span>
                          <select>
                            <option value="1 Day">01 Day</option>
                            <option value="2 Days">02 Days</option>
                            <option value="3 Days">03 Days</option>
                            <option value="4 Days">04 Days</option>
                            <option value="5 Days">05 Days</option>
                            <option value="10 Days">10 Days</option>
                            <option value="15 Days">15 Days</option>
                            <option value="20 Days">20 Days</option>
                            <option value="25 Days">25 Days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputCheckbox}>
                    <div>
                      <input type="checkbox" />
                      <label>Renting Packages For Weeks </label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Rent Price</span>
                          <input placeholder="450$" />
                        </div>
                        <div className={styles.inputBox}>
                          <span>Week</span>
                          <select>
                            <option value="1 Day">01 Week</option>
                            <option value="2 Weeks">02 Weeks</option>
                            <option value="3 Weeks">03 Weeks</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputCheckbox}>
                    <div>
                      <input type="checkbox" />
                      <label>Renting Packages For Months </label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Rent Price</span>
                          <input placeholder="450$" />
                        </div>
                        <div className={styles.inputBox}>
                          <span>Month</span>
                          <select>
                            <option value="1 Month">01 Month</option>
                            <option value="2 Months">02 Months</option>
                            <option value="3 Months">03 Months</option>
                            <option value="4 Months">04 Months</option>
                            <option value="5 Months">05 Months</option>
                            <option value="10 Months">10 Months</option>
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
                <label>Promo Video</label>
                <input placeholder="Youtube link here" />
              </div>
            </div>
          )}
          {stage == 5 && (
            <React.Fragment>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Model</label>
                  <input placeholder="Item model" />
                </div>
                <div className={styles.inputBox}>
                  <label>Color</label>
                  <input placeholder="Item color" />
                </div>
              </div>
              <div className={styles.inputsRadio}>
                <span>Item Condition</span>
                <div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Brand New</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Used</label>
                  </div>
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Size</label>
                <input placeholder="Provide measurements if applicable" />
              </div>
              <div className={styles.subtitle}>
                <span>Fill this for Smartphones, Laptops and Tablets</span>
              </div>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Operating System</label>
                  <input placeholder="Specify the operating system" />
                </div>
                <div className={styles.inputBox}>
                  <label>Processor</label>
                  <input placeholder="Provide details about the processor e.g.,CPU model & speed" />
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Memory (RAM)</label>
                <input placeholder="Specify the RAM capacity" />
              </div>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Storage</label>
                  <input placeholder="Indicate the storage capacity, e.g., SSD/HDD size" />
                </div>
                <div className={styles.inputBox}>
                  <label>Display/Screen</label>
                  <input placeholder="Provide information about the screen size, resolution" />
                </div>
              </div>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Camera</label>
                  <input placeholder="Specify camera features, including megapixels" />
                </div>
                <div className={styles.inputBox}>
                  <label>Battery Life</label>
                  <input placeholder="Estimate battery life in hours" />
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Connectivity</label>
                <input placeholder="connectivity options such as Wi-Fi, Bluetooth, USB ports, etc." />
              </div>
              <div className={styles.inputBox}>
                <label>Additional Features</label>
                <input placeholder="Mention any unique features or functionalities" />
              </div>
            </React.Fragment>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage category="Electronics" />}
    </React.Fragment>
  );
};

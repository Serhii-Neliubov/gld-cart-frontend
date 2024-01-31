import React, { useState } from "react";
import styles from "./NewHouses.module.scss";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";

export const NewHouses = () => {
  const [stage, setStage] = useState(3);

  useCategoryRedirect("houses", "/renting-category-page", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Houses Renting Form"
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
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>City</label>
                  <input placeholder="Write your house city" maxLength={70} />
                </div>
                <div className={styles.inputBox}>
                  <label>Address</label>
                  <input
                    placeholder="Write your house address"
                    maxLength={70}
                  />
                </div>
              </div>
              <div className={styles.inputRadioBox}>
                <span>Your House was</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Unfurnished</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Furnished</label>
                  </div>
                </div>
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
                  <label>Bedrooms</label>
                  <input placeholder="write number of bedrooms" />
                </div>
                <div className={styles.inputBox}>
                  <label>Washroom</label>
                  <input placeholder="write number of washrooms" />
                </div>
              </div>
              <div className={styles.inputRadioBox}>
                <span>House Condition</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Brand New</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Old House</label>
                  </div>
                </div>
              </div>
              <div className={styles.noOfStoreys}>
                <span>No of storeys</span>
                <div>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4+</button>
                </div>
              </div>
              <div className={styles.areaUnit}>
                <span>Area unit</span>
                <div>
                  <button>Kanal</button>
                  <button>Marla</button>
                  <button>Square Feet</button>
                  <button>Square Meter</button>
                  <button>Square Yards</button>
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Area</label>
                <input placeholder="Write the area value" />
              </div>
              <div className={styles.features}>
                <span>Features</span>
                <div>
                  <button>Servant Quarters</button>
                  <button>Drawing Room</button>
                  <button>Dining Room</button>
                  <button>Kitchen</button>
                  <button>Study Room</button>
                  <button>Prayer Room</button>
                  <button>Powder Room</button>
                </div>
              </div>
            </React.Fragment>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage category="Houses" />}
    </React.Fragment>
  );
};

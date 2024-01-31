import React, { useState } from "react";
import styles from "./NewTreeCutting.module.scss";
import { Layout } from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";

export const NewTreeCutting = () => {
  const [stage, setStage] = useState(3);

  useCategoryRedirect("treeCutting", "/personal-services", stage);

  return (
    <React.Fragment>
      {stage < 6 && (
        <Layout
          setStage={setStage}
          title="Tree Cutting SERVICES Form"
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
                <label>Service Description</label>
                <textarea
                  minLength={160}
                  maxLength={9000}
                  placeholder="Minimum 160 and maximum 9000 characters"
                />
              </div>
              <div className={styles.inputRadioBox}>
                <span>You want to give your professional service in</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Day</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Night</label>
                  </div>
                </div>
              </div>
              <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                  <div className={styles.inputCheckbox}>
                    <div>
                      <input type="checkbox" />
                      <label>Tree Cutting Packages For Hour</label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Price</span>
                          <input placeholder="450$" />
                        </div>
                        <div className={styles.inputBox}>
                          <span>Hour</span>
                          <select>
                            <option value="1 Hour">01 Hour</option>
                            <option value="2 Hours">02 Hours</option>
                            <option value="3 Hours">03 Hours</option>
                            <option value="4 Hours">04 Hours</option>
                            <option value="5 Hours">05 Hours</option>
                            <option value="8 Hours">08 Hours</option>
                            <option value="12 Hours">12 Hours</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputCheckbox}>
                    <div>
                      <input type="checkbox" />
                      <label>Tree Cutting Packages For Day</label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Price</span>
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
                            <option value="8 Days">08 Days</option>
                            <option value="12 Days">12 Days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputCheckbox}>
                    <div>
                      <input type="checkbox" />
                      <label>Tree Cutting Packages For Week</label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Price</span>
                          <input placeholder="450$" />
                        </div>
                        <div className={styles.inputBox}>
                          <span>Week</span>
                          <select>
                            <option value="1 Week">01 Week</option>
                            <option value="2 Weeks">02 Weeks</option>
                            <option value="3 Weeks">03 Weeks</option>
                            <option value="4 Weeks">04 Weeks</option>
                            <option value="5 Weeks">05 Weeks</option>
                            <option value="8 Weeks">08 Weeks</option>
                            <option value="12 Weeks">12 Weeks</option>
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
              <span className={styles.uploadPhotosTitle}>
                UPLOAD RECENTLY WORK PHOTOS
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
            </div>
          )}
          {stage == 5 && (
            <React.Fragment>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Working Hours</label>
                  <input placeholder="05" type="number" />
                </div>
                <div className={styles.inputBox}>
                  <label>Number of PROFESSIONAL</label>
                  <input placeholder="10" type="number" />
                </div>
              </div>
              <div className={styles.inputsRadio}>
                <span>Need Tree Cutting Material</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Yes</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>No</label>
                  </div>
                </div>
              </div>
              <div className={styles.inputsRadio}>
                <span>Need Safety Material For Tree Cutting</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>Yes</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input type="radio" />
                    <label>No</label>
                  </div>
                </div>
              </div>
              <span className={styles.tipTitle}>
                Select type of tree cutting
              </span>
              <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Tree removal</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Tree trimming</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input type="checkbox" />
                    <label>Stump grinding</label>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </Layout>
      )}
      {stage == 6 && <ItemPublishPage category="Tree Cutting" />}
    </React.Fragment>
  );
};

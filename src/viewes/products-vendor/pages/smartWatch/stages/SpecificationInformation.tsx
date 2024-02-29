import React from 'react';
import styles from "@/viewes/products-vendor/pages/smartWatch/NewSmartWatch.module.scss";

export const SpecificationInformation = () => {
  return (
    <React.Fragment>
      <div className={styles.inputsRadio}>
        <span>Compatibility of Smartwatch</span>
        <div className={styles.radioInputs}>
          <div className={styles.inputRadio}>
            <input type="radio" />
            <label>Android</label>
          </div>
          <div className={styles.inputRadio}>
            <input type="radio" />
            <label>iOS</label>
          </div>
          <div className={styles.inputRadio}>
            <input type="radio" />
            <label>Other</label>
          </div>
        </div>
      </div>
      <div className={styles.inputsRadio}>
        <span>Describe the charging method.</span>
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
                Connectivity of Smartwatch
              </span>
      <div className={styles.checkboxInputColumn}>
        <div className={styles.checkboxInputs}>
          <input type="checkbox" />
          <label>Bluetooth</label>
        </div>
        <div className={styles.checkboxInputs}>
          <input type="checkbox" />
          <label>Wi-Fi</label>
        </div>
        <div className={styles.checkboxInputs}>
          <input type="checkbox" />
          <label>GPS</label>
        </div>
        <div className={styles.checkboxInputs}>
          <input type="checkbox" />
          <label>NFC</label>
        </div>
      </div>
    </React.Fragment>
  )
}
import React from 'react';
import styles from "@/viewes/products-vendor/pages/bluetooth/NewBluetooth.module.scss";

export const SpecificationInformation = () => {
  return (
    <React.Fragment>
              <span className={styles.tipTitle}>
                Select the Type of Bluetooth Product
              </span>
      <div className={styles.checkboxInputsBox}>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Bluetooth Headphones</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Bluetooth Mouse</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Bluetooth Smartwatch</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Bluetooth Speaker</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Bluetooth Keyboard</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Other</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Bluetooth Earbuds</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Bluetooth Fitness Tracker</label>
          </div>
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
      <span className={styles.tipTitle}>Select Charging Method</span>
      <div className={styles.checkboxInputColumn}>
        <div className={styles.checkboxInputs}>
          <input type="checkbox" />
          <label>USB-C</label>
        </div>
        <div className={styles.checkboxInputs}>
          <input type="checkbox" />
          <label>Wireless</label>
        </div>
        <div className={styles.checkboxInputs}>
          <input type="checkbox" />
          <label>Micro USB</label>
        </div>
      </div>
      <span className={styles.tipTitle}>
                Select the Compatibility of Product
              </span>
      <div className={styles.checkboxInputsBox}>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>iOS</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Mac</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Android</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Other</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Windows</label>
          </div>
        </div>
      </div>
      <div className={styles.inputsRadio}>
        <span>The product you want to sell is Water Resistance</span>
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
        <span>The product you want to sell is Noise-Cancellation</span>
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
      <div className={styles.inputBox}>
        <label>How many product are in stock?</label>
        <input type="number" placeholder="100" />
      </div>
    </React.Fragment>
  )
}
import React from "react";
import styles from "@/viewes/products-vendor/pages/bags/NewBags.module.scss";

export const SpecificationInformation = () => {
  return (
    <React.Fragment>
              <span className={styles.tipTitle}>
                Select the Features of your product
              </span>
      <div className={styles.checkboxInputsBox}>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Leather</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Nylon</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Denim</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Other</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Canvas</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Polyester</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Suede</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Vinyl</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Fabric Blend</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Synthetic Leather</label>
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
      <span className={styles.tipTitle}>Select Size of products</span>
      <div className={styles.checkboxInputsBox}>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Adjustable Straps</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Inner Pockets</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>RFID Blocking</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Other</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Multiple Compartments</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Water-Resistant</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Expandable</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Zipper Closure</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Laptop Compartment</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Eco-Friendly Materials</label>
          </div>
        </div>
      </div>
      <span className={styles.tipTitle}>
                Select the type of closure for the bag
              </span>
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
                Select the type of closure for the bag
              </span>
      <div className={styles.checkboxInputsBox}>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Zipper</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Drawstring</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Magnetic Snap</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Flap</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Buckle</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Other</label>
          </div>
        </div>
      </div>
      <span className={styles.tipTitle}>
                Select the type of closure for the bag
              </span>
      <div className={styles.checkboxInputsBox}>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Shoulder Strap</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Backpack Straps</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Other</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Crossbody Strap</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Detachable Strap</label>
          </div>
        </div>
        <div className={styles.checkboxInputColumn}>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>Handle</label>
          </div>
          <div className={styles.checkboxInputs}>
            <input type="checkbox" />
            <label>No Strap (Clutch)</label>
          </div>
        </div>
      </div>
      <div className={styles.inputBox}>
        <label>Pockets</label>
        <input
          type="text"
          placeholder="Write the number and type of pockets in the bag (e.g., interior pockets, exterior pockets)"
        />
      </div>
      <div className={styles.areaBox}>
        <label>Care Instructions</label>
        <textarea placeholder="Provide care and maintenance instructions for the bag" />
      </div>
      <div className={styles.inputBox}>
        <label>How many product are in stock?</label>
        <input type="number" placeholder="100" />
      </div>
    </React.Fragment>
  )
}
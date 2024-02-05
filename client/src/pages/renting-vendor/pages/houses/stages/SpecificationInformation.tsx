import React from 'react';
import styles from "../NewHouses.module.scss";

export const SpecificationInformation = () => {
    return (
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
    )
}
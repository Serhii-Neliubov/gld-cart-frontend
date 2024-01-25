import React from 'react';
import styles from './SpecificationsHouses.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsHouses = () => {
    return (
        <Layout title='Houses Renting Form' subtitle='Houses Specification' stage={4}
                backLink='/renting-category-page/houses/basic-information/photo-and-video'
                nextLink='/renting-category-page/houses/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Bedrooms</label>
                    <input placeholder='write number of bedrooms'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Washroom</label>
                    <input placeholder='write number of washrooms'/>
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>House Condition</span>
                <div>
                    <div className={styles.inputRadioBox}>
                        <label>Brand New</label>
                        <input type='radio'/>
                    </div>
                    <div className={styles.inputRadioBox}>
                        <label>Old House</label>
                        <input type='radio'/>
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
                <input placeholder='Write the area value'/>
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
        </Layout>
    )
}
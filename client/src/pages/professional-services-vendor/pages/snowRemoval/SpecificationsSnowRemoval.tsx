import React from 'react';
import styles from './SpecificationsSnowRemoval.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsSnowRemoval = () => {
    return (
        <Layout title='Snow Removal SERVICES Form' subtitle='Snow Removal Specification' stage={4}
                backLink='/professional-services/snow-removal/basic-information/photo-and-video'
                nextLink='/professional-services/snow-removal/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputsRadio}>
                <span>Need Instrument for Snow Removal Service</span>
                <div>
                    <div className={styles.inputRadioBox}>
                        <label>Yes</label>
                        <input type='radio'/>
                    </div>
                    <div className={styles.inputRadioBox}>
                        <label>No</label>
                        <input type='radio'/>
                    </div>
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>You have all the safety Instrument for Snow Removal Service</span>
                <div>
                    <div className={styles.inputRadioBox}>
                        <label>Yes</label>
                        <input type='radio'/>
                    </div>
                    <div className={styles.inputRadioBox}>
                        <label>No</label>
                        <input type='radio'/>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Select Type of Service</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Driveway snow removal</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Walkway snow clearing</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Roof snow removal</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Select Type of Property</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Residential</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Commercial</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Industrial</label>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
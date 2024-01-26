import React from 'react';
import styles from './SpecificationsRepairing.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsRepairing = () => {
    return (
        <Layout title='Repairing SERVICES Form' subtitle='Repairing Specification' stage={4}
                backLink='/professional-services/repairing/basic-information/photo-and-video'
                nextLink='/renting-category-page/vehicle/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Working Hours </label>
                    <input placeholder='10' type='number'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Number of PROFESSIONAL</label>
                    <input placeholder='20' type='number'/>
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>Need Instrument for Repairing Service</span>
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
                <span>You have all the safety Instrument for Repairing Service </span>
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
import React from 'react';
import styles from './SpecificationsPestControl.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsPestControl = () => {
    return (
        <Layout title='Pest Control SERVICES Form ' subtitle='Pest Control Specification' stage={4}
                backLink='/professional-services/pest-control/basic-information/photo-and-video'
                nextLink='/renting-category-page/pest-control/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputsRadio}>
                <span>Need Instrument for Pest Control Service</span>
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
                <span>You have all the safety Instrument for Pest Control Service </span>
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
                        <label>Termite inspection</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Odent control</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Wildlife removal</label>
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
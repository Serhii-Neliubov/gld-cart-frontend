import React from 'react';
import styles from './SpecificationsHandyman.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsHandyman = () => {
    return (
        <Layout title='Handyman SERVICES Form' subtitle='Handyman Specification' stage={4}
                backLink='/professional-services/handyman/basic-information/photo-and-video'
                nextLink='/professional-services/handyman/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputsRadio}>
                <span>Need Instrument for Handyman Service</span>
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
                <span>You have all the safety Instrument for Handyman Service</span>
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
                        <label>At Office</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>At Home</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>At Shop</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>At School</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>At Hospital</label>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
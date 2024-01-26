import React from 'react';
import styles from './SpecificationsElectrical.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsElectrical = () => {
    return (
        <Layout title='Electrical SERVICES Form' subtitle='Electrical Specification' stage={4}
                backLink='/professional-services/electrical/basic-information/photo-and-video'
                nextLink='/renting-category-page/vehicle/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputsRadio}>
                <span>Need Instrument for Electrical Service</span>
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
                <span>You have all the safety Instrument for Electrical Service</span>
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
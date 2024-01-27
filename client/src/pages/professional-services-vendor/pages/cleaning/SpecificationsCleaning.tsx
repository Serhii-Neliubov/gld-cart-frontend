import React from 'react';
import styles from './SpecificationsCleaning.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsCleaning = () => {
    return (
        <Layout title='Cleaning SERVICES Form' subtitle='Cleaning Specification' stage={4}
                backLink='/professional-services/cleaning/basic-information/photo-and-video'
                nextLink='/professional-services/cleaning/basic-information/photo-and-video/specifications/publish-complete'>
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
                <span>Need Cleaning Material</span>
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
            <span className={styles.tipTitle}>Select the age group for which the clothing item is suitable</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>One Day after cleaning </label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>One Week after cleaning </label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>One Month after cleaning </label>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
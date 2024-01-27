import React from 'react';
import styles from './SpecificationsGardening.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsGardening = () => {
    return (
        <Layout title='Gardening Services Form' subtitle='Gardening Specification' stage={4}
                backLink='/professional-services/gardening/basic-information/photo-and-video'
                nextLink='/professional-services/gardening/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputBox}>
                <label>Garden Size</label>
                <input placeholder='Approximate size of the garden' />
            </div>
            <div className={styles.inputsRadio}>
                <span>Need Gardening Material</span>
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
                <span>You want to give your Gardening service Per</span>
                <div>
                    <div className={styles.inputRadioBox}>
                        <label>Hour</label>
                        <input type='radio'/>
                    </div>
                    <div className={styles.inputRadioBox}>
                        <label>Day</label>
                        <input type='radio'/>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Select frequency of gardening services</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>One Day after Gardening </label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>One Week after Gardening </label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>One Month after Gardening</label>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
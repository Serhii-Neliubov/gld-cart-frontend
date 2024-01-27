import React from 'react';
import styles from './SpecificationsLawn.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsLawn = () => {
    return (
        <Layout title='Lawn SERVICES Form' subtitle='Lawn Specification' stage={4}
                backLink='/professional-services/lawn-services/basic-information/photo-and-video'
                nextLink='/professional-services/lawn-services/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputBox}>
                <label>Working Hours</label>
                <input placeholder='05' type='number'/>
            </div>
            <div className={styles.inputsRadio}>
                <span>Need Instrument for Lawn Service</span>
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
                <span>You want to give lawn service Per</span>
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
                        <label>One Day after Lawn Service  </label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>One Week after Lawn Service   </label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>One Month after Lawn Service  </label>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
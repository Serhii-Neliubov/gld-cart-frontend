import React from 'react';
import styles from './SpecificationsTreeCutting.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsTreeCutting = () => {
    return (
        <Layout title='Tree Cutting SERVICES Form' subtitle='Tree Cutting Specification' stage={4}
                backLink='/professional-services/tree-cutting/basic-information/photo-and-video'
                nextLink='/renting-category-page/vehicle/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Working Hours</label>
                    <input placeholder='05' type='number'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Number of PROFESSIONAL</label>
                    <input placeholder='10' type='number'/>
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>Need Tree Cutting  Material</span>
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
                <span>Need Safety Material For Tree Cutting</span>
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
            <span className={styles.tipTitle}>Select type of tree cutting</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Tree removal</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Tree trimming</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Stump grinding</label>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
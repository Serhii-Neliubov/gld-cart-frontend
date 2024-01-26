import React from 'react';
import styles from './SpecificationsVehicle.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsVehicle = () => {
    return (
        <Layout title='Vehicle Renting Form' subtitle='Vehicles SpecificationsGardening' stage={4}
                backLink='/renting-category-page/vehicle/basic-information/photo-and-video'
                nextLink='/renting-category-page/vehicle/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Year of Manufacture</label>
                    <input placeholder='Car Manufacture year'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Vehicle Plate Number</label>
                    <input placeholder='AAA-123'/>
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>Vehicle Condition</span>
                <div>
                    <div className={styles.inputRadioBox}>
                        <label>New Vehicle</label>
                        <input type='radio'/>
                    </div>
                    <div className={styles.inputRadioBox}>
                        <label>Used Vehicle</label>
                        <input type='radio'/>
                    </div>
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Custom specification*</label>
                    <input placeholder='Transmission'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Specification details*</label>
                    <input placeholder='Automatic'/>
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Fuel type*</label>
                    <input placeholder='Diesel'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Engine capacity*</label>
                    <input placeholder='1000 CC'/>
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Seat capacity</label>
                    <input placeholder='04'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Storage Bag capacity</label>
                    <input placeholder='1 big bag and one small bag'/>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Air bags</label>
                <input placeholder='02'/>
            </div>
        </Layout>
    )
}
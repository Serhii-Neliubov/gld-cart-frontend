import React from 'react';
import styles from "../mobileTablets.module.scss";
import { ModalWindow } from '../../../../../components/RentingProductsPopup/ModalWindow';
import {formDataProps} from "../mobileTablets.tsx";

type StageTwoProps = {
    setStage: (number: number) => void;
    stage: number,
    closeModal: () => void
    setFormData: React.Dispatch<React.SetStateAction<formDataProps>>,
    formData: formDataProps,
}

export const StageTwo = ({setFormData, formData, closeModal, setStage, stage}: StageTwoProps) => {

    return (
        <ModalWindow closeModal={closeModal}>
            <h1 className={styles.title}>Mobile Tablets Specification</h1>
            <form className={styles.form}>
                <div className={styles.formBlock}>
                    <span className={styles.categoryText}>Products Specification</span>
                    <div className={styles.content}>
                        <div className={styles.inputBoxes}>
                            <div className={styles.inputBox}>
                                <label>Operating System</label>
                                <input
                                    value={formData.operatingSystem}
                                    onChange={(e) => setFormData({...formData, operatingSystem: e.target.value})}
                                    type='text'
                                    placeholder='Specify the operating system'
                                />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Processor</label>
                                <input
                                    value={formData.processor}
                                    onChange={(e) => setFormData({...formData, processor: e.target.value})}
                                    type='text'
                                    placeholder='Provide details about the processor e.g.,CPU model & speed'/>
                            </div>
                            <div className={styles.inputBox}>
                                <label>Memory (RAM)</label>
                                <input
                                    value={formData.memory}
                                    onChange={(e) => setFormData({...formData, memory: e.target.value})}
                                    type='text'
                                    placeholder='Specify the RAM capacity'/>
                            </div>
                            <div className={styles.inputBox}>
                                <label>Storage</label>
                                <input
                                    value={formData.storage}
                                    onChange={(e) => setFormData({...formData, storage: e.target.value})}
                                    type='text'
                                    placeholder='Indicate the storage capacity, e.g., SSD/HDD size'/>
                            </div>
                            <div className={styles.inputBox}>
                                <label>Screen/Display</label>
                                <input
                                    value={formData.screenDisplay}
                                    onChange={(e) => setFormData({...formData, screenDisplay: e.target.value})}
                                    type='text'
                                    placeholder='Provide information about the screen size, resolution'/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className={styles.formActions}>
                <button onClick={() => setStage(stage - 1)} className={styles.formActionButton}>Back</button>
                <button onClick={() => {
                    setFormData({...formData, })
                    setStage(3)
                }} className={styles.formActionButtonBlue}>Next</button>
            </div>
        </ModalWindow>
    )
}
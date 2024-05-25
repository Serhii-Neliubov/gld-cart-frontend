import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewTreeCutting.module.scss";
import {IVendorProductData} from "@models/IVendorProductData.tsx";

type BasicInformationProps = {
    formData: IVendorProductData;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
}

export const SpecificationInformation = ({setFormData, formData}: BasicInformationProps) => {

    const handleCheckboxChange = (category: string, value: string) => {
        setFormData((prevFormData) => {
            const existingValues: string | string[] = prevFormData.attributes[category] || [];
            let updatedValues: string[];

            if (Array.isArray(existingValues)) {
                updatedValues = existingValues.includes(value)
                    ? existingValues.filter((item: string) => item !== value)
                    : [...existingValues, value];
            } else {
                updatedValues = [existingValues, value];
            }

            return {
                ...prevFormData,
                attributes: {
                    ...prevFormData.attributes,
                    [category]: updatedValues
                }
            };
        });
    };

    return (
        <React.Fragment>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Working Hours</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                workingHours: event.target.value
                            }
                        })
                    } placeholder="05" type="number" />
                </div>
                <div className={styles.inputBox}>
                    <label>Number of PROFESSIONAL</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                numberOfProfessional: event.target.value
                            }
                        })
                    } placeholder="10" type="number" />
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>Need Tree Cutting Material</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    isNeededMaterial: 'Yes'
                                }
                            })
                        } type="radio" />
                        <label>Yes</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    isNeededMaterial: 'No'
                                }
                            })
                        } type="radio" />
                        <label>No</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>Need Safety Material For Tree Cutting</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    isMaterialSafety: 'Yes'
                                }
                            })
                        } type="radio" />
                        <label>Yes</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    isMaterialSafety: 'No'
                                }
                            })
                        } type="radio" />
                        <label>No</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>
                Select type of tree cutting
              </span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('serviceType', 'Tree Removal')} type="checkbox" />
                        <label>Tree removal</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('serviceType', 'Tree Trimming')} type="checkbox" />
                        <label>Tree trimming</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('serviceType', 'Stump grinding')} type="checkbox" />
                        <label>Stump grinding</label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
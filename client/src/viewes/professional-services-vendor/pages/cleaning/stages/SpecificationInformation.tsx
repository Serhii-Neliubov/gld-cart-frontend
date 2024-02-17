import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewCleaning.module.scss";
import {IVendorProductData} from "../../../../../utils/models/IVendorProductData.tsx";

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
                    <label>Working Hours </label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                workingHours: event.target.value
                            }
                        })
                    } placeholder="10" type="number" />
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
                    } placeholder="20" type="number" />
                </div>
            </div>
            <div className={styles.inputRadioBox}>
                <span>Need Cleaning Material</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    cleaningMaterial: 'Yes'
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
                                    cleaningMaterial: 'No'
                                }
                            })
                        } type="radio" />
                        <label>No</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>
                Select Cleaning Frequency
              </span>
            <div className={styles.inputsCheckbox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.inputCheckbox}>
                        <input onChange={() => handleCheckboxChange('cleaningFrequency', 'One Day after cleaning')}  type="checkbox" />
                        <label>One Day after cleaning </label>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <input onChange={() => handleCheckboxChange('cleaningFrequency', 'One Week after cleaning')} type="checkbox" />
                        <label>One Week after cleaning </label>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <input onChange={() => handleCheckboxChange('cleaningFrequency', 'One Month after cleaning')} type="checkbox" />
                        <label>One Month after cleaning </label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
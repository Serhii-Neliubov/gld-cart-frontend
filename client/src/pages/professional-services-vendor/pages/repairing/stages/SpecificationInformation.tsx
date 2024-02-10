import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewRepairing.module.scss";
import {IVendorProductData} from "../../../../../models/IVendorProductData.tsx";

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
                <span>Need Instrument for Repairing Service</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    isNeedInstrument: 'Yes'
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
                                    isNeedInstrument: 'No'
                                }
                            })
                        } type="radio" />
                        <label>No</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>
                  You have all the safety Instrument for Repairing Service{" "}
                </span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    isInstrumentSafety: 'Yes'
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
                                    isInstrumentSafety: 'No'
                                }
                            })
                        } type="radio" />
                        <label>No</label>
                    </div>
                </div>
            </div>
            <div className={styles.checkboxInputsBox}>
                <span className={styles.tipTitle}>Select Type of Property</span>
                <div className={styles.inputCheckbox}>
                    <div className={styles.inputCheckbox}>
                        <input onChange={() => handleCheckboxChange('propertyType', 'Residential')} type="checkbox" />
                        <label>Residential</label>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <input onChange={() => handleCheckboxChange('propertyType', 'Commercial')} type="checkbox" />
                        <label>Commercial</label>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <input onChange={() => handleCheckboxChange('propertyType', 'Industrial')} type="checkbox" />
                        <label>Industrial</label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
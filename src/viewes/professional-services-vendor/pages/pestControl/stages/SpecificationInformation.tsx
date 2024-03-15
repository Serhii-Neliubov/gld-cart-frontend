import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewPestControl.module.scss";
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
            <div className={styles.inputsRadio}>
                <span>Need Instrument for Pest Control Service</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    isNeededInstrument: 'Yes'
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
                                    isNeededInstrument: 'No'
                                }
                            })
                        } type="radio" />
                        <label>No</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>
                  You have all the safety Instrument for Pest Control Service{" "}
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
            <span className={styles.tipTitle}>Select Type of Service</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('serviceType', 'Termite inspection')} type="checkbox" />
                        <label>Termite inspection</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('serviceType', 'Odent control')} type="checkbox" />
                        <label>Odent control</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('serviceType', 'Wildlife removal')} type="checkbox" />
                        <label>Wildlife removal</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Select Type of Property</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('propertyType', 'Residential')} type="checkbox" />
                        <label>Residential</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('propertyType', 'Commercial')} type="checkbox" />
                        <label>Commercial</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('propertyType', 'Industrial')} type="checkbox" />
                        <label>Industrial</label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
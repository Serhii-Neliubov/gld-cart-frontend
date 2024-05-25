import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewLawnServices.module.scss";
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
            <div className={styles.inputBox}>
                <label>Working Hours</label>
                <input placeholder="05" type="number" />
            </div>
            <div className={styles.inputsRadio}>
                <span>Need Instrument for Lawn Service</span>
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
                <span>You want to give lawn service Per</span>
                <div className={styles.radioInputs}>
                    <div onChange={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                youGiveServicePer: 'Hour'
                            }
                        })
                    } className={styles.inputRadio}>
                        <input type="radio" />
                        <label>Hour</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    youGiveServicePer: 'Day'
                                }
                            })
                        } type="radio" />
                        <label>Day</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>
                Select frequency of gardening services
              </span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('frequencyOfService', 'One Day after Lawn Service')} type="checkbox" />
                        <label>One Day after Lawn Service </label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('frequencyOfService', 'One Week after Lawn Service')} type="checkbox" />
                        <label>One Week after Lawn Service </label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('frequencyOfService', 'One Month after Lawn Service')} type="checkbox" />
                        <label>One Month after Lawn Service </label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
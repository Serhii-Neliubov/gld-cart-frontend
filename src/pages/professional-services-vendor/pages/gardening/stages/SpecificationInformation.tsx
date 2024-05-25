import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewGardening.module.scss";
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
                <label>Garden Size</label>
                <input onChange={(event) =>
                    setFormData({
                        ...formData,
                        attributes: {
                            ...formData.attributes,
                            gardenSize: event.target.value
                        }
                    })
                } placeholder="Approximate size of the garden" />
            </div>
            <div className={styles.inputRadioBox}>
                <span>Need Gardening Material</span>
                <div className={styles.radioInputs}>
                    <div onChange={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                isNeedGardeningMaterial: 'Yes'
                            }
                        })
                    } className={styles.inputRadio}>
                        <input type="radio" />
                        <label>Yes</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    isNeedGardeningMaterial: 'No'
                                }
                            })
                        } type="radio" />
                        <label>No</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>You want to give your Gardening service Per</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    youGiveServicePer: 'Hour'
                                }
                            })
                        } type="radio" />
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
                        <input onChange={() => handleCheckboxChange('frequencyOfService', 'One Day after Gardening')} type="checkbox" />
                        <label>One Day after Gardening </label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input onChange={() => handleCheckboxChange('frequencyOfService', 'One Week after Gardening')} type="checkbox" />
                        <label>One Week after Gardening </label>
                    </div>
                    <div onChange={() => handleCheckboxChange('frequencyOfService', 'One Month after Gardening')} className={styles.checkboxInputs}>
                        <input type="checkbox" />
                        <label>One Month after Gardening</label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
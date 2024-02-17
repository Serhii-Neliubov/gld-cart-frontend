import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewHouses.module.scss";
import {IVendorProductData} from "../../../../../models/IVendorProductData.tsx";

type BasicInformationProps = {
    formData: IVendorProductData;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
}
export const SpecificationInformation = ({setFormData, formData}: BasicInformationProps) => {

    function handleFeatureClick(feature: string) {
        setFormData(prevFormData => {
            const { attributes } = prevFormData;
            const featureValue = attributes['features'] || []; // Убедимся, что featureValue всегда массив

            const updatedFeatures = Array.isArray(featureValue)
                ? featureValue.includes(feature)
                    ? featureValue.filter(item => item !== feature)
                    : [...featureValue, feature]
                : [feature]; // Если featureValue не массив, создаем новый массив с текущим feature

            return {
                ...prevFormData,
                attributes: {
                    ...attributes,
                    features: updatedFeatures
                }
            };
        });
    }


    return (
        <React.Fragment>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Bedrooms</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                bedrooms: event.target.value
                            }
                        })
                    } placeholder="write number of bedrooms" />
                </div>
                <div className={styles.inputBox}>
                    <label>Washroom</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                washroom: event.target.value
                            }
                        })
                    } placeholder="write number of washrooms" />
                </div>
            </div>
            <div className={styles.inputRadioBox}>
                <span>House Condition</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    condition: 'New House'
                                }
                            })
                        } type="radio" />
                        <label>New house</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    condition: 'Old House'
                                }
                            })
                        } type="radio" />
                        <label>Old House</label>
                    </div>
                </div>
            </div>
            <div className={styles.noOfStoreys}>
                <span>No of storeys</span>
                <div>
                    <button onClick={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                countOfStoreys: '1'
                            }
                        })
                    }>1</button>
                    <button onClick={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                countOfStoreys: '2'
                            }
                        })
                    }>2</button>
                    <button onClick={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                countOfStoreys: '3'
                            }
                        })
                    }>3</button>
                    <button onClick={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                countOfStoreys: '4+'
                            }
                        })
                    }>4+</button>
                </div>
            </div>
            <div className={styles.areaUnit}>
                <span>Area unit</span>
                <div>
                    <button onClick={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                areaUnit: 'Canal'
                            }
                        })
                    }>Canal</button>
                    <button onClick={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                areaUnit: 'Square Feet'
                            }
                        })
                    }>Marla</button>
                    <button onClick={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                areaUnit: 'Square Feet'
                            }
                        })
                    }>Square Feet</button>
                    <button onClick={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                areaUnit: 'Square Meter'
                            }
                        })
                    }>Square Meter</button>
                    <button onClick={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                areaUnit: 'Square Yards'
                            }
                        })
                    }>Square Yards</button>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Area</label>
                <input onChange={(event) =>
                    setFormData({
                        ...formData,
                        attributes: {
                            ...formData.attributes,
                            area: event.target.value
                        }
                    })
                } placeholder="Write the area value" />
            </div>
            <div className={styles.features}>
                <span>Features</span>
                <div>
                    <button onClick={() => handleFeatureClick('Servant Quarters')}>Servant Quarters</button>
                    <button onClick={() => handleFeatureClick('Drawing Room')}>Drawing Room</button>
                    <button onClick={() => handleFeatureClick('Dining Room')}>Dining Room</button>
                    <button onClick={() => handleFeatureClick('Kitchen')}>Kitchen</button>
                    <button onClick={() => handleFeatureClick('Study Room')}>Study Room</button>
                    <button onClick={() => handleFeatureClick('Prayer Room')}>Prayer Room</button>
                    <button onClick={() => handleFeatureClick('Powder Room')}>Powder Room</button>
                </div>
            </div>
        </React.Fragment>
    )
}
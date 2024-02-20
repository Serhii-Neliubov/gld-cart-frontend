import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewElectronics.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.tsx";

type BasicInformationProps = {
    formData: IVendorProductData;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
}

export const SpecificationInformation = ({setFormData, formData}: BasicInformationProps) => {
    return (
        <React.Fragment>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Model</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                model: event.target.value
                            }
                        })
                    } placeholder="Item model" />
                </div>
                <div className={styles.inputBox}>
                    <label>Color</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                color: event.target.value
                            }
                        })
                    } placeholder="Item color" />
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>Item Condition</span>
                <div>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    condition: 'Brand New'
                                }
                            })
                        } type="radio" />
                        <label>Brand New</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    condition: 'Used'
                                }
                            })
                        } type="radio" />
                        <label>Used</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Size</label>
                <input onChange={(event) =>
                    setFormData({
                        ...formData,
                        attributes: {
                            ...formData.attributes,
                            size: event.target.value
                        }
                    })
                } placeholder="Provide measurements if applicable" />
            </div>
            <div className={styles.subtitle}>
                <span>Fill this for Smartphones, Laptops and Tablets</span>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Operating System</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                operatingSystem: event.target.value
                            }
                        })
                    } placeholder="Specify the operating system" />
                </div>
                <div className={styles.inputBox}>
                    <label>Processor</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                processor: event.target.value
                            }
                        })
                    } placeholder="Provide details about the processor e.g.,CPU model & speed" />
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Memory (RAM)</label>
                <input onChange={(event) =>
                    setFormData({
                        ...formData,
                        attributes: {
                            ...formData.attributes,
                            memory: event.target.value
                        }
                    })
                } placeholder="Specify the RAM capacity" />
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Storage</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                storage: event.target.value
                            }
                        })
                    } placeholder="Indicate the storage capacity, e.g., SSD/HDD size" />
                </div>
                <div className={styles.inputBox}>
                    <label>Display/Screen</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                display: event.target.value
                            }
                        })
                    } placeholder="Provide information about the screen size, resolution" />
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Camera</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                camera: event.target.value
                            }
                        })
                    } placeholder="Specify camera features, including megapixels" />
                </div>
                <div className={styles.inputBox}>
                    <label>Battery Life</label>
                    <input onChange={(event) =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                batteryLife: event.target.value
                            }
                        })
                    } placeholder="Estimate battery life in hours" />
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Connectivity</label>
                <input onChange={(event) =>
                    setFormData({
                        ...formData,
                        attributes: {
                            ...formData.attributes,
                            connectivity: event.target.value
                        }
                    })
                } placeholder="connectivity options such as Wi-Fi, Bluetooth, USB ports, etc." />
            </div>
            <div className={styles.inputBox}>
                <label>Additional Features</label>
                <input onChange={(event) =>
                    setFormData({
                        ...formData,
                        attributes: {
                            ...formData.attributes,
                            additionalFeatures: event.target.value
                        }
                    })
                } placeholder="Mention any unique features or functionalities" />
            </div>
        </React.Fragment>
    )
}
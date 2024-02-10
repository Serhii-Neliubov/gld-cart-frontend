import React, {Dispatch, SetStateAction, useEffect} from 'react';
import styles from "../NewRepairing.module.scss";
import {IVendorProductData} from "../../../../../models/IVendorProductData.tsx";
import {useSelector} from "react-redux";
import {vendorProductInfo} from "../../../../../redux/slices/vendorProductInfoSlice.ts";

type BasicInformationProps = {
    formData: IVendorProductData;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
}

export const BasicInformation = ({setFormData, formData}: BasicInformationProps) => {
    const data = useSelector(vendorProductInfo);

    useEffect(() => {
        setFormData({
            ...formData,
            category: data.category,
            subcategory: data.subcategory,
            service_name: data.product_name
        });
    }, []);

    return (
        <React.Fragment>
            <div className={styles.inputTextBox}>
                <label>Service Title</label>
                <input onChange={(event) => setFormData({...formData, title: event.target.value})} placeholder="70 words max" maxLength={70} />
            </div>
            <div className={styles.inputAreaBox}>
                <label>Service Description</label>
                <textarea
                    onChange={(event) => setFormData({...formData, description: event.target.value})}
                    minLength={160}
                    maxLength={9000}
                    placeholder="Minimum 160 and maximum 9000 characters"
                />
            </div>
            <div className={styles.inputRadioBox}>
                <span>You want to give your professional service in</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    professionalServiceIn: 'At Home'
                                }
                            })
                        } type="radio" />
                        <label>At Home</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    professionalServiceIn: 'At Shop'
                                }
                            })
                        } type="radio" />
                        <label>At Shop</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({
                                ...formData,
                                attributes: {
                                    ...formData.attributes,
                                    professionalServiceIn: 'At Office'
                                }
                            })
                        } type="radio" />
                        <label>At Office</label>
                    </div>
                </div>
            </div>
            <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type="checkbox" />
                            <label>Repairing Packages For Product</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Rent Price</span>
                                    <input onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            attributes: {
                                                ...formData.attributes,
                                                hourRentPrice: event.target.value
                                            }
                                        })
                                    } placeholder="450$" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Hours</span>
                                    <select onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            attributes: {
                                                ...formData.attributes,
                                                amountOfHours: event.target.value
                                            }
                                        })
                                    }>
                                        <option value="1 Hour">01 Hour</option>
                                        <option value="2 Hours">02 Hours</option>
                                        <option value="3 Hours">03 Hours</option>
                                        <option value="4 Hours">04 Hours</option>
                                        <option value="5 Hours">05 Hours</option>
                                        <option value="8 Hours">08 Hours</option>
                                        <option value="12 Hours">12 Hours</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    attributes: {
                                        ...formData.attributes,
                                        fixPriceRepairing: event.target.value
                                    }
                                })
                            } type="checkbox" />
                            <label>Fix Price Repairing </label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Rent Price</span>
                                    <input onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            attributes: {
                                                ...formData.attributes,
                                                fixRentPrice: event.target.value
                                            }
                                        })
                                    } placeholder="450$" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Fix</span>
                                    <input onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            attributes: {
                                                ...formData.attributes,
                                                whatNeedToBeFixed: event.target.value
                                            }
                                        })
                                    } placeholder="Per product" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
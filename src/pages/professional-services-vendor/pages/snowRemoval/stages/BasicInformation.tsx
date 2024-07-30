import React, {Dispatch, SetStateAction, useEffect} from 'react';
import styles from "../NewSnowRemoval.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.tsx";
import {useSelector} from "react-redux";
import {vendorProductInfo} from "@/store/slices/vendorProductInfoSlice.ts";

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
                <span>You want to give your Snow Removal service Per</span>
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
            <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type="checkbox" />
                            <label>Snow Removal Packages For Hour</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Price</span>
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
                                    <span>Hour</span>
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
                            <input type="checkbox" />
                            <label>Snow Removal Packages For Day</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Price</span>
                                    <input onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            attributes: {
                                                ...formData.attributes,
                                                dayRentPrice: event.target.value
                                            }
                                        })
                                    } placeholder="450$" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Day</span>
                                    <select onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            attributes: {
                                                ...formData.attributes,
                                                amountOfDays: event.target.value
                                            }
                                        })
                                    }>
                                        <option value="1 Day">01 Day</option>
                                        <option value="2 Days">02 Days</option>
                                        <option value="3 Days">03 Days</option>
                                        <option value="4 Days">04 Days</option>
                                        <option value="5 Days">05 Days</option>
                                        <option value="8 Days">08 Days</option>
                                        <option value="12 Days">12 Days</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type="checkbox" />
                            <label>Snow Removal Packages For Week</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Price</span>
                                    <input onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            attributes: {
                                                ...formData.attributes,
                                                weekRentPrice: event.target.value
                                            }
                                        })
                                    } placeholder="450$" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Week</span>
                                    <select onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            attributes: {
                                                ...formData.attributes,
                                                amountOfWeeks: event.target.value
                                            }
                                        })
                                    }>
                                        <option value="1 Week">01 Week</option>
                                        <option value="2 Weeks">02 Weeks</option>
                                        <option value="3 Weeks">03 Weeks</option>
                                        <option value="4 Weeks">04 Weeks</option>
                                        <option value="5 Weeks">05 Weeks</option>
                                        <option value="8 Weeks">08 Weeks</option>
                                        <option value="12 Weeks">12 Weeks</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
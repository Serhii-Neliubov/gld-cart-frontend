import React, {Dispatch, SetStateAction, useEffect} from 'react';
import styles from "../NewVehicle.module.scss";
import {useSelector} from "react-redux";
import {vendorProductInfo} from "@/store/slices/vendorProductInfoSlice.ts";
import {IVendorProductData} from "@/utils/models/IVendorProductData.tsx";

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
            renting_name: data.product_name
        });
    }, []);

    return (
        <React.Fragment>
            <div className={styles.inputTextBox}>
                <label>Title</label>
                <input
                    required={true}
                    onChange={(event) =>
                        setFormData({...formData, title: event.target.value})
                    }
                    placeholder="70 words max"
                    maxLength={70}
                />
            </div>
            <div className={styles.inputAreaBox}>
                <label>Description</label>
                <textarea
                    onChange={(event) =>
                        setFormData({...formData, description: event.target.value})
                    }
                    minLength={160}
                    maxLength={9000}
                    placeholder="Minimum 160 and maximum 9000 characters"
                />
            </div>
            <div className={styles.inputRadioBox}>
                <span>You want to rent your car</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input
                            name="driver"
                            onChange={() =>
                                setFormData({
                                    ...formData,
                                    attributes: {
                                        ...formData.attributes,
                                        driver: 'Without Driver'
                                    }
                                })
                            }
                            type="radio"
                        />
                        <label>Without Driver</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input
                            onChange={() =>
                                setFormData({
                                    ...formData,
                                    attributes: {
                                        ...formData.attributes,
                                        driver: 'With Driver'
                                    }
                                })
                            }
                            name="driver"
                            type="radio"
                        />
                        <label>With Driver</label>
                    </div>
                </div>
            </div>
            <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input
                                name="time"
                                type="checkbox"
                            />
                            <label>Renting Packages For Days </label>
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
                                                dayRentPrice: event.target.value
                                            }
                                        })
                                    } placeholder="450$" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Day</span>
                                    <select
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                attributes: {
                                                    ...formData.attributes,
                                                    amountOfDays: event.target.value
                                                }
                                            })
                                        }
                                    >
                                        <option value="1 Day">01 Day</option>
                                        <option value="2 Days">02 Days</option>
                                        <option value="3 Days">03 Days</option>
                                        <option value="4 Days">04 Days</option>
                                        <option value="5 Days">05 Days</option>
                                        <option value="10 Days">10 Days</option>
                                        <option value="15 Days">15 Days</option>
                                        <option value="20 Days">20 Days</option>
                                        <option value="25 Days">25 Days</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input
                                name="time"
                                type="checkbox"
                            />
                            <label>Renting Packages For Weeks </label>
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
                                                weeklyRentPrice: event.target.value
                                            }
                                        })
                                    } placeholder="450$" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Week</span>
                                    <select
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                attributes: {
                                                    ...formData.attributes,
                                                    amountOfWeeks: event.target.value
                                                }
                                            })
                                        }
                                    >
                                        <option value="1 Day">01 Week</option>
                                        <option value="2 Weeks">02 Weeks</option>
                                        <option value="3 Weeks">03 Weeks</option>
                                        <option value="5 Weeks">05 Weeks</option>
                                        <option value="8 Weeks">08 Weeks</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input
                                name="time"
                                type="checkbox"
                            />
                            <label>Renting Packages For Months </label>
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
                                                monthlyRentPrice: event.target.value
                                            }
                                        })
                                    } placeholder="450$" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Month</span>
                                    <select
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                attributes: {
                                                    ...formData.attributes,
                                                    amountOfMonths: event.target.value
                                                }
                                            })
                                        }
                                    >
                                        <option value="1 Month">01 Month</option>
                                        <option value="2 Months">02 Months</option>
                                        <option value="3 Months">03 Months</option>
                                        <option value="4 Months">04 Months</option>
                                        <option value="5 Months">05 Months</option>
                                        <option value="10 Months">10 Months</option>
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
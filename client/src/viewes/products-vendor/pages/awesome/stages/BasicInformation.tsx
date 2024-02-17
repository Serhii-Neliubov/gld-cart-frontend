import React, {Dispatch, SetStateAction, useEffect} from 'react';
import styles from "../NewAwesomeLipCare.module.scss";
import {IVendorProductData} from "../../../../../models/IVendorProductData.tsx";
import {useSelector} from "react-redux";
import {vendorProductInfo} from "../../../../../store/slices/vendorProductInfoSlice.ts";

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
            product_name: data.product_name
        });
    }, []);

    return (
        <React.Fragment>
            <div className={styles.inputTextBox}>
                <label>Product Title</label>
                <input onChange={(event) => setFormData({...formData, title: event.target.value})} placeholder="70 words max" maxLength={70} />
            </div>
            <div className={styles.inputAreaBox}>
                <label>Products Description</label>
                <textarea
                    onChange={(event) => setFormData({...formData, title: event.target.value})}
                    minLength={160}
                    maxLength={9000}
                    placeholder="Minimum 160 and maximum 9000 characters"
                />
            </div>
            <div className={styles.inputRadioBox}>
                <span>The product you want to sell is ?</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input type="radio" />
                        <label>Branded</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type="radio" />
                        <label>Local</label>
                    </div>
                </div>
            </div>
            <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type="checkbox" />
                            <label>Full Price</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Price</span>
                                    <input placeholder="450$" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type="checkbox" />
                            <label>Discount Price</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Discount Price</span>
                                    <input placeholder="450$" />
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Discount</span>
                                    <select>
                                        <option value="10%">10%</option>
                                        <option value="20%">20%</option>
                                        <option value="30%">30%</option>
                                        <option value="40%">40%</option>
                                        <option value="50%">50%</option>
                                        <option value="60%">60%</option>
                                        <option value="70%">70%</option>
                                        <option value="80%">80%</option>
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
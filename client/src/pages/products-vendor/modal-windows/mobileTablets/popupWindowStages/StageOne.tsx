import React from 'react';
import styles from "../mobileTablets.module.scss";
import {formDataProps} from "../mobileTablets.tsx";
import { ModalWindow } from '../../../../../components/RentingProductsPopup/ModalWindow.tsx';

type StageOneProps = {
    formData: formDataProps,
    setFormData: React.Dispatch<React.SetStateAction<formDataProps>>,
    setStage: (number: number) => void,
    price: string,
    setPrice: (value: string) => void,
    discountedPrice: string,
    setDiscountedPrice: (value: string) => void,
    discount: string,
    setDiscount: (value: string) => void
    closeModal: () => void,
};


export const StageOne = ({closeModal, formData, setFormData, setStage, price, setPrice, discountedPrice, setDiscountedPrice, discount, setDiscount}: StageOneProps) => {
    return(
        <ModalWindow closeModal={closeModal}>
            <h1 className={styles.title}>You want to give your Mobile Tablets</h1>
            <form className={styles.form}>
                <div className={styles.formBlock}>
                    <span className={styles.categoryText}>The product  you want to sell is ?</span>
                    <div className={styles.formInputs}>
                        <div onClick={() => setFormData({...formData, productType: 'New'})} className={styles.formInput}>
                            <input
                                checked={formData.productType === 'New'}
                                className={styles.formInput}
                                type='radio'
                                name='gender'
                                id='Branded'
                                onChange={() => setFormData({...formData, productType: 'New'})}
                            />
                            <label htmlFor='man'>New</label>
                        </div>
                        <div onClick={() => setFormData({...formData, productType: 'Used'})} className={styles.formInput}>
                            <input
                                checked={formData.productType === 'Used'}
                                className={styles.formInput}
                                type='radio'
                                name='gender'
                                onChange={() => setFormData({...formData, productType: 'Used'})}
                                id='Local'
                            />
                            <label htmlFor='woman'>Used</label>
                        </div>
                    </div>
                </div>
                <div className={styles.formBlock}>
                    <span className={styles.categoryText}>Packages Details </span>
                    <div className={styles.packageDetailsBlock}>
                        <div className={styles.packageDetailsSubBlock}>
                            <div onClick={() => setFormData({...formData, priceType: 'Full Price'})}
                                 className={styles.packageDetailsRadioInput}>
                                <input
                                    checked={formData.priceType === 'Full Price'}
                                    name='price'
                                    type='radio'
                                    onChange={() => setFormData({...formData, priceType: 'Full Price'})}
                                />
                                <label>Full Price</label>
                            </div>
                            <div className={styles.packageDetailsInputs}>
                                <div className={styles.packageDetailsTextInput}>
                                    <input
                                        value={price}
                                        onChange={(e) => {
                                            setPrice(e.target.value)
                                        }}
                                        disabled={formData.priceType === 'Discount Price'}
                                        type='number'
                                        placeholder='450$'
                                    />
                                    <label>Price</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.packageDetailsSubBlock}>
                            <div onClick={() => setFormData({...formData, priceType: 'Discount Price'})}
                                 className={styles.packageDetailsRadioInput}>
                                <input
                                    checked={formData.priceType === 'Discount Price'}
                                    name='price'
                                    type='radio'
                                    onChange={() => setFormData({...formData, priceType: 'Discount Price'})}
                                />
                                <label>Discount Price</label>
                            </div>
                            <div className={styles.packageDetailsInputs}>
                                <div className={styles.packageDetailsTextInput}>
                                    <input
                                        value={discountedPrice}
                                        onChange={(e) => setDiscountedPrice(e.target.value)}
                                        disabled={formData.priceType === 'Full Price'}
                                        type='number'
                                        placeholder='450$'
                                    />
                                    <label>Price</label>
                                </div>
                                <div className={styles.packageDetailsTextInput}>
                                    <input
                                        onChange={(e) => {
                                            setDiscount(e.target.value)
                                        }}
                                        disabled={formData.priceType === 'Full Price'}
                                        type='number'
                                        placeholder='0%'
                                        value={discount}
                                    />
                                    <label>Discount</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className={styles.formActions}>
                <button onClick={() => setStage(2)} className={styles.formActionButtonBlue}>Next</button>
            </div>
        </ModalWindow>
    )
}
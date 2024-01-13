import React from 'react';
import styles from "../Bags.module.scss";
import {formDataProps} from "../Bags.tsx";
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
};


export const StageOne = ({formData, setFormData, setStage, price, setPrice, discountedPrice, setDiscountedPrice, discount, setDiscount}: StageOneProps) => {
    return(
        <ModalWindow>
            <h1 className={styles.title}>You want to give your Bags Products Form</h1>
            <form className={styles.form}>
                <div className={styles.formBlock}>
                    <span className={styles.categoryText}>Category</span>
                    <div className={styles.formInputs}>
                        <div onClick={() => setFormData({...formData, gender: 'Man'})} className={styles.formInput}>
                            <input
                                checked={formData.gender === 'Man'}
                                className={styles.formInput}
                                type='radio'
                                name='gender'
                                id='man'
                                onChange={() => setFormData({...formData, gender: 'Man'})}
                            />
                            <label htmlFor='man'>Man</label>
                        </div>
                        <div onClick={() => setFormData({...formData, gender: 'Woman'})} className={styles.formInput}>
                            <input
                                checked={formData.gender === 'Woman'}
                                className={styles.formInput}
                                type='radio'
                                name='gender'
                                onChange={() => setFormData({...formData, gender: 'Woman'})}
                                id='woman'
                            />
                            <label htmlFor='woman'>Woman</label>
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
                                <label>Full Price</label>
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
                <button onClick={() => setStage(0)} className={styles.closeButton}>&times;</button>
            </div>
        </ModalWindow>
    )
}
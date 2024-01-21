import React from 'react';
import styles from "../Bags.module.scss";
import {formDataProps} from "../Bags.tsx";
import {ModalWindow} from "../../../../../components/RentingProductsPopup/ModalWindow.tsx";
import {useSelector} from "react-redux";
import {vendorProductInfo} from "../../../../../redux/slices/vendorProductInfoSlice.ts";

const defaultFormData = {
    gender: 'Man',
    priceType: 'Full Price',
    productMaterials: [],
    productColors: [],
    productFeatures: [],
    productSizes: [],
    price: '',
}

type StageFourProps = {
    setStage: (number: number) => void,
    stage: number,
    onChecked: (event: React.ChangeEvent<HTMLInputElement>, key:string, element: string) => void,
    formData: formDataProps,
    setFormData: (value: formDataProps) => void,
    price: string,
    discount: string,
    discountedPrice: string,
}

export const StageFour = ({setStage, stage, setFormData, onChecked, formData, price, discount, discountedPrice}: StageFourProps) => {
    const productData = useSelector(vendorProductInfo);

    const sendFormDataHandler = () => {
        if(formData.priceType === 'Full Price'){
            console.log({...formData, price: `${price}$`, ...productData})
            setFormData(defaultFormData);
            setStage(0);
        } else {
            console.log({...formData, discount: `${discount}%`, price: `${discountedPrice}$`, ...productData})
            setFormData(defaultFormData);
            setStage(0);
        }
    }

    return (
        <ModalWindow>
            <h1 className={styles.title}>Bags PRODUCT Form Specification</h1>
            <form className={styles.form}>
                <div className={styles.formBlock}>
                    <span className={styles.categoryText}>Products Specification</span>
                    <div className={styles.content}>
                        <div className={styles.specificationsBlock}>
                            <span className={styles.contentSubtitle}>Select Size of products</span>
                            <div className={styles.specifications}>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input
                                            key='MediumSize'
                                            type='checkbox'
                                            checked={formData.productSizes.includes('Medium')}
                                            onChange={event => {onChecked(event, 'productSizes', 'Medium');}}
                                        />
                                        <label>Medium</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='SmallSize'
                                            type='checkbox'
                                            checked={formData.productSizes.includes('Small')}
                                            onChange={event => {onChecked(event, 'productSizes', 'Small');}}
                                        />
                                        <label>Small</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='LargeSize'
                                            type='checkbox'
                                            checked={formData.productSizes.includes('Large')}
                                            onChange={event => {onChecked(event, 'productSizes', 'Large');}}
                                        />
                                        <label>Large</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className={styles.formActions}>
                <button onClick={() => setStage(stage - 1)} className={styles.formActionButton}>Back</button>
                <button onClick={() => {
                    sendFormDataHandler();
                }} className={styles.formActionButtonBlue}>Finish
                </button>
                <button onClick={() => setStage(0)} className={styles.closeButton}>&times;</button>
            </div>
        </ModalWindow>
    )
}
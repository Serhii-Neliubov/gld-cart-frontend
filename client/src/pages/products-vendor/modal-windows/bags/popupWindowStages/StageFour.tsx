import React, {useState} from 'react';
import styles from "../Bags.module.scss";
import {formDataProps} from "../Bags.tsx";
import {ModalWindow} from "../../../../../components/RentingProductsPopup/ModalWindow.tsx";

type StageFourProps = {
    setStage: (number: number) => void,
    stage: number,
    onChecked: (event: React.ChangeEvent<HTMLInputElement>, key:string, element: string) => void,
    formData: formDataProps,
    price: string,
    discount: string,
    discountedPrice: string,
}

export const StageFour = ({setStage, stage, onChecked, formData, price, discount, discountedPrice}: StageFourProps) => {
    const [mediumSizeValue, setMediumSizeValue] = useState(false)
    const [smallSizeValue, setSmallSizeValue] = useState(false)
    const [largeSizeValue, setLargeSizeValue] = useState(false)

    const sendFormDataHandler = () => {
        if(formData.priceType === 'Full Price'){
            console.log({...formData, price: `${price}$`})
            setStage(0);
        } else {
            console.log({...formData, discount: `${discount}%`, discountedPrice: `${discountedPrice}$`})
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
                                            checked={mediumSizeValue}
                                            onChange={event => {
                                                setMediumSizeValue(event.target.checked);
                                                onChecked(event, 'productSizes', 'Medium')
                                            }}
                                        />
                                        <label>Medium</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='SmallSize'
                                            type='checkbox'
                                            checked={smallSizeValue}
                                            onChange={event => {
                                                setSmallSizeValue(event.target.checked);
                                                onChecked(event, 'productSizes', 'Small')
                                            }}
                                        />
                                        <label>Small</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='LargeSize'
                                            type='checkbox'
                                            checked={largeSizeValue}
                                            onChange={event => {
                                                setLargeSizeValue(event.target.checked);
                                                onChecked(event, 'productSizes', 'Large')
                                            }}
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
                <button onClick={sendFormDataHandler} className={styles.formActionButtonBlue}>Finish</button>
                <button onClick={() => setStage(0)} className={styles.closeButton}>&times;</button>
            </div>
        </ModalWindow>
    )
}
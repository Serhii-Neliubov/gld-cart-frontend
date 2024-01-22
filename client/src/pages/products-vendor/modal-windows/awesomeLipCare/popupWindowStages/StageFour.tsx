import React from 'react';
import styles from "../AwesomeLipCare.module.scss";
import {formDataProps} from "../AwesomeLipCare.tsx";
import {ModalWindow} from "../../../../../components/RentingProductsPopup/ModalWindow.tsx";

type StageFourProps = {
    setStage: (number: number) => void,
    stage: number,
    onChecked: (event: React.ChangeEvent<HTMLInputElement>, key:string, element: string) => void,
    formData: formDataProps,
    price: string,
    discount: string,
    discountedPrice: string,
    closeModal: () => void
}

export const StageFour = ({closeModal, setStage, stage, formData, price, discount, discountedPrice}: StageFourProps) => {
    const sendFormDataHandler = () => {
        if(formData.priceType === 'Full Price'){
            console.log({...formData, price: `${price}$`})
            closeModal();
        } else {
            console.log({...formData, discount: `${discount}%`, discountedPrice: `${discountedPrice}$`})
            closeModal();
        }
    }

    return (
        <ModalWindow closeModal={closeModal}>
            <h1 className={styles.title}>Awesome Lip Care Specification</h1>
            <form className={styles.form}>
                <div className={styles.formBlock}>
                    <span className={styles.categoryText}>Products Specification</span>
                    <div className={styles.content}>
                        <div className={styles.specificationsBlock}>
                            <span className={styles.contentSubtitle}>Select the Features of your product</span>
                            <div className={styles.specifications}>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input
                                            key='SPFProtection'
                                            type='checkbox'
                                        />
                                        <label>SPF Protection</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Tinted'
                                            type='checkbox'
                                        />
                                        <label>Tinted</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='LongLasting'
                                            type='checkbox'
                                        />
                                        <label>Long-Lasting</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='NaturalIngredients'
                                            type='checkbox'
                                        />
                                        <label>Natural Ingredients</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='DermatologistTested'
                                            type='checkbox'
                                        />
                                        <label>DermatologistTested</label>
                                    </div>
                                </div>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input
                                            key='HydratingFormula'
                                            type='checkbox'
                                        />
                                        <label>HydratingFormula</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Vegan'
                                            type='checkbox'
                                        />
                                        <label>Vegan</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Exfoliating'
                                            type='checkbox'
                                        />
                                        <label>Exfoliating</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Other'
                                            type='checkbox'
                                        />
                                        <label>Other</label>
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
            </div>
        </ModalWindow>
    )
}
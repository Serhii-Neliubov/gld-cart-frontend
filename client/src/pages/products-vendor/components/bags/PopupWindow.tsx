import React, {useEffect, useState} from 'react';
import styles from './PopupWindow.module.scss'
import {ModalWindow} from "../../../../components/RentingProductsPopup/ModalWindow.tsx";

export const PopupWindow = () => {
    const [stage, setStage] = useState(1)
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedPriceType, setSelectedPriceType] = useState('Full Price');
    const [price, setPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [discount, setDiscount] = useState('');

    // const formData = {
    //     gender: selectedGender,
    //     priceType: selectedPriceType,
    //     price: `${price}$`,
    //     discountedPrice: `${discountedPrice}$`,
    //     discount: `${discount}%`,
    // };

    useEffect(() => {
        setPrice('');
        setDiscount('');
        setDiscountedPrice('');
    }, [selectedPriceType])

    // const sendFormDataHandler = () => {
    //     if(!discount){
    //         console.log({gender: formData.gender, priceType: formData.priceType, price: formData.price})
    //     } else {
    //         console.log({gender: formData.gender, priceType: formData.priceType, price: formData.discountedPrice, discount: formData.discount})
    //     }
    // }

    if(stage == 1){
        return (
            <ModalWindow>
                <h1 className={styles.title}>You want to give your Bags Products Form</h1>
                <form className={styles.form}>
                    <div className={styles.formBlock}>
                        <span className={styles.categoryText}>Category</span>
                        <div className={styles.formInputs}>
                            <div onClick={() => setSelectedGender('Man')} className={styles.formInput}>
                                <input
                                    checked={selectedGender === 'Man'}
                                    className={styles.formInput}
                                    type='radio'
                                    name='gender'
                                    id='man'
                                    onChange={() => setSelectedGender('Man')}
                                />
                                <label htmlFor='man'>Man</label>
                            </div>
                            <div onClick={() => setSelectedGender('Woman')} className={styles.formInput}>
                                <input
                                    checked={selectedGender === 'Woman'}
                                    className={styles.formInput}
                                    type='radio'
                                    name='gender'
                                    onChange={() => setSelectedGender('Woman')}
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
                                <div onClick={() => setSelectedPriceType('Full Price')}
                                     className={styles.packageDetailsRadioInput}>
                                    <input
                                        checked={selectedPriceType === 'Full Price'}
                                        name='price'
                                        type='radio'
                                        onChange={() => setSelectedPriceType('Full Price')}
                                    />
                                    <label>Full Price</label>
                                </div>
                                <div className={styles.packageDetailsInputs}>
                                    <div className={styles.packageDetailsTextInput}>
                                        <input
                                            value={price}
                                            onChange={(e) => {
                                                setSelectedGender('Discount Price')
                                                setPrice(e.target.value)
                                            }}
                                            disabled={selectedPriceType === 'Discount Price'}
                                            type='number'
                                            placeholder='450$'
                                        />
                                        <label>Price</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.packageDetailsSubBlock}>
                                <div
                                    onClick={() => setSelectedPriceType('Discount Price')}
                                    className={styles.packageDetailsRadioInput}
                                >
                                    <input
                                        checked={selectedPriceType === 'Discount Price'}
                                        name='price'
                                        type='radio'
                                        onChange={(e) => {
                                            setSelectedGender('Discount Price')
                                            setPrice(e.target.value)
                                        }
                                        }
                                    />
                                    <label>Discount Price</label>
                                </div>
                                <div className={styles.packageDetailsInputs}>
                                    <div className={styles.packageDetailsTextInput}>
                                        <input
                                            value={discountedPrice}
                                            onChange={(e) => setDiscountedPrice(e.target.value)}
                                            disabled={selectedPriceType === 'Full Price'}
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
                                            disabled={selectedPriceType === 'Full Price'}
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
                    <button onClick={() => setStage(stage - 1)} className={styles.formActionButton}>Back</button>
                    <button onClick={() => setStage(2)} className={styles.formActionButtonBlue}>Next</button>
                    <button onClick={() => setStage(0)} className={styles.closeButton}>&times;</button>
                </div>
            </ModalWindow>
        )
    }

    if(stage == 2){
        return (
            <ModalWindow>
                <h1 className={styles.title}>Bags PRODUCT Form Specification</h1>
                <form className={styles.form}>
                    <div className={styles.formBlock}>
                        <span className={styles.categoryText}>Products Specification</span>
                        <div className={styles.packageDetailsBlock}>
                            <div className={styles.packageDetailsSubBlock}>
                                <div onClick={() => setSelectedPriceType('Full Price')}
                                     className={styles.packageDetailsRadioInput}>
                                    <input
                                        checked={selectedPriceType === 'Full Price'}
                                        name='price'
                                        type='radio'
                                        onChange={() => setSelectedPriceType('Full Price')}
                                    />
                                    <label>Full Price</label>
                                </div>
                                <div className={styles.packageDetailsInputs}>
                                    <div className={styles.packageDetailsTextInput}>
                                        <input
                                            value={price}
                                            onChange={(e) => {
                                                setSelectedGender('Discount Price')
                                                setPrice(e.target.value)
                                            }}
                                            disabled={selectedPriceType === 'Discount Price'}
                                            type='number'
                                            placeholder='450$'
                                        />
                                        <label>Price</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.packageDetailsSubBlock}>
                                <div
                                    onClick={() => setSelectedPriceType('Discount Price')}
                                    className={styles.packageDetailsRadioInput}
                                >
                                    <input
                                        checked={selectedPriceType === 'Discount Price'}
                                        name='price'
                                        type='radio'
                                        onChange={(e) => {
                                            setSelectedGender('Discount Price')
                                            setPrice(e.target.value)
                                        }
                                        }
                                    />
                                    <label>Discount Price</label>
                                </div>
                                <div className={styles.packageDetailsInputs}>
                                    <div className={styles.packageDetailsTextInput}>
                                        <input
                                            value={discountedPrice}
                                            onChange={(e) => setDiscountedPrice(e.target.value)}
                                            disabled={selectedPriceType === 'Full Price'}
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
                                            disabled={selectedPriceType === 'Full Price'}
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
                    <button onClick={() => setStage(stage - 1)} className={styles.formActionButton}>Back</button>
                    <button onClick={() => setStage(2)} className={styles.formActionButtonBlue}>Next</button>
                    <button onClick={() => setStage(0)} className={styles.closeButton}>&times;</button>
                </div>
            </ModalWindow>
        )
    }

}
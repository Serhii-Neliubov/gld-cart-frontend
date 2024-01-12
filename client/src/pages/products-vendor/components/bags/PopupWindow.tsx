import React, { useEffect, useState } from 'react';
import styles from './PopupWindow.module.scss'
import { ModalWindow } from "../../../../components/RentingProductsPopup/ModalWindow.tsx";

type formDataProps = {
    gender: string;
    priceType: string;
    productMaterials: string[];
    productColors: string[];
    productFeatures: string[];
    productSizes: string[];
    [key: string]: string | string[];
}

export const PopupWindow = () => {
    const [stage, setStage] = useState(1);
    const [price, setPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [discount, setDiscount] = useState('');

    const [mediumSizeValue, setMediumSizeValue] = useState(false)
    const [smallSizeValue, setSmallSizeValue] = useState(false)
    const [largeSizeValue, setLargeSizeValue] = useState(false)

    const [formData, setFormData] = useState<formDataProps>({
        gender: 'Man',
        priceType: 'Full Price',
        productMaterials: [],
        productColors: [],
        productFeatures: [],
        productSizes: [],
    });

    const onChecked = (event:React.ChangeEvent<HTMLInputElement>, key: string, element: string) => {
        let container = formData[key] as string[];

        if(event.target.checked){
            container.push(element)
        } else {
            container = container.filter((size) => size !== element);
        }

        setFormData({
            ...formData,
            [key]: container
        })
    }

    useEffect(() => {
        if(formData.priceType === 'Full Price'){
            setDiscount('');
            setDiscountedPrice('');
        } else if (formData.priceType === 'Discount Price'){
            setPrice('');
        }

    }, [formData.priceType])

    const sendFormDataHandler = () => {
        if(formData.priceType === 'Full Price'){
            console.log({...formData, price: `${price}$`})
        } else {
            console.log({...formData, discount: `${discount}%`, discountedPrice: `${discountedPrice}$`})
        }
    }

    if(stage == 1){
        return (
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

    if(stage == 2){
        return (
            <ModalWindow>
                <h1 className={styles.title}>Bags PRODUCT Form Specification</h1>
                <form className={styles.form}>
                    <div className={styles.formBlock}>
                        <span className={styles.categoryText}>Products Specification</span>
                        <div className={styles.content}>
                            <div className={styles.specificationsBlock}>
                                <span className={styles.contentSubtitle}>Select the Material of your product</span>
                                <div className={styles.specifications}>
                                    <div className={styles.specificationsColumn}>
                                        <div className={styles.specification}>
                                            <input type='checkbox'/>
                                            <label>Leather</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input type='checkbox'/>
                                            <label>Nylon</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input type='checkbox'/>
                                            <label>Denim</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input type='checkbox'/>
                                            <label>Synthetic Leather</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input type='checkbox'/>
                                            <label>Fabric Blend</label>
                                        </div>
                                    </div>
                                    <div className={styles.specificationsColumn}>
                                        <div className={styles.specification}>
                                            <input type='checkbox'/>
                                            <label>Canvas</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input type='checkbox'/>
                                            <label>Polyester</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input type='checkbox'/>
                                            <label>Suede</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input type='checkbox'/>
                                            <label>Vinyl</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input type='checkbox'/>
                                            <label>Other</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.chooseColorBlock}>
                                <span className={styles.chooseColorBlockSubtitle}>Select the Colour of your product</span>
                                <div className={styles.chooseColorItems}>
                                    <div className={`${styles.chooseColorItem_purple} ${styles.chooseColorItem}`} />
                                    <div className={`${styles.chooseColorItem_green} ${styles.chooseColorItem}`} />
                                    <div className={`${styles.chooseColorItem_black} ${styles.chooseColorItem}`} />
                                    <div className={`${styles.chooseColorItem_blue} ${styles.chooseColorItem}`} />
                                    <div className={`${styles.chooseColorItem_red} ${styles.chooseColorItem}`} />
                                    <div className={`${styles.chooseColorItem_addNew}`}>+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={styles.formActions}>
                    <button onClick={() => setStage(stage - 1)} className={styles.formActionButton}>Back</button>
                    <button onClick={() => setStage(3)} className={styles.formActionButtonBlue}>Next</button>
                    <button onClick={() => setStage(0)} className={styles.closeButton}>&times;</button>
                </div>
            </ModalWindow>
        )
    }

    if(stage == 3){
        return (
            <ModalWindow>
                <h1 className={styles.title}>Bags PRODUCT Form Specification</h1>
                <form className={styles.form}>
                    <div className={styles.formBlock}>
                        <span className={styles.categoryText}>Products Specification</span>
                        <div className={styles.content}>
                            <div className={styles.specificationsBlock}>
                                <span className={styles.contentSubtitle}>Select the Features of your product</span>
                                <div className={styles.specifications}>
                                    <div className={styles.specificationsColumn}>
                                        <div className={styles.specification}>
                                            <input key='AdjustableStrapsMaterial' type='checkbox'/>
                                            <label>Adjustable Straps</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input key='PocketsMaterial' type='checkbox'/>
                                            <label>Inner Pockets</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input key='MultipleCompartmentsMaterial' type='checkbox'/>
                                            <label>Multiple Compartments</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input key='LaptopCompartmentMaterial' type='checkbox'/>
                                            <label>Laptop Compartment</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input key='Eco-FriendlyMaterials' type='checkbox'/>
                                            <label>Eco-Friendly Materials</label>
                                        </div>
                                    </div>
                                    <div className={styles.specificationsColumn}>
                                        <div className={styles.specification}>
                                            <input key='ZipperClosureMaterials' type='checkbox'/>
                                            <label>Zipper Closure</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input key='Water-ResistantMaterials' type='checkbox'/>
                                            <label>Water-Resistant</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input key='ExpandableMaterials' type='checkbox'/>
                                            <label>Expandable</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input key='RFIDBlockingMaterials' type='checkbox'/>
                                            <label>RFID Blocking</label>
                                        </div>
                                        <div className={styles.specification}>
                                            <input key='FabricBlendMaterials' type='checkbox'/>
                                            <label>Fabric Blend</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={styles.formActions}>
                    <button onClick={() => setStage(stage - 1)} className={styles.formActionButton}>Back</button>
                    <button onClick={() => setStage(4)} className={styles.formActionButtonBlue}>Next</button>
                    <button onClick={() => setStage(0)} className={styles.closeButton}>&times;</button>
                </div>
            </ModalWindow>
        )
    }

    if(stage == 4){
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
}
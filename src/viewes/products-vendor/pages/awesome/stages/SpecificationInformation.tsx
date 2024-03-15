import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewAwesomeLipCare.module.scss";
import {IVendorProductData} from "../../../../../utils/models/IVendorProductData.tsx";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";
import {useInput} from "@/hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";

type SpecificationInformationProps = {
    formData: IVendorProductData;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
    setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({setStage, setFormData, formData}: SpecificationInformationProps) => {
    const productsInStock = useInput('');
    const areaBox = useInput('');

    const handleCheckboxChange = (category: string, value: string) => {
        setFormData((prevFormData) => {
            const existingValues: string | string[] = prevFormData.attributes[category] || [];
            let updatedValues: string[];

            if (Array.isArray(existingValues)) {
                updatedValues = existingValues.includes(value)
                    ? existingValues.filter((item: string) => item !== value)
                    : [...existingValues, value];
            } else {
                updatedValues = [existingValues, value];
            }

            return {
                ...prevFormData,
                attributes: {
                    ...prevFormData.attributes,
                    [category]: updatedValues
                }
            };
        });
    };

    const setNextStageHandler = () => {
        if(!productsInStock.value || !areaBox.value){
            return toast.error('Please fill all fields');
        }

        setFormData({
            ...formData,
            attributes: {
                ...formData.attributes,
                productInStock: productsInStock.value,
                careInstructions: areaBox.value,
            },
        });

        setStage((prev: number) => prev + 1);
    }

    return (
        <div className='__container'>
            <div className={styles.container}>
                <RentingStage coloredStage={5}/>
                <h1 className={styles.title}>Awesome Lip Care</h1>
                <form className={styles.content}>
                    <h2 className={styles.subtitle}>Products Specification</h2>
                    <React.Fragment>
                  <span className={styles.tipTitle}>
                    Select the Flavor of your product
                  </span>
                        <div className={styles.checkboxInputsBox}>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('flavor', 'Original')} type="checkbox"/>
                                    <label>Original</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('flavor', 'Strawberry')} type="checkbox"/>
                                    <label>Strawberry</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('flavor', 'Citrus')} type="checkbox"/>
                                    <label>Citrus</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('flavor', 'Other')} type="checkbox"/>
                                    <label>Other</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('flavor', 'Cherry')} type="checkbox"/>
                                    <label>Cherry</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('flavor', 'Coconut')} type="checkbox"/>
                                    <label>Coconut</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('flavor', 'Watermelon')} type="checkbox"/>
                                    <label>Watermelon</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('flavor', 'Mint')} type="checkbox"/>
                                    <label>Mint</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('flavor', 'Vanilla')} type="checkbox"/>
                                    <label>Vanilla</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('flavor', 'Berry')} type="checkbox"/>
                                    <label>Berry</label>
                                </div>
                            </div>
                        </div>
                        <span className={styles.tipTitle}>
                    Select the Ingredients used in your product
                  </span>
                        <div className={styles.checkboxInputsBox}>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('ingredients', 'Beeswax')} type="checkbox"/>
                                    <label>Beeswax</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('ingredients', 'Jojoba Oil')} type="checkbox"/>
                                    <label>Jojoba Oil</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('ingredients', 'Lanolin')} type="checkbox"/>
                                    <label>Lanolin</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('ingredients', 'Other')} type="checkbox"/>
                                    <label>Other</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('ingredients', 'Shea Butter')} type="checkbox"/>
                                    <label>Shea Butter</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('ingredients', 'Vitamin E')} type="checkbox"/>
                                    <label>Vitamin E</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('ingredients', 'Cestor Seed Oil')} type="checkbox"/>
                                    <label>Castor Seed Oil</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('ingredients', 'Coconut Oil')} type="checkbox"/>
                                    <label>Coconut Oil</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('ingredients', 'Sunflower Seed Oil')}
                                           type="checkbox"/>
                                    <label>Sunflower Seed Oil</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('ingredients', 'Olive Oil')} type="checkbox"/>
                                    <label>Olive Oil</label>
                                </div>
                            </div>
                        </div>
                        <span className={styles.tipTitle}>
                    Select the Features of your product
                  </span>
                        <div className={styles.checkboxInputsBox}>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('features', 'SPF Protection')} type="checkbox"/>
                                    <label>SPF Protection</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('features', 'Tinted')} type="checkbox"/>
                                    <label>Tinted</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('features', 'Long-Lasting')} type="checkbox"/>
                                    <label>Long-Lasting</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('features', 'Hydrating Formula')} type="checkbox"/>
                                    <label>Hydrating Formula</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('features', 'Vegan')} type="checkbox"/>
                                    <label>Vegan</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('features', 'Exfoliating')} type="checkbox"/>
                                    <label>Exfoliating</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('features', 'Natural Ingredients')} type="checkbox"/>
                                    <label>Natural Ingredients</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('features', 'Dermatologist-Tested')} type="checkbox"/>
                                    <label>Dermatologist-Tested</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input onChange={() => handleCheckboxChange('features', 'Other')} type="checkbox"/>
                                    <label>Other</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <label>How many product are in stock?</label>
                            <input
                              onChange={productsInStock.onChange}
                              value={productsInStock.value}
                              type="number"
                              placeholder="100"
                            />
                        </div>
                        <div className={styles.areaBox}>
                            <label>Care Instructions</label>
                            <textarea
                              onChange={areaBox.onChange}
                              value={areaBox.value}
                              placeholder="Provide care and maintenance instructions for the bag"
                            />
                        </div>
                    </React.Fragment>
                </form>
                <div className={styles.actionButtons}>
                    <div className={styles.closeButton} onClick={() => setStage((prev: number) => prev - 1)}>Back</div>
                    <div className={styles.nextButton} onClick={setNextStageHandler}>Next</div>
                </div>
            </div>
        </div>)
}
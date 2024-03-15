import React, {Dispatch, SetStateAction} from 'react';
import styles from "@/viewes/products-vendor/pages/facial/NewFacialCare.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";
import {useInput} from "@/hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";

type SpecificationInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({formData, setFormData, setStage}: SpecificationInformationProps) => {
  const productInStock = useInput('');
  const productToSellIs = useInput('');
  const productIsCrueltyFree = useInput('');
  const productIsParabenFree = useInput('');

  const setNextStageHandler = () => {
    if(!productInStock.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        productInStock: productInStock.value,
        productToSellIs: productToSellIs.value,
        productIsCrueltyFree: productIsCrueltyFree.value,
        productIsParabenFree: productIsParabenFree.value,
      },
    });

    setStage((prev: number) => prev + 1);
  }

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

  return (
    <div className='__container'>
    <div className={styles.container}>
      <RentingStage coloredStage={3}/>
      <h1 className={styles.title}>Facial Care</h1>
      <form className={styles.content}>
        <h2 className={styles.subtitle}>Product Specification</h2>
        <React.Fragment>
          <div className={styles.inputBox}>
            <label>How many product are in stock?</label>
            <input onChange={productInStock.onChange} value={productInStock.value} type="number" placeholder="100"/>
          </div>
          <div className={styles.inputsRadio}>
            <span>The product you want to sell is ?</span>
            <div className={styles.radioInputs}>
              <div className={styles.inputRadio}>
                <input onChange={productToSellIs.onChange} value='Branded' type="radio"/>
                <label>Branded</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={productToSellIs.onChange} value='Local' type="radio"/>
                <label>Local</label>
              </div>
            </div>
          </div>
          <span className={styles.tipTitle}>Select the appropriate skin type for which the product is suitable</span>
          <div className={styles.checkboxInputColumn}>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('appropriateSkin', 'Normal')} type="checkbox"/>
              <label>Normal</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('appropriateSkin', 'Oily')} type="checkbox"/>
              <label>Oily</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('appropriateSkin', 'Dry')} type="checkbox"/>
              <label>Dry</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('appropriateSkin', 'Combination')} type="checkbox"/>
              <label>Combination</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('appropriateSkin', 'Sensitive')} type="checkbox"/>
              <label>Sensitive</label>
            </div>
          </div>
          <span className={styles.tipTitle}>Select the category of the facial care product</span>
          <div className={styles.checkboxInputsBox}>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('categoryProduct', 'Cleanser')} type="checkbox"/>
                <label>Cleanser</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('categoryProduct', 'Serum')} type="checkbox"/>
                <label>Serum</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('categoryProduct', 'Mask')} type="checkbox"/>
                <label>Mask</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('categoryProduct', 'Toner')} type="checkbox"/>
                <label>Toner</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('categoryProduct', 'Sunscreen')} type="checkbox"/>
                <label>Sunscreen</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('categoryProduct', 'Eye Cream')} type="checkbox"/>
                <label>Eye Cream</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('categoryProduct', 'Moisturizer')} type="checkbox"/>
                <label>Moisturizer</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('categoryProduct', 'Mask')} type="checkbox"/>
                <label>Mask</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('categoryProduct', 'Other')} type="checkbox"/>
                <label>Other</label>
              </div>
            </div>
          </div>
          <div className={styles.inputsRadio}>
          <span>
            Paraben-Free: [Check if the product is paraben-free]
          </span>
            <div className={styles.radioInputs}>
              <div className={styles.inputRadio}>
                <input onChange={productIsParabenFree.onChange} value='Yes' type="radio"/>
                <label>Yes</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={productIsParabenFree.onChange} value='Yes' type="radio"/>
                <label>No</label>
              </div>
            </div>
          </div>
          <div className={styles.inputsRadio}>
            <span>
              Cruelty-Free: [Check if the product is cruelty-free]
            </span>
            <div className={styles.radioInputs}>
              <div className={styles.inputRadio}>
                <input onChange={productIsCrueltyFree.onChange} value='Yes' type="radio"/>
                <label>Yes</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={productIsCrueltyFree.onChange} value='No' type="radio"/>
                <label>No</label>
              </div>
            </div>
          </div>
        </React.Fragment>
      </form>
      <div className={styles.actionButtons}>
        <div className={styles.closeButton} onClick={() => setStage((prev: number) => prev - 1)}>Back</div>
        <div className={styles.nextButton} onClick={setNextStageHandler}>Next</div>
      </div>
    </div>
  </div>
  )
}
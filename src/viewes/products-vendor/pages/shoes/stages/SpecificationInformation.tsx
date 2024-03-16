import React, {Dispatch, SetStateAction} from 'react';
import styles from "@/viewes/products-vendor/pages/shoes/NewShoes.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";
import {useInput} from "@/hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";
import {ChoosingColorBlock} from "@/components/choosing-color-block/ChoosingColorBlock.tsx";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";

type SpecificationInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({setStage, formData, setFormData}: SpecificationInformationProps) => {
  const productInStock = useInput('');
  const weight = useInput('');
  const materialOfTheShoeSoles = useInput('');

  const setNextStageHandler = () => {
    if(!productInStock.value || !weight.value || !materialOfTheShoeSoles.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        weight: weight.value,
        materialOfTheShoeSoles: materialOfTheShoeSoles.value
      },
      stock: Number(productInStock.value),
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
      <h1 className={styles.title}>Shoes</h1>
      <form className={styles.content}>
        <h2 className={styles.subtitle}>Product Specification</h2>
        <React.Fragment>
      <span className={styles.tipTitle}>
        Select the age group for which the Shoes item is suitable
      </span>
          <div className={styles.checkboxInputsBox}>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('ageGroup', 'Adult')} type="checkbox"/>
                <label>Adult</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('ageGroup', 'Infant')} type="checkbox"/>
                <label>Infant</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('ageGroup', 'Teen')} type="checkbox"/>
                <label>Teen</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('ageGroup', 'All Ages')} type="checkbox"/>
                <label>All Ages</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('ageGroup', 'Child')} type="checkbox"/>
                <label>Child</label>
              </div>
            </div>
          </div>
          <span className={styles.tipTitle}>Select Size of products</span>
          <div className={styles.checkboxInputColumn}>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('size', 'Medium')} type="checkbox"/>
              <label>Medium</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('ageGroup', 'Small')} type="checkbox"/>
              <label>Small</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('ageGroup', 'Large')} type="checkbox"/>
              <label>Large</label>
            </div>
          </div>
          <ChoosingColorBlock/>
          <span className={styles.tipTitle}>
        Select the type of closure for the shoes
      </span>
          <div className={styles.checkboxInputsBox}>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Lace-Up')} type="checkbox"/>
                <label>Lace-Up</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Zipper')} type="checkbox"/>
                <label>Zipper</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Velcro')} type="checkbox"/>
                <label>Velcro</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Buckle')} type="checkbox"/>
                <label>Buckle</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Slip-on')} type="checkbox"/>
                <label>Slip-On</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Other')} type="checkbox"/>
                <label>Other</label>
              </div>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Write the weight of the shoes</label>
            <input onChange={weight.onChange} value={weight.value} type="text" placeholder="0.5 kg"/>
          </div>
          <div className={styles.inputBox}>
            <label>Specify the material of the shoe soles</label>
            <input onChange={materialOfTheShoeSoles.onChange} value={materialOfTheShoeSoles.value} type="text"/>
          </div>
          <div className={styles.inputBox}>
            <label>How many product are in stock?</label>
            <input onChange={productInStock.onChange} value={productInStock.value} type="number" placeholder="100"/>
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
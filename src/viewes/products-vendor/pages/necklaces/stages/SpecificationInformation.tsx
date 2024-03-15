import React, {Dispatch, SetStateAction} from 'react';
import styles from "@/viewes/products-vendor/pages/necklaces/NewNecklaces.module.scss";
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
  const productMaterial = useInput('');

  const setNextStageHandler = () => {
    if(!productInStock.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        productInStock: productInStock.value,
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
      <h1 className={styles.title}>Necklaces</h1>
      <form className={styles.content}>
        <h2 className={styles.subtitle}>Products Specification</h2>
        <React.Fragment>
          <span className={styles.tipTitle}>
            Material
          </span>
          <textarea onChange={productMaterial.onChange} value={productMaterial.value} placeholder='Write about the primary material used for the necklace'/>
          <span className={styles.tipTitle}>
            Select the age group for which the clothing item is suitable
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
              <input onChange={() => handleCheckboxChange('size', 'Small')} type="checkbox"/>
              <label>Small</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('size', 'Large')} type="checkbox"/>
              <label>Large</label>
            </div>
          </div>
          <ChoosingColorBlock/>
          <span className={styles.tipTitle}>
        Select the primary material used for the clothing item
      </span>
          <div className={styles.checkboxInputsBox}>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Cotton')} type="checkbox"/>
                <label>Cotton</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Wool')} type="checkbox"/>
                <label>Wool</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Leather')} type="checkbox"/>
                <label>Leather</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Polyester')} type="checkbox"/>
                <label>Polyester</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Silk')} type="checkbox"/>
                <label>Silk</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Other')} type="checkbox"/>
                <label>Other</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Linen')} type="checkbox"/>
                <label>Linen</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Denim')} type="checkbox"/>
                <label>Denim</label>
              </div>
            </div>
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
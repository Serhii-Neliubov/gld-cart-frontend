import React, {Dispatch, SetStateAction} from 'react';
import styles from "@pages/products-vendor/pages/necklaces/NewNecklaces.module.scss";
import {IVendorProductData} from "@models/IVendorProductData.ts";
import {useInput} from "@hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";
import RentingStage from "@components/renting-stages/RentingStage.tsx";

type SpecificationInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({setStage, formData, setFormData}: SpecificationInformationProps) => {
  const productInStock = useInput('');
  const productMaterial = useInput('');

  const setNextStageHandler = () => {
    if(!productInStock.value || !productMaterial.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        productMaterial: productMaterial.value,
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
      <h1 className={styles.title}>Necklaces</h1>
      <form className={styles.content}>
        <h2 className={styles.subtitle}>Products Specification</h2>
        <React.Fragment>
          <span className={styles.tipTitle}>
            Material
          </span>
          <textarea onChange={productMaterial.onChange} value={productMaterial.value}
                    placeholder='Write about the primary material used for the necklace'/>
          <span className={styles.tipTitle}>
            Select Size of products
          </span>
          <div className={styles.checkboxInputsBox}>
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
          </div>
          <span className={styles.tipTitle}>Select the type of chain for the necklace</span>
          <div className={styles.checkboxInputsBox}>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfChain', 'Medium')} type="checkbox"/>
                <label>Cable Chain</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfChain', 'Small')} type="checkbox"/>
                <label>Box Chain</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfChain', 'Large')} type="checkbox"/>
                <label>Singapore Chain</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfChain', 'Rolo Chain')} type="checkbox"/>
                <label>Rolo Chain</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfChain', 'Snake Chain')} type="checkbox"/>
                <label>Snake Chain</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfChain', 'Curb Chain')} type="checkbox"/>
                <label>Curb Chain</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfChain', 'Figaro Chain')} type="checkbox"/>
                <label>Figaro Chain</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfChain', 'Rope Chain')} type="checkbox"/>
                <label>Rope Chain</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfChain', 'Other')} type="checkbox"/>
                <label>Other</label>
              </div>
            </div>
          </div>
          <span className={styles.tipTitle}>
            Select the type of closure for the necklace
          </span>
          <div className={styles.checkboxInputsBox}>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeofClosure', 'Lobster Clasp')} type="checkbox"/>
                <label>Lobster Clasp</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeofClosure', 'Magnetic Clasp')} type="checkbox"/>
                <label>Magnetic Clasp</label>
              </div>
              <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('typeofClosure', 'Barrel Clasp')} type="checkbox"/>
                <label>Barrel Clasp</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Spring Ring Clasp')} type="checkbox"/>
                <label>Spring Ring Clasp</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Slide Clasp')} type="checkbox"/>
                <label>Slide Clasp</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Other')} type="checkbox"/>
                <label>Other</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Toggle Clasp')} type="checkbox"/>
                <label>Toggle Clasp</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('material', 'Hook Clasp')} type="checkbox"/>
                <label>Hook Clasp</label>
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
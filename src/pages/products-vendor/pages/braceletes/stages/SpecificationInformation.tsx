import React, {Dispatch, SetStateAction} from "react";
import styles from "@pages/products-vendor/pages/braceletes/NewBracelets.module.scss";
import {useInput} from "@hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";
import RentingStage from "@components/renting-stages/RentingStage.tsx";
import {IVendorProductData} from "@models/IVendorProductData.ts";

type SpecificationInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({setStage, setFormData, formData}: SpecificationInformationProps) => {
  const productsInStock = useInput('');
  const material = useInput('');

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
    if(productsInStock.value === '' || material.value === ''){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        material: material.value,
      },
      stock: Number(productsInStock.value),
    });

    setStage((prev: number) => prev + 1);
  }

  return (
    <div className='__container'>
      <div className={styles.container}>
        <RentingStage coloredStage={3}/>
        <h1 className={styles.title}>Bracelets</h1>
        <form className={styles.content}>
          <h2 className={styles.subtitle}>Product Specification</h2>
          <React.Fragment>
            <div className={styles.areaBox}>
              <label>Material</label>
              <textarea onChange={material.onChange} value={material.value} placeholder="Write about the primary material used for the bracelets"/>
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
            <span className={styles.tipTitle}>
                  Select the Metal type of bracelets
            </span>
            <div className={styles.checkboxInputsBox}>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('metalType', 'Sterling Silver')} type="checkbox"/>
                  <label>Sterling Silver</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('metalType', 'White Gold')} type="checkbox"/>
                  <label>White Gold</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('metalType', 'Stainless Steel')} type="checkbox"/>
                  <label>Stainless Steel</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('metalType', 'Gold')} type="checkbox"/>
                  <label>Gold</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('metalType', 'Platinum')} type="checkbox"/>
                  <label>Platinum</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('metalType', 'Copper')} type="checkbox"/>
                  <label>Copper</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('metalType', 'Rose Gold')} type="checkbox"/>
                  <label>Rose Gold</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('metalType', 'Titanium')} type="checkbox"/>
                  <label>Titanium</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('metalType', 'Other')} type="checkbox"/>
                  <label>Other</label>
                </div>
              </div>
            </div>
            <span className={styles.tipTitle}>
                  Select the type of closure for the Bracelets
            </span>
            <div className={styles.checkboxInputsBox}>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('closureType', 'Lobster Clasp')} type="checkbox"/>
                  <label>Lobster Clasp</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('closureType', 'Magnetic Clasp')} type="checkbox"/>
                  <label>Magnetic Clasp</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('closureType', 'Buckle')} type="checkbox"/>
                  <label>Buckle</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('closureType', 'Toggle Clasp')} type="checkbox"/>
                  <label>Toggle Clasp</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('closureType', 'Box Clasp')} type="checkbox"/>
                  <label>Box Clasp</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('closureType', 'Other')} type="checkbox"/>
                  <label>Other</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('closureType', 'Spring Ring Clasp')} type="checkbox"/>
                  <label>Spring Ring Clasp</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('closureType', 'Slide Clasp')} type="checkbox"/>
                  <label>Slide Clasp</label>
                </div>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label>How many product are in stock?</label>
              <input onChange={productsInStock.onChange} value={productsInStock.value} type="number" placeholder="200"/>
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
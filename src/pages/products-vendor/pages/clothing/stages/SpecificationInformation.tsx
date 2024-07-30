import React, {Dispatch, SetStateAction} from "react";
import styles from "@/pages/products-vendor/pages/clothing/NewClothing.module.scss";
import {IVendorProductData} from "@/models/IVendorProductData.ts";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";
import toast from "react-hot-toast";
import {ChoosingColorBlock} from "@/components/choosing-color-block/ChoosingColorBlock.tsx";
import {useInput} from "@/hooks/useInput/useInput.tsx";

type SpecificationInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({formData, setFormData, setStage}: SpecificationInformationProps) => {
  const productInStock = useInput('');

  const setNextStageHandler = () => {
    if(!productInStock.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
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
          [category]: updatedValues,
        }
      };
    });
  };

  return (
    <div className='__container'>
      <div className={styles.container}>
        <RentingStage coloredStage={3}/>
        <h1 className={styles.title}>Clothing</h1>
        <form className={styles.content}>
          <h2 className={styles.subtitle}>Product Specification</h2>
          <React.Fragment>
        <span className={styles.tipTitle}>
          Select the type of chain for the necklace
        </span>
            <div className={styles.checkboxInputsBox}>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfChain', 'Adult')} type="checkbox"/>
                  <label>Adult</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfChain', 'Infant')} type="checkbox"/>
                  <label>Infant</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfChain', 'Teen')} type="checkbox"/>
                  <label>Teen</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfChain', 'All ages')} type="checkbox"/>
                  <label>All Ages</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfChain', 'Child')} type="checkbox"/>
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
            <ChoosingColorBlock />
            <span className={styles.tipTitle}>
                  Select the type of closure for the necklace
            </span>
            <div className={styles.checkboxInputsBox}>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Cotton')} type="checkbox"/>
                  <label>Cotton</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Wool')} type="checkbox"/>
                  <label>Wool</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Leather')} type="checkbox"/>
                  <label>Leather</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Polyester')} type="checkbox"/>
                  <label>Polyester</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Silk')} type="checkbox"/>
                  <label>Silk</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Other')} type="checkbox"/>
                  <label>Other</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Linen')} type="checkbox"/>
                  <label>Linen</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('typeOfClosure', 'Denim')} type="checkbox"/>
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
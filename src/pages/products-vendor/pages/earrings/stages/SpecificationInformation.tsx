import React, {Dispatch, SetStateAction} from 'react';
import styles from "@/pages/products-vendor/pages/earrings/NewEarrings.module.scss";
import {IVendorProductData} from "@/models/IVendorProductData.ts";
import {ChoosingColorBlock} from "@/components/choosing-color-block/ChoosingColorBlock.tsx";
import {useInput} from "@/hooks/useInput.tsx";
import toast from "react-hot-toast";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";

type SpecificationInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({formData, setFormData, setStage}: SpecificationInformationProps) => {
  const productInStock = useInput('');
  const material = useInput('');

  const setNextStageHandler = () => {
    if(!productInStock.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        material: material.value,
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
      <h1 className={styles.title}>Earrings</h1>
      <form className={styles.content}>
        <h2 className={styles.subtitle}>Product Specification</h2>
        <React.Fragment>
          <div className={styles.areaBox}>
            <label>Material</label>
            <textarea onChange={material.onChange} value={material.value} placeholder="Write about the primary material used for the bracelets"/>
          </div>
          <ChoosingColorBlock/>
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
          <span className={styles.tipTitle}>Select the type of Earrings</span>
          <div className={styles.checkboxInputsBox}>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfEarrings', 'Stud Earrings')} type="checkbox"/>
                <label>Stud Earrings</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfEarrings', 'Chandelier Earrings')} type="checkbox"/>
                <label>Chandelier Earrings</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfEarrings', 'Ear Climbers')} type="checkbox"/>
                <label>Ear Climbers</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfEarrings', 'Hoop Earrings')} type="checkbox"/>
                <label>Hoop Earrings</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfEarrings', 'Drop Earrings')} type="checkbox"/>
                <label>Drop Earrings</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfEarrings', 'Ear Cuffs')} type="checkbox"/>
                <label>Ear Cuffs</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfEarrings', 'Dangle Earrings')} type="checkbox"/>
                <label>Dangle Earrings</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfEarrings', 'Stud Earrings with Jacket')}
                       type="checkbox"/>
                <label>Stud Earrings with Jacket</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfEarrings', 'Other')} type="checkbox"/>
                <label>Other</label>
              </div>
            </div>
          </div>
          <span className={styles.tipTitle}>Select the type of closure for the Earrings</span>
          <div className={styles.checkboxInputsBox}>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Butterfly Back')} type="checkbox"/>
                <label>Butterfly Back</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Fishhook')} type="checkbox"/>
                <label>Fishhook</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Ear Wire')} type="checkbox"/>
                <label>Ear Wire</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Screw Back')} type="checkbox"/>
                <label>Screw Back</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Latch Back')} type="checkbox"/>
                <label>Latch Back</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Other')} type="checkbox"/>
                <label>Other</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Leverback')} type="checkbox"/>
                <label>Leverback</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('typeOfClosure', 'Clip-On')} type="checkbox"/>
                <label>Clip-On</label>
              </div>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>How many product are in stock?</label>
            <input onChange={productInStock.onChange} value={productInStock.value} type="number" placeholder="200"/>
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
import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewBeautyOfSkin.module.scss";
import {IVendorProductData} from "../../../../../utils/models/IVendorProductData.tsx";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";
import {useInput} from "@/hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";

type BasicInformationProps = {
    formData: IVendorProductData;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
    setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({setStage, setFormData, formData}: BasicInformationProps) => {

    const productsInStock = useInput('');
    const productToSellIs = useInput('');
    const parabenFree = useInput('');
    const cruentlyFree = useInput('');

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
    if(!productsInStock.value || !productToSellIs.value || !parabenFree.value || !cruentlyFree.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        productInStock: productsInStock.value,
        parabenFree: parabenFree.value,
        cruentlyFree: cruentlyFree.value,
      },
    });

    setStage((prev: number) => prev + 1);
  }

    return (
      <div className='__container'>
        <div className={styles.container}>
          <RentingStage coloredStage={3}/>
          <h1 className={styles.title}>Beauty of skin</h1>
          <form className={styles.content}>
            <h2 className={styles.subtitle}>Basic information</h2>
            <React.Fragment>
              <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input onChange={productsInStock.onChange} value={productsInStock.value} type="number" placeholder="100"/>
              </div>
              <div className={styles.inputsRadio}>
                <span>The product you want to sell is ?</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input value='Branded' name='brand' onChange={productToSellIs.onChange} type="radio"/>
                    <label>Branded</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input value='Local' name='brand' onChange={productToSellIs.onChange} type="radio"/>
                    <label>Local</label>
                  </div>
                </div>
              </div>
              <div className={styles.subtitle}>
                <span>
                  Select the appropriate skin type for which the product is
                  suitable
                </span>
              </div>
              <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                  <div className={styles.checkboxInputs}>
                    <input onChange={() => handleCheckboxChange('appropriateSkinType', 'Normal')} type="checkbox"/>
                    <label>Normal</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input onChange={() => handleCheckboxChange('appropriateSkinType', 'Oily')} type="checkbox"/>
                    <label>Oily</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input onChange={() => handleCheckboxChange('appropriateSkinType', 'Dry')} type="checkbox"/>
                    <label>Dry</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input onChange={() => handleCheckboxChange('appropriateSkinType', 'Combination')} type="checkbox"/>
                    <label>Combination</label>
                  </div>
                  <div className={styles.checkboxInputs}>
                    <input onChange={() => handleCheckboxChange('appropriateSkinType', 'Sensitive')} type="checkbox"/>
                    <label>Sensitive</label>
                  </div>
                </div>
              </div>
              <div className={styles.inputsRadio}>
                    <span>
                      Paraben-Free: [Check if the product is paraben-free]
                    </span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input onChange={parabenFree.onChange} value='Yes' name='parabeenFree' type="radio"/>
                    <label>Yes</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input onChange={parabenFree.onChange} value='No' name='parabeenFree' type="radio"/>
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
                    <input onChange={cruentlyFree.onChange} value='Yes' name='cruentlyFree' type="radio"/>
                    <label>Yes</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input onChange={cruentlyFree.onChange} value='No' name='cruentlyFree' type="radio"/>
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
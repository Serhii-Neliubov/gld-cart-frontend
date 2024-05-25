import React, {Dispatch, SetStateAction} from 'react';
import styles from "@pages/products-vendor/pages/smartWatch/NewSmartWatch.module.scss";
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
  const compatibility = useInput('');
  const cameraControl = useInput('');
  const productInStock = useInput('');

  const setNextStageHandler = () => {
    if(!compatibility.value || !cameraControl.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        compatibility: compatibility.value,
        cameraControl: cameraControl.value,
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
      <h1 className={styles.title}>Facial Care</h1>
      <form className={styles.content}>
        <h2 className={styles.subtitle}>Basic information</h2>
        <React.Fragment>
          <div className={styles.inputsRadio}>
            <span>Compatibility of Smartwatch</span>
            <div className={styles.radioInputs}>
              <div className={styles.inputRadio}>
                <input onChange={compatibility.onChange} value='Android' name='compatibility' type="radio"/>
                <label>Android</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={compatibility.onChange} value='iOS' name='compatibility' type="radio"/>
                <label>iOS</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={compatibility.onChange} value='Other' name='compatibility' type="radio"/>
                <label>Other</label>
              </div>
            </div>
          </div>
          <div className={styles.inputsRadio}>
            <span>Camera Control of Smartwatch</span>
            <div className={styles.radioInputs}>
              <div className={styles.inputRadio}>
                <input onChange={cameraControl.onChange} value='Yes' name='cameraControl' type="radio"/>
                <label>Yes</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={cameraControl.onChange} value='No' name='cameraControl' type="radio"/>
                <label>No</label>
              </div>
            </div>
          </div>
          <span className={styles.tipTitle}>
        Connectivity of Smartwatch
      </span>
          <div className={styles.checkboxInputColumn}>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('connectivity', 'Bluetooth')} type="checkbox"/>
              <label>Bluetooth</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('connectivity', 'Wi-Fi')} type="checkbox"/>
              <label>Wi-Fi</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('connectivity', 'GPS')} type="checkbox"/>
              <label>GPS</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={() => handleCheckboxChange('connectivity', 'NFC')} type="checkbox"/>
              <label>NFC</label>
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
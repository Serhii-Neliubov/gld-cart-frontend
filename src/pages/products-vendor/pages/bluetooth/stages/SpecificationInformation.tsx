import React, {Dispatch, SetStateAction} from 'react';
import styles from "@/pages/products-vendor/pages/bluetooth/NewBluetooth.module.scss";
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

export const SpecificationInformation = ({setStage, setFormData, formData}: SpecificationInformationProps) => {
  const productsInStock = useInput('');
  const waterResistance = useInput('');
  const noiseCancellation = useInput('');

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


  const setNextStageHandler = () => {
    if(productsInStock.value === '' || formData.attributes.bluetoothType === '' || formData.attributes.chargingMethod === '' || formData.attributes.compatibility === ''){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        waterResistance: waterResistance.value,
        noiseCancellation: noiseCancellation.value,
      },
      stock: Number(productsInStock.value),
    });

    setStage((prev: number) => prev + 1);
  }

  return (
    <div className='__container'>
      <div className={styles.container}>
        <RentingStage coloredStage={3}/>
        <h1 className={styles.title}>Bluetooth</h1>
        <form className={styles.content}>
          <h2 className={styles.subtitle}>Product Specification</h2>
          <React.Fragment>
        <span className={styles.tipTitle}>
          Select the Type of Bluetooth Product
        </span>
            <div className={styles.checkboxInputsBox}>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('bluetoothType', 'Bluetooth Headphones')} type="checkbox"/>
                  <label>Bluetooth Headphones</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('bluetoothType', 'Bluetooth Mouse')} type="checkbox"/>
                  <label>Bluetooth Mouse</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('bluetoothType', 'Bluetooth Smartwatch')} type="checkbox"/>
                  <label>Bluetooth Smartwatch</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('bluetoothType', 'Bluetooth Speaker')} type="checkbox"/>
                  <label>Bluetooth Speaker</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('bluetoothType', 'Bluetooth Keyboard')} type="checkbox"/>
                  <label>Bluetooth Keyboard</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('bluetoothType', 'Bluetooth Other')} type="checkbox"/>
                  <label>Other</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('bluetoothType', 'Bluetooth Earbuds')} type="checkbox"/>
                  <label>Bluetooth Earbuds</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('bluetoothType', 'Bluetooth Fitness Tracker')} type="checkbox"/>
                  <label>Bluetooth Fitness Tracker</label>
                </div>
              </div>
            </div>
            <ChoosingColorBlock />
            <span className={styles.tipTitle}>Select Charging Method</span>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('chargingMethod', 'USB-C')} type="checkbox"/>
                <label>USB-C</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('chargingMethod', 'Wireless')} type="checkbox"/>
                <label>Wireless</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('chargingMethod', 'Micro USB')} type="checkbox"/>
                <label>Micro USB</label>
              </div>
            </div>
            <span className={styles.tipTitle}>
              Select the Compatibility of Product
            </span>
            <div className={styles.checkboxInputsBox}>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('compatibility', 'iOS')} type="checkbox"/>
                  <label>iOS</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('compatibility', 'Mac')} type="checkbox"/>
                  <label>Mac</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('compatibility', 'Android')} type="checkbox"/>
                  <label>Android</label>
                </div>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('compatibility', 'Other')} type="checkbox"/>
                  <label>Other</label>
                </div>
              </div>
              <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                  <input onChange={() => handleCheckboxChange('compatibility', 'Windows')} type="checkbox"/>
                  <label>Windows</label>
                </div>
              </div>
            </div>
            <div className={styles.inputsRadio}>
              <span>The product you want to sell is Water Resistance</span>
              <div className={styles.radioInputs}>
                <div className={styles.inputRadio}>
                  <input onChange={waterResistance.onChange} value='Yes' name='waterResistance' type="radio"/>
                  <label>Yes</label>
                </div>
                <div className={styles.inputRadio}>
                  <input onChange={waterResistance.onChange} value='No' name='waterResistance' type="radio"/>
                  <label>No</label>
                </div>
              </div>
            </div>
            <div className={styles.inputsRadio}>
              <span>The product you want to sell is Noise-Cancellation</span>
              <div className={styles.radioInputs}>
                <div className={styles.inputRadio}>
                  <input onChange={noiseCancellation.onChange} value='Yes' name='noiseCancellation' type="radio"/>
                  <label>Yes</label>
                </div>
                <div className={styles.inputRadio}>
                  <input onChange={noiseCancellation.onChange} value='No' name='noiseCancellation' type="radio"/>
                  <label>No</label>
                </div>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label>How many product are in stock?</label>
              <input onChange={productsInStock.onChange} value={productsInStock.value} type="number" placeholder="100"/>
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
import React, {Dispatch, SetStateAction} from 'react';
import styles from "@/viewes/products-vendor/pages/mobileTablets/NewMobileTablets.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";
import {useInput} from "@/hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";

type SpecificationInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({setStage, formData, setFormData}: SpecificationInformationProps) => {
  const productInStock = useInput('');
  const operatingSystem = useInput('');
  const processor = useInput('');
  const memory = useInput('');
  const storage = useInput('');
  const screenDisplay = useInput('');
  const camera = useInput('');
  const batteryLife = useInput('');
  const connectivity = useInput('');

  const setNextStageHandler = () => {
    if(!productInStock.value || !operatingSystem.value || !processor.value || !memory.value || !storage.value || !screenDisplay.value || !camera.value || !batteryLife.value || !connectivity.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        productInStock: productInStock.value,
        operatingSystem: operatingSystem.value,
        processor: processor.value,
        memory: memory.value,
        storage: storage.value,
        screenDisplay: screenDisplay.value,
        camera: camera.value,
        batteryLife: batteryLife.value,
        connectivity: connectivity.value,
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
      <h1 className={styles.title}>Mobile Tablets</h1>
      <form className={styles.content}>
        <h2 className={styles.subtitle}>Products Specification</h2>
        <React.Fragment>
          <div className={styles.inputsBox}>
            <div className={styles.inputBox}>
              <label>Operating System</label>
              <input
                onChange={operatingSystem.onChange}
                value={operatingSystem.value}
                type="text"
                placeholder="Specify the operating system"
              />
            </div>
            <div className={styles.inputBox}>
              <label>Processor</label>
              <input
                onChange={processor.onChange}
                value={processor.value}
                type="text"
                placeholder="Provide details about the processor"
              />
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Memory (RAM)</label>
            <input onChange={memory.onChange} value={memory.value} type="text" placeholder="Specify the RAM capacity"/>
          </div>
          <div className={styles.inputsBox}>
            <div className={styles.inputBox}>
              <label>Storage</label>
              <input
                onChange={storage.onChange}
                value={storage.value}
                type="text"
                placeholder="Indicate the storage capacity, e.g., SSD/HDD size"
              />
            </div>
            <div className={styles.inputBox}>
              <label>Screen/Display</label>
              <input
                onChange={screenDisplay.onChange}
                value={screenDisplay.value}
                type="text"
                placeholder="Provide information about the screen size, resolution"
              />
            </div>
          </div>
          <div className={styles.inputsBox}>
            <div className={styles.inputBox}>
              <label>Camera</label>
              <input
                onChange={camera.onChange}
                value={camera.value}
                type="text"
                placeholder="Specify camera features, including megapixels"
              />
            </div>
            <div className={styles.inputBox}>
              <label>Battery Life</label>
              <input
                onChange={batteryLife.onChange}
                value={batteryLife.value}
                type="text"
                placeholder="Estimate battery life in hours"
              />
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Connectivity</label>
            <input
              onChange={connectivity.onChange}
              value={connectivity.value}
              type="text"
              placeholder="connectivity options such as Wi-Fi, Bluetooth, USB ports, etc."
            />
          </div>
          <span className={styles.tipTitle}>
                Select the Additional Features of your product
              </span>
          <div className={styles.checkboxInputsBox}>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('additionalFeatures', 'Fingerprint Sensor')} type="checkbox"/>
                <label>Fingerprint Sensor</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('additionalFeatures', 'Expandable Storage')} type="checkbox"/>
                <label>Expandable Storage</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('additionalFeatures', 'Dust Resistance')} type="checkbox"/>
                <label>Dust Resistance</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('additionalFeatures', 'Other')} type="checkbox"/>
                <label>Other</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('additionalFeatures', 'Face Recognition')} type="checkbox"/>
                <label>Face Recognition</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('additionalFeatures', 'Multi-Window Mode')} type="checkbox"/>
                <label>Multi-Window Mode</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('additionalFeatures', 'Keyboard Compatibility')}
                       type="checkbox"/>
                <label>Keyboard Compatibility</label>
              </div>
            </div>
            <div className={styles.checkboxInputColumn}>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('additionalFeatures', 'Stylus Support')} type="checkbox"/>
                <label>Stylus Support</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('additionalFeatures', 'Water Resistance')} type="checkbox"/>
                <label>Water Resistance</label>
              </div>
              <div className={styles.checkboxInputs}>
                <input onChange={() => handleCheckboxChange('additionalFeatures', 'Case/Accessory Options')}
                       type="checkbox"/>
                <label>Case/Accessory Options</label>
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
  );
}
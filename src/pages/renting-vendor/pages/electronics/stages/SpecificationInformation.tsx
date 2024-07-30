import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewElectronics.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.tsx";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";
import toast from "react-hot-toast";
import { useInput } from '@/hooks/useInput.tsx';

type SpecificationInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({setStage, formData, setFormData}: SpecificationInformationProps) => {
  const model = useInput('');
  const condition = useInput('');
  const size = useInput('');
  const operatingSystem = useInput('');
  const processor = useInput('');
  const memory = useInput('');
  const storage = useInput('');
  const display = useInput('');
  const camera = useInput('');
  const batteryLife = useInput('');
  const connectivity = useInput('');
  const additionalFeatures = useInput('');

  const setNextStageHandler = () => {
    if(!model.value || !condition.value || !size.value || !operatingSystem.value || !processor.value || !memory.value || !storage.value || !display.value || !camera.value || !batteryLife.value || !connectivity.value || !additionalFeatures.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        model: model.value,
        condition: condition.value,
        size: size.value,
        operatingSystem: operatingSystem.value,
        processor: processor.value,
        memory: memory.value,
        storage: storage.value,
        display: display.value,
        camera: camera.value,
        batteryLife: batteryLife.value,
        connectivity: connectivity.value,
        additionalFeatures: additionalFeatures.value,
      },
    });

    setStage((prev: number) => prev + 1);
  }

  return (
      <div className='__container'>
        <div className={styles.container}>
          <RentingStage coloredStage={3}/>
          <h1 className={styles.title}>Electronics Renting</h1>
          <form className={styles.content}>
            <h2 className={styles.subtitle}>Basic information</h2>
            <React.Fragment>
              <div className={styles.inputBox}>
                <label>Model</label>
                <input onChange={model.onChange} value={model.value} placeholder="Item model"/>
              </div>
              <div className={styles.inputsRadio}>
                <span>Item Condition</span>
                <div>
                  <div className={styles.inputRadio}>
                    <input onChange={condition.onChange} value='Brand New' name='condition' type="radio"/>
                    <label>Brand New</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input onChange={condition.onChange} value='Used' name='condition' type="radio"/>
                    <label>Used</label>
                  </div>
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Size</label>
                <input onChange={size.onChange} value={size.value} placeholder="Provide measurements if applicable"/>
              </div>
              <div className={styles.subtitle}>
                <span>Fill this for Smartphones, Laptops and Tablets</span>
              </div>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Operating System</label>
                  <input onChange={operatingSystem.onChange} value={operatingSystem.value} placeholder="Specify the operating system"/>
                </div>
                <div className={styles.inputBox}>
                  <label>Processor</label>
                  <input onChange={processor.onChange} value={processor.value} placeholder="Provide details about the processor e.g.,CPU model & speed"/>
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Memory (RAM)</label>
                <input onChange={memory.onChange} value={memory.value} placeholder="Specify the RAM capacity"/>
              </div>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Storage</label>
                  <input onChange={storage.onChange} value={storage.value} placeholder="Indicate the storage capacity, e.g., SSD/HDD size"/>
                </div>
                <div className={styles.inputBox}>
                  <label>Display/Screen</label>
                  <input onChange={display.onChange} value={display.value} placeholder="Provide information about the screen size, resolution"/>
                </div>
              </div>
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>Camera</label>
                  <input onChange={camera.onChange} value={camera.value} placeholder="Specify camera features, including megapixels"/>
                </div>
                <div className={styles.inputBox}>
                  <label>Battery Life</label>
                  <input onChange={batteryLife.onChange} value={batteryLife.value} placeholder="Estimate battery life in hours"/>
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Connectivity</label>
                <input onChange={connectivity.onChange} value={connectivity.value} placeholder="connectivity options such as Wi-Fi, Bluetooth, USB ports, etc."/>
              </div>
              <div className={styles.inputBox}>
                <label>Additional Features</label>
                <input onChange={additionalFeatures.onChange} value={additionalFeatures.value} placeholder="Mention any unique features or functionalities"/>
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
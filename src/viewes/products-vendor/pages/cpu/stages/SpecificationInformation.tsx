import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from "@/viewes/products-vendor/pages/cpu/NewCpu.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.ts";
import {useInput} from "@/hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";

type SpecificationInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({formData, setFormData, setStage}: SpecificationInformationProps) => {
  const cpumodel = useInput('');
  const socketType = useInput('');
  const coreCount = useInput('');
  const clockSpeed = useInput('');
  const cache = useInput('');
  const tdp = useInput('');
  const architecture = useInput('');
  const compatibility = useInput('');

  const [productsInStock, setProductsInStock] = useState('');

  const integratedGraphics = useInput('');

  const setNextStageHandler = () => {
    if(!cpumodel.value || !socketType.value || !coreCount.value || !clockSpeed.value || !cache.value || !tdp.value || !architecture.value || !compatibility.value || !productsInStock || !integratedGraphics.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        productsInStock: productsInStock,
        cpumodel: cpumodel.value,
        socketType: socketType.value,
        coreCount: coreCount.value,
        clockSpeed: clockSpeed.value,
        cache: cache.value,
        tdp: tdp.value,
        architecture: architecture.value,
        compatibility: compatibility.value,
        integratedGraphics: integratedGraphics.value,
      },
    });

    setStage((prev: number) => prev + 1);
  }

  return (
    <div className='__container'>
      <div className={styles.container}>
      <RentingStage coloredStage={3}/>
      <h1 className={styles.title}>CPU</h1>
      <form className={styles.content}>
        <h2 className={styles.subtitle}>Product Specification</h2>
        <React.Fragment>
          <div className={styles.inputsBox}>
            <div className={styles.inputBox}>
              <label>CPU Model</label>
              <input onChange={cpumodel.onChange} value={cpumodel.value} placeholder="Specify the model or series of the CPU"/>
            </div>
            <div className={styles.inputBox}>
              <label>Socket Type</label>
              <input onChange={socketType.onChange} value={socketType.value} placeholder="Indicate the socket type for compatibility"/>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Core Count</label>
            <input onChange={coreCount.onChange} value={coreCount.value} placeholder="Enter the number of CPU cores"/>
          </div>
          <div className={styles.inputsBox}>
            <div className={styles.inputBox}>
              <label>Clock Speed</label>
              <input onChange={clockSpeed.onChange} value={clockSpeed.value} placeholder="Specify the base and boost clock speeds"/>
            </div>
            <div className={styles.inputBox}>
              <label>Cache</label>
              <input onChange={cache.onChange} value={cache.value} placeholder="Specify the CPU cache size"/>
            </div>
          </div>
          <div className={styles.inputsBox}>
            <div className={styles.inputBox}>
              <label>TDP (Thermal Design Power)</label>
              <input onChange={tdp.onChange} value={tdp.value} placeholder="Enter the TDP rating of the CPU in watts"/>
            </div>
            <div className={styles.inputBox}>
              <label>Architecture</label>
              <input onChange={architecture.onChange} value={architecture.value} placeholder="Specify the CPU architecture (e.g., AMD Ryzen, Intel Core)"/>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Compatibility</label>
            <input onChange={compatibility.onChange} value={compatibility.value} placeholder="compatible motherboards or platforms if known"/>
          </div>
          <div className={styles.inputsRadio}>
            <span>Integrated Graphics</span>
            <div className={styles.radioInputs}>
              <div className={styles.inputRadio}>
                <input onChange={integratedGraphics.onChange} value='Yes' name='productToSellfor' type="radio"/>
                <label>Yes</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={integratedGraphics.onChange} value='No' name='productToSellfor' type="radio"/>
                <label>No</label>
              </div>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>How many product are in stock?</label>
            <input onChange={event => setProductsInStock(event.target.value)} value={productsInStock} type="number" placeholder="100"/>
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
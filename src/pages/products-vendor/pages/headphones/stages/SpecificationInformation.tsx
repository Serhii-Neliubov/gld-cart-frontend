import React, {Dispatch, SetStateAction} from 'react';
import styles from "@/pages/products-vendor/pages/headphones/NewHeadphones.module.scss";
import {IVendorProductData} from "@/models/IVendorProductData.ts";
import {useInput} from "@/hooks/useInput.tsx";
import toast from "react-hot-toast";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";

type SpecificationInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({setStage, formData, setFormData}: SpecificationInformationProps) => {
  const productInStock = useInput('');
  const frequency = useInput('');
  const chargingMethod = useInput('');
  const headphoneType = useInput('');
  const headphoneColor = useInput('');

  const setNextStageHandler = () => {
    if(!productInStock.value || !frequency.value || !chargingMethod.value || !headphoneType.value || !headphoneColor.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        frequency: frequency.value,
        chargingMethod: chargingMethod.value,
        headphoneType: headphoneType.value,
        headphoneColor: headphoneColor.value,
      },
      stock: Number(productInStock.value),
    });

    setStage((prev: number) => prev + 1);
  }

  return (
    <div className='__container'>
    <div className={styles.container}>
      <RentingStage coloredStage={3}/>
      <h1 className={styles.title}>Headphones</h1>
      <form className={styles.content}>
        <h2 className={styles.subtitle}>Product Specification</h2>
        <React.Fragment>
          <div className={styles.inputsRadio}>
        <span>
          The range of frequencies the headphones can reproduce (e.g.)
        </span>
            <div className={styles.radioInputs}>
              <div className={styles.inputRadio}>
                <input onChange={frequency.onChange} value='20kHz' name='hz' type="radio"/>
                <label>20kHz</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={frequency.onChange} value='20Hz' name='hz' type="radio"/>
                <label>20Hz</label>
              </div>
            </div>
          </div>
          <div className={styles.inputsRadio}>
            <span>Describe the charging method.</span>
            <div className={styles.radioInputs}>
              <div className={styles.inputRadio}>
                <input onChange={chargingMethod.onChange} value='USB-C' name='charging' type="radio"/>
                <label>USB-C</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={chargingMethod.onChange} value='Wireless' name='charging' type="radio"/>
                <label>Wireless</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={chargingMethod.onChange} value='micro-USB' name='charging' type="radio"/>
                <label>micro-USB</label>
              </div>
            </div>
          </div>
          <span className={styles.tipTitle}>
        Headphone Type of Property
      </span>
          <div className={styles.checkboxInputColumn}>
            <div className={styles.checkboxInputs}>
              <input onChange={headphoneType.onChange} value='Over-ear' type="checkbox"/>
              <label>Over-ear</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={headphoneType.onChange} value='On-ear' type="checkbox"/>
              <label>On-ear</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={headphoneType.onChange} value='True wireless' type="checkbox"/>
              <label>True wireless</label>
            </div>
            <div className={styles.checkboxInputs}>
              <input onChange={headphoneType.onChange} value='In-ear' type="checkbox"/>
              <label>In-ear</label>
            </div>
          </div>
          <div className={styles.inputsRadio}>
            <span>Types of Colors.</span>
            <div className={styles.radioInputs}>
              <div className={styles.inputRadio}>
                <input onChange={headphoneColor.onChange} value='Black' name='color' type="radio"/>
                <label>Black</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={headphoneColor.onChange} value='White' name='color' type="radio"/>
                <label>White</label>
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
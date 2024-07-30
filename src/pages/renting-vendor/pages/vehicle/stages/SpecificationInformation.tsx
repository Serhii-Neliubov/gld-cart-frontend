import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewVehicle.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.tsx";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";
import toast from "react-hot-toast";
import {useInput} from "@/hooks/useInput.tsx";

type SpecificationInformationProps = {
    formData: IVendorProductData;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
    setStage: Dispatch<SetStateAction<number>>;
}

export const SpecificationInformation = ({setFormData, formData, setStage}: SpecificationInformationProps) => {
  const yearOfManufacture = useInput('');
  const vehiclePlateNumber = useInput('');
  const customSpecification = useInput('');
  const specificationDetails = useInput('');
  const fuelType = useInput('');
  const condition = useInput('');
  const engineCapacity = useInput('');
  const seatCapacity = useInput('');
  const storageBagCapacity = useInput('');
  const airBags = useInput('');

  const setNextStageHandler = () => {
    if(!yearOfManufacture.value || !vehiclePlateNumber.value || !customSpecification.value || !specificationDetails.value || !fuelType.value || !engineCapacity.value || !seatCapacity.value || !storageBagCapacity.value || !airBags.value){
      console.log({
        yearOfManufacture: yearOfManufacture.value,
        vehiclePlateNumber: vehiclePlateNumber.value,
        customSpecification: customSpecification.value,
        specificationDetails: specificationDetails.value,
        fuelType: fuelType.value,
        engineCapacity: engineCapacity.value,
        seatCapacity: seatCapacity.value,
        storageBagCapacity: storageBagCapacity.value,
        airBags: airBags.value,
      })

      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      attributes: {
        ...formData.attributes,
        yearOfManufacture: yearOfManufacture.value,
        vehiclePlateNumber: vehiclePlateNumber.value,
        customSpecification: customSpecification.value,
        specificationDetails: specificationDetails.value,
        fuelType: fuelType.value,
        engineCapacity: engineCapacity.value,
        seatCapacity: seatCapacity.value,
        storageBagCapacity: storageBagCapacity.value,
        airBags: airBags.value,
      },
    });

    console.log(formData)

    setStage((prev: number) => prev + 1);
  }

  return (
    <div className='__container'>
    <div className={styles.container}>
      <RentingStage coloredStage={3}/>
      <h1 className={styles.title}>Vehicle Renting</h1>
      <form className={styles.content}>
        <h2 className={styles.subtitle}>Basic information</h2>
        <React.Fragment>
          <div className={styles.inputsBox}>
            <div className={styles.inputBox}>
              <label>Year of Manufacture</label>
              <input onChange={yearOfManufacture.onChange} value={yearOfManufacture.value} type='number' placeholder="Car Manufacture year"/>
            </div>
            <div className={styles.inputBox}>
              <label>Vehicle Plate Number</label>
              <input onChange={vehiclePlateNumber.onChange} value={vehiclePlateNumber.value} placeholder="AAA-123"/>
            </div>
          </div>
          <div className={styles.inputRadioBox}>
            <span>Vehicle Condition</span>
            <div className={styles.radioInputs}>
              <div className={styles.inputRadio}>
                <input onChange={condition.onChange} value='New Vehicle' name='condition' type="radio"/>
                <label>New Vehicle</label>
              </div>
              <div className={styles.inputRadio}>
                <input onChange={condition.onChange} value='Used Vehicle' name='condition' type="radio"/>
                <label>Used Vehicle</label>
              </div>
            </div>
          </div>
          <div className={styles.inputsBox}>
            <div className={styles.inputBox}>
              <label>Custom specification*</label>
              <input onChange={customSpecification.onChange} value={customSpecification.value} placeholder="Transmission"/>
            </div>
            <div className={styles.inputBox}>
              <label>Specification details*</label>
              <input onChange={specificationDetails.onChange} value={specificationDetails.value} placeholder="Automatic"/>
            </div>
          </div>
          <div className={styles.inputsBox}>
            <div className={styles.inputBox}>
              <label>Fuel type*</label>
              <input onChange={fuelType.onChange} value={fuelType.value} placeholder="Diesel"/>
            </div>
            <div className={styles.inputBox}>
              <label>Engine capacity*</label>
              <input onChange={engineCapacity.onChange} value={engineCapacity.value} placeholder="1000 CC"/>
            </div>
          </div>
          <div className={styles.inputsBox}>
            <div className={styles.inputBox}>
              <label>Seat capacity</label>
              <input onChange={seatCapacity.onChange} value={seatCapacity.value} type='number' placeholder="04"/>
            </div>
            <div className={styles.inputBox}>
              <label>Storage Bag capacity</label>
              <input onChange={storageBagCapacity.onChange} value={storageBagCapacity.value} placeholder="1 big bag and one small bag"/>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Air bags</label>
            <input onChange={airBags.onChange} value={airBags.value} type='number' placeholder="02"/>
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
import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewVehicle.module.scss";
import {IVendorProductData} from "@models/IVendorProductData.tsx";
import {useInput} from "@hooks/useInput/useInput.tsx";
import RentingStage from "@components/renting-stages/RentingStage.tsx";
import toast from "react-hot-toast";

type BasicInformationProps = {
    formData: IVendorProductData;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
    setStage: Dispatch<SetStateAction<number>>;
}

export const BasicInformation = ({setStage, formData, setFormData}: BasicInformationProps) => {
  const title = useInput('');
  const description = useInput('');
  const driver = useInput('');
  const dayRentPrice = useInput('');
  const amountOfDays = useInput('1 Day');
  const weeklyRentPrice = useInput('');
  const amountOfWeeks = useInput('');
  const monthlyRentPrice = useInput('');
  const amountOfMonths = useInput('');

  const setNextStageHandler = () => {
    if(!title.value || !description.value || !driver.value || !dayRentPrice.value){
      return toast.error('Please fill all fields');
    }

    setFormData({
      ...formData,
      title: title.value,
      description: description.value,
      attributes: {
        ...formData.attributes,
        driver: driver.value,
        amountOfDays: amountOfDays.value,
        weeklyRentPrice: weeklyRentPrice.value,
        amountOfWeeks: amountOfWeeks.value,
        monthlyRentPrice: monthlyRentPrice.value,
        amountOfMonths: amountOfMonths.value,
      },
      price: parseInt(dayRentPrice.value),
    });

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
            <div className={styles.inputTextBox}>
              <label>Title</label>
              <input
                onChange={title.onChange}
                value={title.value}
                placeholder="70 words max"
                maxLength={70}
              />
            </div>
            <div className={styles.inputAreaBox}>
              <label>Description</label>
              <textarea
                onChange={description.onChange}
                value={description.value}
                minLength={160}
                maxLength={9000}
                placeholder="Minimum 160 and maximum 9000 characters"
              />
            </div>
            <div className={styles.inputRadioBox}>
              <span>You want to rent your car</span>
              <div className={styles.radioInputs}>
                <div className={styles.inputRadio}>
                  <input
                    name="driver"
                    onChange={driver.onChange}
                    value='Without Driver'
                    type="radio"
                  />
                  <label>Without Driver</label>
                </div>
                <div className={styles.inputRadio}>
                  <input
                    onChange={driver.onChange}
                    value='With Driver'
                    name="driver"
                    type="radio"
                  />
                  <label>With Driver</label>
                </div>
              </div>
            </div>
            <div className={styles.packageDetails}>
              <span>Packages Details</span>
              <div className={styles.inputsCheckbox}>
                <div className={styles.inputCheckbox}>
                  <div>
                    <input
                      name="time"
                      type="checkbox"
                    />
                    <label>Renting Packages For Days </label>
                  </div>
                  <div className={styles.inputsBox}>
                    <div>
                      <div className={styles.inputBox}>
                        <span>Rent Price</span>
                        <input onChange={dayRentPrice.onChange} value={dayRentPrice.value} placeholder="450$"/>
                      </div>
                      <div className={styles.inputBox}>
                        <span>Day</span>
                        <select
                          onChange={amountOfDays.onChange}
                        >
                          <option value="1 Day">01 Day</option>
                          <option value="2 Days">02 Days</option>
                          <option value="3 Days">03 Days</option>
                          <option value="4 Days">04 Days</option>
                          <option value="5 Days">05 Days</option>
                          <option value="10 Days">10 Days</option>
                          <option value="15 Days">15 Days</option>
                          <option value="20 Days">20 Days</option>
                          <option value="25 Days">25 Days</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.inputCheckbox}>
                  <div>
                    <input
                      name="time"
                      type="checkbox"
                    />
                    <label>Renting Packages For Weeks </label>
                  </div>
                  <div className={styles.inputsBox}>
                    <div>
                      <div className={styles.inputBox}>
                        <span>Rent Price</span>
                        <input onChange={weeklyRentPrice.onChange} value={weeklyRentPrice.value} placeholder="450$"/>
                      </div>
                      <div className={styles.inputBox}>
                        <span>Week</span>
                        <select
                          onChange={amountOfWeeks.onChange}
                        >
                          <option value="1 Day">01 Week</option>
                          <option value="2 Weeks">02 Weeks</option>
                          <option value="3 Weeks">03 Weeks</option>
                          <option value="5 Weeks">05 Weeks</option>
                          <option value="8 Weeks">08 Weeks</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.inputCheckbox}>
                  <div>
                    <input
                      name="time"
                      type="checkbox"
                    />
                    <label>Renting Packages For Months </label>
                  </div>
                  <div className={styles.inputsBox}>
                    <div>
                      <div className={styles.inputBox}>
                        <span>Rent Price</span>
                        <input onChange={monthlyRentPrice.onChange} value={monthlyRentPrice.value} placeholder="450$"/>
                      </div>
                      <div className={styles.inputBox}>
                        <span>Month</span>
                        <select
                          onChange={amountOfMonths.onChange}
                        >
                          <option value="1 Month">01 Month</option>
                          <option value="2 Months">02 Months</option>
                          <option value="3 Months">03 Months</option>
                          <option value="4 Months">04 Months</option>
                          <option value="5 Months">05 Months</option>
                          <option value="10 Months">10 Months</option>
                        </select>
                      </div>
                    </div>
                  </div>
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
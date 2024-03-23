import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewHouses.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.tsx";
import RentingStage from "@/components/renting-stages/RentingStage.tsx";
import {useInput} from "@/hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";

type BasicInformationProps = {
  formData: IVendorProductData;
  setFormData: Dispatch<SetStateAction<IVendorProductData>>;
  setStage: Dispatch<SetStateAction<number>>;
}

export const BasicInformation = ({setStage, formData, setFormData}: BasicInformationProps) => {
  const [isPackagesForDays, setIsPackagesForDays] = React.useState(false);
  const [isPackagesForWeeks, setIsPackagesForWeeks] = React.useState(false);
  const [isPackagesForMonths, setIsPackagesForMonths] = React.useState(false);

    const title = useInput('');
    const description = useInput('');
    const city = useInput('');
    const address = useInput('');
    const tidiness = useInput('');
    const dayRentPrice = useInput('');
    const amountOfDays = useInput('');
    const weeklyRentPrice = useInput('');
    const amountOfWeeks = useInput('');
    const monthlyRentPrice = useInput('');
    const amountOfMonths = useInput('');

    const setNextStageHandler = () => {
      if(!title.value || !description.value || !city.value || !address.value || !tidiness.value || !dayRentPrice.value){
        return toast.error('Please fill all fields');
      }

      setFormData({
        ...formData,
        title: title.value,
        description: description.value,
        attributes: {
          ...formData.attributes,
          city: city.value,
          address: address.value,
          tidiness: tidiness.value,
          dayRentPrice: dayRentPrice.value,
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
          <h1 className={styles.title}>House Renting</h1>
          <form className={styles.content}>
            <h2 className={styles.subtitle}>Basic information</h2>
            <React.Fragment>
              <div className={styles.inputBox}>
                <label>Title</label>
                <input onChange={title.onChange} value={title.value} placeholder="70 words max" maxLength={70}/>
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
              <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                  <label>City</label>
                  <input
                    onChange={city.onChange}
                    value={city.value}
                    placeholder="Write your house city" maxLength={70}/>
                </div>
                <div className={styles.inputBox}>
                  <label>Address</label>
                  <input
                    onChange={address.onChange}
                    value={address.value}
                    placeholder="Write your house address"
                    maxLength={70}
                  />
                </div>
              </div>
              <div className={styles.inputRadioBox}>
                <span>Your House is</span>
                <div className={styles.radioInputs}>
                  <div className={styles.inputRadio}>
                    <input onChange={tidiness.onChange} value='Unfurnished' type="radio"/>
                    <label>Unfurnished</label>
                  </div>
                  <div className={styles.inputRadio}>
                    <input onChange={tidiness.onChange} value='Furnished' type="radio"/>
                    <label>Furnished</label>
                  </div>
                </div>
              </div>
              <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                  <div className={styles.inputCheckbox}>
                    <div>
                      <input
                        onChange={() => setIsPackagesForDays(!isPackagesForDays)}
                        name="time"
                        type="checkbox"
                      />
                      <label>Renting Packages For Days </label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Rent Price</span>
                          <input disabled={!isPackagesForDays} onChange={dayRentPrice.onChange} value={dayRentPrice.value} placeholder="450$"/>
                        </div>
                        <div className={styles.inputBox}>
                          <span>Day</span>
                          <select
                            onChange={amountOfDays.onChange}
                            value={amountOfDays.value}
                            disabled={!isPackagesForDays}
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
                        onChange={() => setIsPackagesForWeeks(!isPackagesForWeeks)}
                        name="time"
                        type="checkbox"
                      />
                      <label>Renting Packages For Weeks </label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Rent Price</span>
                          <input disabled={!isPackagesForWeeks} onChange={weeklyRentPrice.onChange} value={weeklyRentPrice.value} placeholder="450$"/>
                        </div>
                        <div className={styles.inputBox}>
                          <span>Week</span>
                          <select
                            onChange={amountOfWeeks.onChange}
                            value={amountOfWeeks.value}
                            disabled={!isPackagesForWeeks}
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
                        onChange={() => setIsPackagesForMonths(!isPackagesForMonths)}
                        name="time"
                        type="checkbox"
                      />
                      <label>Renting Packages For Months </label>
                    </div>
                    <div className={styles.inputsBox}>
                      <div>
                        <div className={styles.inputBox}>
                          <span>Rent Price</span>
                          <input disabled={!isPackagesForMonths} onChange={monthlyRentPrice.onChange} value={monthlyRentPrice.value} placeholder="450$"/>
                        </div>
                        <div className={styles.inputBox}>
                          <span>Month</span>
                          <select
                            disabled={!isPackagesForMonths}
                            onChange={amountOfMonths.onChange}
                            value={amountOfMonths.value}
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
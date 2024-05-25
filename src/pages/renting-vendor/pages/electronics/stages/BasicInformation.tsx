import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from "../NewElectronics.module.scss";
import {IVendorProductData} from "@models/IVendorProductData.tsx";
import {useInput} from "@hooks/useInput/useInput.tsx";
import toast from "react-hot-toast";
import RentingStage from "@components/renting-stages/RentingStage.tsx";

type BasicInformationProps = {
    formData: IVendorProductData;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
    setStage: Dispatch<SetStateAction<number>>;
}

export const BasicInformation = ({setStage, formData, setFormData}: BasicInformationProps) => {
    const [isDayRent, setIsDayRent] = useState(false);
    const [isWeekRent, setIsWeekRent] = useState(false);
    const [isMonthRent, setIsMonthRent] = useState(false);

    const title = useInput('');
    const description = useInput('');
    const dayRentPrice = useInput('');
    const monthRentPrice = useInput('');
    const weekRentPrice = useInput('');

    const countOfDays = useInput('1');
    const countOfWeeks = useInput('1');
    const countOfMonths = useInput('1');

    const setNextStageHandler = () => {
        if(!title.value || !description.value || !dayRentPrice.value || !countOfDays.value){
            return toast.error('Please fill all fields');
        }

        setFormData({
            ...formData,
            title: title.value,
            description: description.value,
            attributes: {
                ...formData.attributes,
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
                        <div className={styles.packageDetails}>
                            <span>Packages Details</span>
                            <div className={styles.inputsCheckbox}>
                                <div className={styles.inputCheckbox}>
                                    <div>
                                        <input
                                          onChange={() => setIsDayRent((prev: boolean) => !prev)}
                                          name="time"
                                          type="checkbox"
                                        />
                                        <label>Renting Packages For Days </label>
                                    </div>
                                    <div className={styles.inputsBox}>
                                        <div>
                                            <div className={styles.inputBox}>
                                                <span>Rent Price</span>
                                                <input
                                                  disabled={!isDayRent}
                                                  onChange={dayRentPrice.onChange}
                                                  value={dayRentPrice.value}
                                                  placeholder="450$"/>
                                            </div>
                                            <div className={styles.inputBox}>
                                                <span>Day</span>
                                                <select
                                                  disabled={!isDayRent}
                                                  onChange={countOfDays.onChange}
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
                                          disabled={!isDayRent}
                                          onChange={() => setIsWeekRent((prev: boolean) => !prev)}
                                          name="time"
                                          type="checkbox"
                                        />
                                        <label>Renting Packages For Weeks </label>
                                    </div>
                                    <div className={styles.inputsBox}>
                                        <div>
                                            <div className={styles.inputBox}>
                                                <span>Rent Price</span>
                                                <input disabled={!isWeekRent || !isDayRent} onChange={weekRentPrice.onChange} value={weekRentPrice.value} placeholder="450$"/>
                                            </div>
                                            <div className={styles.inputBox}>
                                                <span>Week</span>
                                                <select
                                                  onChange={countOfWeeks.onChange}
                                                  disabled={!isWeekRent || !isDayRent}
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
                                          onChange={() => setIsMonthRent((prev: boolean) => !prev)}
                                          name="time"
                                          type="checkbox"
                                          disabled={!isDayRent || !isWeekRent}
                                        />
                                        <label>Renting Packages For Months </label>
                                    </div>
                                    <div className={styles.inputsBox}>
                                        <div>
                                            <div className={styles.inputBox}>
                                                <span>Rent Price</span>
                                                <input
                                                  disabled={!isMonthRent || !isDayRent || !isWeekRent}
                                                  onChange={monthRentPrice.onChange}
                                                  value={monthRentPrice.value}
                                                  placeholder="450$"
                                                />
                                            </div>
                                            <div className={styles.inputBox}>
                                                <span>Month</span>
                                                <select
                                                  onChange={countOfMonths.onChange}
                                                  disabled={!isMonthRent || !isDayRent || !isWeekRent}
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
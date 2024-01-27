import React from 'react';
import styles from './BasicInformationPestControl.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";

export const BasicInformationPestControl = () => {
    useCategoryRedirect('pestControl', '/personal-services');

    return(
        <Layout title='Pest Control SERVICES Form' subtitle='Basic information' stage={2} backLink='/personal-services' nextLink='/professional-services/pest-control/basic-information/photo-and-video'>
            <div className={styles.inputTextBox}>
                <label>Service Title</label>
                <input placeholder='70 words max' maxLength={70}/>
            </div>
            <div className={styles.inputAreaBox}>
                <label>Service Description</label>
                <textarea minLength={160} maxLength={9000} placeholder='Minimum 160 and maximum 9000 characters'/>
            </div>
            <div className={styles.inputRadioBox}>
                <span>You want to give your Snow Removal service Per</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Hour</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Day</label>
                    </div>
                </div>
            </div>
            <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type='checkbox'/>
                            <label>Pest Control Packages For Hour</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Price</span>
                                    <input placeholder='450$'/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Hour</span>
                                    <select>
                                        <option value='1 Hour'>01 Hour</option>
                                        <option value='2 Hours'>02 Hours</option>
                                        <option value='3 Hours'>03 Hours</option>
                                        <option value='4 Hours'>04 Hours</option>
                                        <option value='5 Hours'>05 Hours</option>
                                        <option value='8 Hours'>08 Hours</option>
                                        <option value='12 Hours'>12 Hours</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type='checkbox'/>
                            <label>Pest Control Packages For Day</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Price</span>
                                    <input placeholder='450$'/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Day</span>
                                    <select>
                                        <option value='1 Day'>01 Day</option>
                                        <option value='2 Days'>02 Days</option>
                                        <option value='3 Days'>03 Days</option>
                                        <option value='4 Days'>04 Days</option>
                                        <option value='5 Days'>05 Days</option>
                                        <option value='8 Days'>08 Days</option>
                                        <option value='12 Days'>12 Days</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type='checkbox'/>
                            <label>Pest Control Packages For Week</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Price</span>
                                    <input placeholder='450$'/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Week</span>
                                    <select>
                                        <option value='1 Week'>01 Week</option>
                                        <option value='2 Weeks'>02 Weeks</option>
                                        <option value='3 Weeks'>03 Weeks</option>
                                        <option value='4 Weeks'>04 Weeks</option>
                                        <option value='5 Weeks'>05 Weeks</option>
                                        <option value='8 Weeks'>08 Weeks</option>
                                        <option value='12 Weeks'>12 Weeks</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
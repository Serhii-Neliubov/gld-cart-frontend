import React, {useState} from 'react';
import styles from './NewCleaning.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";

export const NewCleaning = () => {
    const [stage, setStage] = useState(3);

    useCategoryRedirect('cleaning', '/personal-services');

    return(
        <React.Fragment>
            {stage < 6 && <Layout setStage={setStage} title='Cleaning Renting Form' subtitle='Basic information' stage={stage - 1}>
                {stage == 3 &&
                    <React.Fragment>
                        <div className={styles.inputTextBox}>
                            <label>Title</label>
                            <input placeholder='70 words max' maxLength={70}/>
                        </div>
                        <div className={styles.inputAreaBox}>
                            <label>Service Description</label>
                            <textarea minLength={160} maxLength={9000}
                                      placeholder='Minimum 160 and maximum 9000 characters'/>
                        </div>
                        <div className={styles.inputRadioBox}>
                            <span>You want to give your professional service in </span>
                            <div className={styles.radioInputs}>
                                <div className={styles.inputRadio}>
                                    <input type='radio'/>
                                    <label>Day</label>
                                </div>
                                <div className={styles.inputRadio}>
                                    <input type='radio'/>
                                    <label>Night</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.packageDetails}>
                            <span>Packages Details</span>
                            <div className={styles.inputsCheckbox}>
                                <div className={styles.inputCheckbox}>
                                    <div>
                                        <input type='checkbox'/>
                                        <label>Renting Packages For Days </label>
                                    </div>
                                    <div className={styles.inputsBox}>
                                        <div>
                                            <div className={styles.inputBox}>
                                                <span>Rent Price</span>
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
                                                    <option value='10 Days'>10 Days</option>
                                                    <option value='15 Days'>15 Days</option>
                                                    <option value='20 Days'>20 Days</option>
                                                    <option value='25 Days'>25 Days</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.inputCheckbox}>
                                    <div>
                                        <input type='checkbox'/>
                                        <label>Renting Packages For Weeks </label>
                                    </div>
                                    <div className={styles.inputsBox}>
                                        <div>
                                            <div className={styles.inputBox}>
                                                <span>Rent Price</span>
                                                <input placeholder='450$'/>
                                            </div>
                                            <div className={styles.inputBox}>
                                                <span>Week</span>
                                                <select>
                                                    <option value='1 Day'>01 Week</option>
                                                    <option value='2 Weeks'>02 Weeks</option>
                                                    <option value='3 Weeks'>03 Weeks</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.inputCheckbox}>
                                    <div>
                                        <input type='checkbox'/>
                                        <label>Renting Packages For Months </label>
                                    </div>
                                    <div className={styles.inputsBox}>
                                        <div>
                                            <div className={styles.inputBox}>
                                                <span>Rent Price</span>
                                                <input placeholder='450$'/>
                                            </div>
                                            <div className={styles.inputBox}>
                                                <span>Month</span>
                                                <select>
                                                    <option value='1 Month'>01 Month</option>
                                                    <option value='2 Months'>02 Months</option>
                                                    <option value='3 Months'>03 Months</option>
                                                    <option value='4 Months'>04 Months</option>
                                                    <option value='5 Months'>05 Months</option>
                                                    <option value='10 Months'>10 Months</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
                {stage == 4 &&
                    <div className={styles.photoBlocksContent}>
                        <span className={styles.uploadPhotosTitle}>UPLOAD UP TO 06 PHOTOS</span>
                        <div className={styles.photoBlocks}>
                            <div className={styles.photoBlock}>
                                <img src='/photo-and-video-icon.svg' alt='icon'/>
                            </div>
                            <div className={styles.photoBlock}>
                                <img src='/photo-and-video-icon.svg' alt='icon'/>
                            </div>
                            <div className={styles.photoBlock}>
                                <img src='/photo-and-video-icon.svg' alt='icon'/>
                            </div>
                            <div className={styles.photoBlock}>
                                <img src='/photo-and-video-icon.svg' alt='icon'/>
                            </div>
                            <div className={styles.photoBlock}>
                                <img src='/photo-and-video-icon.svg' alt='icon'/>
                            </div>
                        </div>
                        <div className={styles.inputBlock}>
                            <label>Promo Video (Optional)</label>
                            <input placeholder='Youtube link here'/>
                        </div>
                        <span className={styles.uploadPhotosTitle}>UPLOAD RECENTLY WORK PHOTOS</span>
                        <div className={styles.photoBlocks}>
                            <div className={styles.photoBlock}>
                                <img src='/photo-and-video-icon.svg' alt='icon'/>
                            </div>
                            <div className={styles.photoBlock}>
                                <img src='/photo-and-video-icon.svg' alt='icon'/>
                            </div>
                            <div className={styles.photoBlock}>
                                <img src='/photo-and-video-icon.svg' alt='icon'/>
                            </div>
                            <div className={styles.photoBlock}>
                                <img src='/photo-and-video-icon.svg' alt='icon'/>
                            </div>
                            <div className={styles.photoBlock}>
                                <img src='/photo-and-video-icon.svg' alt='icon'/>
                            </div>
                        </div>
                    </div>
                }
                {stage == 5 &&
                    <React.Fragment>
                        <div className={styles.inputsBox}>
                            <div className={styles.inputBox}>
                                <label>Working Hours </label>
                                <input placeholder='10' type='number'/>
                            </div>
                            <div className={styles.inputBox}>
                                <label>Number of PROFESSIONAL</label>
                                <input placeholder='20' type='number'/>
                            </div>
                        </div>
                        <div className={styles.inputRadioBox}>
                            <span>Need Cleaning Material</span>
                            <div className={styles.radioInputs}>
                                <div className={styles.inputRadio}>
                                    <input type='radio'/>
                                    <label>Yes</label>
                                </div>
                                <div className={styles.inputRadio}>
                                    <input type='radio'/>
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                        <span
                            className={styles.tipTitle}>Select the age group for which the clothing item is suitable</span>
                        <div className={styles.inputsCheckbox}>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.inputCheckbox}>
                                    <input type='checkbox'/>
                                    <label>One Day after cleaning </label>
                                </div>
                                <div className={styles.inputCheckbox}>
                                    <input type='checkbox'/>
                                    <label>One Week after cleaning </label>
                                </div>
                                <div className={styles.inputCheckbox}>
                                    <input type='checkbox'/>
                                    <label>One Month after cleaning </label>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </Layout>}
            {stage == 6 && <ItemPublishPage category='Cleaning'/>}
        </React.Fragment>
    )
}
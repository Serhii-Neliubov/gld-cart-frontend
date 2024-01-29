import React, {useState} from 'react';
import styles from './NewRepairing.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";
import useCategoryRedirect from "../../../../hooks/useCategoryRedirect/useCategoryRedirect.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";

export const NewRepairing = () => {
    const [stage, setStage] = useState(3);

    useCategoryRedirect('repairing', '/personal-services');

    return(
        <React.Fragment>
            {stage < 6 && <Layout setStage={setStage} title='Repairing Renting Form' subtitle='Basic information' stage={stage - 1}>
                {stage == 3 &&
                    <React.Fragment>
                        <div className={styles.inputTextBox}>
                            <label>Service Title</label>
                            <input placeholder='70 words max' maxLength={70}/>
                        </div>
                        <div className={styles.inputAreaBox}>
                            <label>Service Description</label>
                            <textarea minLength={160} maxLength={9000}
                                      placeholder='Minimum 160 and maximum 9000 characters'/>
                        </div>
                        <div className={styles.inputRadioBox}>
                            <span>You want to give your professional service in</span>
                            <div className={styles.radioInputs}>
                                <div className={styles.inputRadio}>
                                    <input type='radio'/>
                                    <label>At Home</label>
                                </div>
                                <div className={styles.inputRadio}>
                                    <input type='radio'/>
                                    <label>At Shop</label>
                                </div>
                                <div className={styles.inputRadio}>
                                    <input type='radio'/>
                                    <label>At Office</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.packageDetails}>
                            <span>Packages Details</span>
                            <div className={styles.inputsCheckbox}>
                                <div className={styles.inputCheckbox}>
                                    <div>
                                        <input type='checkbox'/>
                                        <label>Repairing Packages For Product</label>
                                    </div>
                                    <div className={styles.inputsBox}>
                                        <div>
                                            <div className={styles.inputBox}>
                                                <span>Rent Price</span>
                                                <input placeholder='450$'/>
                                            </div>
                                            <div className={styles.inputBox}>
                                                <span>Hours</span>
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
                                        <label>Fix Price Repairing </label>
                                    </div>
                                    <div className={styles.inputsBox}>
                                        <div>
                                            <div className={styles.inputBox}>
                                                <span>Rent Price</span>
                                                <input placeholder='450$'/>
                                            </div>
                                            <div className={styles.inputBox}>
                                                <span>Fix</span>
                                                <input placeholder='Per product'/>
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
                            <span>Need Instrument for Repairing Service</span>
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
                        <div className={styles.inputsRadio}>
                            <span>You have all the safety Instrument for Repairing Service </span>
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
                        <div className={styles.checkboxInputsBox}>
                            <span className={styles.tipTitle}>Select Type of Property</span>
                            <div className={styles.inputCheckbox}>
                                <div className={styles.inputCheckbox}>
                                    <input type='checkbox'/>
                                    <label>Residential</label>
                                </div>
                                <div className={styles.inputCheckbox}>
                                    <input type='checkbox'/>
                                    <label>Commercial</label>
                                </div>
                                <div className={styles.inputCheckbox}>
                                    <input type='checkbox'/>
                                    <label>Industrial</label>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </Layout>}
            {stage == 6 && <ItemPublishPage category='Electronics'/>}
        </React.Fragment>
    )
}
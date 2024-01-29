import React, {useState} from 'react';
import styles from './NewBluetooth.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";

export const NewBluetooth = () => {
    const [stage, setStage] = useState(3);

    return(
        <React.Fragment>
            {stage < 6 && <Layout setStage={setStage} title='Bluetooth Renting Form' subtitle='Basic information' stage={stage - 1}>
                {stage == 3 &&
                    <React.Fragment>
                        <div className={styles.inputTextBox}>
                            <label>Service Title</label>
                            <input placeholder='70 words max' maxLength={70}/>
                        </div>
                        <div className={styles.inputAreaBox}>
                            <label>Products Description</label>
                            <textarea minLength={160} maxLength={9000}
                                      placeholder='Minimum 160 and maximum 9000 characters'/>
                        </div>
                        <div className={styles.inputsRadio}>
                            <span>The product  you want to sell is ?</span>
                            <div className={styles.radioInputs}>
                                <div className={styles.inputRadio}>
                                    <input type='radio'/>
                                    <label>Branded</label>
                                </div>
                                <div className={styles.inputRadio}>
                                    <input type='radio'/>
                                    <label>Local</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.packageDetails}>
                            <span>Packages Details</span>
                            <div className={styles.inputsCheckbox}>
                                <div className={styles.inputCheckbox}>
                                    <div>
                                        <input type='checkbox'/>
                                        <label>Full Price</label>
                                    </div>
                                    <div className={styles.inputsBox}>
                                        <div>
                                            <div className={styles.inputBox}>
                                                <span>Price</span>
                                                <input placeholder='450$'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.inputCheckbox}>
                                    <div>
                                        <input type='checkbox'/>
                                        <label>Discount Price</label>
                                    </div>
                                    <div className={styles.inputsBox}>
                                        <div>
                                            <div className={styles.inputBox}>
                                                <span>Discount Price</span>
                                                <input placeholder='450$'/>
                                            </div>
                                            <div className={styles.inputBox}>
                                                <span>Discount</span>
                                                <select>
                                                    <option value='10%'>10%</option>
                                                    <option value='20%'>20%</option>
                                                    <option value='30%'>30%</option>
                                                    <option value='40%'>40%</option>
                                                    <option value='50%'>50%</option>
                                                    <option value='60%'>60%</option>
                                                    <option value='70%'>70%</option>
                                                    <option value='80%'>80%</option>
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
                        <span
                            className={styles.tipTitle}>Select the Type of Bluetooth Product</span>
                        <div className={styles.checkboxInputsBox}>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Bluetooth Headphones</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Bluetooth Mouse</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Bluetooth Smartwatch</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Bluetooth Speaker</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Bluetooth Keyboard</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Other</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Bluetooth Earbuds</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Bluetooth Fitness Tracker</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.choosingColor}>
                            <span>Select the Colour of your product</span>
                            <div>
                            <button className={styles.choosingColorItem} style={{backgroundColor: '#9302A0'}}/>
                                <button className={styles.choosingColorItem} style={{backgroundColor: '#318834'}}/>
                                <button className={styles.choosingColorItem} style={{backgroundColor: '#000000'}}/>
                                <button className={styles.choosingColorItem} style={{backgroundColor: '#282684'}}/>
                                <button className={styles.choosingColorItem} style={{backgroundColor: '#EC0000'}}/>
                                <button className={styles.addingColor}>+</button>
                            </div>
                        </div>
                        <span className={styles.tipTitle}>Select Charging Method</span>
                        <div className={styles.checkboxInputColumn}>
                            <div className={styles.checkboxInputs}>
                                <input type='checkbox'/>
                                <label>USB-C</label>
                            </div>
                            <div className={styles.checkboxInputs}>
                                <input type='checkbox'/>
                                <label>Wireless</label>
                            </div>
                            <div className={styles.checkboxInputs}>
                                <input type='checkbox'/>
                                <label>Micro USB</label>
                            </div>
                        </div>
                        <span className={styles.tipTitle}>Select the Compatibility of Product</span>
                        <div className={styles.checkboxInputsBox}>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>iOS</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Mac</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Android</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Other</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Windows</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.inputsRadio}>
                            <span>The product you want to sell is Water Resistance</span>
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
                            <span>The product you want to sell is Noise-Cancellation</span>
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
                        <div className={styles.inputBox}>
                            <label>How many product are in stock?</label>
                            <input type='number' placeholder='100'/>
                        </div>
                    </React.Fragment>
                }
            </Layout>}
            {stage == 6 && <ItemPublishPage category='Bluetooth'/>}
        </React.Fragment>
    )
}
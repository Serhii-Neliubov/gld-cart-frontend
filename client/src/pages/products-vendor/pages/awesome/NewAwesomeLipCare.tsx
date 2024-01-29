import React, {useState} from 'react';
import styles from './NewAwesomeLipCare.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";
import ItemPublishPage from "../../../../components/ItemPublishPage/ItemPublishPage.tsx";

export const NewAwesomeLipCare = () => {
    const [stage, setStage] = useState(3);

    return(
        <React.Fragment>
            {stage < 6 && <Layout setStage={setStage} title='Awesome Lip Care Renting Form' subtitle='Basic information' stage={stage - 1}>
                {stage == 3 &&
                    <React.Fragment>
                        <div className={styles.inputTextBox}>
                            <label>Product Title</label>
                            <input placeholder='70 words max' maxLength={70}/>
                        </div>
                        <div className={styles.inputAreaBox}>
                            <label>Products Description</label>
                            <textarea minLength={160} maxLength={9000}
                                      placeholder='Minimum 160 and maximum 9000 characters'/>
                        </div>
                        <div className={styles.inputRadioBox}>
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
                        <span className={styles.tipTitle}>Select the Flavor of your product</span>
                        <div className={styles.checkboxInputsBox}>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Original</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Strawberry</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Citrus</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Other</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Cherry</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Coconut</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Watermelon</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Mint</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Vanilla</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Berry</label>
                                </div>
                            </div>
                        </div>
                        <span className={styles.tipTitle}>Select the Ingredients used in your product</span>
                        <div className={styles.checkboxInputsBox}>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Beeswax</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Jojoba Oil</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Lanolin</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Other</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Shea Butter</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Vitamin E</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Castor Seed Oil</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Coconut Oil</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Sunflower Seed Oil</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Olive Oil</label>
                                </div>
                            </div>
                        </div>
                        <span className={styles.tipTitle}>Select the Features of your product</span>
                        <div className={styles.checkboxInputsBox}>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>SPF Protection</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Tinted</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Long-Lasting</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Hydrating Formula</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Vegan</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Exfoliating</label>
                                </div>
                            </div>
                            <div className={styles.checkboxInputColumn}>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Natural Ingredients</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Dermatologist-Tested</label>
                                </div>
                                <div className={styles.checkboxInputs}>
                                    <input type='checkbox'/>
                                    <label>Other</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <label>How many product are in stock?</label>
                            <input type='number' placeholder='100'/>
                        </div>
                        <div className={styles.areaBox}>
                            <label>Care Instructions</label>
                            <textarea placeholder='Provide care and maintenance instructions for the bag'/>
                        </div>
                    </React.Fragment>
                }
            </Layout>}
            {stage == 6 && <ItemPublishPage category='New Awesome'/>}
        </React.Fragment>
    )
}
import React from 'react';
import styles from "../AwesomeLipCare.module.scss";
import { ModalWindow } from '../../../../../components/RentingProductsPopup/ModalWindow';

type StageTwoProps = {
    setStage: (number: number) => void;
    stage: number
}

export const StageTwo = ({setStage, stage}: StageTwoProps) => {
    return (
        <ModalWindow>
            <h1 className={styles.title}>Awesome Lip Care Specification</h1>
            <form className={styles.form}>
                <div className={styles.formBlock}>
                    <span className={styles.categoryText}>Products Specification</span>
                    <div className={styles.content}>
                        <div className={styles.specificationsBlock}>
                            <span className={styles.contentSubtitle}>Select the Flavor of your product</span>
                            <div className={styles.specifications}>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input type='checkbox'/>
                                        <label>Original</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input type='checkbox'/>
                                        <label>Strawberry</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input type='checkbox'/>
                                        <label>Citrus</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input type='checkbox'/>
                                        <label>Mint</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input type='checkbox'/>
                                        <label>Vanilla</label>
                                    </div>
                                </div>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input type='checkbox'/>
                                        <label>Cherry</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input type='checkbox'/>
                                        <label>Coconut</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input type='checkbox'/>
                                        <label>Watermelon</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input type='checkbox'/>
                                        <label>Berry</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input type='checkbox'/>
                                        <label>Other</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chooseColorBlock}>
                            <span className={styles.chooseColorBlockSubtitle}>Select the Colour of your product</span>
                            <div className={styles.chooseColorItems}>
                                <div className={`${styles.chooseColorItem_purple} ${styles.chooseColorItem}`}/>
                                <div className={`${styles.chooseColorItem_green} ${styles.chooseColorItem}`}/>
                                <div className={`${styles.chooseColorItem_black} ${styles.chooseColorItem}`}/>
                                <div className={`${styles.chooseColorItem_blue} ${styles.chooseColorItem}`}/>
                                <div className={`${styles.chooseColorItem_red} ${styles.chooseColorItem}`}/>
                                <div className={`${styles.chooseColorItem_addNew}`}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className={styles.formActions}>
                <button onClick={() => setStage(stage - 1)} className={styles.formActionButton}>Back</button>
                <button onClick={() => setStage(3)} className={styles.formActionButtonBlue}>Next</button>
                <button onClick={() => setStage(0)} className={styles.closeButton}>&times;</button>
            </div>
        </ModalWindow>
    )
}
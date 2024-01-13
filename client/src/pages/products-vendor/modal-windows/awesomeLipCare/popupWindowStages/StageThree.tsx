import React from 'react';
import styles from "../AwesomeLipCare.module.scss";
import { ModalWindow } from '../../../../../components/RentingProductsPopup/ModalWindow';

type StageThreeProps = {
    setStage: (number: number) => void;
    stage: number
}

export const StageThree = ({stage, setStage}: StageThreeProps) => {
    return (
        <ModalWindow>
            <h1 className={styles.title}>Awesome Lip Care Specification</h1>
            <form className={styles.form}>
                <div className={styles.formBlock}>
                    <span className={styles.categoryText}>Products Specification</span>
                    <div className={styles.content}>
                        <div className={styles.specificationsBlock}>
                            <span className={styles.contentSubtitle}>Select the Ingredients used in your product</span>
                            <div className={styles.specifications}>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input
                                            key='AdjustableStrapsFeatures'
                                            type='checkbox'
                                        />
                                        <label>Beeswax</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='PocketsFeatures' type='checkbox'/>
                                        <label>Jojoba Oil</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='MultipleCompartmentsFeatures' type='checkbox'/>
                                        <label>Lanolin</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='LaptopCompartmentFeatures' type='checkbox'/>
                                        <label>Coconut Oil</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='Eco-FriendlyFeatures' type='checkbox'/>
                                        <label>Sunflower Seed Oil</label>
                                    </div>
                                </div>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input key='ZipperClosureFeatures' type='checkbox'/>
                                        <label>Shea Butter</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='Water-ResistantFeatures' type='checkbox'/>
                                        <label>Vitamin E</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='ExpandableFeatures' type='checkbox'/>
                                        <label>Castor Seed Oil</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='RFIDBlockingFeatures' type='checkbox'/>
                                        <label>Olive Oil</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='FabricBlendFeatures' type='checkbox'/>
                                        <label>Other</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className={styles.formActions}>
                <button onClick={() => setStage(stage - 1)} className={styles.formActionButton}>Back</button>
                <button onClick={() => setStage(4)} className={styles.formActionButtonBlue}>Next</button>
                <button onClick={() => setStage(0)} className={styles.closeButton}>&times;</button>
            </div>
        </ModalWindow>
    )
}
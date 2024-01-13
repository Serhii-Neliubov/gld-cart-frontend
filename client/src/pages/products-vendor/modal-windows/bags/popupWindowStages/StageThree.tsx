import React from 'react';
import styles from "../Bags.module.scss";
import { ModalWindow } from '../../../../../components/RentingProductsPopup/ModalWindow';

type StageThreeProps = {
    setStage: (number: number) => void;
    stage: number
}

export const StageThree = ({stage, setStage}: StageThreeProps) => {
    return (
        <ModalWindow>
            <h1 className={styles.title}>Bags PRODUCT Form Specification</h1>
            <form className={styles.form}>
                <div className={styles.formBlock}>
                    <span className={styles.categoryText}>Products Specification</span>
                    <div className={styles.content}>
                        <div className={styles.specificationsBlock}>
                            <span className={styles.contentSubtitle}>Select the Features of your product</span>
                            <div className={styles.specifications}>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input
                                            key='AdjustableStrapsFeatures'
                                            type='checkbox'
                                        />
                                        <label>Adjustable Straps</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='PocketsFeatures' type='checkbox'/>
                                        <label>Inner Pockets</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='MultipleCompartmentsFeatures' type='checkbox'/>
                                        <label>Multiple Compartments</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='LaptopCompartmentFeatures' type='checkbox'/>
                                        <label>Laptop Compartment</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='Eco-FriendlyFeatures' type='checkbox'/>
                                        <label>Eco-Friendly Materials</label>
                                    </div>
                                </div>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input key='ZipperClosureFeatures' type='checkbox'/>
                                        <label>Zipper Closure</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='Water-ResistantFeatures' type='checkbox'/>
                                        <label>Water-Resistant</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='ExpandableFeatures' type='checkbox'/>
                                        <label>Expandable</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='RFIDBlockingFeatures' type='checkbox'/>
                                        <label>RFID Blocking</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input key='FabricBlendFeatures' type='checkbox'/>
                                        <label>Fabric Blend</label>
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
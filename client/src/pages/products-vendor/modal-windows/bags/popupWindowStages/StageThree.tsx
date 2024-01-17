import React, {useState} from 'react';
import styles from "../Bags.module.scss";
import { ModalWindow } from '../../../../../components/RentingProductsPopup/ModalWindow';

type StageThreeProps = {
    setStage: (number: number) => void;
    onChecked: (event: React.ChangeEvent<HTMLInputElement>, key:string, element: string) => void,
    stage: number
}

export const StageThree = ({stage, setStage, onChecked}: StageThreeProps) => {

    const [adjustableStraps, setAdjustableStraps] = useState(false);
    const [innerPockets, setInnerPockets] = useState(false);
    const [multipleCompartments, setMultipleCompartments] = useState(false);
    const [laptopCompartment, setLaptopCompartment] = useState(false);
    const [ecoFriendlyMaterials, setEcoFriendlyMaterials] = useState(false);
    const [zipperClosure, setZipperClosure] = useState(false);
    const [waterResistant, setWaterResistant] = useState(false);
    const [expandable, setExpandable] = useState(false);
    const [RFIDBlocking, setRFIDBlocking] = useState(false);
    const [fabricBland, setFabricBland] = useState(false);

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
                                            checked={adjustableStraps}
                                            onChange={event => {
                                                setAdjustableStraps(event.target.checked);
                                                onChecked(event, 'productFeatures', 'Adjustable Straps')
                                            }}
                                            key='AdjustableStrapsFeatures'
                                            type='checkbox'
                                        />
                                        <label>Adjustable Straps</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            checked={innerPockets}
                                            onChange={event => {
                                                setInnerPockets(event.target.checked);
                                                onChecked(event, 'productFeatures', 'Inner Pockets');
                                            }}
                                            key='PocketsFeatures'
                                            type='checkbox'
                                        />
                                        <label>Inner Pockets</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='MultipleCompartmentsFeatures'
                                            type='checkbox'
                                            checked={multipleCompartments}
                                            onChange={event => {
                                                setMultipleCompartments(event.target.checked);
                                                onChecked(event, 'productFeatures', 'Multiple Compartments');
                                            }}
                                        />
                                        <label>Multiple Compartments</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='LaptopCompartmentFeatures'
                                            type='checkbox'
                                            checked={laptopCompartment}
                                            onChange={event => {
                                                setLaptopCompartment(event.target.checked);
                                                onChecked(event, 'productFeatures', 'Laptop Compartment');
                                            }}
                                        />
                                        <label>Laptop Compartment</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Eco-FriendlyFeatures'
                                            type='checkbox'
                                            checked={ecoFriendlyMaterials}
                                            onChange={event => {
                                                setEcoFriendlyMaterials(event.target.checked);
                                                onChecked(event, 'productFeatures', 'Eco-Friendly Materials');
                                            }}
                                        />
                                        <label>Eco-Friendly Materials</label>
                                    </div>
                                </div>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input
                                            checked={zipperClosure}
                                            onChange={event => {
                                                setZipperClosure(event.target.checked);
                                                onChecked(event, 'productFeatures', 'Zipper Closure');
                                            }}
                                            key='ZipperClosureFeatures'
                                            type='checkbox'
                                        />
                                        <label>Zipper Closure</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Water-ResistantFeatures'
                                            type='checkbox'
                                            checked={waterResistant}
                                            onChange={event => {
                                                setWaterResistant(event.target.checked);
                                                onChecked(event, 'productFeatures', 'Water-Resistant');
                                            }}
                                        />
                                        <label>Water-Resistant</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='ExpandableFeatures'
                                            type='checkbox'
                                            checked={expandable}
                                            onChange={event => {
                                                setExpandable(event.target.checked);
                                                onChecked(event, 'productFeatures', 'Expandable');
                                            }}
                                        />
                                        <label>Expandable</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='RFIDBlockingFeatures'
                                            type='checkbox'
                                            checked={RFIDBlocking}
                                            onChange={event => {
                                                setRFIDBlocking(event.target.checked);
                                                onChecked(event, 'productFeatures', 'RFID Blocking');
                                            }}
                                        />
                                        <label>RFID Blocking</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='FabricBlendFeatures'
                                            type='checkbox'
                                            checked={fabricBland}
                                            onChange={event => {
                                                setFabricBland(event.target.checked);
                                                onChecked(event, 'productFeatures', 'RFID Blocking');
                                            }}
                                        />
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
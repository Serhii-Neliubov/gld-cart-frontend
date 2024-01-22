import React, {useState} from 'react';
import styles from "../mobileTablets.module.scss";
import {formDataProps} from "../mobileTablets.tsx";
import {ModalWindow} from "../../../../../components/RentingProductsPopup/ModalWindow.tsx";

type StageFourProps = {
    setStage: (number: number) => void,
    stage: number,
    onChecked: (event: React.ChangeEvent<HTMLInputElement>, key:string, element: string) => void,
    formData: formDataProps,
    price: string,
    discount: string,
    discountedPrice: string,
    closeModal: () => void
}

export const StageThree = ({onChecked, closeModal, setStage, stage, formData, price, discount, discountedPrice}: StageFourProps) => {
    const sendFormDataHandler = () => {
        if(formData.priceType === 'Full Price'){
            console.log({...formData, price: `${price}$`})
            closeModal();
        } else {
            console.log({...formData, discount: `${discount}%`, discountedPrice: `${discountedPrice}$`})
            closeModal();
        }
    }

    const [multiWindowMode, setMultiWindowMode] = useState(false);
    const [expandableStorage, setExpandableStorage] = useState(false);
    const [keyboardCompatibility, setKeyboardCompatibility] = useState(false);
    const [caseAccessoryOptions, setCaseAccessoryOptions] = useState(false);
    const [waterResistance, setWaterResistance] = useState(false);
    const [faceRecognition, setFaceRecognition] = useState(false);
    const [fingerprintSensor, setFingerprintSensor] = useState(false);
    const [stylusSupport, setStylusSupport] = useState(false);
    const [dustResistance, setDustResistance] = useState(false);
    const [other, setOther] = useState(false);

    return (
        <ModalWindow closeModal={closeModal}>
            <h1 className={styles.title}>Mobile Tablets Specification</h1>
            <form className={styles.form}>
                <div className={styles.formBlock}>
                    <span className={styles.categoryText}>Products Specification</span>
                    <div className={styles.content}>
                        <div className={styles.specificationsBlock}>
                            <span className={styles.contentSubtitle}>Select the Additional Features of your product</span>
                            <div className={styles.specifications}>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input
                                            key='Multi-Window Mode'
                                            type='checkbox'
                                            checked={multiWindowMode}
                                            onChange={event => {
                                                setMultiWindowMode(event.target.checked);
                                                onChecked(event, 'features', 'Multi-Window Mode')
                                            }}
                                        />
                                        <label>Multi-Window Mode</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Expandable Storage'
                                            type='checkbox'
                                            checked={expandableStorage}
                                            onChange={event => {
                                                setExpandableStorage(event.target.checked);
                                                onChecked(event, 'features', 'Expandable Storage')
                                            }}
                                        />
                                        <label>Expandable Storage</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Keyboard Compatibility'
                                            type='checkbox'
                                            checked={keyboardCompatibility}
                                            onChange={event => {
                                                setKeyboardCompatibility(event.target.checked);
                                                onChecked(event, 'features', 'Keyboard Compatibility')
                                            }}
                                        />
                                        <label>Keyboard Compatibility</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Case/Accessory Options'
                                            type='checkbox'
                                            checked={caseAccessoryOptions}
                                            onChange={event => {
                                                setCaseAccessoryOptions(event.target.checked);
                                                onChecked(event, 'features', 'Case/Accessory Options')
                                            }}
                                        />
                                        <label>Case/Accessory Options</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Water Resistance'
                                            type='checkbox'
                                            checked={waterResistance}
                                            onChange={event => {
                                                setWaterResistance(event.target.checked);
                                                onChecked(event, 'features', 'Water Resistance')
                                            }}
                                        />
                                        <label>Water Resistance</label>
                                    </div>
                                </div>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input
                                            key='Face Recognition'
                                            type='checkbox'
                                            checked={faceRecognition}
                                            onChange={event => {
                                                setFaceRecognition(event.target.checked);
                                                onChecked(event, 'features', 'Face Recognition')
                                            }}
                                        />
                                        <label>Face Recognition</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Fingerprint Sensor'
                                            type='checkbox'
                                            checked={fingerprintSensor}
                                            onChange={event => {
                                                setFingerprintSensor(event.target.checked);
                                                onChecked(event, 'features', 'Fingerprint Sensor')
                                            }}
                                        />
                                        <label>Fingerprint Sensor</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Dust Resistance'
                                            type='checkbox'
                                            checked={dustResistance}
                                            onChange={event => {
                                                setDustResistance(event.target.checked);
                                                onChecked(event, 'features', 'Dust Resistance')
                                            }}
                                        />
                                        <label>Dust Resistance</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Stylus Support'
                                            type='checkbox'
                                            checked={stylusSupport}
                                            onChange={event => {
                                                setStylusSupport(event.target.checked);
                                                onChecked(event, 'features', 'Stylus Support')
                                            }}
                                        />
                                        <label>Stylus Support</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            key='Other'
                                            type='checkbox'
                                            checked={other}
                                            onChange={event => {
                                                setOther(event.target.checked);
                                                onChecked(event, 'features', 'Other')
                                            }}
                                        />
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
                <button onClick={sendFormDataHandler} className={styles.formActionButtonBlue}>Finish</button>
            </div>
        </ModalWindow>
    )
}
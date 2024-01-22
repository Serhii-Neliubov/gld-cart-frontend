import React, {useState} from 'react';
import styles from "../Bags.module.scss";
import { ModalWindow } from '../../../../../components/RentingProductsPopup/ModalWindow';

type StageTwoProps = {
    setStage: (number: number) => void;
    onChecked: (event: React.ChangeEvent<HTMLInputElement>, key:string, element: string) => void,
    setColorHandler: (value: boolean, key:string, element: string) => void,
    stage: number,
    closeModal: () => void
}

export const StageTwo = ({closeModal, setStage, stage, onChecked, setColorHandler}: StageTwoProps) => {

    const [purpleColor, setPurpleColor] = useState(false);
    const [greenColor, setGreenColor] = useState(false);
    const [blackColor, setBlackColor] = useState(false);
    const [blueColor, setBlueColor] = useState(false);
    const [redColor, setRedColor] = useState(false);

    const [leather, setLeather] = useState(false);
    const [nylon, setNylon] = useState(false);
    const [denim, setDenim] = useState(false);
    const [syntheticLeather, setSyntheticLeather] = useState(false);
    const [fabricBlend, setFabricBlend] = useState(false);
    const [canvas, setCanvas] = useState(false);
    const [polyester, setPolyester] = useState(false);
    const [suede, setSuede] = useState(false);
    const [vynil, setVynil] = useState(false);
    const [other, setOther] = useState(false);

    return (
        <ModalWindow closeModal={closeModal}>
            <h1 className={styles.title}>Bags PRODUCT Form Specification</h1>
            <form className={styles.form}>
                <div className={styles.formBlock}>
                    <span className={styles.categoryText}>Products Specification</span>
                    <div className={styles.content}>
                        <div className={styles.specificationsBlock}>
                            <span className={styles.contentSubtitle}>Select the Material of your product</span>
                            <div className={styles.specifications}>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input
                                            type='checkbox'
                                            key='Leather'
                                            checked={leather}
                                            onChange={event => {
                                                setLeather(event.target.checked);
                                                onChecked(event, 'productMaterials', 'Leather')
                                            }}
                                        />
                                        <label>Leather</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            type='checkbox'
                                            key='Nylon'
                                            checked={nylon}
                                            onChange={event => {
                                                setNylon(event.target.checked);
                                                onChecked(event, 'productMaterials', 'Nylon')
                                            }}
                                        />
                                        <label>Nylon</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            type='checkbox'
                                            key='Denim'
                                            checked={denim}
                                            onChange={event => {
                                                setDenim(event.target.checked);
                                                onChecked(event, 'productMaterials', 'Denim')
                                            }}
                                        />
                                        <label>Denim</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            type='checkbox'
                                            key='Synthetic Leather'
                                            checked={syntheticLeather}
                                            onChange={event => {
                                                setSyntheticLeather(event.target.checked);
                                                onChecked(event, 'productMaterials', 'Synthetic Leather')
                                            }}
                                        />
                                        <label>Synthetic Leather</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            type='checkbox'
                                            key='Fabric Blend'
                                            checked={fabricBlend}
                                            onChange={event => {
                                                setFabricBlend(event.target.checked);
                                                onChecked(event, 'productMaterials', 'Fabric Blend')
                                            }}
                                        />
                                        <label>Fabric Blend</label>
                                    </div>
                                </div>
                                <div className={styles.specificationsColumn}>
                                    <div className={styles.specification}>
                                        <input
                                            type='checkbox'
                                            key='Canvas'
                                            checked={canvas}
                                            onChange={event => {
                                                setCanvas(event.target.checked);
                                                onChecked(event, 'productMaterials', 'Canvas')
                                            }}
                                        />
                                        <label>Canvas</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            type='checkbox'
                                            key='Canvas'
                                            checked={polyester}
                                            onChange={event => {
                                                setPolyester(event.target.checked);
                                                onChecked(event, 'productMaterials', 'Polyester');
                                            }}
                                        />
                                        <label>Polyester</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            type='checkbox'
                                            key='Canvas'
                                            checked={suede}
                                            onChange={event => {
                                                setSuede(event.target.checked);
                                                onChecked(event, 'productMaterials', 'Suede');
                                            }}
                                        />
                                        <label>Suede</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            type='checkbox'
                                            key='Canvas'
                                            checked={vynil}
                                            onChange={event => {
                                                setVynil(event.target.checked);
                                                onChecked(event, 'productMaterials', 'Vinyl');
                                            }}
                                        />
                                        <label>Vinyl</label>
                                    </div>
                                    <div className={styles.specification}>
                                        <input
                                            type='checkbox'
                                            checked={other}
                                            onChange={event => {
                                                setOther(event.target.checked);
                                                onChecked(event, 'productMaterials', 'Other');
                                            }}
                                        />
                                        <label>Other</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chooseColorBlock}>
                            <span className={styles.chooseColorBlockSubtitle}>Select the Colour of your product</span>
                            <div className={styles.chooseColorItems}>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setColorHandler(purpleColor, 'productColors', 'Purple');
                                        setPurpleColor(!purpleColor);
                                    }}
                                    className={purpleColor ? `${styles.chooseColorItem_purple} ${styles.chooseColorItem} ${styles.chooseColorItem_purple_active}` :`${styles.chooseColorItem_purple} ${styles.chooseColorItem}`}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setColorHandler(purpleColor, 'productColors', 'Green');
                                        setGreenColor(!greenColor);
                                    }}
                                    className={greenColor ? `${styles.chooseColorItem_green} ${styles.chooseColorItem} ${styles.chooseColorItem_green_active}` :`${styles.chooseColorItem_green} ${styles.chooseColorItem}`}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setColorHandler(blackColor, 'productColors', 'Black');
                                        setBlackColor(!blackColor);
                                    }}
                                    className={blackColor ? `${styles.chooseColorItem_black} ${styles.chooseColorItem} ${styles.chooseColorItem_black_active}` :`${styles.chooseColorItem_black} ${styles.chooseColorItem}`}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setColorHandler(blackColor, 'productColors', 'Blue');
                                        setBlueColor(!blueColor);
                                    }}
                                    className={blueColor ? `${styles.chooseColorItem_blue} ${styles.chooseColorItem} ${styles.chooseColorItem_black_active}` :`${styles.chooseColorItem_blue} ${styles.chooseColorItem}`}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setColorHandler(redColor, 'productColors', 'Red');
                                        setRedColor(!blueColor);
                                    }}
                                    className={redColor ? `${styles.chooseColorItem_red} ${styles.chooseColorItem} ${styles.chooseColorItem_red_active}` :`${styles.chooseColorItem_red} ${styles.chooseColorItem}`}
                                />
                                <button className={`${styles.chooseColorItem_addNew}`}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className={styles.formActions}>
                <button onClick={() => setStage(stage - 1)} className={styles.formActionButton}>Back</button>
                <button onClick={() => setStage(3)} className={styles.formActionButtonBlue}>Next</button>
            </div>
        </ModalWindow>
    )
}
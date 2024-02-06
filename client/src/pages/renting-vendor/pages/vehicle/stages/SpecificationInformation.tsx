import React, {ChangeEvent} from 'react';
import styles from "../NewVehicle.module.scss";
import {setProductInformation, vendorProductInfo} from "../../../../../redux/slices/vendorProductInfoSlice.ts";
import {useDispatch, useSelector} from "react-redux";

export const SpecificationInformation = () => {
    const dispatch = useDispatch();
    const data = useSelector(vendorProductInfo);

    const handleInputChange = (
        currentData: object,
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        key: string
    ) => {
        const inputValue = e.target.value;

        dispatch(
            setProductInformation({
                ...currentData,
                [key]: inputValue,
            })
        );
    };

    return (
        <React.Fragment>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Year of Manufacture</label>
                    <input onChange={(event) =>
                        handleInputChange(data.attributes, event, "manufactureCarYear")
                    } type='number' placeholder="Car Manufacture year" />
                </div>
                <div className={styles.inputBox}>
                    <label>Vehicle Plate Number</label>
                    <input onChange={(event) =>
                        handleInputChange(data.attributes, event, "plateNumber")
                    } placeholder="AAA-123" />
                </div>
            </div>
            <div className={styles.inputRadioBox}>
                <span>Vehicle Condition</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            dispatch(
                                setProductInformation({
                                    ...data.attributes,
                                    vehicleCondition: "New Vehicle",
                                })
                            )
                        } type="radio" />
                        <label>New Vehicle</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            dispatch(
                                setProductInformation({
                                    ...data.attributes,
                                    vehicleCondition: "Used Vehicle",
                                })
                            )
                        } type="radio" />
                        <label>Used Vehicle</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Custom specification*</label>
                    <input onChange={(event) =>
                        handleInputChange(data.attributes, event, "customSpecifications")
                    } placeholder="Transmission" />
                </div>
                <div className={styles.inputBox}>
                    <label>Specification details*</label>
                    <input onChange={(event) =>
                        handleInputChange(data.attributes, event, "specificationDetails")
                    } placeholder="Automatic" />
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Fuel type*</label>
                    <input onChange={(event) =>
                        handleInputChange(data.attributes, event, "fuelType")
                    } placeholder="Diesel" />
                </div>
                <div className={styles.inputBox}>
                    <label>Engine capacity*</label>
                    <input onChange={(event) =>
                        handleInputChange(data.attributes, event, "engineCapacity")
                    } placeholder="1000 CC" />
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Seat capacity</label>
                    <input onChange={(event) =>
                        handleInputChange(data.attributes, event, "seatCapacity")
                    } type='number' placeholder="04" />
                </div>
                <div className={styles.inputBox}>
                    <label>Storage Bag capacity</label>
                    <input onChange={(event) =>
                        handleInputChange(data.attributes, event, "storageBagCapacity")
                    } placeholder="1 big bag and one small bag" />
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Air bags</label>
                <input onChange={(event) =>
                    handleInputChange(data.attributes, event, "airBags")
                } type='number' placeholder="02" />
            </div>
        </React.Fragment>
    )
}
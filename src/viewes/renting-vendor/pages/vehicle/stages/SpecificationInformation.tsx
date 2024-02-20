import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewVehicle.module.scss";
import {IVendorProductData} from "@/utils/models/IVendorProductData.tsx";

type SpecificationInformationProps = {
    formData: IVendorProductData;
    setFormData: Dispatch<SetStateAction<IVendorProductData>>;
}

export const SpecificationInformation = ({setFormData, formData}: SpecificationInformationProps) => {

    return (
        <React.Fragment>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Year of Manufacture</label>
                    <input onChange={() =>
                        setFormData({
                            ...formData,
                            attributes: {
                                ...formData.attributes,
                                yearOfManufacture: 'Without Driver'
                            }
                        })
                    } type='number' placeholder="Car Manufacture year" />
                </div>
                <div className={styles.inputBox}>
                    <label>Vehicle Plate Number</label>
                    <input onChange={(event) =>
                        setFormData({...formData, attributes: {
                                ...formData.attributes,
                                vehiclePlateNumber: event.target.value
                            }})
                    } placeholder="AAA-123" />
                </div>
            </div>
            <div className={styles.inputRadioBox}>
                <span>Vehicle Condition</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({...formData, attributes: {
                                    ...formData.attributes,
                                    vehiclePlateNumber: 'New Vehicle'
                                }})
                        } type="radio" />
                        <label>New Vehicle</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input onChange={() =>
                            setFormData({...formData, attributes: {
                                    ...formData.attributes,
                                    vehiclePlateNumber: 'Used Vehicle'
                                }})
                        } type="radio" />
                        <label>Used Vehicle</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Custom specification*</label>
                    <input onChange={(event) =>
                        setFormData({...formData, attributes: {
                                ...formData.attributes,
                                transmission: event.target.value
                            }})
                    } placeholder="Transmission" />
                </div>
                <div className={styles.inputBox}>
                    <label>Specification details*</label>
                    <input onChange={(event) =>
                        setFormData({...formData, attributes: {
                                ...formData.attributes,
                                specificationDetails: event.target.value
                            }})
                    } placeholder="Automatic" />
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Fuel type*</label>
                    <input onChange={(event) =>
                        setFormData({...formData, attributes: {
                                ...formData.attributes,
                                fuelType: event.target.value
                            }})
                    } placeholder="Diesel" />
                </div>
                <div className={styles.inputBox}>
                    <label>Engine capacity*</label>
                    <input onChange={(event) =>
                        setFormData({...formData, attributes: {
                                ...formData.attributes,
                                engineCapacity: event.target.value
                            }})
                    } placeholder="1000 CC" />
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Seat capacity</label>
                    <input onChange={(event) =>
                        setFormData({...formData, attributes: {
                                ...formData.attributes,
                                seatCapacity: event.target.value
                            }})
                    } type='number' placeholder="04" />
                </div>
                <div className={styles.inputBox}>
                    <label>Storage Bag capacity</label>
                    <input onChange={(event) =>
                        setFormData({...formData, attributes: {
                                ...formData.attributes,
                                storageBagCapacity: event.target.value
                            }})
                    } placeholder="1 big bag and one small bag" />
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Air bags</label>
                <input onChange={(event) =>
                    setFormData({...formData, attributes: {
                            ...formData.attributes,
                            airBags: event.target.value
                        }})
                } type='number' placeholder="02" />
            </div>
        </React.Fragment>
    )
}
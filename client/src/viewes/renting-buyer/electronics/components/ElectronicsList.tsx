import React from "react";
import styles from "../RentingElectronicsPage.module.scss";
import Product from "../../components/product/Product.tsx";
import { useElectronics } from "../hooks/useElectronics.tsx";

export default function ElectronicsList() {
    const electronics = useElectronics();

    return (
        <div className={styles.items}>
            {electronics.map((car, index) => {
                return (
                    <Product
                        key={index}
                        id={car._id}
                        image={car.images[0]}
                        title={car.product_name}
                        price_day={car.attributes.dayRentPrice}
                        price_week={car.attributes.weeklyRentPrice}
                        price_month={car.attributes.monthlyRentPrice}
                    />
                );
            })}
        </div>
    );
}

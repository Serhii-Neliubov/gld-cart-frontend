import React from 'react';
import styles from "../RentingHousePage.module.scss";
import Product from "../../components/product/Product.tsx";
import { useHouses } from "../hooks/useHouses.tsx";

export const HouseList = () => {
    const houses = useHouses();

    return (
        <div className={styles.items}>
            {houses.map(house => {
                return (
                    <Product
                        key={house._id}
                        id={house._id}
                        image={house.images[0]}
                        title={house.product_name}
                        price_day={house.attributes.dayRentPrice}
                        price_week={house.attributes.weeklyRentPrice}
                        price_month={house.attributes.monthlyRentPrice}
                    />
                );
            })}
        </div>
    );
}
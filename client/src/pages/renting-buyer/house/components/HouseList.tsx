import React, {useEffect, useState} from 'react';
import styles from "../RentingHousePage.module.scss";
import $api from "../../../../lib/http.ts";
import Product from "../../components/product/Product.tsx";

type house = {
    _id: string,
    product_name: string,
    category: string,
    subcategory: string,
    description: string,
    images: string[],
    attributes: {
        city: string,
        address: string,
        tidiness: string,
        dayRentPrice: string,
        weeklyRentPrice: string,
        monthlyRentPrice: string,
        amountOfWeeks: string,
        amountOfDays: string,
        amountOfMonths: string,
        bedrooms: string,
        washroom: string,
        condition: string,
        countOfStoreys: string,
        areaUnit: string,
        area: string,
        features: string[]
    },
}

export const HouseList = () => {
    const [houses, setHouses] = useState<house[]>([]);

    async function getHouses() {
        try {
            const response = await $api.get('/renting/category/houses');
            setHouses(response.data); // Обновляем состояние cars данными из ответа сервера
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    }

    useEffect(() => {
        getHouses();
    }, []);


    return (
        <div className={styles.items}>
            {houses.map((house, index) => {
                return (
                    <Product
                        key={index}
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
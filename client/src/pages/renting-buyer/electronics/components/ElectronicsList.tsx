import React, {useEffect, useState} from "react";
import styles from "../RentingElectronicsPage.module.scss";
import $api from "../../../../lib/http.ts";
import Product from "../../components/product/Product.tsx";

type electronic = {
    _id: string,
    product_name: string,
    category: string,
    subcategory: string,
    description: string,
    images: string[],
    attributes: {
        driver: string,
        dayRentPrice: string,
        amountOfDays: string,
        weeklyRentPrice: string,
        amountOfWeeks: string,
        monthlyRentPrice: string,
        amountOfMonths: string,
        yearOfManufacture: string,
        vehiclePlateNumber: string,
        transmission: string,
        specificationDetails: string,
        fuelType: string,
        engineCapacity: string,
        seatCapacity: string,
        storageBagCapacity: string,
        airBags: string
    },
}

export default function ElectronicsList() {
    const [electronic, setElectronic] = useState<electronic[]>([]);

    async function getCars() {
        try {
            const response = await $api.get('/products/search/category/electronics');
            setElectronic(response.data); // Обновляем состояние cars данными из ответа сервера
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    }

    useEffect(() => {
        getCars();
    }, []);

    console.log(electronic);

    return (
        <div className={styles.items}>
            {electronic.map((car, index) => {
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

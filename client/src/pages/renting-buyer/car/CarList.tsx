import React, {useEffect, useState} from "react";
import styles from "./RentingCarPage.module.scss";
import CarItem from "./CarItem";
import $api from "../../../lib/http.ts";

type car = {
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

export default function CarList() {
  const [cars, setCars] = useState<car[]>([]);

  async function getCars() {
    try {
      const response = await $api.get('/products?category=vehicles');
      setCars(response.data); // Обновляем состояние cars данными из ответа сервера
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  }

  useEffect(() => {
    getCars();
  }, []);

  console.log(cars);

  return (
    <div className={styles.items}>
      {cars.map((car) => {
        return (
            <div>
              <h1>{car.product_name}</h1>
              <h2>{car.description}</h2>
              <h2>{car.description}</h2>
            </div>
            // <CarItem
            //     key={index}
          //   id={car.id}
          //   image={car.image}
          //   title={car.title}
          //   price_day={car.price_day}
          //   price_week={car.price_week}
          //   price_month={car.price_month}
          //   advantage1={car.advantage1}
          //   advantage2={car.advantage2}
          //   advantage3={car.advantage3}
          //   advantage4={car.advantage4}
          //   advantage5={car.advantage5}
          //   advantage6={car.advantage6}
          //   taxes={car.taxes}
          //   total_price={car.total_price}
          // />
        );
      })}
    </div>
  );
}

import React from "react";
import styles from "./RentingCarPage.module.scss";
import { RentingCarData } from "../../../utils/RentingCarData";
import CarItem from "./CarItem";

export default function CarList() {
  return (
    <div className={styles.items}>
      {RentingCarData.map((car) => {
        return (
          <CarItem
            id={car.id}
            image={car.image}
            title={car.title}
            price_day={car.price_day}
            price_week={car.price_week}
            price_month={car.price_month}
            advantage1={car.advantage1}
            advantage2={car.advantage2}
            advantage3={car.advantage3}
            advantage4={car.advantage4}
            advantage5={car.advantage5}
            advantage6={car.advantage6}
            taxes={car.taxes}
            total_price={car.total_price}
          />
        );
      })}
    </div>
  );
}

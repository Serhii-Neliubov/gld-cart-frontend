import React from "react";
import styles from "../RentingCarPage.module.scss";
import Product from "../../components/product/Product.tsx";
import {useCars} from "../hooks/useCars.tsx";

export default function CarList() {
  const cars = useCars();

  return (
    <div className={styles.items}>
      {cars.map((car) => {
        return (
            <Product
                key={car._id}
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

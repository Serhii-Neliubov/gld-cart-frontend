import React, {useEffect} from "react";
import styles from "../RentingCarPage.module.scss";
import Product from "../../components/product/Product.tsx";
import { useCars } from "../hooks/useCars.tsx";
import $api from "@/utils/interceptors/interceptors.ts";

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
  const [cars, setCars] = React.useState([]);

  const getCars = async () => {
    const response = await $api.get("/renting/category/vehicles");

    if (response) setCars(response.data);
  }

  useEffect(() => {
    getCars();
  }, []);
  
  return (
    <div className={styles.items}>
      {cars.map((car: car) => {
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

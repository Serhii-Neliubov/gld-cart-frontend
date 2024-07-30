import React, { FC } from "react";
import styles from "./RentingProducts.module.scss";
import Footer from "@/components/Footer.tsx";
import {useParams} from "react-router-dom";

// type car = {
//   _id: string,
//   product_name: string,
//   category: string,
//   subcategory: string,
//   description: string,
//   images: string[],
//   attributes: {
//     driver: string,
//     dayRentPrice: string,
//     amountOfDays: string,
//     weeklyRentPrice: string,
//     amountOfWeeks: string,
//     monthlyRentPrice: string,
//     amountOfMonths: string,
//     yearOfManufacture: string,
//     vehiclePlateNumber: string,
//     transmission: string,
//     specificationDetails: string,
//     fuelType: string,
//     engineCapacity: string,
//     seatCapacity: string,
//     storageBagCapacity: string,
//     airBags: string
//   },
// }

const RentingProducts: FC = () => {
  const {category} = useParams();

  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <h1 className={styles.title}>Rental <span>{category}</span> Listings</h1>
          <div className={styles.content}>
            <div className={styles.filter}>
              <div className={styles.filter_content}>
                <h5 className={styles.filter_title}>Price Filter</h5>
                <div className={styles.filter_label} />
                <div className={styles.filter_price}>
                  <div className={styles.filter_price_text}>
                    <p>$0</p>
                    <p>$1199</p>
                  </div>

                  <button>Filter</button>
                </div>
                <div className={styles.filter_blocks}>
                  <button className={styles.filter_block}>
                    <img src="../../../../assets/images/RentingCar/Vector-5.svg" alt="Img" />
                    <p>Select Location</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="../../../../assets/images/RentingCar/Vector-1.svg" alt="Img" />
                    <p>Pik-up Date</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="../../../../assets/images/RentingCar/Vector-2.svg" alt="Img" />
                    <p>Pik-up Time</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="../../../../assets/images/RentingCar/Vector-3.svg" alt="Img" />
                    <p>Drop-off Date</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="../../../../assets/images/RentingCar/Vector-4.svg" alt="Img" />
                    <p>Drop-off Time</p>
                  </button>
                </div>
                <div className={styles.reset}>
                  <span className={styles.reset_text}>Reset Filter</span>
                  <button className={styles.reset_button}>Reset Filter</button>
                </div>
              </div>
              <button className={styles.filter_button}>FIND MY RENTALS</button>
            </div>
            {/*{loading ? <div>Loading...</div> :*/}
            {/*  <div className={styles.items}>*/}
            {/*    {data.map((car: car) => {*/}
            {/*      return (*/}
            {/*        <RentingItem*/}
            {/*          key={car._id}*/}
            {/*          id={car._id}*/}
            {/*          image={car.images[0]}*/}
            {/*          title={car.product_name}*/}
            {/*          price_day={car.attributes.dayRentPrice}*/}
            {/*          price_week={car.attributes.weeklyRentPrice}*/}
            {/*          price_month={car.attributes.monthlyRentPrice}*/}
            {/*        />*/}
            {/*      );*/}
            {/*    })}*/}
            {/*  </div>*/}
            {/*}*/}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default RentingProducts;

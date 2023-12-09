import React from "react";
import styles from "./RentingCarPage.module.scss";
import { useNavigate } from "react-router-dom";

type CarItemProps = {
  id: number;
  image: string;
  title: string;
  price_day: string;
  price_week: string;
  price_month: string;
  advantage1: string;
  advantage2: string;
  advantage3: string;
  advantage4: string;
  advantage5: string;
  advantage6: string;
  taxes: string;
  total_price: string;
};

export default function CarItem({
  id,
  image,
  title,
  price_day,
  price_week,
  price_month,
  advantage1,
  advantage2,
  advantage3,
  advantage4,
  advantage5,
  advantage6,
  taxes,
  total_price,
}: CarItemProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={image} alt="Image" />
      </div>
      <div className={styles.item_text}>
        <h2 className={styles.item_title}>{title}</h2>
        <div className={styles.item_prices}>
          <div className={styles.item_price}>${price_day}/Day</div>
          <div className={styles.item_price}>${price_week}/Week</div>
          <div className={styles.item_price}>${price_month}/Month</div>
        </div>
        <div className={styles.advantages}>
          <span className={styles.advantage}>{advantage1}</span>
          <span className={styles.advantage}>{advantage2}</span>
          <span className={styles.advantage}>{advantage3}</span>
          <span className={styles.advantage}>{advantage4}</span>
          <span className={styles.advantage}>{advantage5}</span>
          <span className={styles.advantage}>{advantage6}</span>
        </div>
      </div>
      <div className={styles.total}>
        <div className={styles.total_price}>
          <h3>Total Rental Price</h3>
          <p>{taxes}</p>
          <span>${total_price}</span>
        </div>
        <button onClick={() => navigate(`/renting-car/${id}`)}>Reserve</button>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./RentingItem.module.scss";
import { useNavigate } from "react-router-dom";

type ProductProps = {
    id: string;
    image: string;
    title: string;
    price_day: string;
    price_week: string;
    price_month: string;
};

export default function RentingItem({id, image, title, price_day, price_week, price_month}: ProductProps) {

    const navigate = useNavigate();
    const total_price = (Number(price_day) + Number(price_week) + Number(price_month)) / 3;

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
                    <span className={styles.advantage}>Luxury Limousine Selection</span>
                    <span className={styles.advantage}>High Safety and Nudity</span>
                    <span className={styles.advantage}>Fixed Price & Bonus System</span>
                    <span className={styles.advantage}>100% Luxurious Fleet</span>
                    <span className={styles.advantage}>Clean, Polite & Knowledgeable</span>
                    <span className={styles.advantage}>Incl.taxes</span>
                </div>
            </div>
            <div className={styles.total}>
                <div className={styles.total_price}>
                    <h3>Total Rental Price</h3>
                    <p>Incl. taxes</p>
                    <span>${total_price.toFixed(0)}</span>
                </div>
                <button onClick={() => navigate(`/renting-car/${id}`)}>Reserve</button>
            </div>
        </div>
    );
}

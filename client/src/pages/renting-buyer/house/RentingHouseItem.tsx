import React from 'react';
import styles from "./RentingHousePage.module.scss";

type RentingCarItemProps = {
    imageURL: string,
    title: string,
    dailyPrice: string,
    weeklyPrice: string,
    monthlyPrice: string,
    advantages: string[],
    areTaxesInclude: boolean,
    totalPrice: string,
}

export const RentingHouseItem = (
    {
        imageURL,
        title,
        dailyPrice,
        weeklyPrice,
        monthlyPrice,
        advantages,
        areTaxesInclude,
        totalPrice
    }: RentingCarItemProps) => {
    return <div className={styles.item}>
        <div className={styles.image}>
            <img src={imageURL} alt="Image"/>
        </div>
        <div className={styles.item_text}>
            <h2 className={styles.item_title}>{title}</h2>
            <div className={styles.item_prices}>
                <div className={styles.item_price}>${dailyPrice}/Day</div>
                <div className={styles.item_price}>{weeklyPrice}/Week</div>
                <div className={styles.item_price}>${monthlyPrice}/Month</div>
            </div>
            <div className={styles.advantages}>
                {advantages.map((advantage) =>
                    <span className={styles.advantage}>
                      {advantage}
                    </span>
                )}
            </div>
        </div>
        <div className={styles.total}>
            <div className={styles.total_price}>
                <h3>Total Rental Price</h3>
                <p>{areTaxesInclude ? "Incl.taxes" : "No incl.taxes"}</p>
                <span>${totalPrice}</span>
            </div>
            <button>Reserve</button>
        </div>
    </div>
}
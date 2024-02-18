import React from 'react';
import {useTranslation} from "react-i18next";
import {BestSellingItems} from "./BestSellingItem.tsx";

const bestSellingItems: BestSellingItems[] = [
    {
        image: 'src/assets/images/HomePage/best-sellings/best1.png',
        title: 'Giorgio Armani',
        price: '1250',
        price_discount: '2190',
        discount_percent: '43',
    },
    {
        image: 'src/assets/images/HomePage/best-sellings/best1.png',
        title: 'Giorgio Armani',
        price: '1250',
        price_discount: '2190',
        discount_percent: '43',
    },
    {
        image: 'src/assets/images/HomePage/best-sellings/best1.png',
        title: 'Giorgio Armani',
        price: '1250',
        price_discount: '2190',
        discount_percent: '43',
    },
]

export const BestSellings = () => {
    const { t } = useTranslation();

    return (
        <div className="page__best-sellings best-sellings">
            <div className="best-sellings__container">
                <div className="best-sellings__see-more">
                    <h3>{t("Best Selling For Woman’s")}</h3>
                    <p>{t("Easiest way to Buy best and good quality product")}</p>
                    <button>{t("See more")}</button>
                </div>
                <div className="best-sellings__blocks blocks">
                    <button className="blocks__arrow blocks__arrow_left"></button>
                    <div className="blocks__items">

                        {bestSellingItems.map((item, index) => {
                            return <BestSellingItems
                                key={index}
                                image={item.image}
                                price={item.price}
                                title={item.title}
                                price_discount={item.price_discount}
                                discount_percent={item.discount_percent}
                            />
                        })}
                    </div>
                    <button className="blocks__arrow blocks__arrow_right"></button>
                </div>
            </div>
        </div>
    )
}
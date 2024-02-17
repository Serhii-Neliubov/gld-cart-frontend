import React from 'react';
import {useTranslation} from "react-i18next";

export type BestSellingItems = {
    image: string,
    price: string,
    title: string,
    price_discount: string,
    discount_percent: string,
}

export const BestSellingItems = ({image, title, price, price_discount, discount_percent}: BestSellingItems) => {
    const { t } = useTranslation();

    return (
        <div className="best-sellings__block blocks__item">
            <picture>
                <img
                    className="blocks__image"
                    src={image}
                    alt="Image"
                />
            </picture>
            <h4 className="blocks__title">{title}</h4>
            <div className="blocks__desc">
                <p className="blocks__price">₹{price}</p>
                <p className="blocks__discount">₹{price_discount}</p>
                <p className="blocks__percent">{discount_percent}% {t("off")}</p>
            </div>
        </div>
    )
}
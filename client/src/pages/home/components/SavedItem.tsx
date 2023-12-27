import React from 'react';
import { useTranslation } from "react-i18next";

export type SavedItem = {
    title: string,
    backgroundImage: string,
    price: string,
    desc: string,
}

type SavedItemProps = {
    item: SavedItem,
    index: number
}

export const SavedItem = ({ item }: SavedItemProps) => {
    const { t } = useTranslation();

    return (
        <div className="saved__item">
            <div
                className="saved__image"
                style={{backgroundImage: `${item.backgroundImage}`}}
            ></div>
            <div className="saved_item-price">{item.title}</div>
            <span className="saved__price">{item.price}</span>
            <p className="saved__desc">{item.desc}</p>
            <button className="saved__button">{t("Move to cart")}</button>
        </div>
    )
}
import React from 'react';
import { useTranslation } from "react-i18next";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";
import ShoppingCart from "@/services/ShoppingCartService.ts";

export type SavedItem = {
    title: string,
    image: string,
    price: number,
    description: string,
    quantity: number,
}

type SavedItemProps = {
    item: SavedItem,
    index: number
}

export const SavedItem = ({ item }: SavedItemProps) => {
    const { t } = useTranslation();
    const user = useSelector(userDataSelector)

    function sendCartItemHandler(item: SavedItem) {
        try{
            const response = ShoppingCart.sendShoppingCartItems(
                item.title,
                item.description,
                item.price,
                item.image,
                item.quantity,
                user.id
            )
            console.log(response)
        } catch (e){
            console.log(e)
        }
    }

    return (
        <div className="saved__item">
            <div
                className="saved__image"
                style={{backgroundImage: `${item.image}`}}
            ></div>
            <div className="saved_item-price">{item.title}</div>
            <span className="saved__price">${item.price}</span>
            <p className="saved__desc">{item.description}</p>
            <button onClick={() => sendCartItemHandler(item)} className="saved__button">{t("Move to cart")}</button>
        </div>
    )
}
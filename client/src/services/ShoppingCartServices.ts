import { AxiosResponse } from "axios";
import $api from "../lib";

export default class ShoppingCart {
    static async sendShoppingCartItems(
        title: string,
        description: string,
        price: string,
        image: string,
        quantity: number,
    ): Promise<AxiosResponse> {
        return $api.post(
            "/add-cart-item",
            {
                title,
                description,
                price,
                image,
                quantity,
            },
        );
    }

    static async getShoppingCartItems(id: string): Promise<AxiosResponse> {
        return $api.get(`/cart/${id}`, );
    }
}
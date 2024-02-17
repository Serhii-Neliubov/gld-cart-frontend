import { AxiosResponse } from "axios";
import $api from "@/utils/interceptors/interceptors.ts";
export default class ShoppingCart {
    static async sendShoppingCartItems(
        title: string,
        description: string,
        price: number,
        image: string,
        quantity: number,
        userId: string
    ): Promise<AxiosResponse> {
        return $api.post(
            "/add-cart-item",
            {
                title,
                description,
                price,
                image,
                quantity,
                userId
            },
        );
    }

    static async getShoppingCartItems(id: string): Promise<AxiosResponse> {
        return $api.get(`/cart/${id}`, );
    }
}
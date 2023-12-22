import { AxiosResponse } from "axios";
import $api from "../http";

export default class PaymentServices {

    static async paymentRedirect(
        userId: string,
        lookup_key: string
    ): Promise<AxiosResponse> {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const body = $api.post(
            "/create-subscription-checkout",
            {
                userId,
                lookup_key,
            },
            { headers }
        );
        return body;
    }

}
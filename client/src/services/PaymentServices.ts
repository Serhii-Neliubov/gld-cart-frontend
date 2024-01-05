import { AxiosResponse } from "axios";
import $api from "../lib/http.ts";

export default class PaymentServices {

    static async paymentRedirect(
        userId: string,
        lookup_key: string
    ): Promise<AxiosResponse> {
        const body = $api.post(
            "/create-subscription-checkout",
            {
                userId,
                lookup_key,
            },
        );
        return body;
    }

}
import { AxiosResponse } from "axios";
import $api from "@/utils/interceptors/interceptors.ts";

export default class PaymentService {

    static async paymentRedirect(
        userId: string,
        lookup_key: string
    ): Promise<AxiosResponse> {
        return $api.post(
            "/create-subscription-checkout",
            {
                userId,
                lookup_key,
            },
        );
    }

}
import { AxiosResponse } from "axios";
import $api from "../lib";

export default class AddressServices {
    static async sendAddress(
        email: string,
        recipients_name: string,
        street_address: string,
        city: string,
        country: string,
        ZIP_code: number | undefined,
        phone_number: string
    ): Promise<AxiosResponse> {
        return $api.post(
            "/add-address",
            {
                email,
                recipients_name,
                street_address,
                city,
                country,
                ZIP_code,
                phone_number,
            },
        );
    }

    static async getAddresses(id: string): Promise<AxiosResponse> {
        return $api.get(`/get-addresses/${id}`, );
    }
}
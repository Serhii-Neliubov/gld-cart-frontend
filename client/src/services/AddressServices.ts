import { AxiosResponse } from "axios";
import $api from "../lib";

export default class AddressServices {
    static async sendAddress(
        userId: string,
        addressData: {
            recipients_name: string;
            street_address: string;
            city: string;
            country: string;
            ZIP_code: number | undefined;
            phone_number: string
        }
    ): Promise<AxiosResponse> {
        return $api.post(
            "/add-address",
            {
                userId,
                addressData
            },
        );
    }

    static async updateAddress(
        userId: string,
        addressId: string,
        addressData: {
            recipients_name: string;
            street_address: string;
            city: string;
            country: string;
            ZIP_code: number | undefined;
            phone_number: string
        }
    ): Promise<AxiosResponse> {
        console.log({userId, addressData, addressId,})
        return $api.put(
            "/update-address",
            {
                userId,
                addressId,
                addressData
            },
        );
    }

    static async getAddresses(id: string): Promise<AxiosResponse> {
        return $api.get(`/get-address/${id}`, );
    }
}
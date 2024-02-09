import { AxiosResponse } from "axios";
import $api from "../lib/http.ts";
import IUser from "../models/IUser.ts";


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
        console.log(addressData);
        return $api.post(
            `/address/${userId}`,
            {
                ...addressData
            },
        );
    }

    static async updateAddresses(user: IUser){
        const response = await AddressServices.getAddresses(user.id);
        return response.data;
    }

    static async changeAddress(
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
            `/address/${userId}/${addressId}`,
            {
                ...addressData
            },
        );
    }

    static async getAddresses(id: string): Promise<AxiosResponse> {
        return $api.get(`/address/${id}`, );
    }
}
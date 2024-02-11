import { AxiosResponse } from "axios";
import $api from "../lib/http.ts";
import toast from "react-hot-toast";


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
    ) {
        try {
            toast.success("Address was added successfully");
            return $api.post(
                `/address/${userId}`,
                {
                    ...addressData
                },
            );
        } catch (error) {
            toast.error("An error occurred while sending the address");
        }

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
    ) {
        try {
            toast.success("Address changed successfully");
            return $api.put(
                `/address/${userId}/${addressId}`,
                {
                    ...addressData
                },
            );
        } catch (error) {
            toast.error("An error occurred while changing the address");
        }
    }

    static async getAddresses(id: string): Promise<AxiosResponse> {
        return $api.get(`/address/${id}`, );
    }
}
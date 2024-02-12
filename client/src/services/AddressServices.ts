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
            await $api.post(
                `/address/${userId}`,
                {
                    ...addressData
                },
            );

            toast.success("Address was added successfully");

            return { success: true };
        } catch (error) {
            toast.error("An error occurred while sending the address");

            return { success: false };
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
            await $api.put(
                `/address/${userId}/${addressId}`,
                {
                    ...addressData
                },
            );
            toast.success("Address changed successfully");
            return { success: true };
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred while changing the address");
            }
            return { success: false };
        }
    }

    static async getAddresses(id: string): Promise<AxiosResponse> {
        return $api.get(`/address/${id}`, );
    }
}
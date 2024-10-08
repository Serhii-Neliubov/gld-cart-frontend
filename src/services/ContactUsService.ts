import {IMessageData} from "../utils/models/IMessageData.ts";
import toast from "react-hot-toast";
import $api from "@/utils/interceptors/interceptors.ts";

export class ContactUsService {
    static async sendMessage(message: IMessageData) {
        try {
            return await $api.post(
                `/contact/email`,
                message
            );
        } catch (error) {
            toast.error("Error to sending message");
        }
    }
}
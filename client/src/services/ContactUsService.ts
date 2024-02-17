import {IMessageData} from "../utils/models/IMessageData.ts";
import toast from "react-hot-toast";
import $api, {API_URL} from "../utils/interceptors/interceptors.ts";

export class ContactUsService {
    static async sendMessage(message: IMessageData) {
        try {
            toast.success("Please wait, we are sending your message...");
            return await $api.post(
                `${API_URL}/contact/email`,
                message
            );
        } catch (error) {
            toast.error("Error to sending message");
        }
    }
}
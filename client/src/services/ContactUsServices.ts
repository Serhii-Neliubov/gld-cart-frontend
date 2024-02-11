import $api, {API_URL} from "../lib/http.ts";
import {IMessageData} from "../models/IMessageData.ts";
import toast from "react-hot-toast";

export class ContactUsServices{
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
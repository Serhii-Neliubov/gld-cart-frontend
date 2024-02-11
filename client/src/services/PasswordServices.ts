import $api, {API_URL} from "../lib/http.ts";
import toast from "react-hot-toast";

export class PasswordServices{
    static async sendResetEmail(email: string) {
        try {
            return await $api.post(
                `${API_URL}/password/initiate`,
                {
                    email
                },
            );
        } catch (error) {
            toast.error("An error occurred while sending the email");
        }
    }

    static async sendResetPassword(password: string, token: string | undefined) {
        try {
            return await $api.post(
                `${API_URL}/password/reset/${token}`,
                {
                    newPassword: password
                },
            );
        } catch (error) {
            toast.error("");
        }
    }
}
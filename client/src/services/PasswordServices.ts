import $api, {API_URL} from "../lib/http.ts";
import toast from "react-hot-toast";


export class PasswordServices{
    static async sendResetEmail(email: string) {
        try {
            await $api.post(
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
            await $api.post(
                `${API_URL}/password/reset/${token}`,
                {
                    newPassword: password
                },
            );
        } catch (error) {
            toast.error("");
        }
    }

    static async changeOldPassword(newPassword: string, oldPassword: string, email: string | undefined, confirmPassword: string,) {
        try {
            if (newPassword == confirmPassword) {
                await $api.post(
                    `${API_URL}/password/reset`,
                    {
                        newPassword: newPassword,
                        oldPassword: oldPassword,
                        email: email
                    },
                );
                return { success: true };
            } else {
                toast.error("Passwords do not match");
                return { success: false };
            }
        } catch (error) {
            toast.error("Your old password is incorrect");
            return { success: false };
        }
    }

}
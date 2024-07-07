import toast from "react-hot-toast";
import $api from "@/utils/interceptors/interceptors.ts";


export class PasswordService {
    static async sendResetEmail(email: string) {
        try {
            await $api.post(
                `/password/initiate`,
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
                `/password/reset/${token}`,
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
            if(newPassword !== confirmPassword){
                toast.error("Passwords do not match");

                return { success: false };
            }

            await $api.post(
                `/password/reset`,
                {
                    newPassword: newPassword,
                    oldPassword: oldPassword,
                    email: email
                },
            );

            return { success: true };
        } catch (error) {
            toast.error("Your old password is incorrect");
            return { success: false };
        }
    }

}
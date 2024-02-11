import $api, {API_URL} from "../lib/http.ts";
import toast from "react-hot-toast";

export class ChangeProfileDataServices {
    static async updateProfileData(filledFields: object) {
        try {
            await $api.put(`${API_URL}/personal/details`, filledFields);
            toast.success("Profile updated successfully");
        }
        catch (error) {
            toast.error("Error with updating profile");
        }
    }
}
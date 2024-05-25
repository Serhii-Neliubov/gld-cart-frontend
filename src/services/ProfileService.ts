import toast from "react-hot-toast";
import $api, {API_URL} from "@utils/interceptors.ts";

export class ProfileService {
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
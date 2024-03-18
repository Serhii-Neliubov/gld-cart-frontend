import $api, {API_URL} from "@/utils/interceptors/interceptors.ts";
import IUser from "@/utils/models/IUser.ts";
export default class Wishlist {
  static async removeItem (itemId: string | undefined, userId: string) {
    try {
      const response = await $api.delete(`${API_URL}/wishlist`, {
        data: {
          userId: userId,
          product: itemId,
        }
      });

      return response.data.items;
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }

  }

  static async addItem (productId: string, userId: string) {
    console.log({
      userId: userId,
      item: {
        product: productId,
      }
    });

    try {
      await $api.post(`${API_URL}/wishlist`, {
        userId: userId,
        item: {
          product: productId,
        }
      });
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
    }
  }

  static async getItems (user: IUser) {
    try {
      const response = await $api.get(`${API_URL}/wishlist/${user.id}`);

      return response.data;
    } catch (e) {
      console.error("Error fetching wishlist items:", e);
    }
  }
}
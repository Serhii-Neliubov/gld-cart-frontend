import $api, {API_URL} from "@/utils/interceptors/interceptors.ts";
import IUser from "@/utils/models/IUser.ts";
export default class Wishlist {
  static async removeItem (itemId: string, userId: string) {
    const response = await $api.delete(`${API_URL}/wishlist`, {
      data: {
        userId: userId,
        product: itemId,
      }
    });

    return response.data.items;
  }

  static async addItem (productId: string | undefined, userId: string) {
    await $api.post(`${API_URL}/wishlist`, {
      userId: userId,
      item: {
        product: productId,
      }
    });
  }

  static async getItems (user: IUser) {
    const response = await $api.get(`${API_URL}/wishlist/${user.id}`);

    return response.data.items;
  }
}
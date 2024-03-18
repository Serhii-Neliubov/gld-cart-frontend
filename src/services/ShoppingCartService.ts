import $api, {API_URL} from "@/utils/interceptors/interceptors.ts";
export default class ShoppingCart {
  static async addToCart (productId: string | undefined, userId: string, quantity: number) {
    console.log({
      userId: userId,
      item: {
        product: productId,
        quantity: quantity,
      }
    })
    try {
      await $api.post(`${API_URL}/cart/add-item`, {
        userId: userId,
        item: {
          product: productId,
          quantity: quantity,
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  static async removeItem (itemId: string, userId: string) {
    try {
      const response = await $api.delete(`${API_URL}/cart/remove-item`, {
        data: {
          userId: userId,
          product: itemId,
        }
      });

      return response.data.items;
    } catch (error) {
      console.error(error);
    }
  }

  static async getItems (userId: string) {
    try {
      const response = await $api.get(`${API_URL}/cart/user/${userId}`);
      return response.data.items;
    } catch (e) {
      console.log(e);
    }
  }
}
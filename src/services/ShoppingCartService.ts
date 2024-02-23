import $api, {API_URL} from "@/utils/interceptors/interceptors.ts";
export default class ShoppingCart {
  static async addToCart (productId: string | undefined, userId: string) {
    await $api.post(`${API_URL}/cart/add-item`, {
      userId: userId,
      item: {
        product: productId,
      }
    });
  }

  static async removeItem (itemId: string, userId: string) {
    const response = await $api.delete(`${API_URL}/cart/remove-item`, {
      data: {
        userId: userId,
        product: itemId,
      }
    });

    return response.data.items;
  }
}
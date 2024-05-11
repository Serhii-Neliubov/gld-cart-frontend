import $api, {API_URL} from "@/utils/interceptors/interceptors.ts";
import {TypeCartItem} from "@/utils/models/ICartItem.ts";
export default class ShoppingCart {
  static async addToCart (productId: string | undefined, userId: string, quantity: number) {
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
          productId: itemId,
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
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async updateItemQuantity(userId: string, item: TypeCartItem) {
    try {
      return await $api.put(`${API_URL}/cart/update-quantity`, {
        userId: userId,
        item: item,
      });
    } catch (error) {
      console.error(error);
    }
  }

  static async getSubTotal(userId: string) {
    try {
      const response = await $api.get(`${API_URL}/cart/user/${userId}`);
      return response.data.subtotal;
    } catch (e) {
      console.log(e);
    }
  }
}
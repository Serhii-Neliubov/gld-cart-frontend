import {TypeCartItem} from "models/ICartItem.ts";
import $api from "utils/interceptors.ts";

export default class ShoppingCartService {
  static async addToCart (productId: string | undefined, userId: string, quantity: number) {
    try {
      await $api.post(`/cart/add-item`, {
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
      const response = await $api.delete(`/cart/remove-item`, {
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
      const response = await $api.get(`/cart/user/${userId}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async updateItemQuantity(userId: string, item: TypeCartItem) {
    try {
      return await $api.put(`/cart/update-quantity`, {
        userId: userId,
        item: item,
      });
    } catch (error) {
      console.error(error);
    }
  }

  static async getSubTotal(userId: string) {
    try {
      const response = await $api.get(`/cart/user/${userId}`);
      return response.data.subtotal;
    } catch (e) {
      console.log(e);
    }
  }
}
import $api from "@/utils/interceptors.ts";

export default class Wishlist {
  static async removeItem (itemId: string | undefined, userId: string) {
    try {
      const response = await $api.delete(`/wishlist/remove-item`, {
        data: {
          userId: userId,
          productId: itemId,
        }
      });

      return response.data.items;
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }

  }

  static async addItem (productId: string, userId: string) {
    try {
      await $api.post(`/wishlist`, {
        userId: userId,
        item: {
          product: productId,
        }
      });
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
    }
  }

  static async getItems (userId: string) {
    try {
      const response = await $api.get(`/wishlist/${userId}`);

      return response.data.items;
    } catch (e) {
      console.error("Error fetching wishlist items:", e);
    }
  }
}
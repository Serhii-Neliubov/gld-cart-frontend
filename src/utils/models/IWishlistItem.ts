export type WishlistItem = {
  product: {
    "reviews": [],
    "_id": string,
    "product_name": string,
    "category": string,
    "subcategory": string,
    "description": string,
    "images": string[],
    "attributes": object,
  },
  _id: string,
  createdAt: string,
  updatedAt: string,
}
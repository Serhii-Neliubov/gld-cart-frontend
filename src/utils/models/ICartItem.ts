export type TypeCartItem = {
  product: {
    reviews: [];
    price: number;
    _id: string;
    product_name: string;
    category: string;
    subcategory: string;
    description: string;
    images: string[];
    attributes: object;
  };
  quantity: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
};
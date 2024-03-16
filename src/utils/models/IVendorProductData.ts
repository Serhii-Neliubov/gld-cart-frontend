export type IVendorProductData = {
    title: string;
    description: string;
    attributes: { [key: string]: string | string[] };
    images: File[];
    price: number;
    stock: number;
    category?: string;
    discountPrice?: number;
    subcategory?: string;
    renting_name?: string;
    service_name?: string;
    product_name?: string;
}
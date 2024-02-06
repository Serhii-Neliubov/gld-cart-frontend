export type IVendorProductData = {
    title: string;
    description: string;
    attributes: { [key: string]: string };
    images: File[];
    category: string;
    subcategory: string;
    product_name: string;
}
export type IVendorProductData = {
    title: string;
    description: string;
    attributes: { [key: string]: string | string[] };
    images: File[];
    category: string;
    subcategory: string;
    renting_name?: string;
    service_name?: string;
    product_name?: string;
}
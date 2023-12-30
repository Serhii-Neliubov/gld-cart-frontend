import {Router} from "express";
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct
} from "../controllers/productController";

export const productRoutes = Router();

productRoutes.get('/products', getAllProducts);

productRoutes.get('/products/:productId:', getProductById);

productRoutes.post('/product', createProduct);

productRoutes.put('/products/:productId', updateProduct);

productRoutes.delete('/products/:productId', deleteProduct);
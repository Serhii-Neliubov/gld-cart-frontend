import { Request, Response } from 'express';
import  ProductService from '../services/productService';
import { IProduct } from '../models/Product';


export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await ProductService.getAllProducts();
        res.status(200).json(products);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.productId;
        const product = await ProductService.getProductById(productId);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json(product);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const productData: Partial<IProduct> = req.body;
        const newProduct = await ProductService.createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.productId;
        const updatedData: Partial<IProduct> = req.body;
        const updatedProduct = await ProductService.updateProduct(productId, updatedData);
        if (!updatedProduct) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json(updatedProduct);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.productId;
        const deleted = await ProductService.deleteProduct(productId);
        if (!deleted) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

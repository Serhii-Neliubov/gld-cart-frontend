import {Logger} from "../util/logger";
import ProductModel, {IProduct} from "../models/ProductModel";

class ProductService {
    private logger: Logger;
    constructor() {
        this.logger = new Logger()
    }
    async getAllProducts(): Promise<IProduct[]> {
    try {
      this.logger.logInfo('Getting all products');
      return await ProductModel.find();
    } catch (error: any) {
      this.logger.logError(`Error fetching all products: ${error.message}`);
      throw error;
    }
  }

  async getProductById(productId: string): Promise<IProduct | null> {
    try {
      this.logger.logInfo(`Getting product with ID: ${productId}`);
      return await ProductModel.findById(productId);
    } catch (error: any) {
      this.logger.logError(`Error fetching product with ID ${productId}: ${error.message}`);
      throw error;
    }
  }

  async createProduct(productData: Partial<IProduct>): Promise<IProduct> {
    try {
      this.logger.logInfo('Creating new product');
      const newProduct = new ProductModel(productData);
      return await newProduct.save();
    } catch (error: any) {
      this.logger.logError(`Error creating product: ${error.message}`);
      throw error;
    }
  }

  async updateProduct(productId: string, updatedData: Partial<IProduct>): Promise<IProduct | null> {
    try {
      this.logger.logInfo(`Updating product with ID: ${productId}`);
      return await ProductModel.findByIdAndUpdate(productId, updatedData, { new: true });
    } catch (error: any) {
      this.logger.logError(`Error updating product with ID ${productId}: ${error.message}`);
      throw error;
    }
  }

  async deleteProduct(productId: string): Promise<boolean> {
    try {
      this.logger.logInfo(`Deleting product with ID: ${productId}`);
      const result = await ProductModel.deleteOne({ _id: productId });
      return result.deletedCount !== 0;
    } catch (error:any) {
      this.logger.logError(`Error deleting product with ID ${productId}: ${error.message}`);
      throw error;
    }
  }

  async searchProductsByCategory(category: string): Promise<IProduct[]> {
    try {
      this.logger.logInfo(`Searching products by category: ${category}`);
      return await ProductModel.find({ category });
    } catch (error:any) {
      this.logger.logError(`Error searching products by category ${category}: ${error.message}`);
      throw error;
    }
  }
}
export default new ProductService();
import * as cartController from "../controllers/cartController";
import {Router} from "express";
import {requireAuth} from "../middlewares/authMiddleware";

export const cartRoutes: Router = Router();

cartRoutes.get("/cart", requireAuth, cartController.getCartItems);
cartRoutes.post("/add-cart-item", requireAuth, cartController.addCartItemHandler);
cartRoutes.delete("/delete-cart-item", requireAuth, cartController.deleteCartItemHandler);

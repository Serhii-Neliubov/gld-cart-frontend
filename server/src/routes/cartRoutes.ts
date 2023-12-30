import {Router} from "express";
import {requireAuth} from "../middlewares/authMiddleware";
import {addCartItemHandler, removeCartItemHandler, getCartItems} from "../controllers/cartController";

export const cartRoutes: Router = Router();

cartRoutes.get("/cart", requireAuth, getCartItems);
cartRoutes.post("/add-cart-item", requireAuth, addCartItemHandler);
cartRoutes.delete("/delete-cart-item", requireAuth, removeCartItemHandler);

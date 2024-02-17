import React from 'react';
import styles from './ShoppingCartWindow.module.scss';
import {cartItem} from "../ShoppingCartPage.tsx";
import {useSelector} from "react-redux";
import {userDataSelector} from "../../../store/slices/userDataSlice.ts";
import $api, {API_URL} from "../../../utils/interceptors.ts";

interface ShoppingCartWindow{
    cartItems: cartItem[] | undefined,
    setCartItems: (cartItems: cartItem[]) => void,
}

export const ShoppingCartWindow = ({cartItems, setCartItems}: ShoppingCartWindow) => {
    const user = useSelector(userDataSelector);
    const removeCartItemHandler = async (itemId: string) => {
        try {
            const response = await $api.delete(`${API_URL}/cart/remove-item`, {
                data: {
                    userId: user.id,
                    productId: itemId
                }
            });

            setCartItems(response.data.items);
        } catch (error) {
            console.error("An error occurred while removing item from cart:", error);
        }
    };

    return (
        <div className={styles.content}>
            <div className={styles.productBox}>
                <div className={styles.label}>
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span></span>
                </div>
                <div className={styles.productList}>
                    {cartItems?.map((item) => {
                        return <div key={item._id} className={styles.productContent}>
                            <div className={styles.productInfo}>
                                <img alt='image' src={item.productId.images[0]}/>
                                <span>{item.productId.product_name}</span>
                            </div>
                            <span className={styles.productPrice}>$500.00</span>
                            <div className={styles.productQuantity}>
                                <button>-</button>
                                <span>{item.quantity}</span>
                                <button>+</button>
                            </div>
                            <div className={styles.removeProduct}>
                                <button onClick={() => removeCartItemHandler(item.productId._id)}>&times; Remove</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className={styles.checkoutMenu}>
                <div className={styles.price}>
                    <span>Subtotal</span>
                    <span>$500</span>
                </div>
                <div className={styles.shipping}>
                    <span>Shipping</span>
                    <div className={styles.shipping_input}>
                        <input type="radio" name="shipping" value="Flat rate"/>
                        <span>Flat rate: <p>$20.00</p></span>
                    </div>
                    <div className={styles.shipping_input}>
                        <input type="radio" name="shipping" value="Local pickup"/>
                        <span>Local pickup: <p>$20.00</p></span>
                    </div>
                    <div className={styles.shipping_input}>
                        <input type="radio" name="shipping" value="Free shipping"/>
                        <span>Free shipping</span>
                    </div>
                </div>
                <div className={styles.price}>
                    <span>Total</span>
                    <span>$500.00</span>
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}
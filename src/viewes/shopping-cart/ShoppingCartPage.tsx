import React, { useEffect, useState } from "react";
import styles from "./ShoppingCartPage.module.scss";
import Footer from "@/components/footer/Footer.tsx";
import { FC } from "react";
import NoItems from "@/components/no-items-page/NoItems.tsx";
import { useSelector } from "react-redux";
import { userDataSelector } from "@/store/slices/userDataSlice.ts";
import ShoppingCart from "services/ShoppingCartService.ts";
import $api from "@/utils/interceptors/interceptors.ts";
import {useNavigate} from "react-router-dom";

export type cartItem = {
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

const ShoppingCartPage: FC = () => {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const user = useSelector(userDataSelector);
  const navigate = useNavigate();

  useEffect(() => {
    const getCartItems = async () => {
      const data = await ShoppingCart.getItems(user.id);
      setCartItems(data);
    };

    getCartItems();
  }, []);

  const removeCartItemHandler = async (itemId: string) => {
    const data = await ShoppingCart.removeItem(itemId, user.id);
    setCartItems(data);
  };

  const proceedToCheckoutHandler = async () => {
    try {
      await $api.post('/order/create-order', {
        user: user.id,
        products: cartItems.map((item) => item._id),
        total: "123",
      });

      navigate('/checkout-payment');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <h1>Shopping Cart</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Shopping Cart</span>
          </div>
          {cartItems?.length ? (
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
                    return (
                      <div key={item._id} className={styles.productContent}>
                        <div className={styles.productInfo}>
                          <img alt="image" src={item.product.images[0]} />
                          <span>{item.product.product_name}</span>
                        </div>
                        <span className={styles.productPrice}>${item.product.price}</span>
                        <div className={styles.productQuantity}>
                          <button>-</button>
                          <span>{item.quantity}</span>
                          <button>+</button>
                        </div>
                        <div className={styles.removeProduct}>
                          <button
                            onClick={() => removeCartItemHandler(item.product._id)}
                          >
                            &times; Remove
                          </button>
                        </div>
                      </div>
                    );
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
                    <input type="radio" name="shipping" value="Flat rate" />
                    <span>
                      Flat rate: <p>$20.00</p>
                    </span>
                  </div>
                  <div className={styles.shipping_input}>
                    <input type="radio" name="shipping" value="Local pickup" />
                    <span>
                      Local pickup: <p>$20.00</p>
                    </span>
                  </div>
                  <div className={styles.shipping_input}>
                    <input type="radio" name="shipping" value="Free shipping" />
                    <span>Free shipping</span>
                  </div>
                </div>
                <div className={styles.price}>
                  <span>Total</span>
                  <span>$500.00</span>
                </div>
                <button onClick={proceedToCheckoutHandler}>Proceed to checkout</button>
              </div>
            </div>
          ) : (
            <NoItems title="No Cart Items Found" />
          )}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ShoppingCartPage;

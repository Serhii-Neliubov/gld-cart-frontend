import React from "react";
import styles from "./ShoppingCartPage.module.scss";
import Footer from "@/components/footer/Footer.tsx";
import { FC } from "react";
import NoItems from "@/components/no-items-page/NoItems.tsx";
import { useSelector } from "react-redux";
import { userDataSelector } from "@/store/slices/userDataSlice.ts";
import ShoppingCart from "services/ShoppingCartService.ts";
import $api from "@/utils/interceptors/interceptors.ts";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {CartItem} from "@/viewes/shopping-cart/components/CartItem.tsx";
import {TypeCartItem} from "@/utils/models/ICartItem.ts";

const ShoppingCartPage: FC = () => {
  const user = useSelector(userDataSelector);
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["cartItems"],
    queryFn: () => ShoppingCart.getItems(user.id),
  });

  const proceedToCheckoutHandler = async () => {
    try {
      await $api.post('/order/create-order', {
        user: user.id,
        products: data.map((item: TypeCartItem) => item._id),
        total: 123,
      });

      navigate('/checkout-payment');
    } catch (error) {
      console.error(error);
    }
  }

  if(!data?.length) {
    return <NoItems title="Cart"/>
  }

  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <h1>Cart</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Cart</span>
          </div>
          <div className={styles.content}>
              <div className={styles.productBox}>
                <div className={styles.label}>
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span></span>
                </div>
                <div className={styles.productList}>
                  {data.map((item: TypeCartItem) => <CartItem item={item} key={item._id}/>)}
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
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ShoppingCartPage;

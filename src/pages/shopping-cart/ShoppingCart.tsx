import React, {useState} from "react";
import styles from "./ShoppingCart.module.scss";
import Footer from "@components/footer/Footer.tsx";
import { FC } from "react";
import NoItems from "@components/no-items-page/NoItems.tsx";
import { useSelector } from "react-redux";
import { userDataSelector } from "@store/slices/userDataSlice.ts";
import $api from "@utils/interceptors.ts";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {CartItem} from "@pages/shopping-cart/components/CartItem.tsx";
import {TypeCartItem} from "@models/ICartItem.ts";
import ShoppingCartService from "@services/ShoppingCartService.ts";

const DELIVERY: Record<string, string> = {
  FLAT_RATE: "Flat rate",
  LOCAL_PICKUP: "Local pickup",
  FREE: "Free shipping",
}

const DELIVERY_PRICE = {
  [DELIVERY.FREE]: 0,
  [DELIVERY.FLAT_RATE]: 20,
  [DELIVERY.LOCAL_PICKUP]: 20,
}

const ShoppingCart: FC = () => {
  const [delivery, setDelivery] = useState(DELIVERY.FREE);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const user = useSelector(userDataSelector);
  const navigate = useNavigate();

  const { data: cartItems } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const data = await ShoppingCartService.getItems(user.id);
      setSubTotal(data.subtotal);
      setTotal(data.subtotal + DELIVERY_PRICE[delivery]);

      return data.items;
    },
  });

  const handleSetSubtotal = (value: number) => {
    setSubTotal(value);
    setTotal(value + DELIVERY_PRICE[delivery]);
  }

  const handleDeliveryChange = (value: string) => () => {
    setDelivery(value);
    setTotal(subTotal + DELIVERY_PRICE[value]);
  }

  const proceedToCheckoutHandler = async () => {
    try {
      await $api.post('/order/create-order', {
        user: user.id,
        products: cartItems.map((item: TypeCartItem) => item._id),
        total: 123,
      });

      navigate('/checkout-payment');
    } catch (error) {
      console.error(error);
    }
  }

  if(!cartItems?.length) {
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
                  {cartItems.map((item: TypeCartItem) => <CartItem setSubtotal={handleSetSubtotal} item={item} key={item._id}/>)}
                </div>
              </div>
              <div className={styles.checkoutMenu}>
                <div className={styles.price}>
                  <span>Subtotal</span>
                  <span>${subTotal}</span>
                </div>
                <div className={styles.shipping}>
                  <span>Shipping</span>
                  {Object.keys(DELIVERY).map((key) => (
                    <div className={styles.shipping_input} key={key}>
                      <input
                        type="radio"
                        name="shipping"
                        value={DELIVERY[key]}
                        checked={delivery === DELIVERY[key]}
                        onChange={handleDeliveryChange(DELIVERY[key])}
                      />
                      <span>
                        {DELIVERY[key]}: <p>${DELIVERY_PRICE[DELIVERY[key]]}</p>
                      </span>
                    </div>
                  ))}
                </div>
                <div className={styles.price}>
                  <span>Total</span>
                  <span>${total}</span>
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

export default ShoppingCart;

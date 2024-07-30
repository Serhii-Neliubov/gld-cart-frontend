import React, {useEffect, useState} from 'react';
import Footer from "@/components/Footer.tsx";
import styles from "@/pages/checkout-payment/PaymentCheckout.module.scss";
import {useInput} from "@/hooks/useInput.tsx";
import $api, {API_URL} from "@/utils/interceptors.ts";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";
import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition.tsx";

interface IProduct {
  _id: string;
  product_name: string;
  price: number;
}

export const PaymentCheckout = () => {
  useDefaultScrollPosition();

  const [clientSecret, setClientSecret] = useState('');
  const navigate = useNavigate();
  const user = useSelector(userDataSelector);
  const [products, setProducts] = useState<IProduct[]>([]);

  const name = useInput('');
  const surname = useInput('');
  const country = useInput('');
  const street = useInput('');
  const town = useInput('');
  const zipcode = useInput('');
  const phone = useInput('');
  const email = useInput('');

  const [orderNotes, setOrderNotes] = useState('');

  useEffect(() => {
    if (clientSecret) {
      navigate(`/checkout-payment/order/${clientSecret}/${name.value}/${surname.value}/${country.value}/${street.value}/${town.value}/${zipcode.value}/${phone.value}/${email.value}`);
    }
  }, [clientSecret, navigate]);

  const getOrderDetails = async () => {
    const orderDetails = await $api.get(`${API_URL}/order/${user.id}`)

    setProducts([...orderDetails.data.products]);
  }

  useEffect(() => {
    getOrderDetails()
  }, []);

  const getClientSecret = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const response = await $api.post('/payments/create-payment-intent', {
      items: [{id: "xl-tshirt"}],
      amount: 1000,
      currency: "usd",
      metadata: {order_details: orderNotes}
    });

    setClientSecret(response.data.client_secret)
  }

  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className={`${styles.content} __container`}>
          <div className={styles.paymentForm}>
            <h1>Checkout</h1>
            <div className={styles.routePath}>
              <span>Home</span>
              <span>Checkout</span>
            </div>
            <form className={styles.form}>
              <h3>Billing Details</h3>
              <div className={styles.inputGroup}>
                <label className={styles.formInput} htmlFor='name'>
                  First Name
                  <input value={name.value} onChange={name.onChange} type='text' id='name' name='name'
                         placeholder='First Name' required/>
                </label>
                <label className={styles.formInput} htmlFor='surname'>
                  Last Name
                  <input value={surname.value} onChange={surname.onChange} type='text' id='surname' name='surname'
                         placeholder='Last Name' required/>
                </label>
              </div>
              <label className={styles.formInput} htmlFor='country'>
                Country
                <input value={country.value} onChange={country.onChange} type='text' id='country' name='country'
                       placeholder='United States (US)' required/>
              </label>
              <label className={styles.formInput} htmlFor='street'>
                Street
                <input value={street.value} onChange={street.onChange} type='text' id='street' name='street'
                       placeholder='Full address' required/>
              </label>
              <div className={styles.inputGroup}>
                <label className={styles.formInput} htmlFor='town'>
                  Town / City
                  <input value={town.value} onChange={town.onChange} type='text' id='town' name='town'
                         placeholder='town' required/>
                </label>
                <label className={styles.formInput} htmlFor='zipcode'>
                  Postcode / ZIP
                  <input value={zipcode.value} onChange={zipcode.onChange} type='text' id='zipcode' name='zipcode'
                         placeholder='Zip Code' required/>
                </label>
              </div>
              <label className={styles.formInput} htmlFor='phone'>
                Phone
                <input value={phone.value} onChange={phone.onChange} type='text' id='phone' name='phone' required
                       placeholder='phone number'/>
              </label>
              <label className={styles.formInput} htmlFor='email'>
                Email Address
                <input value={email.value} onChange={email.onChange} type='text' id='email' name='email' required
                       placeholder='email'/>
              </label>
              <label className={styles.formInput} htmlFor='orderNotes'>
                Order Notes
                <textarea value={orderNotes} onChange={event => setOrderNotes(event.target.value)} name='orderNotes'
                          placeholder='Note about your order'/>
              </label>
            </form>
          </div>
          <div className={styles.yourOrderBlock}>
            <h2>Your Order</h2>
            <div className={styles.orderItem}>
              <div className={styles.itemName}>
                <span>Product</span>
              </div>
            </div>
            <div className={styles.orderItem}>
              <div className={styles.itemInfo}>
                <div className={styles.itemList}>
                  {products.length ? products.map((product) => {
                      return (
                        <div key={product._id} className={styles.itemName}>
                          <span>{product.product_name}</span>
                          <span>${product.price}</span>
                        </div>
                      );
                    }) : <div className={styles.notFoundLabel}>No items in the cart</div>
                  }
                </div>
              </div>
            </div>
            <div className={styles.shippingCost}>
              <div>Shipping</div>
              <div className={styles.shippingCostDelivery}>
                <span>Delivery: Today Cost: $60.00 <input type='radio'/></span>
                <span>Delivery: 7 Days Cost: $20.00 <input type='radio'/></span>
              </div>
            </div>
            <div className={styles.orderTotal}>
              <div>Total</div>
              <div>$300.00</div>
            </div>
            <button onClick={getClientSecret} className={styles.checkoutButton} type='submit' id="submit">
              Place order
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

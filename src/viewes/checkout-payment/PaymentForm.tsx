import React, {useEffect, useState} from 'react';
import styles from './PaymentCheckout.module.scss';
import { useInput } from "@/hooks/useInput/useInput.tsx";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [orderNotes, setOrderNotes] = useState('');
  const name = useInput('');
  const surname = useInput('');
  const country = useInput('');
  const street = useInput('');
  const town = useInput('');
  const zipcode = useInput('');
  const phone = useInput('');
  const email = useInput('');

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }
  }, [stripe]);

  const checkoutPaymentHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/checkout-payment/success",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      toast.error(error.message as string);
    } else {
      toast.error(error.message as string);
    }
}


  return (
    <React.Fragment>
      <PaymentElement className={styles.paymentElement} id="payment-element" />
      <div className={styles.body}>
        <div className={`${styles.content} __container`}>
          <div className={styles.paymentForm}>
            <h1>Checkout</h1>
            <div className={styles.routePath}>
              <span>Home</span>
              <span>Checkout</span>
            </div>
            <form className={styles.form} onSubmit={checkoutPaymentHandler}>
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
              <button className={styles.checkoutButton} type='submit' disabled={!stripe || !elements} id="submit">
                Checkout
              </button>
            </form>
          </div>
          <div className={styles.yourOrderBlock}>
          <h2>Your Order</h2>
            <div className={styles.orderItem}>
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>Product Name</div>
                <div className={styles.itemPrice}>$100.00</div>
              </div>
              <div className={styles.itemQuantity}>x1</div>
            </div>
            <div className={styles.orderItem}>
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>Product Name</div>
                <div className={styles.itemPrice}>$100.00</div>
              </div>
              <div className={styles.itemQuantity}>x1</div>
            </div>
            <div className={styles.orderItem}>
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>Product Name</div>
                <div className={styles.itemPrice}>$100.00</div>
              </div>
              <div className={styles.itemQuantity}>x1</div>
            </div>
            <div className={styles.orderTotal}>
              <div>Total</div>
              <div>$300.00</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
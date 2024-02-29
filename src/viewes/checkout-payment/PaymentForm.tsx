import React, {useEffect, useState} from 'react';
import styles from './PaymentCheckout.module.scss';
import { useInput } from "@/hooks/useInput/useInput.tsx";
import {Elements, PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import $api from "@/utils/interceptors/interceptors.ts";
import {loadStripe, StripeElementsOptions} from "@stripe/stripe-js";

const STRIPE_SECRET_KEY = 'pk_test_51LwMMSIr9qomMnpIKf6KC11Fw326JmIM7THj2zhFsrzuRs63CTcdnABWvpGWAKr96dF0qNHwoE3JFuq8R8Vif54i007XexrztK';

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [orderNotes, setOrderNotes] = useState('');

  useEffect(() => {
    $api.post('/payments/create-payment-intent', {
      items: [{id: "xl-tshirt"}],
      amount: 1000,
      currency: "usd",
    }).then((res) => setClientSecret(res.data.client_secret));
  }, []);

  const appearance = {
    theme: 'stripe',
    variables: {
      display: 'flex',
      flexDirection: 'column',

    },
    rules: {
      '.Input': {
        padding: '20px 30px',
        borderRadius: '0',
        border: '1px solid rgb(217, 217, 217)',
        background: 'rgb(255, 255, 255)',
      },
      '.Input::placeholder': {
        fontFamily: 'Poppins, sans-serif',
        color: 'rgb(189, 189, 189)',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '30px',
        textAlign: 'left',
      },
      '.Label': {
        fontFamily: 'Poppins, sans-serif',
        color: 'rgb(0, 0, 0)',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '30px',
        textAlign: 'left',
      },
    }
  };

  const options = {
    clientSecret,
    appearance,
  } as StripeElementsOptions | undefined;

  const stripePromise = loadStripe(STRIPE_SECRET_KEY);


  const [paymentMenu, setPaymentMenu] = useState(false);

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

  const checkoutFormHandler = () => {
    if(name && surname && country && street && town && zipcode && phone && email){
      setPaymentMenu(true);
    }
  }

  const checkoutPaymentHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setPaymentMenu(true);

    if (!stripe || !elements) {
      return;
    }

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/checkout-payment/success",
        payment_method_data: {
          billing_details: {
            name: name.value,
            email: email.value,
            phone: phone.value,
            address: {
              city: town.value,
              country: country.value,
              line1: street.value,
              postal_code: zipcode.value,
              state: ''
            }
          },
        }
      }
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      toast.error(error.message as string);
    } else {
      toast.error(error.message as string);
    }
}

  return (
    <Elements options={options} stripe={stripePromise}>
      {paymentMenu ?
        clientSecret &&
          <div className='__container'>
            <PaymentElement className={styles.paymentElement} id="payment-element"/>
            <button onClick={checkoutPaymentHandler} className={styles.checkoutButton}>Pay Now</button>
          </div>
        :
        <div className={styles.body}>
          <div className={`${styles.content} __container`}>
            <div className={styles.paymentForm}>
              <h1>Checkout</h1>
              <div className={styles.routePath}>
                <span>Home</span>
                <span>Checkout</span>
              </div>
              <form className={styles.form} onSubmit={checkoutFormHandler}>
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
      }
    </Elements>
  );
}

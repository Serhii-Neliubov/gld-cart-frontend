import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import styles from './PaymentCheckout.module.scss';
const STRIPE_SECRET_KEY = 'pk_test_51LwMMSIr9qomMnpIKf6KC11Fw326JmIM7THj2zhFsrzuRs63CTcdnABWvpGWAKr96dF0qNHwoE3JFuq8R8Vif54i007XexrztK';

export const PaymentCardForm = () => {
  const { clientSecret } = useParams();

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

  const stripePromise = loadStripe(STRIPE_SECRET_KEY)

  return (
    clientSecret && stripePromise && (
      <Elements options={options} stripe={stripePromise}>
        <PaymentWrapper />
      </Elements>
    )
  );
}

const PaymentWrapper = () => {
  const { name, country, street, town, zipcode, phone, email } = useParams();

  const elements = useElements();
  const stripe = useStripe();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/checkout-payment/success",
        payment_method_data: {
          billing_details: {
            name: name,
            email: email,
            phone: phone,
            address: {
              city: town,
              country: country,
              line1: street,
              postal_code: zipcode,
              state: ''
            }
          },
        }
      }
    });

    if (error?.type === "card_error" || error?.type === "validation_error") {
      console.log(error.message);
    } else {
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className='__container'>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element"/>
        <button disabled={!stripe || !elements} className={styles.submitPaymentButton}>
          Submit Payment
        </button>
      </form>
    </div>
  )
}

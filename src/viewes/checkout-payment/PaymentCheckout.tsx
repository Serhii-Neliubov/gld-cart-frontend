import React, {useEffect, useState} from 'react';
import Footer from "@/components/footer/Footer.tsx";
import {PaymentForm} from "@/viewes/checkout-payment/PaymentForm.tsx";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe, StripeElementsOptions} from "@stripe/stripe-js";
import $api from "@/utils/interceptors/interceptors.ts";

const STRIPE_SECRET_KEY = 'pk_test_51LwMMSIr9qomMnpIKf6KC11Fw326JmIM7THj2zhFsrzuRs63CTcdnABWvpGWAKr96dF0qNHwoE3JFuq8R8Vif54i007XexrztK';
export const PaymentCheckout = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    $api.post('/payments/create-payment-intent', {
      items: [{id: "xl-tshirt"}],
      amount: 1000,
      currency: "usd"
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

  return (
    <React.Fragment>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
      <Footer/>
    </React.Fragment>
  );
}
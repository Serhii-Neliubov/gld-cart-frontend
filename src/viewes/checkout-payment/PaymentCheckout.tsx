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
          <PaymentForm clientSecret={clientSecret} />
        </Elements>
      )}
      <Footer/>
    </React.Fragment>
  );
}
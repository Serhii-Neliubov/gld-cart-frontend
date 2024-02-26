import React from 'react';
import Footer from "@/components/footer/Footer.tsx";
import {PaymentForm} from "@/viewes/checkout-payment/PaymentForm.tsx";

const STRIPE_SECRET_KEY = 'pk_test_51NxAK8Eo89YVYdDOJgkuBoQ0xk0qFdZ0OZk1BWzhaMySvnixIAoIze0YAEYL20bNusTqItDmd26LjrwFFf9piOJb00xdfXD6n9';
export const PaymentCheckout = () => {
  return (
    <React.Fragment>
      <PaymentForm />
      <Footer/>
    </React.Fragment>
  );
}
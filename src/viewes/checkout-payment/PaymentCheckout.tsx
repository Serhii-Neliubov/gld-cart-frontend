import React from 'react';
import Footer from "@/components/footer/Footer.tsx";
import {PaymentForm} from "@/viewes/checkout-payment/PaymentForm.tsx";

export const PaymentCheckout = () => {
  return (
    <React.Fragment>
      <PaymentForm />
      <Footer/>
    </React.Fragment>
  );
}

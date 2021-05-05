import React from 'react';

//import stripe API key
import { publishableKey } from './../../stripe/config';
//import stripe dependencies
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentDetails from './../../components/PaymentDetails/PaymentDetails';


const stripePromise = loadStripe(publishableKey);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentDetails />
    </Elements>
  );
}

export default Payment;

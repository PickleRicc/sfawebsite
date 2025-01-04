import { loadStripe } from '@stripe/stripe-js';

let stripePromise = null;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

// Only initialize server-side Stripe if we're on the server
export const stripe = typeof window === 'undefined' 
  ? require('stripe')(process.env.STRIPE_SECRET_KEY)
  : null;

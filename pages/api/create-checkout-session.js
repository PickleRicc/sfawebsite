import { stripe } from '../../utils/stripe';

const PLANS = {
  single: {
    priceId: 'price_1QcyBNQR14tyDEksOiDLCC0h',
    mode: 'payment',
  },
  basic: {
    priceId: 'price_1QcyBlQR14tyDEksK5eMX6FR',
    mode: 'subscription',
  },
  standard: {
    priceId: 'price_1QcyCFQR14tyDEkswnSCQhHc',
    mode: 'subscription',
  },
  elite: {
    priceId: 'price_1QcyCcQR14tyDEksbS1A7R3r',
    mode: 'subscription',
  },
  team: {
    priceId: 'price_1QcyCyQR14tyDEks3RaJBqoO',
    mode: 'payment',
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!stripe) {
    return res.status(500).json({ error: 'Stripe configuration error' });
  }

  try {
    const { plan } = req.body;
    
    if (!PLANS[plan]) {
      return res.status(400).json({ error: 'Invalid plan selected' });
    }

    const { priceId, mode } = PLANS[plan];

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: mode,
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/schedule`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
      customer_creation: 'always',
      metadata: {
        plan: plan,
      },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ 
      error: 'Error creating checkout session',
      message: error.message 
    });
  }
}

import Head from 'next/head';
import { useState } from 'react';
import { getStripe } from '../utils/stripe';

const PricingCard = ({ isTeam, isPopular, title, price, interval, features, onClick, isLoading }) => (
  <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 ${isPopular ? 'border-2 border-primary pt-8' : ''} relative`}>
    {isPopular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-max">
        <span className="bg-primary text-white px-6 py-1 rounded-full text-sm font-medium whitespace-nowrap">
          MOST POPULAR
        </span>
      </div>
    )}
    <div className="text-center mb-6">
      <h3 className="text-xl font-heading font-bold text-white mb-4">{title}</h3>
      <div className="flex items-center justify-center gap-1">
        <span className="text-4xl font-heading font-bold text-white">${price}</span>
        <span className="text-white/70">{interval}</span>
      </div>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-white/70">
          <svg
            className="w-5 h-5 text-primary mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full bg-primary text-white px-6 py-3 rounded-full font-heading font-semibold
               hover:bg-primary/90 transform hover:scale-105 transition-all duration-300
               disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? 'Processing...' : 'Select Package'}
    </button>
  </div>
);

const Schedule = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscription = async (planId) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planId }),
      });

      const { sessionId } = await response.json();
      const stripe = await getStripe();
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const individualPlans = [
    {
      title: 'Single Session',
      price: '75',
      interval: 'per session',
      planId: 'single',
      features: [
        'No commitment required',
        'Try before you subscribe',
        'Full speed training program',
        'Form analysis included',
        'Progress tracking'
      ]
    },
    {
      title: 'Basic',
      price: '130',
      interval: 'per month',
      planId: 'basic',
      features: [
        '2 sessions per month',
        '$65 per session value',
        'Save $20 vs. single sessions',
        'Full speed training program',
        'Monthly commitment'
      ]
    },
    {
      title: 'Standard',
      price: '240',
      interval: 'per month',
      planId: 'standard',
      isPopular: true,
      features: [
        '4 sessions per month',
        '$60 per session value',
        'Save $60 vs. single sessions',
        'Full speed training program',
        'Monthly commitment'
      ]
    },
    {
      title: 'Elite',
      price: '440',
      interval: 'per month',
      planId: 'elite',
      features: [
        '8 sessions per month (maximum)',
        '$55 per session value',
        'Save $160 vs. single sessions',
        'Full speed training program',
        'Monthly commitment'
      ]
    }
  ];

  const teamPlan = {
    title: 'Team Package',
    price: '40',
    interval: 'per athlete/session',
    planId: 'team',
    features: [
      'Reserved time block for your team',
      '4+ athletes from same team',
      'Minimum 4 sessions',
      'Full speed training program',
      'Team-focused environment'
    ]
  };

  return (
    <>
      <Head>
        <title>Training Packages & Pricing | SpeedForce Athletics Lakeland</title>
        <meta 
          name="description" 
          content="Choose from our flexible speed training packages in Lakeland, FL. Individual sessions, monthly plans, and team training available. First session free!" 
        />
        <meta name="keywords" content="speed training packages, athletic training pricing, Lakeland FL, individual training, team training, youth sports training" />
        <meta property="og:title" content="Training Packages & Pricing | SpeedForce Athletics Lakeland" />
        <meta property="og:description" content="Choose from our flexible speed training packages in Lakeland, FL. Individual sessions, monthly plans, and team training available. First session free!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/training-session.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Training Packages & Pricing | SpeedForce Athletics" />
        <meta name="twitter:description" content="Choose from our flexible speed training packages in Lakeland, FL." />
        <meta name="twitter:image" content="/images/training-session.jpg" />
        <link rel="canonical" href="https://www.speedforceathletics.com/schedule" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Training Packages
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Choose your perfect training package and start your journey to becoming a
              faster athlete. All packages include the same high-quality speed training
              program.
            </p>
          </div>

          {/* Free Session Banner */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-16 text-center">
            <h2 className="text-xl font-heading font-bold text-green-400 mb-2">
              First Session Free! Our Gift to You
            </h2>
            <p className="text-green-300/80">
              Try a complimentary training session to experience our program firsthand. No
              commitment required.
            </p>
          </div>

          {/* Individual Training Section */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Individual Training
              </h2>
              <p className="text-base text-white/70 max-w-3xl mx-auto">
                Choose the package that best fits your training needs. All packages include
                the same comprehensive speed training program.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {individualPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  {...plan}
                  onClick={() => handleSubscription(plan.planId)}
                  isLoading={isLoading}
                />
              ))}
            </div>
          </div>

          {/* Team Training Section */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Team Training
              </h2>
              <p className="text-base text-white/70 max-w-3xl mx-auto">
                Exclusive training blocks reserved for sports teams. Perfect for building team
                chemistry while improving speed. Every athlete receives the same comprehensive
                speed training program.
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <PricingCard
                {...teamPlan}
                onClick={() => handleSubscription(teamPlan.planId)}
                isTeam={true}
                isLoading={isLoading}
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-base text-white/70 max-w-2xl mx-auto">
              Ready to start your speed training journey? Contact us to discuss your goals
              and get started with your preferred package.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;

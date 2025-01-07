import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function Success() {
  const router = useRouter();
  const { session_id } = router.query;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only redirect if there's no session_id after the page has fully loaded
    if (router.isReady && !session_id) {
      router.push('/schedule');
    } else {
      setIsLoading(false);
    }
  }, [session_id, router.isReady]);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <Head>
        <title>Payment Successful | SpeedForce Athletics</title>
        <meta 
          name="description" 
          content="Thank you for choosing SpeedForce Athletics. Your speed training journey in Lakeland, FL begins now! We'll be in touch shortly with next steps." 
        />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Payment Successful | SpeedForce Athletics" />
        <meta property="og:description" content="Thank you for choosing SpeedForce Athletics. Your speed training journey in Lakeland, FL begins now!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.speedforceathletics.com/success" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-white" 
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
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Payment Successful!
            </h1>
            
            <p className="text-lg text-white/70 mb-8">
              Thank you for choosing SpeedForce Athletics. Your speed training journey begins now!
              We'll be in touch shortly with next steps and to schedule your first session.
            </p>

            <div className="space-y-4">
              <Link 
                href="/"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-heading font-semibold
                         hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
              >
                Return Home
              </Link>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-white/70 text-sm">
                Order Reference: {session_id}
              </p>
              <p className="text-white/70 text-sm mt-2">
                Please save this reference number for your records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

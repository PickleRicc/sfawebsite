import Head from 'next/head';

export default function Account() {
  const STRIPE_PORTAL_LINK = 'https://billing.stripe.com/p/login/7sI29F9Ju7G86yYcMM';

  return (
    <>
      <Head>
        <title>My Account | SpeedForce Athletics</title>
        <meta 
          name="description" 
          content="Manage your SpeedForce Athletics training subscription. Access billing information, update payment details, and view training schedule." 
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="My Account | SpeedForce Athletics" />
        <meta property="og:description" content="Manage your SpeedForce Athletics training subscription and account details." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.speedforceathletics.com/account" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
              My Account
            </h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-heading font-semibold text-white mb-4">
                  Manage Your Subscription
                </h2>
                <p className="text-white/70 mb-6">
                  Access your customer portal to:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>View and manage your subscription</li>
                    <li>Update payment methods</li>
                    <li>View billing history</li>
                    <li>Download invoices</li>
                  </ul>
                </p>
                <a
                  href={STRIPE_PORTAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-full font-heading font-semibold
                           hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                >
                  Access Customer Portal
                </a>
                <p className="mt-4 text-sm text-white/50">
                  You'll receive a one-time passcode via email to access your account.
                </p>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-heading font-semibold text-white mb-4">
                  Need Help?
                </h2>
                <p className="text-white/70">
                  If you need assistance with your subscription or have any questions,
                  please don't hesitate to contact us. Make sure to use the same email
                  address associated with your subscription when accessing the portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from 'next/link';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Us Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Ready to start your speed training journey? Contact us to discuss your goals and get started
            with your preferred package.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Email */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
              Email Us
            </h3>
            <a
              href="mailto:speedforceath@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              speedforceath@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
              Text/Call Us
            </h3>
            <a
              href="tel:+16893235834"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              (689) 323-5834
            </a>
          </div>
        </div>

        {/* Training Location & Times */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
            Training Location & Times
          </h2>
          
          {/* Location */}
          <div className="mb-8">
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
              Location
            </h3>
            <p className="text-gray-600 mb-2">Lakeland Christian School</p>
            <Link
              href="https://maps.google.com/?q=Lakeland+Christian+School"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              View on Google Maps
            </Link>
          </div>

          {/* Training Times */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
              Training Times
            </h3>
            <p className="text-gray-600">Saturday & Sunday</p>
            <p className="text-gray-600">2:00 PM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

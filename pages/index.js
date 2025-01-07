import Head from 'next/head';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Coach from '../components/Coach';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>SpeedForce Athletics - Elite Speed Training in Lakeland, FL</title>
        <meta 
          name="description" 
          content="Elite speed training program in Lakeland, FL with Olympic athlete Eric Harrison Jr. Improve your speed, agility, and athletic performance with professional training." 
        />
        <meta name="keywords" content="speed training, agility training, athletic performance, Lakeland FL, Eric Harrison Jr, Olympic athlete, youth sports, sprint training" />
        <meta property="og:title" content="SpeedForce Athletics - Elite Speed Training in Lakeland, FL" />
        <meta property="og:description" content="Elite speed training program in Lakeland, FL with Olympic athlete Eric Harrison Jr. Improve your speed, agility, and athletic performance with professional training." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.speedforceathletics.com/images/speedforce-logo-share.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SpeedForce Athletics Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SpeedForce Athletics - Elite Speed Training" />
        <meta name="twitter:description" content="Elite speed training program in Lakeland, FL with Olympic athlete Eric Harrison Jr." />
        <meta name="twitter:image" content="https://www.speedforceathletics.com/images/speedforce-logo-share.png" />
        <link rel="canonical" href="https://www.speedforceathletics.com" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "SpeedForce Athletics",
              "description": "Elite speed training program led by Olympic athlete Eric Harrison Jr.",
              "image": "https://www.speedforceathletics.com/images/coach-1.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lakeland",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.0395",
                "longitude": "-81.9498"
              },
              "url": "https://www.speedforceathletics.com",
              "telephone": "(689) 323-5834",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday", "Sunday"],
                "opens": "14:00",
                "closes": "18:00"
              },
              "founder": {
                "@type": "Person",
                "name": "Eric Harrison Jr.",
                "jobTitle": "Olympic Athlete and Professional Speed Trainer",
                "sameAs": "https://www.instagram.com/elhj__/"
              }
            })
          }}
        />

        {/* Structured Data for Training Programs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              "name": "SpeedForce Athletics Training Programs",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Single Session",
                  "price": "75.00",
                  "priceCurrency": "USD",
                  "description": "Single training session with no commitment required"
                },
                {
                  "@type": "Offer",
                  "name": "Basic Package",
                  "price": "130.00",
                  "priceCurrency": "USD",
                  "description": "2 sessions per month"
                },
                {
                  "@type": "Offer",
                  "name": "Standard Package",
                  "price": "240.00",
                  "priceCurrency": "USD",
                  "description": "4 sessions per month"
                },
                {
                  "@type": "Offer",
                  "name": "Elite Package",
                  "price": "440.00",
                  "priceCurrency": "USD",
                  "description": "8 sessions per month"
                },
                {
                  "@type": "Offer",
                  "name": "Team Training",
                  "price": "40.00",
                  "priceCurrency": "USD",
                  "description": "Per athlete per session for teams of 4+ athletes"
                }
              ]
            })
          }}
        />
      </Head>

      <main>
        <Hero />
        <Programs />
        <Coach />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
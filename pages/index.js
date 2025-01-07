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
        <meta property="og:image" content="/images/coach-1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SpeedForce Athletics - Elite Speed Training" />
        <meta name="twitter:description" content="Elite speed training program in Lakeland, FL with Olympic athlete Eric Harrison Jr." />
        <meta name="twitter:image" content="/images/coach-1.jpg" />
        <link rel="canonical" href="https://www.speedforceathletics.com" />
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
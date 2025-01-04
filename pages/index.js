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
        <title>SpeedForce Athletics - Elite Speed Training</title>
        <meta 
          name="description" 
          content="Elite speed training program in Charlotte, NC. Improve your speed, agility, and performance with professional training." 
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
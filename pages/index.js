import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Coach from '../components/Coach';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Programs />
      <Coach />
      <Testimonials />
    </div>
  );
}
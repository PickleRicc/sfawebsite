import Hero from '../components/Hero';
import Programs from '../components/Programs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Programs />
    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Speed training background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="flex flex-col items-center gap-4">
              <span className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold 
                             tracking-tight leading-none text-white/95">
                TRAIN LIKE AN
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold 
                             tracking-tight leading-none text-primary">
                OLYMPIC ATHLETE
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-heading tracking-wide 
                             text-white/80 mt-2">
                IN LAKELAND FLORIDA
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-heading font-medium 
                         text-white/70 tracking-wide max-w-3xl mx-auto mt-8">
              Elite speed training with an Olympic Sprinter
            </p>

            <div className="mt-10">
              <Link
                href="/schedule"
                className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-heading font-bold
                         hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 
                         shadow-md"
              >
                START TRAINING TODAY
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

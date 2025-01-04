import { useState } from 'react';

const testimonials = [
  {
    name: "Michael Johnson",
    role: "High School Athlete",
    text: "Training with Coach Eric has been transformative. My 100m time improved by 0.5 seconds in just three months!",
    image: "/images/testimonial1.jpg"
  },
  {
    name: "Sarah Williams",
    role: "Track Athlete",
    text: "The specialized sprint mechanics training has completely changed my running form. I'm more confident than ever on the track.",
    image: "/images/testimonial2.jpg"
  },
  {
    name: "David Chen",
    role: "Football Player",
    text: "Coach Eric's speed training program helped me become significantly faster on the field. His Olympic experience really shows in his coaching.",
    image: "/images/testimonial3.jpg"
  }
];

const TestimonialCard = ({ testimonial, isActive }) => (
  <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}>
    <blockquote className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-12 h-full">
      <svg
        className="absolute top-12 left-12 text-primary/20 w-20 h-20 -z-10"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      
      <div className="relative">
        <p className="text-xl md:text-2xl text-white/80 italic mb-10 leading-relaxed">
          "{testimonial.text}"
        </p>
        
        <footer className="mt-6">
          <div className="flex items-center">
            <div>
              <div className="text-white text-lg font-medium">{testimonial.name}</div>
              <div className="text-primary/80 text-base">{testimonial.role}</div>
            </div>
          </div>
        </footer>
      </div>
    </blockquote>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            What Our Athletes Say
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Hear from the athletes who have transformed their performance through our training programs.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 
                  ${index === currentIndex ? 'bg-primary' : 'bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

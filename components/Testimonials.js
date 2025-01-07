import { useState } from 'react';

const testimonials = [
  {
    name: "Demi Wall",
    role: "Parent",
    text: "Eric has been training both our boys (ages 16 & 14) since the summer of 2024. He is very professional, kind and knowledgeable when it comes to speed training. The boys look up to him and respect him because he's a professional athlete who competed in college and in their words because \"he's fast!\" He definitely knows what he's doing when it comes to their form as well as conditioning/exercise. This past football season (and currently in soccer season) we noticed a big difference of how fast the boys were since last season. Others noticed it and commented to us as well. What better person to receive speed training from than an All American Big 10 college athlete and a 2020 Tokyo Olympian! Thanks Eric for all you have done and continue to do to help our boys achieve their speed goals.",
    image: "/images/testimonial1.jpg"
  },
  {
    name: "Bryce Benton",
    role: "Baseball Player Jackson State",
    text: "Working with Eric was extremely helpful and beneficial! He was able to help me get my time down and be more consistent with my mechanics. He was able to explain it and break it down into something that was easy to understand, while making sure I get the full benefit of the form and the workout. Also he is a relatable down to earth guy and a great coach that will push you to be better. If you want to improve your speed or form in anyway he is the guy to go to!",
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
        <p className="text-base md:text-lg text-white/80 italic mb-8 leading-relaxed">
          "{testimonial.text}"
        </p>
        
        <footer className="mt-6">
          <div className="flex items-center">
            <div>
              <div className="text-base md:text-lg font-medium text-white">{testimonial.name}</div>
              <div className="text-sm md:text-base text-primary/80">{testimonial.role}</div>
            </div>
          </div>
        </footer>
      </div>
    </blockquote>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            What Our Athletes Say
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Hear from the athletes who have transformed their performance through our training programs.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/60 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="relative min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/60 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

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

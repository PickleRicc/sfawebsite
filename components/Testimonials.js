import { useState } from 'react';

const testimonials = [
  {
    content: "Eric has been training both our boys (ages 16 & 14) since the summer of 2024. He is very professional, kind and knowledgeable when it comes to speed training. The boys look up to him and respect him because he's a professional athlete who competed in college and in their words because \"he's fast!\" He definitely knows what he's doing when it comes to their form as well as conditioning/exercise. This past football season (and currently in soccer season) we noticed a big difference of how fast the boys were since last season. Others noticed it and commented to us as well. What better person to receive speed training from than an All American Big 10 college athlete and a 2020 Tokyo Olympian! Thanks Eric for all you have done and continue to do to help our boys achieve their speed goals.",
    author: "Demi Wall",
    role: "Parent",
    image: "/images/testimonial1.jpg"
  },
  {
    content: "Working with Eric was extremely helpful and beneficial! He was able to help me get my time down and be more consistent with my mechanics. He was able to explain it and break it down into something that was easy to understand, while making sure I get the full benefit of the form and the workout. Also he is a relatable down to earth guy and a great coach that will push you to be better. If you want to improve your speed or form in anyway he is the guy to go to!",
    author: "Bryce Benton",
    role: "Baseball Player Jackson State",
    image: "/images/testimonial2.jpg"
  },
  {
    content: "Coach Eric's speed training program helped me become significantly faster on the field. His Olympic experience really shows in his coaching.",
    author: "David Chen",
    role: "Football Player",
    image: "/images/testimonial3.jpg"
  }
];

const TestimonialCard = ({ content, author, role, image, isActive }) => (
  <div
    className={`transition-opacity duration-300 ${
      isActive ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'
    }`}
  >
    <blockquote className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
      <svg
        className="mx-auto mb-6 text-primary/20 w-12 h-12"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-lg text-white/80 mb-6 italic">"{content}"</p>
      <div>
        <p className="text-primary font-semibold">{author}</p>
        <p className="text-white/60 text-sm">{role}</p>
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
    <section className="py-24 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            What Our Athletes Say
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Hear from the athletes who have transformed their performance through our training programs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                image={testimonial.image}
                isActive={currentIndex === index}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-8 mt-8 relative z-20">
            <button
              onClick={handlePrevious}
              className="text-white/60 hover:text-white transition-colors p-3 active:scale-95 transform"
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
            <button
              onClick={handleNext}
              className="text-white/60 hover:text-white transition-colors p-3 active:scale-95 transform"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

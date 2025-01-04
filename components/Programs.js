import Image from 'next/image';
import Link from 'next/link';

const ProgramCard = ({ title, description, features, image, alt }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] duration-300">
    <div className="relative h-64 w-full">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-heading font-bold text-white mb-4">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-white/70">
            <svg
              className="w-5 h-5 text-primary mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/schedule"
        className="inline-block bg-primary text-white px-6 py-3 rounded-full font-heading font-semibold
                 hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Learn More
      </Link>
    </div>
  </div>
);

const Programs = () => {
  const programs = [
    {
      title: "Speed Development",
      description: "Master proper running mechanics and explosive acceleration using cutting-edge 1080 Sprint technology.",
      image: "/images/speed-training.jpg",
      alt: "Athlete using 1080 Sprint technology for speed training",
      features: [
        "Sprint mechanics training",
        "1080 Sprint analysis",
        "Acceleration techniques",
      ],
    },
    {
      title: "Agility Training",
      description: "Enhance your quickness and change of direction abilities with Freelap timing system feedback.",
      image: "/images/agility-training.jpg",
      alt: "Freelap timing system equipment for agility training",
      features: [
        "Reaction time drills",
        "Freelap timing system",
        "Change of direction",
      ],
    },
    {
      title: "Performance Training",
      description: "Comprehensive training to improve overall athletic performance and sports-specific skills.",
      image: "/images/performance-training.jpg",
      alt: "Athlete performing long jump training",
      features: [
        "Strength conditioning",
        "Sport-specific drills",
        "Performance testing",
      ],
    },
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Training Programs
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Comprehensive training programs designed to enhance speed, agility, and overall
            athletic performance for young athletes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

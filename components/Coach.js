import Image from 'next/image';

const AchievementCard = ({ value, label, sublabel }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center">
    <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">
      {value}
    </div>
    <div className="text-sm md:text-base font-heading text-white/90">
      {label}
    </div>
    {sublabel && (
      <div className="text-sm md:text-base font-heading text-white/70">
        {sublabel}
      </div>
    )}
  </div>
);

const Coach = () => {
  const achievements = [
    { value: '10x', label: 'Big Ten', sublabel: 'Champion' },
    { value: '3x', label: 'NCAA', sublabel: 'All American' },
    { value: '2020', label: 'Tokyo', sublabel: 'Olympian' },
    { value: 'PUMA', label: 'Pro Athlete' },
  ];

  return (
    <section id="coach" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Meet Your Coach
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
            Train with Eric Harrison Jr., an Olympic athlete and experienced coach dedicated
            to developing the next generation of elite athletes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images */}
          <div className="relative grid grid-cols-12 gap-4">
            <div className="col-span-8 col-start-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/coach-1.jpg"
                  alt="Eric Harrison Jr. at track competition"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-7 col-start-5 row-start-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-20">
                <Image
                  src="/images/coach-2.jpg"
                  alt="Eric Harrison Jr. training athletes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-white space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                Eric Harrison Jr.
              </h3>
              <div className="flex items-center space-x-4">
                <p className="text-xl text-white/80">
                  Professional Track & Field Athlete | Olympic Sprinter
                </p>
                <a
                  href="https://www.instagram.com/elhj__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <svg 
                    className="w-5 h-5 text-white/80"
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            <p className="text-lg text-white/70 leading-relaxed">
              As a dual national representing Trinidad and Tobago, Eric brings 
              Olympic-level expertise to youth speed training. His exceptional 
              track record and professional experience make him uniquely 
              qualified to develop young athletes' speed and agility.
            </p>

            <p className="text-lg text-white/70 leading-relaxed">
              An 8x Big Ten Champion and NCAA All-American, Eric's achievements include 
              medals at the 2018 World U20 Championships and 2022 Commonwealth Games, 
              along with representing Trinidad and Tobago at the 2020 Tokyo Olympics.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach;

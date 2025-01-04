import Image from 'next/image';

const AchievementCard = ({ value, label, sublabel }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center flex flex-col items-center justify-center">
    <div className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center">{value}</div>
    <div className="text-lg font-medium text-white mb-1 text-center">{label}</div>
    {sublabel && <div className="text-sm text-white/70 text-center">{sublabel}</div>}
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Train with an Olympic Athlete
          </h2>
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
              <p className="text-xl text-white/80">
                Professional Track & Field Athlete | Olympic Sprinter
              </p>
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

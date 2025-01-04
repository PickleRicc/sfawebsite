import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: '/images/gallery3.jpg',
      alt: 'Speed training session',
      width: 800,
      height: 600
    },
    {
      src: '/images/gallery4.jpg',
      alt: 'Athletes in training',
      width: 800,
      height: 600
    },
    {
      src: '/images/gallery5.jpg',
      alt: 'Training session',
      width: 800,
      height: 600
    },
    {
      src: '/images/gallery6.jpg',
      alt: 'Speed drill',
      width: 800,
      height: 600
    },
    {
      src: '/images/lcsfootball.jpg',
      alt: 'LCS Football training',
      width: 800,
      height: 600
    },
    {
      src: '/images/lcsspeedtraining.jpg',
      alt: 'LCS Speed training session',
      width: 800,
      height: 600
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Training Gallery
          </h2>
          <p className="text-lg text-white/70">
            See our athletes in action and witness the intensity of our training sessions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer
                         transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">View Image</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-primary"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

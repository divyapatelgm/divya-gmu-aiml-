import { motion } from 'framer-motion';

const CarouselPartners = () => {
  const partners = [
    { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-1.svg' },
    { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-6.svg' },
    { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg' },
    { name: 'Tesla', logo: 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg' },
    { name: 'Meta', logo: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg' },
    { name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-11.svg' },
    { name: 'Netflix', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg' },
    { name: 'IBM', logo: 'https://cdn.worldvectorlogo.com/logos/ibm-3.svg' },
  ];

  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex space-x-16 carousel-slide"
        style={{ width: 'calc(200% + 4rem)' }}
      >
        {[...partners, ...partners].map((partner, index) => (
          <motion.div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 w-32 h-20 flex items-center justify-center hover-ai"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CarouselPartners;
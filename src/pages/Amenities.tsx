import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import { amenities } from '../data/content';
import { images } from '../data/images';

export default function Amenities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            Premium Amenities
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-[#1C2529]/80">
            Discover the world-class facilities and services that make Skyline Square an exceptional place to live.
          </motion.p>
        </motion.div>
      </Section>

      {/* Amenities Grid */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {amenities.map((amenity, idx) => {
            const amenityImages = [
              images.amenityFitness,
              images.amenityPool,
              images.amenitySauna,
              images.amenityParty,
              images.amenityFitness,
              images.luxuryInterior,
              images.modernLiving,
              images.amenityConcierge
            ];
            return (
              <motion.div
                key={amenity.id}
                variants={itemVariants}
                className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#B49A70]/50 transition-all duration-300"
              >
                <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${amenityImages[idx]})`}}></div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-4 text-[#1C2529]">{amenity.name}</h3>
                  <p className="text-[#1C2529]/70 text-lg leading-relaxed">{amenity.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Featured Amenities Detail */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            Featured Facilities
          </motion.h2>

          <div className="space-y-16">
            {/* Fitness Center */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl font-bold mb-6 text-[#B49A70]">Fitness Center</h3>
                <p className="text-stone text-lg leading-relaxed mb-4">
                  Our state-of-the-art fitness center is fully equipped with modern exercise equipment, free weights, and
                  cardio machines to support your wellness journey.
                </p>
                <p className="text-stone text-lg leading-relaxed">
                  Maintain an active lifestyle without ever leaving your community with access to professional-grade
                  fitness facilities.
                </p>
              </div>
              <div className="h-96 bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${images.amenityFitness})`}}></div>
            </motion.div>

            {/* Swimming Pool */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-96 bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${images.amenityPool})`}}></div>
              <div>
                <h3 className="font-serif text-3xl font-bold mb-6 text-[#B49A70]">Swimming Pool</h3>
                <p className="text-stone text-lg leading-relaxed mb-4">
                  Our seasonal outdoor swimming pool is a community hub for relaxation and recreation, complete with
                  professional lifeguard service during operating season.
                </p>
                <p className="text-stone text-lg leading-relaxed">
                  Perfect for cooling off on warm days or enjoying quality time with neighbors in a beautiful setting.
                </p>
              </div>
            </motion.div>

            {/* Sauna & Steam Room */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl font-bold mb-6 text-[#B49A70]">Sauna & Steam Room</h3>
                <p className="text-stone text-lg leading-relaxed mb-4">
                  Rejuvenate your mind and body in our luxurious sauna and steam room facilities, designed for ultimate
                  relaxation and wellness.
                </p>
                <p className="text-stone text-lg leading-relaxed">
                  These spa-like amenities provide the perfect retreat for stress relief and therapeutic wellness after
                  a busy day.
                </p>
              </div>
              <div className="h-96 bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${images.amenitySauna})`}}></div>
            </motion.div>

            {/* Rooftop Sundeck */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl font-bold mb-6 text-[#B49A70]">Rooftop Sundecks</h3>
                <p className="text-stone text-lg leading-relaxed mb-4">
                  Elevate your experience with panoramic views from our rooftop sundecks, offering the perfect escape
                  from daily life.
                </p>
                <p className="text-stone text-lg leading-relaxed">
                  Whether you're seeking solitude or want to entertain guests, our rooftop spaces provide an unforgettable
                  backdrop.
                </p>
              </div>
              <div className="h-96 bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${images.modernLiving})`}}></div>
            </motion.div>

            {/* Social Spaces */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-96 bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${images.amenityParty})`}}></div>
              <div>
                <h3 className="font-serif text-3xl font-bold mb-6 text-[#B49A70]">Social & Entertainment Venues</h3>
                <p className="text-stone text-lg leading-relaxed mb-4">
                  From elegant party rooms to casual game rooms, Skyline Square offers versatile spaces for community
                  events, celebrations, and social gatherings.
                </p>
                <p className="text-stone text-lg leading-relaxed">
                  Our library and reading room provide a quiet sanctuary for intellectual pursuits and peaceful relaxation.
                </p>
              </div>
            </motion.div>

            {/* 24-Hour Concierge */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl font-bold mb-6 text-[#B49A70]">24-Hour Concierge Service</h3>
                <p className="text-stone text-lg leading-relaxed mb-4">
                  Our dedicated concierge team is available around the clock to assist with inquiries, packages, guest
                  services, and general assistance.
                </p>
                <p className="text-stone text-lg leading-relaxed">
                  Enjoy the convenience of professional front desk service and personal assistance whenever you need it.
                </p>
              </div>
              <div className="h-96 bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${images.amenityConcierge})`}}></div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Additional Services */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
            Additional Services
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: 'Secure Parking', description: 'Convenient parking facilities for residents and guests' },
              { title: 'Package Services', description: 'Secure package handling and delivery coordination' },
              { title: 'Maintenance Staff', description: 'Professional maintenance team for rapid response' },
              { title: 'Community News', description: 'Regular updates and announcements for residents' },
              { title: 'Event Coordination', description: 'Assistance with community events and gatherings' },
              { title: 'Visitor Management', description: 'Streamlined guest check-in and security protocols' },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg p-8 text-left hover:shadow-lg hover:border-[#B49A70]/50 transition-all duration-300"
              >
                <h4 className="font-serif text-lg font-bold text-[#1C2529] mb-3">{service.title}</h4>
                <p className="text-[#1C2529]/70">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
            Experience the Difference
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-stone mb-8">
            Our comprehensive amenities are designed to enhance your lifestyle and foster a strong sense of community.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/floor-plans" variant="secondary" size="lg">
              View Floor Plans
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Schedule a Tour
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}

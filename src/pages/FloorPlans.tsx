import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import { communityInfo } from '../data/content';
import { images } from '../data/images';

export default function FloorPlans() {
  const [selectedBuilding, setSelectedBuilding] = useState<'north' | 'south'>('north');

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

  const floorPlans = {
    north: [
      { id: 'n1', unit: 'Studio', tier: 'A', sqft: 450 },
      { id: 'n2', unit: '1 Bedroom', tier: 'A', sqft: 650 },
      { id: 'n3', unit: '1 Bedroom', tier: 'B', sqft: 750 },
      { id: 'n4', unit: '2 Bedroom', tier: 'A', sqft: 950 },
      { id: 'n5', unit: '2 Bedroom', tier: 'B', sqft: 1100 },
      { id: 'n6', unit: '3 Bedroom', tier: 'A', sqft: 1400 },
    ],
    south: [
      { id: 's1', unit: 'Studio', tier: 'A', sqft: 450 },
      { id: 's2', unit: '1 Bedroom', tier: 'A', sqft: 650 },
      { id: 's3', unit: '1 Bedroom', tier: 'B', sqft: 750 },
      { id: 's4', unit: '2 Bedroom', tier: 'A', sqft: 950 },
      { id: 's5', unit: '2 Bedroom', tier: 'B', sqft: 1100 },
      { id: 's6', unit: '3 Bedroom', tier: 'A', sqft: 1400 },
    ],
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
            Floor Plans
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-[#1C2529]/80">
            Explore our diverse range of floor plans across both towers, from studios to spacious three-bedroom homes.
          </motion.p>
        </motion.div>
      </Section>

      {/* Building Selector */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
            <button
              onClick={() => setSelectedBuilding('north')}
              className={`px-8 py-4 font-serif text-xl font-semibold rounded-sm transition-all duration-300 ${
                selectedBuilding === 'north'
                  ? 'bg-[#1C2529] text-[#FFFFFF]'
                  : 'bg-[#E8E7E3]/30 text-[#1C2529] hover:bg-[#E8E7E3]/50'
              }`}
            >
              North Building
            </button>
            <button
              onClick={() => setSelectedBuilding('south')}
              className={`px-8 py-4 font-serif text-xl font-semibold rounded-sm transition-all duration-300 ${
                selectedBuilding === 'south'
                  ? 'bg-[#1C2529] text-[#FFFFFF]'
                  : 'bg-[#E8E7E3]/30 text-[#1C2529] hover:bg-[#E8E7E3]/50'
              }`}
            >
              South Building
            </button>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {floorPlans[selectedBuilding].map((plan, idx) => (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#B49A70]/50 transition-all duration-300 group"
              >
                <div className="h-48 bg-cover bg-center transition-all duration-300 bg-gradient-to-br from-[#1C2529]/30 to-[#B49A70]/30" style={{backgroundImage: `url(${selectedBuilding === 'north' ? images.buildingExterior1 : images.buildingExterior2})`}}></div>
                <div className="p-8">
                  <div className="mb-4">
                    <p className="text-[#B49A70] text-sm font-semibold uppercase tracking-wide mb-1">Tier {plan.tier}</p>
                    <h3 className="font-serif text-2xl font-bold text-[#1C2529]">{plan.unit}</h3>
                  </div>
                  <div className="flex items-baseline space-x-2 mb-6 pb-6 border-b border-[#1C2529]/10">
                    <span className="text-3xl font-bold text-[#B49A70]">{plan.sqft}</span>
                    <span className="text-[#1C2529]/60">sq ft</span>
                  </div>
                  <Button href="#" variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Floor Plan Information */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
            Wide Range of Options
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-stone max-w-3xl mx-auto mb-12">
            Both the North and South buildings offer a comprehensive selection of floor plans designed to suit every
            lifestyle and preference.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Studios',
                description: 'Efficient and affordable, perfect for individuals or couples.',
              },
              {
                title: '1 & 2 Bedroom',
                description: 'Versatile layouts suitable for families and professionals.',
              },
              {
                title: '3+ Bedrooms',
                description: 'Spacious residences for larger families and luxury living.',
              },
            ].map((type, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#FFFFFF]/10 border border-[#B49A70]/30 rounded-lg p-8"
              >
                <h4 className="font-serif text-xl font-semibold text-[#B49A70] mb-3">{type.title}</h4>
                <p className="text-stone">{type.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Features & Specifications */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            Premium Features
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              'Hardwood and tile flooring',
              'Modern kitchens with stainless steel appliances',
              'Walk-in closets and storage solutions',
              'Updated bathrooms with premium fixtures',
              'Large windows with natural light',
              'Climate-controlled living spaces',
              'Cable-ready infrastructure',
              'Secure entry systems',
            ].map((feature, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex items-start space-x-4">
                <span className="text-2xl text-[#B49A70] flex-shrink-0">✓</span>
                <p className="text-lg text-[#1C2529]/80">{feature}</p>
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
            Find Your Perfect Home
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-stone mb-8">
            With a variety of floor plans and sizes, there's a perfect residence for everyone at Skyline Square.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="secondary" size="lg">
              Schedule a Tour
            </Button>
            <Button to="/residents" variant="outline" size="lg">
              Resident Resources
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}

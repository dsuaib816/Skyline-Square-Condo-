import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { communityInfo, amenities, news } from '../data/content';
import { images } from '../data/images';

const HeroPlaceholder = () => (
  <div className="w-full h-96 md:h-screen bg-cover bg-center flex items-center justify-center" style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a924f6ef5?w=1600&h=900&fit=crop")',
    backgroundAttachment: 'fixed'
  }}>
    <div className="absolute inset-0 bg-black/40"></div>
  </div>
);

export default function Home() {
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
      {/* Hero Section */}
      <div className="relative h-screen md:h-[90vh] flex items-center justify-center overflow-hidden">
        <HeroPlaceholder />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#FFFFFF] mb-4 tracking-tight drop-shadow-lg">
              {communityInfo.tagline}
            </h1>
            <p className="text-lg md:text-2xl text-stone mb-8 drop-shadow-md max-w-2xl">
              {communityInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/about" variant="secondary" size="lg">
                Explore Skyline Square
              </Button>
              <Button to="/residents" variant="outline" size="lg">
                Resident Resources
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-[#FFFFFF] opacity-70" />
        </motion.div>
      </div>

      {/* Community Introduction */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Skyline Square
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#1C2529]/80 mb-8 leading-relaxed">
            A sophisticated residential community comprising two distinctive 28-story towers with 846 condominium residences.
            Located in the heart of Falls Church, Virginia, Skyline Square offers an elevated living experience with
            world-class amenities, exceptional service, and a vibrant community atmosphere.
          </motion.p>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Total Units', value: communityInfo.totalUnits },
            { label: 'Stories', value: communityInfo.totalStories },
            { label: 'Buildings', value: 2 },
            { label: 'Years Established', value: '1970s' },
          ].map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#B49A70] mb-2">{stat.value}</div>
              <p className="text-[#1C2529]/70 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Amenities Section */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            World-Class Amenities
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-stone max-w-2xl mx-auto">
            Experience luxury living with our comprehensive suite of amenities designed for comfort, wellness, and
            entertainment.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.id}
              variants={itemVariants}
              className="bg-[#1C2529]/50 border border-[#B49A70]/30 rounded-lg p-8 hover:border-[#B49A70] transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 text-[#B49A70] group-hover:scale-110 transition-transform duration-300">
                ✨
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{amenity.name}</h3>
              <p className="text-stone text-sm leading-relaxed">{amenity.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button to="/amenities" variant="secondary" size="lg">
            Explore All Amenities
          </Button>
        </div>
      </Section>

      {/* Buildings Section */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            North & South Towers
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#1C2529]/80 max-w-2xl mx-auto">
            Two distinctive residential buildings, each featuring 28 stories and innovative floor plans designed for
            modern living.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {[
            { ...communityInfo.buildings.north, img: images.buildingExterior1 },
            { ...communityInfo.buildings.south, img: images.buildingExterior2 }
          ].map((building, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-64 bg-cover bg-center bg-gradient-to-br from-[#1C2529]/20 to-[#B49A70]/20" style={{backgroundImage: `url(${building.img})`}}></div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">{building.name}</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-[#1C2529]/80">
                    <span className="font-semibold">{building.stories}</span> Stories
                  </p>
                  <p className="text-[#1C2529]/80">
                    <span className="font-semibold">{building.units}</span> Residences
                  </p>
                </div>
                <Button to="/floor-plans" variant="outline">
                  View Floor Plans
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Resident Resources Section */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Resident Resources
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-stone max-w-2xl mx-auto">
            Easy access to essential community services, documents, and resident information.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: 'Resident Portal', description: 'Access BuildingLink portal for community info' },
            { title: 'Forms & Applications', description: 'Download necessary forms and applications' },
            { title: 'Governing Documents', description: 'Review bylaws and community policies' },
            { title: 'Maintenance Services', description: 'Schedule maintenance and repairs' },
          ].map((resource, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-[#FFFFFF]/10 border border-[#B49A70]/30 rounded-lg p-6 hover:bg-[#FFFFFF]/20 transition-all duration-300"
            >
              <h4 className="font-serif text-lg font-semibold mb-2 text-[#B49A70]">{resource.title}</h4>
              <p className="text-stone text-sm">{resource.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button to="/residents" variant="secondary" size="lg">
            View All Resident Resources
          </Button>
        </div>
      </Section>

      {/* News Section */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Latest News & Announcements
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {news.map((article, idx) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${idx === 0 ? images.communityGarden : idx === 1 ? images.amenityFitness : images.modernLiving})`}}></div>
              <div className="p-6">
                <p className="text-[#B49A70] text-xs font-semibold uppercase tracking-wide mb-2">
                  {article.category}
                </p>
                <h4 className="font-serif text-lg font-semibold mb-3 line-clamp-2">{article.title}</h4>
                <p className="text-[#1C2529]/70 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <p className="text-[#1C2529]/60 text-xs">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button to="/news" variant="primary" size="lg">
            View All News
          </Button>
        </div>
      </Section>

      {/* Location Section */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-8">
            Perfectly Located
          </motion.h2>

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-8">
            <div className="bg-[#E8E7E3]/20 border border-[#B49A70]/30 rounded-lg p-8 mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <MapPin size={32} className="text-[#B49A70]" />
                <h3 className="font-serif text-2xl font-bold">{communityInfo.location}</h3>
              </div>
              <p className="text-stone text-lg leading-relaxed">
                Conveniently located in Falls Church, Virginia, Skyline Square offers easy access to shopping, restaurants,
                entertainment, and major roadways connecting to Washington D.C., Maryland, and surrounding areas.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-96 bg-cover bg-center border border-[#B49A70]/30 rounded-lg" style={{backgroundImage: `url(${images.locationMap})`}}></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Transportation', desc: 'Close to public transit connecting to DC' },
                { title: 'Shopping & Dining', desc: 'Abundant retail and restaurant options nearby' },
                { title: 'Schools & Services', desc: 'Excellent schools and community services' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <h4 className="font-serif text-lg font-semibold text-[#B49A70] mb-2">{item.title}</h4>
                  <p className="text-stone text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Community
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#1C2529]/80 mb-8">
            Experience sophisticated urban living at Skyline Square. Whether you're interested in learning more about our
            community or accessing resident services, we're here to help.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
            <Button href="https://www.buildinglink.com/app/login" variant="secondary" size="lg" external>
              Resident Portal
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}

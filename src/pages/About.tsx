import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import { communityInfo } from '../data/content';
import { images } from '../data/images';

export default function About() {
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
            About Skyline Square
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-[#1C2529]/80">
            A distinguished residential community offering sophisticated urban living in the heart of Northern Virginia.
          </motion.p>
        </motion.div>
      </Section>

      {/* Community Overview */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6">Community Excellence</h2>
            <div className="space-y-4 text-[#1C2529]/80 text-lg leading-relaxed">
              <p>
                Skyline Square stands as one of the premier residential communities in Northern Virginia, comprising two
                distinctive 28-story towers with 846 condominium residences.
              </p>
              <p>
                Our community is built on a foundation of exceptional service, world-class amenities, and a commitment to
                creating a vibrant living environment for our residents.
              </p>
              <p>
                Whether you're a long-time resident or new to our community, Skyline Square offers the perfect blend of
                urban convenience and residential comfort.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg p-12">
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-[#B49A70] mb-2">846</div>
                <p className="text-[#1C2529] font-semibold">Total Condominium Units</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#B49A70] mb-2">28</div>
                <p className="text-[#1C2529] font-semibold">Stories per Building</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#B49A70] mb-2">2</div>
                <p className="text-[#1C2529] font-semibold">Residential Towers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#B49A70] mb-2">1970s</div>
                <p className="text-[#1C2529] font-semibold">Established</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* The Buildings */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            Our Towers
          </motion.h2>

          <div className="space-y-16">
            {[
              { ...communityInfo.buildings.north, img: images.buildingExterior1 },
              { ...communityInfo.buildings.south, img: images.buildingExterior2 }
            ].map((building, idx) => (
              <motion.div key={idx} variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {idx === 0 ? (
                  <>
                    <div>
                      <h3 className="font-serif text-3xl font-bold mb-4 text-[#B49A70]">{building.name}</h3>
                      <div className="space-y-4 text-stone text-lg leading-relaxed">
                        <p>
                          Experience urban sophistication in our {building.name}, featuring {building.stories} stories of
                          premium residential living.
                        </p>
                        <p>
                          Each of our {building.units} residences is thoughtfully designed to provide the comfort and
                          elegance you deserve, with attention to every detail.
                        </p>
                        <p>
                          From studio apartments to spacious three-bedroom homes, we offer a diverse range of floor plans to
                          suit every lifestyle.
                        </p>
                      </div>
                    </div>
                    <div className="h-96 bg-cover bg-center rounded-lg bg-gradient-to-br from-[#1C2529]/20 to-[#B49A70]/20" style={{backgroundImage: `url(${building.img})`}}></div>
                  </>
                ) : (
                  <>
                    <div className="h-96 bg-cover bg-center rounded-lg bg-gradient-to-br from-[#1C2529]/20 to-[#B49A70]/20" style={{backgroundImage: `url(${building.img})`}}></div>
                    <div>
                      <h3 className="font-serif text-3xl font-bold mb-4 text-[#B49A70]">{building.name}</h3>
                      <div className="space-y-4 text-stone text-lg leading-relaxed">
                        <p>
                          Experience urban sophistication in our {building.name}, featuring {building.stories} stories of
                          premium residential living.
                        </p>
                        <p>
                          Each of our {building.units} residences is thoughtfully designed to provide the comfort and
                          elegance you deserve, with attention to every detail.
                        </p>
                        <p>
                          From studio apartments to spacious three-bedroom homes, we offer a diverse range of floor plans to
                          suit every lifestyle.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Location Benefits */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
            Unbeatable Location
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-[#1C2529]/80 max-w-3xl mx-auto mb-12">
            Located at {communityInfo.location}, Skyline Square offers exceptional convenience and access to everything
            you need.
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
                title: 'Public Transportation',
                description: 'Close proximity to public transit with easy connections to Washington D.C. and surrounding areas.',
              },
              {
                title: 'Shopping & Dining',
                description: 'Abundant retail establishments, restaurants, and entertainment venues within walking distance.',
              },
              {
                title: 'Schools & Services',
                description: 'Excellent public and private schools, plus convenient access to medical facilities and services.',
              },
              {
                title: 'Recreation',
                description: 'Parks, trails, and outdoor recreational facilities for an active lifestyle.',
              },
              {
                title: 'Major Highways',
                description: 'Quick access to I-66, I-81, and Route 29 for commuting throughout Northern Virginia.',
              },
              {
                title: 'Community',
                description: 'Vibrant neighborhood with a strong sense of community and neighborhood pride.',
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg p-8 text-left"
              >
                <h4 className="font-serif text-lg font-semibold text-[#1C2529] mb-3">{benefit.title}</h4>
                <p className="text-[#1C2529]/70">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Community Values */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
            Our Commitment
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in building maintenance, amenities, and resident services.',
              },
              {
                title: 'Community',
                description: 'We foster a vibrant, inclusive community where residents feel welcomed and connected.',
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve to meet the changing needs and expectations of our residents.',
              },
            ].map((value, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="text-5xl font-bold text-[#B49A70] mb-4">✓</div>
                <h4 className="font-serif text-xl font-semibold text-[#FFFFFF] mb-3">{value.title}</h4>
                <p className="text-stone">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
            Ready to Learn More?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#1C2529]/80 mb-8">
            Explore our amenities, browse floor plans, or get in touch with our management office.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/amenities" variant="primary" size="lg">
              Explore Amenities
            </Button>
            <Button to="/floor-plans" variant="secondary" size="lg">
              View Floor Plans
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}

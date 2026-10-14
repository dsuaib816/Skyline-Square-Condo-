import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import { news } from '../data/content';
import { images } from '../data/images';

export default function News() {
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
            News & Announcements
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-[#1C2529]/80">
            Stay informed about community news, events, and important announcements.
          </motion.p>
        </motion.div>
      </Section>

      {/* News Grid */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {news.map((article, idx) => {
            const newsImages = [
              images.communityGarden,
              images.amenityFitness,
              images.modernLiving
            ];
            return (
              <motion.div
                key={article.id}
                variants={itemVariants}
                className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#B49A70]/50 transition-all duration-300 group flex flex-col"
              >
                <div className="h-48 bg-cover bg-center transition-all duration-300" style={{backgroundImage: `url(${newsImages[idx % newsImages.length]})`}}></div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <p className="text-[#B49A70] text-xs font-semibold uppercase tracking-wide mb-2">
                      {article.category}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-[#1C2529] line-clamp-2">{article.title}</h3>
                  </div>
                  <p className="text-[#1C2529]/70 text-base leading-relaxed mb-6 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-[#1C2529]/10">
                    <p className="text-[#1C2529]/60 text-xs">
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                    <a href="#" className="text-[#B49A70] hover:text-[#1C2529] text-sm font-medium uppercase tracking-wide">
                      Read More
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Announcement Categories */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
            Announcement Categories
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: 'Community News', count: '12' },
              { title: 'Events', count: '8' },
              { title: 'Facilities', count: '6' },
              { title: 'Management', count: '4' },
            ].map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#FFFFFF]/10 border border-[#B49A70]/30 rounded-lg p-8 hover:bg-[#FFFFFF]/20 transition-all duration-300 cursor-pointer"
              >
                <p className="text-4xl font-bold text-[#B49A70] mb-2">{category.count}</p>
                <h4 className="font-serif text-lg font-semibold text-[#FFFFFF]">{category.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Subscribe CTA */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg p-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
            Stay Updated
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#1C2529]/80 mb-8">
            For the latest announcements and news, access our Resident Portal or contact the management office.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://www.buildinglink.com/app/login" variant="primary" size="lg" external>
              Check Portal
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}

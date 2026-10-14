import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { communityInfo } from '../data/content';
import { images } from '../data/images';

export default function Contact() {
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
            Contact Us
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-[#1C2529]/80">
            Get in touch with the Skyline Square management office. We're here to help and answer any questions.
          </motion.p>
        </motion.div>
      </Section>

      {/* Contact Information */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold text-[#1C2529]">
                    <MapPin size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1C2529] mb-2">Address</h3>
                  <p className="text-[#1C2529]/70 text-lg">{communityInfo.location}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold text-[#1C2529]">
                    <Phone size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1C2529] mb-2">Phone</h3>
                  <a
                    href={`tel:${communityInfo.phone}`}
                    className="text-[#1C2529]/70 hover:text-[#B49A70] transition-colors text-lg font-medium"
                  >
                    {communityInfo.phone}
                  </a>
                  <p className="text-[#1C2529]/60 text-sm">Available Mon-Fri, 9 AM - 5 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold text-[#1C2529]">
                    <Mail size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1C2529] mb-2">Email</h3>
                  <a
                    href="mailto:info@skylinesquare.org"
                    className="text-[#1C2529]/70 hover:text-[#B49A70] transition-colors text-lg font-medium"
                  >
                    info@skylinesquare.org
                  </a>
                  <p className="text-[#1C2529]/60 text-sm">We typically respond within 24 hours</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold text-[#1C2529]">
                    <Clock size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1C2529] mb-2">Office Hours</h3>
                  <div className="text-[#1C2529]/70 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-sm text-[#1C2529]/60 mt-2">24/7 emergency services available</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder & Form Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="min-h-96 h-96 md:h-[500px] bg-cover bg-center rounded-lg border-2 border-[#1C2529]/20 shadow-lg" style={{backgroundImage: `url(${images.locationMap})`}}></div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Contact Options */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            How Can We Help?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'General Inquiries',
                description: 'Questions about the community, amenities, or services.',
              },
              {
                title: 'Maintenance Requests',
                description: 'Submit maintenance requests through the resident portal or by phone.',
              },
              {
                title: 'Management Issues',
                description: 'Concerns or issues that require management attention.',
              },
              {
                title: 'Amenity Reservations',
                description: 'Information about reserving community spaces and facilities.',
              },
              {
                title: 'Visitor Services',
                description: 'Questions about guest policies and visitor management.',
              },
              {
                title: 'Emergency Services',
                description: 'For urgent matters, contact our 24/7 emergency hotline.',
              },
            ].map((option, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#FFFFFF]/10 border border-[#B49A70]/30 rounded-lg p-8"
              >
                <h4 className="font-serif text-lg font-semibold text-[#B49A70] mb-3">{option.title}</h4>
                <p className="text-stone">{option.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Preferred Methods */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            Preferred Contact Methods
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                method: 'Resident Portal (BuildingLink)',
                best_for: 'Maintenance requests, document access, announcements',
                timeframe: 'Monitored regularly during business hours',
              },
              {
                method: 'Phone',
                best_for: 'Urgent matters and immediate assistance',
                timeframe: 'Responded to during office hours or emergency line 24/7',
              },
              {
                method: 'Email',
                best_for: 'Non-urgent inquiries and formal communication',
                timeframe: 'Typically responded to within 24 business hours',
              },
              {
                method: 'In Person',
                best_for: 'Complex matters requiring detailed discussion',
                timeframe: 'By appointment during office hours',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg p-8 hover:shadow-lg hover:border-[#B49A70]/50 transition-all duration-300"
              >
                <h4 className="font-serif text-lg font-bold text-[#1C2529] mb-3">{item.method}</h4>
                <div className="space-y-2">
                  <p className="text-[#1C2529]/70">
                    <span className="font-semibold text-[#1C2529]">Best for:</span> {item.best_for}
                  </p>
                  <p className="text-[#1C2529]/70">
                    <span className="font-semibold text-[#1C2529]">Response timeframe:</span> {item.timeframe}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
            Ready to Connect?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-stone mb-8">
            Whether you're a current resident, prospective owner, or simply have questions about Skyline Square, we're
            here to help. Reach out today!
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${communityInfo.phone}`}
              className="inline-block px-8 py-4 bg-gold text-[#1C2529] rounded-sm hover:bg-[#E8E7E3] hover:text-[#1C2529] transition-all duration-200 font-medium text-base uppercase tracking-wide"
            >
              Call Us
            </a>
            <Button href="https://www.buildinglink.com/app/login" variant="outline" size="lg" external>
              Resident Portal
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}

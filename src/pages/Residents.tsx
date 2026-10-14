import { motion } from 'framer-motion';
import { FileText, Download, MapPin, Calendar } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { documents } from '../data/content';

export default function Residents() {
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
            Resident Resources
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-[#1C2529]/80">
            Access everything you need as a Skyline Square resident, including documents, forms, and community information.
          </motion.p>
        </motion.div>
      </Section>

      {/* Quick Access */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            Quick Access
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '🔐',
                title: 'Resident Portal',
                description: 'Access BuildingLink for announcements and community updates',
                link: 'https://www.buildinglink.com/app/login',
                external: true,
              },
              {
                icon: '📋',
                title: 'Forms & Applications',
                description: 'Download common forms for maintenance requests and alterations',
                link: '/residents',
              },
              {
                icon: '📄',
                title: 'Governing Documents',
                description: 'Review bylaws and community policies',
                link: '/residents',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg p-8 hover:shadow-lg hover:border-[#B49A70]/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-[#1C2529] mb-3">{item.title}</h3>
                <p className="text-[#1C2529]/70 mb-6">{item.description}</p>
                <a
                  href={item.link}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="inline-block px-6 py-2 bg-[#1C2529] text-[#FFFFFF] rounded-sm hover:bg-[#B49A70] hover:text-[#1C2529] transition-all duration-200 font-medium text-sm uppercase tracking-wide"
                >
                  Access Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Documents Library */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            Documents Library
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {documents.map((docGroup, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <h3 className="font-serif text-2xl font-bold text-[#B49A70] mb-6">{docGroup.category}</h3>
                <div className="space-y-3">
                  {docGroup.items.map((doc, docIdx) => (
                    <div
                      key={docIdx}
                      className="flex items-center justify-between bg-[#FFFFFF]/10 border border-[#B49A70]/30 rounded-lg p-6 hover:bg-[#FFFFFF]/20 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <FileText size={24} className="text-[#B49A70]" />
                        <span className="text-[#FFFFFF] font-medium">{doc.name}</span>
                      </div>
                      <a
                        href={doc.url}
                        className="inline-flex items-center space-x-2 text-[#B49A70] hover:text-[#FFFFFF] transition-colors"
                      >
                        <Download size={20} />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Services */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            Resident Services
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Maintenance Requests',
                description: 'Submit maintenance requests online for prompt service from our professional staff.',
              },
              {
                title: 'Package Services',
                description: 'Secure package handling and convenient delivery coordination.',
              },
              {
                title: 'Guest Services',
                description: 'Streamlined guest check-in and visitor management services.',
              },
              {
                title: 'Community Events',
                description: 'Information about upcoming events, gatherings, and community activities.',
              },
              {
                title: 'Parking Management',
                description: 'Information about parking assignments and parking policy guidelines.',
              },
              {
                title: 'Management Office',
                description: 'Contact information and office hours for the management office.',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg p-8 hover:shadow-lg hover:border-[#B49A70]/50 transition-all duration-300"
              >
                <h4 className="font-serif text-xl font-bold text-[#1C2529] mb-3">{service.title}</h4>
                <p className="text-[#1C2529]/70">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Contact & Hours */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
            Management Office
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-left">
              <h4 className="font-serif text-xl font-bold text-[#B49A70] mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-[#B49A70] flex-shrink-0 mt-1" />
                  <p className="text-stone">5503 Seminary Road, Falls Church, VA 22041</p>
                </div>
                <div>
                  <p className="text-stone">
                    <span className="font-semibold text-[#B49A70]">Phone:</span> 703-379-3992
                  </p>
                </div>
                <div>
                  <p className="text-stone">
                    <span className="font-semibold text-[#B49A70]">Email:</span> info@skylinesquare.org
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-left">
              <h4 className="font-serif text-xl font-bold text-[#B49A70] mb-6">Office Hours</h4>
              <div className="space-y-2 text-stone">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-stone/70 text-sm mt-4">Emergencies available 24/7</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Important Information */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
            Important Information
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Amenity Reservations',
                items: [
                  'Reserve party rooms and event spaces online',
                  'Special pricing for residents',
                  'Availability calendar updated regularly',
                ],
              },
              {
                title: 'Community Standards',
                items: ['Review lease restrictions and rules', 'Pet policy and guidelines', 'Parking regulations'],
              },
              {
                title: 'Maintenance Policies',
                items: ['Alteration approval process', 'Contractor guidelines', 'Work hours and restrictions'],
              },
              {
                title: 'Financial Information',
                items: [
                  'Monthly maintenance fees',
                  'Special assessments notices',
                  'Budget and financial reports',
                ],
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#E8E7E3]/30 border border-[#1C2529]/20 rounded-lg p-8"
              >
                <h4 className="font-serif text-lg font-bold text-[#1C2529] mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start space-x-3">
                      <span className="text-[#B49A70] font-bold flex-shrink-0">•</span>
                      <span className="text-[#1C2529]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Portal CTA */}
      <Section dark>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
            Access Your Resident Portal
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-stone mb-8">
            Log in to BuildingLink to access announcements, submit maintenance requests, pay dues, and connect with
            community information.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button href="https://www.buildinglink.com/app/login" variant="secondary" size="lg" external>
              Login to Portal
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}

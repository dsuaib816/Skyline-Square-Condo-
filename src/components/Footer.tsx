import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { communityInfo } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C2529] text-[#FFFFFF] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Skyline<span className="text-[#B49A70] ml-1">Square</span>
            </h3>
            <p className="text-stone text-sm leading-relaxed">
              A distinguished residential community in the heart of Northern Virginia.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[#B49A70]">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#B49A70] flex-shrink-0 mt-0.5" />
                <p className="text-stone text-sm">{communityInfo.location}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#B49A70]" />
                <a
                  href={`tel:${communityInfo.phone}`}
                  className="text-stone hover:text-[#B49A70] transition-colors text-sm"
                >
                  {communityInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#B49A70]" />
                <a
                  href="mailto:info@skylinesquare.org"
                  className="text-stone hover:text-[#B49A70] transition-colors text-sm"
                >
                  info@skylinesquare.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[#B49A70]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-stone hover:text-[#B49A70] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/residents" className="text-stone hover:text-[#B49A70] transition-colors text-sm">
                  Resident Resources
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="text-stone hover:text-[#B49A70] transition-colors text-sm">
                  Amenities
                </Link>
              </li>
              <li>
                <Link to="/floor-plans" className="text-stone hover:text-[#B49A70] transition-colors text-sm">
                  Floor Plans
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-stone hover:text-[#B49A70] transition-colors text-sm">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Resident Portal */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[#B49A70]">Residents</h4>
            <p className="text-stone text-sm mb-4">Access your resident portal for documents, announcements, and community information.</p>
            <a
              href="https://www.buildinglink.com/app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gold text-[#1C2529] rounded-sm hover:bg-[#E8E7E3] transition-all duration-200 font-medium text-sm uppercase tracking-wide"
            >
              Portal Login
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E8E7E3] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone text-sm mb-4 md:mb-0">
              © {currentYear} Skyline Square. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-stone hover:text-[#B49A70] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-stone hover:text-[#B49A70] transition-colors text-sm">
                Terms of Use
              </a>
              <a href="#" className="text-stone hover:text-[#B49A70] transition-colors text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

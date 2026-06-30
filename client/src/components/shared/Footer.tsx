import { MapPin,  } from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#EC4D87] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Address */}
        <div className="flex gap-3">
          <MapPin className="w-6 h-6 shrink-0 mt-1" />
          <p className="text-sm leading-relaxed">
            H#000 (0th Floor), Road #00, <br />
            New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="text-xl font-bold mb-6">Company</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li><Link href="#" className="hover:underline">About</Link></li>
            <li><Link href="#" className="hover:underline">Project</Link></li>
            <li><Link href="#" className="hover:underline">Our Team</Link></li>
            <li><Link href="#" className="hover:underline">Terms Conditions</Link></li>
            <li><Link href="#" className="hover:underline">Submit Listing</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li><Link href="#" className="hover:underline">Quick Links</Link></li>
            <li><Link href="#" className="hover:underline">Rentals</Link></li>
            <li><Link href="#" className="hover:underline">Sales</Link></li>
            <li><Link href="#" className="hover:underline">Contact</Link></li>
            <li><Link href="#" className="hover:underline">Our blog</Link></li>
          </ul>
        </div>

        {/* Column 4: About Us */}
        <div>
          <h3 className="text-xl font-bold mb-6">About us</h3>
          <p className="text-sm leading-relaxed opacity-90 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-5">
            <Link href="#" className="hover:scale-110 transition-transform">
              <FaFacebook className="w-6 h-6 fill-current" />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <FaLinkedin className="w-6 h-6 fill-current" />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <FaYoutube className="w-7 h-7" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
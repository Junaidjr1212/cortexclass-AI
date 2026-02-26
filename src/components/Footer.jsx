import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
   <footer className="bg-transparent text-gray-300 pt-16 pb-8 px-6 border-t border-orange-500/20 relative">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* GET STARTED */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            GET STARTED
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-orange-500 cursor-pointer transition">Sign Up</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Login</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Explore Features</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Pricing Plans</li>
          </ul>
        </div>

        {/* DISCOVER */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            DISCOVER
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-orange-500 cursor-pointer transition">AI Doubt Solver</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Smart Quiz Generator</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Study Planner</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Analytics Dashboard</li>
          </ul>
        </div>

        {/* SOCIAL (Colored Icons Added) */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            SOCIAL
          </h3>

          <div className="flex gap-5 text-2xl">

            <FaFacebookF className="text-[#1877F2] hover:scale-110 transition duration-300 cursor-pointer" />

            <FaTwitter className="text-[#1DA1F2] hover:scale-110 transition duration-300 cursor-pointer" />

            <FaLinkedinIn className="text-[#0A66C2] hover:scale-110 transition duration-300 cursor-pointer" />

            <FaInstagram className="text-[#E1306C] hover:scale-110 transition duration-300 cursor-pointer" />

            <FaYoutube className="text-[#FF0000] hover:scale-110 transition duration-300 cursor-pointer" />

          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            CONTACT US
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex items-start gap-3">
              <MdLocationOn className="text-orange-500 text-xl mt-1" />
              <p>Mumbai, India</p>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-orange-500 text-xl" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-orange-500 text-xl" />
              <p>support@cortexclass.ai</p>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white mt-3 transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

            {/* Google Map Button */}
            <a
  href="https://www.google.com/maps?q=AI+Learning+Center,+Bandra+Kurla+Complex,+Mumbai&z=17"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-black mt-2 transition"
>
  <MdLocationOn />
  View on Map
</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} CortexClass AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
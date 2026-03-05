import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { bgColor } = useTheme();

  return (
    <footer className="text-gray-300 pt-16 pb-8 px-6 border-t border-orange-500/20 relative bg-gradient-to-b from-[#0e1117] to-black">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* GET STARTED */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            GET STARTED
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/signup" className="hover:text-orange-500 transition">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-orange-500 transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-orange-500 transition">
                Explore Features
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-500 transition">
                Pricing Plans
              </Link>
            </li>
          </ul>
        </div>

        {/* DISCOVER */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            DISCOVER
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/dashboard/ai" className="hover:text-orange-500 transition">
                AI Doubt Solver
              </Link>
            </li>
            <li>
              <Link to="/dashboard/quiz" className="hover:text-orange-500 transition">
                Smart Quiz Generator
              </Link>
            </li>
            <li>
              <Link to="/dashboard/planner" className="hover:text-orange-500 transition">
                Study Planner
              </Link>
            </li>
            <li>
              <Link to="/dashboard/analytics" className="hover:text-orange-500 transition">
                Analytics Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            SOCIAL
          </h3>

          <div className="flex gap-5 text-2xl">

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-[#1877F2] hover:scale-110 hover:drop-shadow-lg transition duration-300 cursor-pointer" />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-[#1DA1F2] hover:scale-110 hover:drop-shadow-lg transition duration-300 cursor-pointer" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-[#0A66C2] hover:scale-110 hover:drop-shadow-lg transition duration-300 cursor-pointer" />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#E1306C] hover:scale-110 hover:drop-shadow-lg transition duration-300 cursor-pointer" />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-[#FF0000] hover:scale-110 hover:drop-shadow-lg transition duration-300 cursor-pointer" />
            </a>

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
              <a href="tel:+919876543210" className="hover:text-orange-500 transition">
                +91 98765 43210
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-orange-500 text-xl" />
              <a href="mailto:support@cortexclass.ai" className="hover:text-orange-500 transition">
                support@cortexclass.ai
              </a>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white mt-3 transition shadow-lg hover:shadow-green-500/40"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

            {/* Google Map Button */}
            <a
              href="https://www.google.com/maps?q=Mumbai,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-black mt-2 transition shadow-lg hover:shadow-orange-500/40"
            >
              <MdLocationOn />
              View on Map
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} CortexClass AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
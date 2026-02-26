import { useState } from "react";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { bgColor } = useTheme();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      <Navbar />

      {/* CONTACT SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-28 pb-16 relative z-10">

        <div
          className="w-full max-w-3xl 
          bg-white/5 backdrop-blur-xl
          border border-orange-500/40
          rounded-2xl p-8 md:p-10
          transition-all duration-500
          hover:shadow-[0_0_60px_rgba(255,120,0,0.25)]"
        >

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
            Contact <span className="text-orange-500">CortexClass</span>
          </h2>

          <p className="text-gray-400 text-center mb-6 text-sm md:text-base">
            Get in touch with us to explore AI-powered learning solutions.
            Our team will respond within 24 hours.
          </p>

          {/* Info */}
          <div className="text-gray-300 text-center mb-6 space-y-2 text-sm">
            <p>📍 Mumbai, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ support@cortexclass.ai</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                required
                className="bg-white/5 border border-gray-700 rounded-lg px-4 py-2.5 
                focus:border-orange-500 outline-none text-sm transition backdrop-blur"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-full bg-white/5 backdrop-blur border border-gray-700 rounded-lg px-4 py-2.5 
                focus:border-orange-500 outline-none text-sm transition"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full bg-white/5 backdrop-blur border border-gray-700 rounded-lg px-4 py-2.5 
              focus:border-orange-500 outline-none text-sm transition text-white"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-white/5 backdrop-blur text-white border border-gray-700 rounded-lg px-4 py-2.5 
              focus:border-orange-500 outline-none text-sm transition"
            />

            <textarea
              rows="3"
              placeholder="Message"
              required
              className="w-full bg-white/5 backdrop-blur text-white border border-gray-700 rounded-lg px-4 py-2.5 
              focus:border-orange-500 outline-none text-sm transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-black 
              font-semibold py-2.5 rounded-full transition 
              shadow-lg shadow-orange-500/30 text-sm"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </section>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-5 py-2 
        rounded-lg shadow-lg z-50 text-sm">
          ✅ Message Sent Successfully!
        </div>
      )}
    </>
  );
}
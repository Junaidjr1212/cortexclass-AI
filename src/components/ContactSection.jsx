import { FaPaperPlane } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <section className="bg-[#0b0b0f] py-20 px-4 flex justify-center items-center">

      <div className="w-full max-w-4xl bg-gradient-to-br from-[#111] via-[#1a1a1f] to-[#0f0f14] 
      rounded-3xl p-10 border-2 border-red-600 shadow-[0_0_40px_rgba(255,0,0,0.25)]">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500/20 
          flex items-center justify-center text-orange-500 text-2xl">
            ✉
          </div>

          <h2 className="text-4xl font-bold text-white mb-3">
            Contact <span className="text-orange-500">CortexClass AI</span>
          </h2>

          <p className="text-gray-400 text-lg">
            Connect with our AI experts to explore smart learning solutions.
          </p>
        </div>

        {/* Info */}
        <div className="space-y-4 text-gray-300 mb-8">

          <div className="flex items-center gap-3">
            <MdLocationOn className="text-orange-500 text-xl" />
            <span>Mumbai, India – AI Innovation Hub</span>
          </div>

          <div className="flex items-center gap-3">
            <MdPhone className="text-orange-500 text-xl" />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-3">
            <MdEmail className="text-orange-500 text-xl" />
            <span>support@cortexclass.ai</span>
          </div>

          <p className="text-gray-500 text-sm mt-3">
            Our AI team responds within 24 hours to guide you with personalized
            learning solutions, quiz automation, and smart doubt solving.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-[#0f0f14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#0f0f14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#0f0f14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-[#0f0f14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full bg-[#0f0f14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 
            hover:from-orange-600 hover:to-red-700 
            py-3 rounded-full text-black font-semibold 
            flex items-center justify-center gap-2 transition shadow-lg"
          >
            <FaPaperPlane />
            Send Message
          </button>

        </form>
      </div>

    </section>
  );
}
import { useTheme } from "../context/ThemeContext";

export default function CTA() {
  const { bgColor } = useTheme();

  return (
    <section className="pt-16 pb-4 px-6 text-center">
      
      <h2 className="text-4xl font-bold mb-6 hover:text-orange-500 transition">
        Upgrade Your Learning Experience
      </h2>

      <p className="text-gray-400 mb-8">
        Experience intelligent automation, smart tracking, and adaptive AI guidance.
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-black font-semibold shadow-lg shadow-orange-500/40 transition">
        Get Started Now
      </button>

    </section>
  );
}
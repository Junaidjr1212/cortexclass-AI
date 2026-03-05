import { motion } from "framer-motion";

export default function StatCard({ title, value, icon, growth }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#14161c] p-6 rounded-xl border border-orange-500/30 
      shadow-[0_0_25px_rgba(249,115,22,0.2)] transition"
    >
      <div className="flex justify-between">
        <div className="text-orange-400 text-2xl">{icon}</div>
        <span className="text-green-400 text-sm">{growth}</span>
      </div>
      <h2 className="text-3xl font-bold mt-4">{value}</h2>
      <p className="text-gray-400">{title}</p>
    </motion.div>
  );
}
import { motion } from "framer-motion";

export default function SubjectProgress({ subjects }) {
  return (
    <div className="bg-[#14161c] p-6 rounded-xl border border-white/10">

      <h3 className="text-lg font-semibold mb-4">
        Subject Progress
      </h3>

      <div className="space-y-4">
        {subjects.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span>{item.name}</span>
              <span>{item.percent}%</span>
            </div>

            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.percent}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-2 bg-orange-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
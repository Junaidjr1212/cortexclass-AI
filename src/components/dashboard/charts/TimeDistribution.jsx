import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Study", value: 60 },
  { name: "Practice", value: 25 },
  { name: "Revision", value: 15 }
];

const COLORS = ["#f97316", "#a855f7", "#22c55e"];

export default function TimeDistribution() {
  return (
    <div className="bg-[#14161c] p-6 rounded-xl border border-white/10">
      <h3 className="text-lg font-semibold mb-4">Time Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={90}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
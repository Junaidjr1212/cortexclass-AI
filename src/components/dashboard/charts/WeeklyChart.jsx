import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { day: "Mon", score: 70 },
  { day: "Tue", score: 85 },
  { day: "Wed", score: 78 },
  { day: "Thu", score: 92 },
  { day: "Fri", score: 88 },
  { day: "Sat", score: 96 },
  { day: "Sun", score: 82 }
];

export default function WeeklyChart() {
  return (
    <div className="bg-[#14161c] p-6 rounded-xl border border-white/10">
      <h3 className="text-lg font-semibold mb-4">Weekly Performance</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#222" />
          <XAxis dataKey="day" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#f97316"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
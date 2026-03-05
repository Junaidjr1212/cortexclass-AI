import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { subject: "Math", score: 90 },
  { subject: "Physics", score: 75 },
  { subject: "Chemistry", score: 85 },
  { subject: "Biology", score: 70 }
];

export default function SubjectChart() {
  return (
    <div className="bg-[#14161c] p-6 rounded-xl border border-white/10">
      <h3 className="text-lg font-semibold mb-4">Subject Performance</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#222" />
          <XAxis dataKey="subject" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Bar dataKey="score" fill="#a855f7" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
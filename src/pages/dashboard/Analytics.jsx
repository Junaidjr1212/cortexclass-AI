import WeeklyChart from "../../components/dashboard/charts/WeeklyChart";

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">

      <h2 className="text-2xl font-bold">Analytics</h2>

      <div className="bg-[#14161c] p-6 rounded-xl border border-white/10">
        <WeeklyChart />
      </div>

    </div>
  );
}
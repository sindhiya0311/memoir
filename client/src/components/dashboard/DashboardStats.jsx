import StatsCard from "./StatsCard";

const DashboardStats = ({ journals }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard title="Total Journals" value={journals.length} />

      <StatsCard title="This Month" value={journals.length} />

      <StatsCard title="Current Streak" value="15 🔥" />

      <StatsCard title="Happy Days" value="82%" />
    </div>
  );
};

export default DashboardStats;

const StatsCard = ({ title, value }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
      <p className="text-sm text-slate-400">{title}</p>

      <h2 className="mt-3 text-4xl font-bold text-white">{value}</h2>
    </div>
  );
};

export default StatsCard;

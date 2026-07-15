const moods = [
  "All",
  "Happy",
  "Excited",
  "Calm",
  "Grateful",
  "Neutral",
  "Sad",
  "Angry",
  "Anxious",
];

const MoodFilter = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
    >
      {moods.map((mood) => (
        <option key={mood} value={mood}>
          {mood}
        </option>
      ))}
    </select>
  );
};

export default MoodFilter;

import SearchBar from "../journal/SearchBar";
import MoodFilter from "../journal/MoodFilter";

const JournalToolbar = ({ search, setSearch, mood, setMood, onCreate }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900 p-5 md:flex-row md:items-center">
      <div className="flex-1">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <MoodFilter value={mood} onChange={setMood} />

      <button
        onClick={onCreate}
        className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        + New Journal
      </button>
    </div>
  );
};

export default JournalToolbar;

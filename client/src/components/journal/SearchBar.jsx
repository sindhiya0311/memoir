import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search journals..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-indigo-500"
      />
    </div>
  );
};

export default SearchBar;

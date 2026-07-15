import { BookOpen, LogOut, Plus } from "lucide-react";

const Sidebar = ({ onCreate }) => {
  return (
    <aside className="flex h-screen w-64 flex-col justify-between border-r border-white/10 bg-slate-950 p-6">
      <div>
        <div className="mb-10">
          <h1 className="text-3xl font-black text-white">Memoir</h1>

          <p className="mt-1 text-sm text-slate-400">Your personal journal</p>
        </div>

        <button className="mb-3 flex w-full items-center gap-3 rounded-xl bg-indigo-600 px-4 py-3 text-white transition hover:bg-indigo-700">
          <BookOpen size={20} />
          My Journals
        </button>

        <button
          onClick={onCreate}
          className="flex w-full items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-slate-300 transition hover:bg-slate-800"
        >
          <Plus size={20} />
          New Journal
        </button>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
        className="flex w-full items-center gap-3 rounded-xl border border-red-500/20 px-4 py-3 text-red-400 transition hover:bg-red-500/10"
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;

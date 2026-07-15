import { Pencil, Trash2, CalendarDays } from "lucide-react";

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "");

const JournalCard = ({ journal, onEdit, onDelete }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900 p-7 transition hover:border-indigo-500">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">{journal.title}</h2>

          <span className="mt-2 inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300">
            {journal.mood}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(journal)}
            className="rounded-xl p-3 hover:bg-slate-800"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(journal._id)}
            className="rounded-xl p-3 hover:bg-red-500/20"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <p className="mt-6 leading-8 text-slate-300">
        {stripHtml(journal.content).slice(0, 220)}
      </p>

      <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
        <div className="flex gap-2">
          {journal.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={16} />
          {new Date(journal.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default JournalCard;

import JournalCard from "./JournalCard";

const JournalGrid = ({ journals, onEdit, onDelete }) => {
  if (!journals.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 py-24 text-center">
        <h2 className="text-2xl font-bold text-white">No Journals Yet</h2>

        <p className="mt-3 text-slate-400">
          Start writing your first memory ✨
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {journals.map((journal) => (
        <JournalCard
          key={journal._id}
          journal={journal}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default JournalGrid;

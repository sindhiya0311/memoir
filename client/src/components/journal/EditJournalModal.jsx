import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { updateJournal } from "../../services/journal.service";
import RichTextEditor from "../editor/RichTextEditor";

const moods = [
  "Happy",
  "Excited",
  "Calm",
  "Grateful",
  "Neutral",
  "Sad",
  "Angry",
  "Anxious",
];

const EditJournalModal = ({ open, onClose, journal, onUpdated }) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    mood: "Neutral",
    tags: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (journal) {
      setForm({
        title: journal.title || "",
        content: journal.content || "",
        mood: journal.mood || "Neutral",
        tags: journal.tags?.join(", ") || "",
      });
    }
  }, [journal]);

  if (!open || !journal) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateJournal(journal._id, {
        ...form,
        tags: form.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      });

      onUpdated();
      onClose();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to update journal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900 p-8 text-white shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Edit Journal</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-800"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Journal Title"
            className="w-full rounded-xl border border-white/10 bg-slate-800 p-4 outline-none"
          />

          <RichTextEditor
            value={form.content}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                content: value,
              }))
            }
          />

          <select
            name="mood"
            value={form.mood}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-800 p-4 outline-none"
          >
            {moods.map((mood) => (
              <option key={mood} value={mood}>
                {mood}
              </option>
            ))}
          </select>

          <input
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="coding, life, travel"
            className="w-full rounded-xl border border-white/10 bg-slate-800 p-4 outline-none"
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-slate-700 px-6 py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-indigo-600 px-6 py-3 hover:bg-indigo-700 disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Journal"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJournalModal;

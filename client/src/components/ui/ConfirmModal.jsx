import { motion } from "framer-motion";

const ConfirmModal = ({
  open,
  title,
  message,
  onCancel,
  onConfirm,
  loading = false,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 text-white shadow-2xl"
      >
        <h2 className="text-2xl font-bold">{title}</h2>

        <p className="mt-3 text-slate-400">{message}</p>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-xl bg-slate-700 px-5 py-3 transition hover:bg-slate-600"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-5 py-3 transition hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmModal;

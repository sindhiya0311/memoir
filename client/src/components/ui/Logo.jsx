import { BookOpenText } from "lucide-react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 shadow-xl shadow-indigo-500/30">
        <BookOpenText className="h-8 w-8 text-white" />
      </div>

      <h1 className="mt-5 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-5xl font-black tracking-tight text-transparent">
        Memoir
      </h1>

      <p className="mt-3 max-w-xs text-center text-sm leading-6 text-slate-400">
        Capture every thought, memory and idea beautifully.
      </p>
    </motion.div>
  );
};

export default Logo;

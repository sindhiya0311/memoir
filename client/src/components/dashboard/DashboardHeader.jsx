import { BookOpenText } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600">
        <BookOpenText size={34} className="text-white" />
      </div>

      <h1 className="text-5xl font-black tracking-tight text-white">Memoir</h1>

      <p className="mt-3 text-lg text-slate-400">
        Capture your memories beautifully.
      </p>
    </div>
  );
};

export default DashboardHeader;

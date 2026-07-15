const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-slate-950 px-8 py-6">
      <div>
        <h2 className="text-2xl font-bold text-white">My Journal</h2>

        <p className="mt-1 text-sm text-slate-400">
          Capture your thoughts, memories and ideas.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
          S
        </div>

        <div>
          <p className="font-medium text-white">Sindhiya</p>

          <p className="text-sm text-slate-400">Welcome back 👋</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

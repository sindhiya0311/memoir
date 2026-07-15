import clsx from "clsx";
import { Loader2 } from "lucide-react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  loading = false,
  className = "",
  onClick,
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 font-semibold transition-all duration-300 active:scale-[0.98] disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:brightness-110",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10",

    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        base,
        variants[variant],
        fullWidth && "w-full",
        className,
      )}
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import clsx from "clsx";

const Input = ({
  label,
  type = "text",
  placeholder,
  error,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-300">
          {label}
        </label>
      )}

      <div
        className={clsx(
          "group flex items-center rounded-2xl border border-white/10 bg-white/5",
          "transition-all duration-300",
          "focus-within:border-indigo-500",
          "focus-within:ring-4 focus-within:ring-indigo-500/20",
          error && "border-red-500",
        )}
      >
        <div className="px-4 text-slate-400">
          {isPassword ? <Lock size={20} /> : <Mail size={20} />}
        </div>

        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className={clsx(
            "h-14 w-full bg-transparent pr-4 text-white",
            "placeholder:text-slate-500",
            "outline-none",
            className,
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="px-4 text-slate-400 transition hover:text-white"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default Input;

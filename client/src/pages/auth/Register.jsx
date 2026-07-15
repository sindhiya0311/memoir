import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../../components/layout/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { register } from "../../services/auth.service";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await register({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      toast.success("Account created successfully 🎉");

      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white">Create Account ✨</h2>

        <p className="mb-8 mt-2 text-slate-400">
          Begin your journaling journey today.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Sindhiya"
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />

          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[42px] text-slate-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="relative">
            <Input
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-[42px] text-slate-400"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <Button type="submit" fullWidth disabled={loading}>
            <span>{loading ? "Creating..." : "Create Account"}</span>

            <ArrowRight size={18} />
          </Button>

          <p className="pt-2 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Sign In
            </Link>
          </p>
        </form>
      </motion.div>
    </AuthLayout>
  );
};

export default Register;

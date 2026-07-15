import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../../components/layout/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { login } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

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

      const response = await login(form);

      localStorage.setItem("token", response.data.token);

      setUser(response.data.user);

      toast.success("Welcome back 👋");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
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
        <h2 className="text-3xl font-bold text-white">Welcome Back 👋</h2>

        <p className="mt-2 mb-8 text-slate-400">
          Sign in to continue your journaling journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
          />

          <Button type="submit" fullWidth disabled={loading}>
            <span>{loading ? "Signing In..." : "Sign In"}</span>

            {!loading && <ArrowRight size={18} />}
          </Button>

          <p className="pt-3 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-indigo-400 transition hover:text-indigo-300"
            >
              Create account
            </Link>
          </p>
        </form>
      </motion.div>
    </AuthLayout>
  );
};

export default Login;

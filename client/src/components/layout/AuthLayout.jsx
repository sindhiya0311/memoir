import { motion } from "framer-motion";
import Logo from "../ui/Logo";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 120, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl"
        />
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-10">
          <Logo />
        </div>

        {children}
      </motion.div>
    </div>
  );
};

export default AuthLayout;

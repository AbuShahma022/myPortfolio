import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"; // ✅ here

function HomeComponent() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">

      {/* WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >

        {/* LEFT — Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
            Hello, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Md Abu Shahma
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium">
            MERN Stack Developer & AI Integrator
          </h2>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-md">
            I build scalable full-stack applications with clean UI and smooth workflows.
            Focused on automation, AI-powered components, and meaningful digital experiences.
          </p>

          {/* ✅ Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center md:justify-start gap-6 pt-4 text-3xl"
          >
            <a
              href="https://github.com/AbuShahma022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="www.linkedin.com/in/abu-shahma-536861225"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/share/17irbpzhyi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              <FaFacebook />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co.com/G47CR4x8/minimal-modern-workspace-elegant-soft-glass-desk.png"
            alt="Developer Desk Illustration"
            className="w-full max-w-md md:max-w-lg rounded-3xl shadow-[0_8px_50px_rgba(0,0,0,0.25)] object-cover"
          />
        </motion.div>

      </motion.div>
    </div>
  );
}

export default HomeComponent;

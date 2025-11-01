import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomeComponent() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="backdrop-blur-2xl bg-white/20 dark:bg-white/10 border border-white/40 dark:border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.18)] rounded-3xl p-10 max-w-3xl text-center"
      >

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 leading-tight"
        >
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Md Abu Shahma</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6"
        >
          MERN Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          I build modern, scalable web applications with intuitive UI and smooth workflows.
          Passionate about AI integration, automation systems, and clean architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex justify-center"
        >
          <Link
            to="/about"
            className="px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            About Me
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default HomeComponent;

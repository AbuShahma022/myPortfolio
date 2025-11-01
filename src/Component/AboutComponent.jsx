import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function AboutComponent() {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.15 }}
      className="min-h-screen px-6 py-16 max-w-5xl mx-auto"
    >

      {/* Intro Section */}
      <motion.div variants={fadeUp} className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          About Me
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Md Abu Shahma</span>,
          a MERN Stack Developer who builds modern and scalable web applications.
          I love clean UI, smooth workflows, and <span className="text-indigo-600 dark:text-indigo-400 font-medium">AI Integration </span>.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div variants={fadeUp} className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap",
            "React.js", "Redux", "Node.js", "Express.js", "MongoDB",
            "Git", "GitHub", "MERN Stack", "Langchain Js", "AI Integration"
          ].map((skill) => (
            <motion.span
              key={skill}
              variants={fadeUp}
              className="px-4 py-2 rounded-full border border-indigo-500 text-indigo-600 dark:text-indigo-300 dark:border-indigo-400 text-sm font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Project Showcase */}
      <motion.div variants={fadeUp} className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Featured Project
        </h2>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/10 shadow-lg rounded-3xl p-6"
        >
          <img
            src="https://i.ibb.co.com/7d7dp3Zc/IMS-inventraai-vercel-app-1.png"
            alt="Inventory Management System Preview"
            className="rounded-xl mb-6"
          />

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Inventra — Inventory Management System with AI Integration
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A full inventory system with Purchase & Supplier flow, reporting, and 
            <span className="text-indigo-500 dark:text-indigo-300 font-medium"> Inventra Core AI</span> for smart insights.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/AbuShahma022/Inventory-management-system"
              target="_blank"
              className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition"
            >
              View on GitHub
            </a>

            <a
              href="https://inventraai.vercel.app"
              target="_blank"
              className="px-5 py-2 rounded-full border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition"
            >
              Live Demo
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Social Section */}
      <motion.div variants={fadeUp} className="text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Connect with Me
        </h2>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://github.com/AbuShahma022" target="_blank" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
            <FaGithub />
          </a>
          <a href="www.linkedin.com/in/abu-shahma-536861225" target="_blank" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/share/17irbpzhyi/" target="_blank" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
            <FaFacebook />
          </a>
        </div>
      </motion.div>

    </motion.div>
  );
}

export default AboutComponent;

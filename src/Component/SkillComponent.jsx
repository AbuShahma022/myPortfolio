import { motion } from "framer-motion";

function SkillComponent() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const skills = [
    "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS",
    "React.js", "Redux", "Node.js", "Express.js", "MongoDB",
    "Git", "GitHub", "MERN Stack", "LangChain JS", "AI Integration"
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="min-h-screen px-6 py-16 max-w-6xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          Skills & Technologies
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I specialize in building modern full-stack applications with a strong focus 
          on clean UI, scalable backends, and AI-enhanced workflow automation.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        variants={fadeUp}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="backdrop-blur-xl bg-white/20 dark:bg-slate-800/30 border border-white/30 dark:border-white/10 shadow-md rounded-2xl p-5 text-center cursor-pointer select-none"
          >
            <p className="text-gray-800 dark:text-gray-200 font-semibold text-sm">
              {skill}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote / Footer Message */}
      <motion.div variants={fadeUp} className="text-center mt-14">
        <p className="text-gray-700 dark:text-gray-300 italic">
          “I am constantly learning and refining to build better experiences.”
        </p>
      </motion.div>
    </motion.div>
  );
}

export default SkillComponent;

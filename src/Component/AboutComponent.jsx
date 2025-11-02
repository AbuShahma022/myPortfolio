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
      className="min-h-screen px-6 py-16 max-w-4xl mx-auto"
    >

      {/* Header */}
      <motion.div variants={fadeUp} className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          About Me
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Md Abu Shahma</span>,
          a MERN Stack Developer who focuses on building meaningful, scalable, and intuitive web applications.
        </p>
      </motion.div>

      {/* Developer Story */}
      <motion.div variants={fadeUp} className="mb-16 leading-relaxed text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          I started my coding journey with the curiosity to understand how systems work behind the scenes.
          Over time, that curiosity turned into passion — leading me into full-stack development.
        </p>
        <p>
          I enjoy creating products that don’t just function — but feel smooth, clean, and human.
          I believe software should solve real problems and improve people's workflow, not complicate it.
        </p>
        <p>
          Recently, I’ve been integrating <span className="text-indigo-500 dark:text-indigo-300 font-medium">AI-assisted experiences</span> into applications — enabling
          automation, smart suggestions, and decision support inside everyday systems.
        </p>
      </motion.div>

      {/* What I Do */}
      <motion.div variants={fadeUp} className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          What I Focus On
        </h2>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li>• Building clean and scalable full-stack web applications</li>
          <li>• Designing fluid & intuitive user interfaces</li>
          <li>• Implementing structured architecture with reusable components</li>
          <li>• Integrating AI to automate tasks and improve workflows</li>
        </ul>
      </motion.div>

      {/* Work Philosophy */}
      <motion.div variants={fadeUp} className="mb-20 border-l-4 border-indigo-500 pl-6 italic text-gray-700 dark:text-gray-300">
        “Write clean code. Design with empathy. Build with intention.”
      </motion.div>

      

    </motion.div>
  );
}

export default AboutComponent;

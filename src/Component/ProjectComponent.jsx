import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectComponent() {
  return (
    <div className="w-full flex justify-center py-16 px-4 bg-slate-50 dark:bg-slate-900 transition">
      <div className="max-w-4xl w-full rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-6 text-center">
          InventraAI - Inventory Management System
        </h2>

        {/* Preview Image */}
        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
          <img
            src="https://i.ibb.co.com/7d7dp3Zc/IMS-inventraai-vercel-app-1.png"
            alt="Inventra AI Screenshot"
            className="w-full h-auto object-cover hover:scale-[1.03] transition"
          />
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 mt-5 leading-relaxed text-sm md:text-base">
          <span className="font-semibold text-sky-600 dark:text-sky-400">InventraAI</span> is an AI-powered
          inventory management system integrated with an intelligent assistant
          <span className="text-sky-500 dark:text-sky-400 font-medium"> "Inventra Core"</span> that analyzes
          sales, purchases, stock flow, vendor & customer data to provide insights, predictions, and business
          optimization recommendations in real-time.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://inventraai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
          >
            Live Demo <FaExternalLinkAlt />
          </a>

          <a
            href="https://github.com/AbuShahma022/Inventory-management-system"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
          >
            GitHub <FaGithub />
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProjectComponent;

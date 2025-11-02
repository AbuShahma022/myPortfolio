import React, { useState, useContext } from "react";
import { ContactContext } from "../Component/Context/ContactContext";
import toast from "react-hot-toast";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

function ContactComponent() {
  const { addContact } = useContext(ContactContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return toast.error("Please fill out all fields!");
    }

    addContact(formData);
    toast.success("Message submitted successfully! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-50 dark:bg-slate-900 px-4 py-16 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg rounded-2xl p-8 transition-colors duration-300"
      >
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 text-center">
          Contact Me
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-sky-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-sky-500"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full mb-6 p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-sky-500"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition"
        >
          Send Message
        </button>

        <div className="mt-8 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-3">Or connect with me</p>

          <div className="flex justify-center gap-6 text-2xl text-slate-700 dark:text-slate-300">
            <a href="https://github.com/AbuShahma022" target="_blank" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abu-shahma-536861225" target="_blank" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/17irbpzhyi/" target="_blank" className="hover:text-sky-600 dark:hover:text-sky-400 transition">
              <FaFacebook />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactComponent;

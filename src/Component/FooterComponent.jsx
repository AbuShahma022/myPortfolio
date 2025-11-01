function Footer() {
  return (
    <footer className="py-6 text-center mt-10 border-t border-slate-200 dark:border-slate-700 bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-300 transition-colors duration-300">
      <p className="text-sm">© {new Date().getFullYear()} S.SHADOW. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

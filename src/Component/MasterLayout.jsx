import NavBar from "./NavbarComponent";
import Footer from "./FooterComponent";

function MasterLayout({ children }) {
  return (
    <div className="font-[Inter] min-h-screen flex flex-col bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <NavBar />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MasterLayout;

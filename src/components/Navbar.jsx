import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { navLinks } from "../constants/ProgramData";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 font-raleway">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <img src={Logo} alt="Logo" className="w-[100px] md:w-[150px]" />

          {/* desktop menu................. */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {navLinks.map((link, index) => (
              <a key={index} href={link.path} className="hover:text-white transition">{link.name}</a>
            ))}
          </nav>
          <div className="hidden md:block">
            <button className="bg-[#D80303] text-white hover:bg-gray-200 transition px-5 py-1.5 rounded-md text-sm font-raleway">
              Login
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* sidebar ............................................. */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-black z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="text-white font-semibold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-5 text-gray-300">
          {navLinks.map((link, index) => (
            <a key={index} href={link.path} className="hover:text-white transition" onClick={() => setOpen(false)} >{link.name}</a>
          ))}

          <button className="mt-6 bg-red-500 text-black hover:bg-gray-200 transition py-2 rounded-md">
            Login
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

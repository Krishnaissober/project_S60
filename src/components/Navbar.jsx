import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/aston_martin_white2.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000000b2] flex items-center justify-between w-full px-6 z-20 absolute">
      <button onClick={() => setIsOpen(true)} className="m-4 p-2 text-white text-3xl" type="button">
        ☰
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-black shadow-lg transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <button onClick={() => setIsOpen(false)} className="text-2xl text-white" type="button">
            &times;
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li><Link onClick={() => setIsOpen(false)} to="/" className="block text-white hover:text-slate-200">Home</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/contact-us" className="block text-white hover:text-slate-200">Contact</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/q-by-aston-martin" className="block text-white hover:text-slate-200">q-by-aston-martin</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/inquire" className="block text-white hover:text-slate-200">Inquire</Link></li>
        </ul>
      </div>

      <div>
        <Link to="/">
          <img className="w-20 hover:cursor-pointer" src={logo} alt="Aston Martin Logo" />
        </Link>
      </div>

      <div className="sm:flex gap-3 hidden">
        <button
          className="bg-neutral-800 text-white font-semibold py-2 px-5 rounded border-t border-slate-200 hover:bg-neutral-600 transition-colors duration-300"
          type="button"
        >
          Configure
        </button>
        <Link to="/inquire">
          <button
            className="bg-neutral-800 text-white font-semibold py-2 px-5 rounded border-t border-slate-200 hover:bg-neutral-600 transition-colors duration-300"
            type="button"
          >
            Inquire
          </button>
        </Link>
      </div>
    </nav>
  );
}

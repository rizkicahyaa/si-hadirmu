import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const baseLink = "transition-colors hover:text-white/90";
    const activeLink = "text-white font-semibold";

    return (
        <nav className="sticky top-0 z-50 bg-purple-600/90 backdrop-blur supports-backdrop-blur:bg-purple-600/80 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 py-3">
                <NavLink to="/" className="text-xl font-bold tracking-tight">
                    SiHadirmu
                </NavLink>

                <ul className="hidden md:flex items-center gap-6">
                    <li>
                        <NavLink to="/" end className={({ isActive }) => `${baseLink} ${isActive ? activeLink : "text-white/80"}`}>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/presensi" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : "text-white/80"}`}>
                            Presensi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/riwayat" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : "text-white/80"}`}>
                            Riwayat
                        </NavLink>
                    </li>
                    <li>
                        <a href="#" className="text-white/80 hover:text-red-200 transition-colors">
                            Logout
                        </a>
                    </li>
                </ul>

                <button aria-label="Toggle menu" className="md:hidden p-2 rounded hover:bg-white/10" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <ul className="md:hidden bg-purple-600/95 backdrop-blur px-4 py-4 space-y-3">
                    <li>
                        <NavLink to="/" end onClick={() => setIsOpen(false)} className={({ isActive }) => `block ${baseLink} ${isActive ? activeLink : "text-white/90"}`}>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/presensi" onClick={() => setIsOpen(false)} className={({ isActive }) => `block ${baseLink} ${isActive ? activeLink : "text-white/90"}`}>
                            Presensi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/riwayat" onClick={() => setIsOpen(false)} className={({ isActive }) => `block ${baseLink} ${isActive ? activeLink : "text-white/90"}`}>
                            Riwayat
                        </NavLink>
                    </li>
                    <li>
                        <a href="#" className="block text-white/90 hover:text-red-200 transition-colors">
                            Logout
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;

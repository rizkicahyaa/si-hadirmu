import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-purple-600 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <a href="/" className="text-xl font-bold">
                    SiHadirmu
                </a>

                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a href="/" className="hover:text-gray-200">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/presensi" className="hover:text-gray-200">
                            Presensi
                        </a>
                    </li>
                    <li>
                        <a href="/riwayat" className="hover:text-gray-200">
                            Riwayat
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-red-300">
                            Logout
                        </a>
                    </li>
                </ul>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <ul className="md:hidden bg-purple-500 space-y-2 p-4">
                    <li>
                        <a href="/" className="block hover:text-gray-200">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/presensi" className="block hover:text-gray-200">
                            Presensi
                        </a>
                    </li>
                    <li>
                        <a href="/riwayat" className="block hover:text-gray-200">
                            Riwayat
                        </a>
                    </li>
                    <li>
                        <a href="/profil" className="block hover:text-gray-200">
                            Profil
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block hover:text-red-300">
                            Logout
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} SiHadirmu. All rights reserved.</p>
                <nav className="flex items-center gap-4 text-sm">
                    <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                        Tentang
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                        Kontak
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                        Bantuan
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;

const Footer = () => {
    return (
        <footer className="bg-purple-600 text-white mt-12">
            <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} SiHadirmu. All rights reserved.</p>
                <div className="flex space-x-4 mt-3 md:mt-0">
                    <a href="#" className="hover:text-gray-200">
                        Tentang
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        Kontak
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        Bantuan
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

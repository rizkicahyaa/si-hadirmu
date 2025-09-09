export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-400">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-purple-600 mb-6">SiHadirmu</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">NIM</label>
                        <input type="text" placeholder="Masukkan NIM" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input type="password" placeholder="Masukkan Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>

                    <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200">
                        Login
                    </button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-6">
                    Lupa password?{" "}
                    <a href="#" className="text-purple-600 hover:underline">
                        Hubungi Admin
                    </a>
                </p>
            </div>
        </div>
    );
}

const Dashboard = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">📊 Dashboard Presensi</h1>

            <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">👤 Profil Mahasiswa</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p>
                        <span className="font-medium text-gray-600">Nama:</span> Rizki Cahya
                    </p>
                    <p>
                        <span className="font-medium text-gray-600">NIM:</span> 123456789
                    </p>
                    <p>
                        <span className="font-medium text-gray-600">Program Studi:</span> Informatika
                    </p>
                    <p>
                        <span className="font-medium text-gray-600">Tahun Angkatan:</span> 2022
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-green-500 text-white rounded-2xl p-6 text-center shadow-md hover:scale-105 transform transition">
                    <h2 className="text-lg font-semibold">Hadir</h2>
                    <p className="text-3xl font-bold mt-2">12</p>
                </div>
                <div className="bg-yellow-500 text-white rounded-2xl p-6 text-center shadow-md hover:scale-105 transform transition">
                    <h2 className="text-lg font-semibold">Izin</h2>
                    <p className="text-3xl font-bold mt-2">3</p>
                </div>
                <div className="bg-blue-500 text-white rounded-2xl p-6 text-center shadow-md hover:scale-105 transform transition">
                    <h2 className="text-lg font-semibold">Sakit</h2>
                    <p className="text-3xl font-bold mt-2">1</p>
                </div>
                <div className="bg-red-500 text-white rounded-2xl p-6 text-center shadow-md hover:scale-105 transform transition">
                    <h2 className="text-lg font-semibold">Alfa</h2>
                    <p className="text-3xl font-bold mt-2">2</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">📅 Jadwal Kuliah Hari Ini</h2>
                <ul className="space-y-3">
                    <li className="p-4 bg-gray-100 rounded-lg flex justify-between items-center hover:bg-gray-200 transition">
                        <span className="font-medium">Pemrograman Web</span>
                        <span className="text-sm text-gray-600">08:00 - 09:40 | Ruang B2</span>
                    </li>
                    <li className="p-4 bg-gray-100 rounded-lg flex justify-between items-center hover:bg-gray-200 transition">
                        <span className="font-medium">Basis Data</span>
                        <span className="text-sm text-gray-600">10:00 - 11:40 | Ruang C1</span>
                    </li>
                </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">📢 Pengumuman</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Kelas Pemrograman Web tanggal 5 September diganti jam 13:00.</li>
                    <li>Ujian Tengah Semester akan dilaksanakan mulai 20 Oktober.</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;

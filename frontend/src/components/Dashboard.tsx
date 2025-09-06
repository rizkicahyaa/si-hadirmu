const Dashboard = () => {
    return (
        <div className="container mx-auto p-6">
            {/* Judul Dashboard */}
            <h1 className="text-2xl font-bold mb-6">Dashboard Presensi</h1>

            {/* Kartu Ringkasan */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Hadir */}
                <div className="bg-green-500 text-white rounded-xl shadow-md p-6 text-center">
                    <h2 className="text-lg font-semibold">Hadir</h2>
                    <p className="text-3xl font-bold mt-2">12</p>
                </div>

                {/* Izin */}
                <div className="bg-yellow-500 text-white rounded-xl shadow-md p-6 text-center">
                    <h2 className="text-lg font-semibold">Izin</h2>
                    <p className="text-3xl font-bold mt-2">3</p>
                </div>

                {/* Sakit */}
                <div className="bg-blue-500 text-white rounded-xl shadow-md p-6 text-center">
                    <h2 className="text-lg font-semibold">Sakit</h2>
                    <p className="text-3xl font-bold mt-2">1</p>
                </div>

                {/* Alfa */}
                <div className="bg-red-500 text-white rounded-xl shadow-md p-6 text-center">
                    <h2 className="text-lg font-semibold">Alfa</h2>
                    <p className="text-3xl font-bold mt-2">2</p>
                </div>
            </div>

            {/* Info Jadwal Hari Ini */}
            <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Jadwal Kuliah Hari Ini</h2>
                <ul className="space-y-3">
                    <li className="p-3 bg-gray-100 rounded-md">
                        <span className="font-medium">Pemrograman Web</span> - 08:00 - 09:40 (Ruang B2)
                    </li>
                    <li className="p-3 bg-gray-100 rounded-md">
                        <span className="font-medium">Basis Data</span> - 10:00 - 11:40 (Ruang C1)
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;

const Dashboard = () => {
    return (
        <div className="flex flex-col min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard Presensi</h1>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-xl font-semibold mb-2">Profil Mahasiswa</h2>
                <p>
                    <span className="font-medium">Nama:</span> Rizki Cahya
                </p>
                <p>
                    <span className="font-medium">NIM:</span> 123456789
                </p>
                <p>
                    <span className="font-medium">Program Studi:</span> Informatika
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-500 text-white rounded-lg p-4 text-center shadow">
                    <h2 className="text-lg font-semibold">Hadir</h2>
                    <p className="text-2xl font-bold">12</p>
                </div>
                <div className="bg-yellow-500 text-white rounded-lg p-4 text-center shadow">
                    <h2 className="text-lg font-semibold">Izin</h2>
                    <p className="text-2xl font-bold">3</p>
                </div>
                <div className="bg-blue-500 text-white rounded-lg p-4 text-center shadow">
                    <h2 className="text-lg font-semibold">Sakit</h2>
                    <p className="text-2xl font-bold">1</p>
                </div>
                <div className="bg-red-500 text-white rounded-lg p-4 text-center shadow">
                    <h2 className="text-lg font-semibold">Alfa</h2>
                    <p className="text-2xl font-bold">2</p>
                </div>
            </div>

            <div className="mt-8 bg-white rounded-lg p-6 shadow">
                <h2 className="text-xl font-semibold mb-4">Jadwal Kuliah Hari Ini</h2>
                <ul className="space-y-2">
                    <li className="p-3 bg-gray-100 rounded-md">
                        <span className="font-medium">Pemrograman Web</span> — 08:00 - 09:40 (Ruang B2)
                    </li>
                    <li className="p-3 bg-gray-100 rounded-md">
                        <span className="font-medium">Basis Data</span> — 10:00 - 11:40 (Ruang C1)
                    </li>
                </ul>
            </div>

            <div className="mt-8 bg-white rounded-lg p-6 shadow">
                <h2 className="text-xl font-semibold mb-4">Pengumuman</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Kelas Pemrograman Web tanggal 5 September diganti jam 13:00.</li>
                    <li>UJIAN Tengah Semester akan dilaksanakan mulai 20 Oktober.</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;

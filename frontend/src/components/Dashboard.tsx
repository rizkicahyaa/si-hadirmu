const Dashboard = () => {
    return (
        <div className="flex flex-col gap-8">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Dashboard Presensi</h1>
                    <p className="mt-2 text-sm text-gray-500">Ringkasan aktivitas dan informasi penting hari ini.</p>
                </div>
            </header>

            <section className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Profil Mahasiswa</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </section>

            <section>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="rounded-2xl p-6 text-center shadow-sm border border-green-200 bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-md transition">
                        <h3 className="text-base font-medium">Hadir</h3>
                        <p className="text-3xl font-bold mt-2">12</p>
                    </div>
                    <div className="rounded-2xl p-6 text-center shadow-sm border border-yellow-200 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white hover:shadow-md transition">
                        <h3 className="text-base font-medium">Izin</h3>
                        <p className="text-3xl font-bold mt-2">3</p>
                    </div>
                    <div className="rounded-2xl p-6 text-center shadow-sm border border-blue-200 bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-md transition">
                        <h3 className="text-base font-medium">Sakit</h3>
                        <p className="text-3xl font-bold mt-2">1</p>
                    </div>
                    <div className="rounded-2xl p-6 text-center shadow-sm border border-red-200 bg-gradient-to-br from-red-500 to-red-600 text-white hover:shadow-md transition">
                        <h3 className="text-base font-medium">Alfa</h3>
                        <p className="text-3xl font-bold mt-2">2</p>
                    </div>
                </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Jadwal Kuliah Hari Ini</h2>
                <ul className="mt-4 space-y-3">
                    <li className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition">
                        <span className="font-medium text-gray-800">Pemrograman Web</span>
                        <span className="text-sm text-gray-600">08:00 - 09:40 | Ruang B2</span>
                    </li>
                    <li className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition">
                        <span className="font-medium text-gray-800">Basis Data</span>
                        <span className="text-sm text-gray-600">10:00 - 11:40 | Ruang C1</span>
                    </li>
                </ul>
            </section>

            <section className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Pengumuman</h2>
                <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                    <li>Kelas Pemrograman Web tanggal 5 September diganti jam 13:00.</li>
                    <li>Ujian Tengah Semester akan dilaksanakan mulai 20 Oktober.</li>
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;

export default function Riwayat() {
    const dataRiwayat = [
        {
            id: 1,
            matkul: "Pemrograman Web",
            tanggal: "2025-09-01",
            jam: "08:00 - 09:40",
            ruang: "B2",
            status: "Hadir",
        },
        {
            id: 2,
            matkul: "Basis Data",
            tanggal: "2025-09-02",
            jam: "10:00 - 11:40",
            ruang: "C1",
            status: "Izin",
        },
        {
            id: 3,
            matkul: "Kecerdasan Buatan",
            tanggal: "2025-09-03",
            jam: "13:00 - 14:40",
            ruang: "D1",
            status: "Sakit",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Konten utama */}
            <main className="p-6 bg-gray-50 min-h-[calc(100vh-120px)]">
                <h2 className="text-2xl font-bold mb-4">Riwayat Presensi</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead>
                            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                                <th className="py-3 px-4">Tanggal</th>
                                <th className="py-3 px-4">Mata Kuliah</th>
                                <th className="py-3 px-4">Jam</th>
                                <th className="py-3 px-4">Ruang</th>
                                <th className="py-3 px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-700">
                            {dataRiwayat.map((item) => (
                                <tr key={item.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">{item.tanggal}</td>
                                    <td className="py-3 px-4 font-medium">{item.matkul}</td>
                                    <td className="py-3 px-4">{item.jam}</td>
                                    <td className="py-3 px-4">{item.ruang}</td>
                                    <td className="py-3 px-4">
                                        {item.status === "Hadir" && <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs">Hadir</span>}
                                        {item.status === "Izin" && <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-xs">Izin</span>}
                                        {item.status === "Sakit" && <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs">Sakit</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

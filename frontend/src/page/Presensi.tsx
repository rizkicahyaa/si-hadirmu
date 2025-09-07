import { useState } from "react";

interface MataKuliah {
    id: number;
    nama: string;
    jam: string;
    ruang: string;
    status: string | null;
}

export default function Presensi() {
    const [jadwal, setJadwal] = useState<MataKuliah[]>([
        { id: 1, nama: "Pemrograman Web", jam: "08:00 - 09:40", ruang: "B2", status: null },
        { id: 2, nama: "Basis Data", jam: "10:00 - 11:40", ruang: "C1", status: null },
    ]);

    const handlePresensi = (id: number, status: string) => {
        setJadwal(jadwal.map((mk) => (mk.id === id ? { ...mk, status } : mk)));
    };

    return (
        <div className="flex flex-col min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-6">Presensi Mahasiswa</h1>

            <div className="space-y-4">
                {jadwal.map((mk) => (
                    <div key={mk.id} className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold">{mk.nama}</h2>
                            <p className="text-gray-600">
                                {mk.jam} — Ruang {mk.ruang}
                            </p>
                        </div>

                        <div className="mt-3 md:mt-0 flex space-x-2">
                            <button onClick={() => handlePresensi(mk.id, "Hadir")} className={`px-4 py-2 rounded-lg ${mk.status === "Hadir" ? "bg-green-600 text-white" : "bg-green-100 text-green-700"}`}>
                                Hadir
                            </button>
                            <button onClick={() => handlePresensi(mk.id, "Izin")} className={`px-4 py-2 rounded-lg ${mk.status === "Izin" ? "bg-yellow-600 text-white" : "bg-yellow-100 text-yellow-700"}`}>
                                Izin
                            </button>
                            <button onClick={() => handlePresensi(mk.id, "Sakit")} className={`px-4 py-2 rounded-lg ${mk.status === "Sakit" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700"}`}>
                                Sakit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

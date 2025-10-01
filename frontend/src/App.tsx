import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Presensi from "./page/Presensi";
import Riwayat from "./page/Riwayat";
import Login from "./page/Login";

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-gray-50">
                <Navbar />
                <main className="flex-1">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <Dashboard />
                                    </>
                                }
                            />
                            <Route path="/presensi" element={<Presensi />} />
                            <Route path="/riwayat" element={<Riwayat />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

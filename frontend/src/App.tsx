import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Presensi from "./page/Presensi";
import Riwayat from "./page/Riwayat";

function App() {
    return (
        <Router>
            <Navbar />
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
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

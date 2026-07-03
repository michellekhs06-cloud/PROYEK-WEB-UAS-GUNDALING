import { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import MasterBarang from "./pages/MasterBarang.jsx";
import Login from "./pages/Login.jsx";
import FormBarang from "./pages/FormBarang.jsx";
import Mitra from "./pages/Mitra.jsx";
import Transaksi from "./pages/Transaksi.jsx";
import DetailGalon from "./pages/DetailGalon.jsx";
import DetailSaringan from "./pages/DetailSaringan.jsx";
import DetailTangki from "./pages/DetailTangki.jsx";

function App() {

    const [halamanAktif, setHalamanAktif] = useState("dashboard");

    return (

        <>

            <Navbar
                halamanAktif={halamanAktif}
                setHalamanAktif={setHalamanAktif}
            />

            {halamanAktif === "dashboard" && (
                <Dashboard
                    judul="Pusat Grosir Depot Air Minum Gundaling"
                />
            )}

            {halamanAktif === "barang" && (
                <MasterBarang
                  setHalamanAktif={setHalamanAktif}
                />
            )}

            {halamanAktif === "login" && (
                <Login
                    onLogin={() => setHalamanAktif("barang")}
                />
            )}

            {halamanAktif === "formBarang" && (
                <FormBarang />
            )}

            {halamanAktif === "mitra" && (
                <Mitra />
            )}

            {halamanAktif === "transaksi" && (
                <Transaksi />
            )}

            {halamanAktif === "detailGalon" && (
                <DetailGalon />
            )}

            {halamanAktif === "detailSaringan" && (
                <DetailSaringan />
            )}

            {halamanAktif === "detailTangki" && (
                <DetailTangki />
            )}

            <Footer />

        </>

    );

}

export default App;
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

    const [dataBarang, setDataBarang] = useState([
    {
        id: 1,
        namaBarang: "Galon",
        kategori: "Galon",
        merk: "Aqua",
        stok: 20,
        harga: 50000,
        supplier: "PT Aqua",
        tanggal: "2026-07-01"
    },
    {
        id: 2,
        namaBarang: "Saringan",
        kategori: "Saringan",
        merk: "RO Filter",
        stok: 15,
        harga: 120000,
        supplier: "PT Filter",
        tanggal: "2026-07-02"
    },
    {
        id: 3,
        namaBarang: "Tangki Air",
        kategori: "Tangki Air",
        merk: "Penguin",
        stok: 8,
        harga: 800000,
        supplier: "PT Penguin",
        tanggal: "2026-07-03"
    }
]);

    const [barangEdit, setBarangEdit] = useState(null); 

    const [modeForm, setModeForm] = useState("tambah");

    const [barangHapus, setBarangHapus] = useState(null);

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
                    dataBarang={dataBarang}
                    setHalamanAktif={setHalamanAktif}
                    setBarangEdit={setBarangEdit}
                    setBarangHapus={setBarangHapus}
                    setModeForm={setModeForm}
                />
            )}

            {halamanAktif === "login" && (
                <Login
                    modeForm={modeForm}
                    barangHapus={barangHapus}
                    dataBarang={dataBarang}
                    setDataBarang={setDataBarang}
                    setHalamanAktif={setHalamanAktif}
                    setBarangHapus={setBarangHapus}
                    setModeForm={setModeForm}
                />
            )}

            {halamanAktif === "formBarang" && (
                <FormBarang 
                    dataBarang={dataBarang}
                    setDataBarang={setDataBarang}
                    barangEdit={barangEdit}
                    setBarangEdit={setBarangEdit}
                    modeForm={modeForm}
                    setModeForm={setModeForm}
                    setHalamanAktif={setHalamanAktif}
                />  

            )}

            {halamanAktif === "mitra" && (
                <Mitra />
            )}

            {halamanAktif === "transaksi" && (
                <Transaksi />
            )}

            {halamanAktif === "detailGalon" && (
                <DetailGalon
                    dataBarang={dataBarang}
                    setHalamanAktif={setHalamanAktif}
                />
            )}

            {halamanAktif === "detailSaringan" && (
                <DetailSaringan
                    dataBarang={dataBarang}
                    setHalamanAktif={setHalamanAktif}
                />
            )}

            {halamanAktif === "detailTangki" && (
                <DetailTangki
                    dataBarang={dataBarang}
                    setHalamanAktif={setHalamanAktif}
                />
            )}

            <Footer />

        </>

    );

}

export default App;
import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import MasterBarang from "./pages/MasterBarang.jsx";
import Login from "./pages/Login.jsx";
import FormBarang from "./pages/FormBarang.jsx";
import Mitra from "./pages/Mitra.jsx";

import DetailGalon from "./pages/Detailgalon.jsx";
import DetailSaringan from "./pages/DetailSaringan.jsx";
import DetailTangki from "./pages/DetailTangki.jsx";

import LoginCustomer from "./pages/LoginCustomer.jsx";
import RegisterCustomer from "./components/Registercustomer.jsx";

import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checout.jsx";
import SuksesPembayaran from "./components/SuksesPembayaran.jsx";
import RiwayatPembelian from "./components/RiwayatPembelian.jsx";
import ReviewProduk from "./components/ReviewProduk.jsx";

import {
    gambarUntukKategori,
    buatNomorPesanan
} from "./utils/helpers.js";

function App() {

    const dataAwal = [
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
    ];

    const [halamanAktif, setHalamanAktif] = useState("dashboard");

    const [dataBarang, setDataBarang] = useState(() => {

        const data = localStorage.getItem("dataBarang");

        if (data) {
            return JSON.parse(data);
        }

        return dataAwal;

    });

    const [barangEdit, setBarangEdit] = useState(null);

    const [modeForm, setModeForm] = useState("tambah");

    const [barangHapus, setBarangHapus] = useState(null);

    useEffect(() => {

        localStorage.setItem(
            "dataBarang",
            JSON.stringify(dataBarang)
        );

    }, [dataBarang]);

    // ================= FITUR CUSTOMER =================

    const [dataCustomer, setDataCustomer] = useState(() => {

        const data = localStorage.getItem("dataCustomer");

        return data ? JSON.parse(data) : [];

    });

    const [currentCustomer, setCurrentCustomer] = useState(() => {

        const data = localStorage.getItem("currentCustomer");

        return data ? JSON.parse(data) : null;

    });

    const [cart, setCart] = useState(() => {

        const data = localStorage.getItem("cart");

        return data ? JSON.parse(data) : [];

    });

    const [dataPesanan, setDataPesanan] = useState(() => {

        const data = localStorage.getItem("dataPesanan");

        return data ? JSON.parse(data) : [];

    });

    const [dataReview, setDataReview] = useState(() => {

        const data = localStorage.getItem("dataReview");

        return data ? JSON.parse(data) : [];

    });

    // produk yang sedang ingin dipesan customer sebelum login berhasil
    const [produkDipesan, setProdukDipesan] = useState(null);

    // pesanan terakhir, untuk halaman sukses pembayaran
    const [lastOrder, setLastOrder] = useState(null);

    // produk/pesanan yang sedang ingin direview
    const [reviewTarget, setReviewTarget] = useState(null);

    useEffect(() => {

        localStorage.setItem("dataCustomer", JSON.stringify(dataCustomer));

    }, [dataCustomer]);

    useEffect(() => {

        if (currentCustomer) {

            localStorage.setItem("currentCustomer", JSON.stringify(currentCustomer));

        } else {

            localStorage.removeItem("currentCustomer");

        }

    }, [currentCustomer]);

    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cart));

    }, [cart]);

    useEffect(() => {

        localStorage.setItem("dataPesanan", JSON.stringify(dataPesanan));

    }, [dataPesanan]);

    useEffect(() => {

        localStorage.setItem("dataReview", JSON.stringify(dataReview));

    }, [dataReview]);

    // Menambahkan produk ke keranjang (localStorage: cart)
    function tambahKeKeranjang(product, qty = 1) {

        setCart((prev) => {

            const ada = prev.find((i) => i.productId === product.id);

            if (ada) {

                const qtyBaru = Math.min(ada.qty + qty, product.stok);

                return prev.map((i) =>
                    i.productId === product.id ? { ...i, qty: qtyBaru } : i
                );

            }

            return [
                ...prev,
                {
                    productId: product.id,
                    namaBarang: product.namaBarang,
                    harga: product.harga,
                    gambar: gambarUntukKategori(product.kategori),
                    qty: Math.min(qty, product.stok)
                }
            ];

        });

    }

    // Dipanggil dari halaman Detail Produk saat klik "Pesan Sekarang"
    function handlePesanSekarang(product) {

        if (!product || product.stok <= 0) {

            alert("Stok produk sedang habis.");

            return;

        }

        if (!currentCustomer) {

            setProdukDipesan(product);

            setHalamanAktif("loginCustomer");

            return;

        }

        tambahKeKeranjang(product, 1);

        setHalamanAktif("cart");

    }

    // Dipanggil setelah Login/Register Customer berhasil
    function handleLoginBerhasil(customer) {

        setCurrentCustomer(customer);

        if (produkDipesan) {

            tambahKeKeranjang(produkDipesan, 1);

            setProdukDipesan(null);

            setHalamanAktif("cart");

        } else {

            setHalamanAktif("dashboard");

        }

    }

    function handleLogoutCustomer() {

        setCurrentCustomer(null);

        setHalamanAktif("dashboard");

    }

    function handleUbahQtyKeranjang(productId, qtyBaru) {

        const barang = dataBarang.find((b) => b.id === productId);

        const stokMax = barang ? barang.stok : 1;

        const qtyValid = Math.max(1, Math.min(qtyBaru, stokMax));

        setCart((prev) =>
            prev.map((i) =>
                i.productId === productId ? { ...i, qty: qtyValid } : i
            )
        );

    }

    function handleHapusItemKeranjang(productId) {

        setCart((prev) => prev.filter((i) => i.productId !== productId));

    }

    // Dipanggil dari Checkout.jsx saat klik "Bayar Sekarang"
    function handleBayarSekarang(alamat, metodePembayaran) {

        const customerBaru = { ...currentCustomer, alamat };

        setCurrentCustomer(customerBaru);

        setDataCustomer((prev) =>
            prev.map((c) => (c.id === customerBaru.id ? { ...c, alamat } : c))
        );

        const subtotal = cart.reduce(

            (sum, item) => sum + item.harga * item.qty,

            0

        );

        const ongkir = cart.length > 0 ? 10000 : 0;

        const total = subtotal + ongkir;

        const nomorPesanan = buatNomorPesanan(dataPesanan);

        const pesananBaru = {
            id: Date.now(),
            nomorPesanan,
            customerId: customerBaru.id,
            customerName: customerBaru.nama,
            noHP: customerBaru.noHP,
            alamat,
            items: cart.map((item) => ({
                productId: item.productId,
                namaBarang: item.namaBarang,
                harga: item.harga,
                qty: item.qty,
                subtotal: item.harga * item.qty
            })),
            subtotal,
            ongkir,
            total,
            metodePembayaran,
            statusPembayaran: "Berhasil",
            statusPenerimaan: "Belum Diterima",
            tanggal: new Date().toISOString()
        };

        setDataPesanan((prev) => [...prev, pesananBaru]);

        // stok produk otomatis berkurang
        setDataBarang((prev) =>
            prev.map((item) => {

                const dibeli = cart.find((c) => c.productId === item.id);

                if (dibeli) {

                    return { ...item, stok: item.stok - dibeli.qty };

                }

                return item;

            })
        );

        setCart([]);

        setLastOrder(pesananBaru);

        setHalamanAktif("suksesPembayaran");

    }

    // Dipanggil dari RiwayatPembelian.jsx saat klik "Barang Sudah Diterima"
    function handleKonfirmasiTerima(orderId) {

        setDataPesanan((prev) =>
            prev.map((p) =>
                p.id === orderId ? { ...p, statusPenerimaan: "Sudah Diterima" } : p
            )
        );

    }

    // Dipanggil dari RiwayatPembelian.jsx saat klik "Berikan Review"
    function handleBukaReview(orderId, productId, productName) {

        setReviewTarget({ orderId, productId, productName });

        setHalamanAktif("reviewProduk");

    }

    // Dipanggil dari ReviewProduk.jsx saat submit
    function handleSubmitReview({ rating, komentar }) {

        const sudahAda = dataReview.some(

            (r) =>
                r.orderId === reviewTarget.orderId &&
                r.productId === reviewTarget.productId &&
                r.customerId === currentCustomer.id

        );

        if (sudahAda) {

            alert("Anda sudah memberikan review untuk produk ini pada pesanan ini.");

            return;

        }

        const reviewBaru = {
            id: Date.now(),
            productId: reviewTarget.productId,
            productName: reviewTarget.productName,
            customerId: currentCustomer.id,
            customerName: currentCustomer.nama,
            orderId: reviewTarget.orderId,
            rating,
            komentar,
            tanggal: new Date().toISOString()
        };

        setDataReview((prev) => [...prev, reviewBaru]);

        setReviewTarget(null);

        alert("Review berhasil dikirim.");

        setHalamanAktif("riwayatPembelian");

    }

    // Nav customer: Keranjang & Riwayat Pembelian mewajibkan login terlebih dahulu
    function bukaKeranjang() {

        if (!currentCustomer) {

            setHalamanAktif("loginCustomer");

            return;

        }

        setHalamanAktif("cart");

    }

    function bukaRiwayat() {

        if (!currentCustomer) {

            setHalamanAktif("loginCustomer");

            return;

        }

        setHalamanAktif("riwayatPembelian");

    }

    return (

        <>

            <Navbar
                halamanAktif={halamanAktif}
                setHalamanAktif={setHalamanAktif}
                currentCustomer={currentCustomer}
                jumlahKeranjang={cart.reduce((sum, i) => sum + i.qty, 0)}
                onBukaKeranjang={bukaKeranjang}
                onBukaRiwayat={bukaRiwayat}
                onLogoutCustomer={handleLogoutCustomer}
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

            {halamanAktif === "detailGalon" && (
                <DetailGalon
                    dataBarang={dataBarang}
                    setHalamanAktif={setHalamanAktif}
                    dataReview={dataReview}
                    onPesanSekarang={handlePesanSekarang}
                />
            )}

            {halamanAktif === "detailSaringan" && (
                <DetailSaringan
                    dataBarang={dataBarang}
                    setHalamanAktif={setHalamanAktif}
                    dataReview={dataReview}
                    onPesanSekarang={handlePesanSekarang}
                />
            )}

            {halamanAktif === "detailTangki" && (
                <DetailTangki
                    dataBarang={dataBarang}
                    setHalamanAktif={setHalamanAktif}
                    dataReview={dataReview}
                    onPesanSekarang={handlePesanSekarang}
                />
            )}

            {halamanAktif === "loginCustomer" && (
                <LoginCustomer
                    dataCustomer={dataCustomer}
                    onLoginBerhasil={handleLoginBerhasil}
                    setHalamanAktif={setHalamanAktif}
                />
            )}

            {halamanAktif === "registerCustomer" && (
                <RegisterCustomer
                    dataCustomer={dataCustomer}
                    setDataCustomer={setDataCustomer}
                    onRegisterBerhasil={handleLoginBerhasil}
                    setHalamanAktif={setHalamanAktif}
                />
            )}

            {halamanAktif === "cart" && (
                currentCustomer ? (
                    <Cart
                        cart={cart}
                        dataBarang={dataBarang}
                        onUbahQty={handleUbahQtyKeranjang}
                        onHapusItem={handleHapusItemKeranjang}
                        setHalamanAktif={setHalamanAktif}
                    />
                ) : (
                    <LoginCustomer
                        dataCustomer={dataCustomer}
                        onLoginBerhasil={handleLoginBerhasil}
                        setHalamanAktif={setHalamanAktif}
                    />
                )
            )}

            {halamanAktif === "checkout" && (
                currentCustomer ? (
                    <Checkout
                        currentCustomer={currentCustomer}
                        cart={cart}
                        onBayarSekarang={handleBayarSekarang}
                        setHalamanAktif={setHalamanAktif}
                    />
                ) : (
                    <LoginCustomer
                        dataCustomer={dataCustomer}
                        onLoginBerhasil={handleLoginBerhasil}
                        setHalamanAktif={setHalamanAktif}
                    />
                )
            )}

            {halamanAktif === "suksesPembayaran" && (
                <SuksesPembayaran
                    lastOrder={lastOrder}
                    setHalamanAktif={setHalamanAktif}
                />
            )}

            {halamanAktif === "riwayatPembelian" && (
                currentCustomer ? (
                    <RiwayatPembelian
                        currentCustomer={currentCustomer}
                        dataPesanan={dataPesanan}
                        dataReview={dataReview}
                        onKonfirmasiTerima={handleKonfirmasiTerima}
                        onBukaReview={handleBukaReview}
                        setHalamanAktif={setHalamanAktif}
                    />
                ) : (
                    <LoginCustomer
                        dataCustomer={dataCustomer}
                        onLoginBerhasil={handleLoginBerhasil}
                        setHalamanAktif={setHalamanAktif}
                    />
                )
            )}

            {halamanAktif === "reviewProduk" && (
                currentCustomer ? (
                    <ReviewProduk
                        reviewTarget={reviewTarget}
                        onSubmitReview={handleSubmitReview}
                        setHalamanAktif={setHalamanAktif}
                    />
                ) : (
                    <LoginCustomer
                        dataCustomer={dataCustomer}
                        onLoginBerhasil={handleLoginBerhasil}
                        setHalamanAktif={setHalamanAktif}
                    />
                )
            )}

            <Footer />

        </>

    );

}

export default App;
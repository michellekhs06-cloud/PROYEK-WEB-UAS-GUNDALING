import { useState } from "react";

function Dashboard({ judul }) {

    const [pesan, setPesan] = useState(
        "Selamat datang di website Pusat Grosir Depot Air Minum Gundaling."
    );

    const barang = [
        { id: 1, nama: "Galon" },
        { id: 2, nama: "Saringan Air" },
        { id: 3, nama: "Tangki Air" }
    ];

    return (
        <>

        
        <main>
            <section className="hero">
            <div className="container">
                <h2>Tentang Kami</h2>
                <p>Pusat Grosir Depot Air Minum Gundaling merupakan usaha yang bergerak di bidang penyediaan berbagai
                perlengkapan untuk kebutuhan depot air minum isi ulang. Kami hadir untuk membantu para pelaku usaha
                depot
                air maupun pelanggan isi ulang rumahan dalam memenuhi kebutuhan air minum dengan produk yang lengkap dan
                berkualitas.</p>
                <p>Kami menyediakan berbagai macam produk seperti galon, tangki air, dan saringan air yang
                berfungsi untuk mendukung proses penyimpanan dan penyaringan air agar tetap bersih dan layak digunakan.
                Dengan pilihan produk yang beragam, kami berkomitmen menjadi solusi terpercaya bagi kebutuhan air minum
                Anda.</p>
                <p>Melalui pelayanan yang ramah dan harga yang kompetitif, Pusat Grosir Depot Air Minum Gundaling
                terus berupaya memberikan kemudahan bagi pelanggan dalam mendapatkan produk yang dibutuhkan secara cepat
                dan efisien, termasuk layanan yang mendukung kebutuhan isi ulang air minum sehari-hari.</p>
            </div>
        </section>
        </main>

        </>
        
    );
}

export default Dashboard;
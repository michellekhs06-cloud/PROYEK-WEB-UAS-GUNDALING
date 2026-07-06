import { useState } from "react";

function Dashboard({ judul }) {

    const [pesan] = useState(
        "Selamat datang di website Pusat Grosir Depot Air Minum Gundaling."
    );


    return (
        <>

        
        <main>
            <section className="py-16">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-[2rem] font-bold text-[#171718] text-center mb-3">
    Tentang Kami
</h2>
                <p className="text-black text-left leading-[1.6] mb-4">Pusat Grosir Depot Air Minum Gundaling merupakan usaha yang bergerak di bidang penyediaan berbagai
                perlengkapan untuk kebutuhan depot air minum isi ulang. Kami hadir untuk membantu para pelaku usaha
                depot
                air maupun pelanggan isi ulang rumahan dalam memenuhi kebutuhan air minum dengan produk yang lengkap dan
                berkualitas.</p>
                <p className="text-black text-left leading-[1.6] mb-4">Kami menyediakan berbagai macam produk seperti galon, tangki air, dan saringan air yang
                berfungsi untuk mendukung proses penyimpanan dan penyaringan air agar tetap bersih dan layak digunakan.
                Dengan pilihan produk yang beragam, kami berkomitmen menjadi solusi terpercaya bagi kebutuhan air minum
                Anda.</p>
                <p className="text-black text-left leading-[1.6] mb-4">Melalui pelayanan yang ramah dan harga yang kompetitif, Pusat Grosir Depot Air Minum Gundaling
                terus berupaya memberikan kemudahan bagi pelanggan dalam mendapatkan produk yang dibutuhkan secara cepat
                dan efisien, termasuk layanan yang mendukung kebutuhan isi ulang air minum sehari-hari.</p>
            </div>
        </section>
        </main>

        </>
        
    );
}

export default Dashboard;
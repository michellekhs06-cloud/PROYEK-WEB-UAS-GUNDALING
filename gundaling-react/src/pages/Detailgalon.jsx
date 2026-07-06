function DetailGalon({

    dataBarang,

    setHalamanAktif

}) {

    const galon = dataBarang.find(

    (item) => item.kategori === "Galon"

);

    return (

        <main>

            <section className="pt-10 pb-5 px-6">

                <div className="max-w-[1200px] mx-auto px-6">

                    <button
                        className="
btn
btn-outline
px-5
py-2
rounded-lg
transition
duration-300
hover:scale-105
mb-6
"
                        onClick={() => setHalamanAktif("barang")}
                    >
                        ← Kembali
                    </button>

                    <h2 className="text-[1.5rem] font-bold text-[#171718] mb-2">
    Galon
</h2>

                    <div className="flex items-start gap-10 mt-5">

                        <div>

    <img
        src="/GALON.jpeg"
        alt="Galon"
        className="w-[200px] rounded-lg"
    />

</div>

                        <div className="max-w-[600px] text-left">

                            <p>

<strong>Stok :</strong>

{galon ? galon.stok : 0}

</p>

                            <p className="mb-4 leading-[1.6] text-black">
                                Kami menyediakan air galon isi ulang dengan kualitas terbaik,
                                melalui proses filtrasi dan sterilisasi berlapis sehingga
                                menghasilkan air yang bersih, segar, dan aman untuk
                                dikonsumsi setiap hari.
                            </p>

                            <p className="mb-4 leading-[1.6] text-black">
                                Kebersihan galon selalu dijaga dengan pencucian khusus
                                sebelum pengisian. Layanan kami cocok untuk rumah tangga,
                                kantor, maupun usaha seperti warung dan kafe. Tersedia
                                layanan antar cepat dan harga bersahabat.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>

    );

}

export default DetailGalon;
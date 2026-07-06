function DetailTangki({

    dataBarang,

    setHalamanAktif

}) {

    const tangki = dataBarang.find(

        (item) => item.kategori === "Tangki Air"

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
    Tangki Air
</h2>

                    <div className="flex items-start gap-10 mt-5">

                        <div>

    <img
        src="/TANGKIAIR.jpeg"
        alt="Tangki Air"
        className="w-[200px] rounded-lg"
    />

</div>

                        <div className="max-w-[600px] text-left">

                            <p className="mb-4 leading-[1.6] text-black">

    <strong>Stok :</strong> {tangki ? tangki.stok : 0}

</p>

                            <p className="mb-4 leading-[1.6] text-black">
                                Tangki air berkualitas tinggi yang dirancang
                                untuk menyimpan air tetap bersih dan aman.
                                Terbuat dari bahan yang kuat dan tahan terhadap
                                panas matahari sehingga tidak mudah bocor atau
                                retak dalam penggunaan jangka panjang.
                            </p>

                            <p className="mb-4 leading-[1.6] text-black">
                                Produk ini cocok digunakan untuk berbagai
                                kebutuhan, mulai dari rumah tangga, kos-kosan,
                                hingga usaha seperti depot air minum. Kapasitas
                                penyimpanan yang besar membantu menjaga
                                ketersediaan air tetap stabil setiap saat.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>

    );

}

export default DetailTangki;
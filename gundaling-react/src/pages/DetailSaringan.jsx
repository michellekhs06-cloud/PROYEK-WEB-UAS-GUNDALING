function DetailSaringan({

    dataBarang,

    setHalamanAktif

}) {

    const saringan = dataBarang.find(

        (item) => item.kategori === "Saringan"

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
    Saringan
</h2>

                    <div className="flex items-start gap-10 mt-5">

                        <div>

    <img
        src="/SARINGAN.jpeg"
        alt="Saringan"
        className="w-[200px] rounded-lg"
    />

</div>

                        <div className="max-w-[600px] text-left">

                           <p className="mb-4 leading-[1.6] text-black">

    <strong>Stok :</strong> {saringan ? saringan.stok : 0}

</p>

                            <p className="mb-4 leading-[1.6] text-black">
                                Saringan air berkualitas tinggi yang dirancang
                                untuk menghasilkan air yang lebih jernih dan
                                bersih. Produk ini mampu menyaring kotoran
                                halus, pasir, serta partikel berbahaya sehingga
                                air menjadi lebih aman digunakan.
                            </p>

                            <p className="leading-[1.6] text-black">
                                Cocok digunakan untuk berbagai kebutuhan
                                seperti depot air isi ulang, galon, maupun
                                penggunaan sehari-hari di rumah. Dengan sistem
                                penyaringan yang efektif, kualitas air dapat
                                tetap terjaga secara optimal.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>

    );

}

export default DetailSaringan;
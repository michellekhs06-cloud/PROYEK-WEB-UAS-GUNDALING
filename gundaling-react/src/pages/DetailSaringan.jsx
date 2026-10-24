import { formatRupiah } from "../utils/helpers.js";

function DetailSaringan({

    dataBarang,

    setHalamanAktif,

    dataReview,

    onPesanSekarang

}) {

    const saringan = dataBarang.find(

        (item) => item.kategori === "Saringan"

    );

    const reviewSaringan = (dataReview || []).filter(

        (r) => saringan && r.productId === saringan.id

    );

    return (

        <main>

            <section className="pt-32 pb-5 px-6">

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

                           <p className="mb-1 leading-[1.6] text-black">

    <strong>Harga :</strong> {saringan ? formatRupiah(saringan.harga) : "-"}

</p>

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

                            <p className="mb-4 leading-[1.6] text-black">
                                Cocok digunakan untuk berbagai kebutuhan
                                seperti depot air isi ulang, galon, maupun
                                penggunaan sehari-hari di rumah. Dengan sistem
                                penyaringan yang efektif, kualitas air dapat
                                tetap terjaga secara optimal.
                            </p>

                            <button
                                className="btn btn-primary px-6 py-3 rounded-lg transition duration-300"
                                onClick={() => onPesanSekarang(saringan)}
                                disabled={!saringan || saringan.stok <= 0}
                            >
                                {saringan && saringan.stok <= 0 ? "Stok Habis" : "Pesan Sekarang"}
                            </button>

                        </div>

                    </div>

                    <div className="mt-8">

                        <h3 className="text-[1.2rem] font-bold text-[#171718] mb-3">
                            Review Produk
                        </h3>

                        {reviewSaringan.length === 0 ? (

                            <p className="text-black">Belum ada review untuk produk ini.</p>

                        ) : (

                            <div className="flex flex-col gap-3">

                                {reviewSaringan.map((r) => (

                                    <div key={r.id} className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-3">

                                        <p className="font-semibold text-[#171718]">
                                            {r.customerName} — {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                                        </p>

                                        <p className="text-black">{r.komentar}</p>

                                    </div>

                                ))}

                            </div>

                        )}

                    </div>

                </div>

            </section>

        </main>

    );

}

export default DetailSaringan;
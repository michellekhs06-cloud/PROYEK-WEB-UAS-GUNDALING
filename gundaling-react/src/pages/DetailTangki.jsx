import { formatRupiah } from "../utils/helpers.js";

function DetailTangki({

    dataBarang,

    setHalamanAktif,

    dataReview,

    onPesanSekarang

}) {

    const tangki = dataBarang.find(

        (item) => item.kategori === "Tangki Air"

    );

    const reviewTangki = (dataReview || []).filter(

        (r) => tangki && r.productId === tangki.id

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

                            <p className="mb-1 leading-[1.6] text-black">

    <strong>Harga :</strong> {tangki ? formatRupiah(tangki.harga) : "-"}

</p>

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

                            <button
                                className="btn btn-primary px-6 py-3 rounded-lg transition duration-300"
                                onClick={() => onPesanSekarang(tangki)}
                                disabled={!tangki || tangki.stok <= 0}
                            >
                                {tangki && tangki.stok <= 0 ? "Stok Habis" : "Pesan Sekarang"}
                            </button>

                        </div>

                    </div>

                    <div className="mt-8">

                        <h3 className="text-[1.2rem] font-bold text-[#171718] mb-3">
                            Review Produk
                        </h3>

                        {reviewTangki.length === 0 ? (

                            <p className="text-black">Belum ada review untuk produk ini.</p>

                        ) : (

                            <div className="flex flex-col gap-3">

                                {reviewTangki.map((r) => (

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

export default DetailTangki;
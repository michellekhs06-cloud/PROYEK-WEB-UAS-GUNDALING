import { formatRupiah } from "../utils/helpers.js";

function DetailGalon({
    dataBarang,
    setHalamanAktif,
    dataReview,
    onPesanSekarang
}) {

    const galon = dataBarang.find(
        (item) => item.kategori === "Galon"
    );

    const reviewGalon = (dataReview || []).filter(
        (r) => galon && r.productId === galon.id
    );

    return (
        <main>

            <section className="pt-32 pb-5 px-6">

                <div className="max-w-[1200px] mx-auto px-6">

                    {/* Tombol Kembali */}
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

                    {/* Judul */}
                    <h2 className="text-[1.5rem] font-bold text-[#171718] mb-2">
                        Galon
                    </h2>

                    <div className="flex items-start gap-10 mt-5">

                        {/* Gambar Produk */}
                        <div>

                            <img
                                src="/GALON.jpeg"
                                alt="Galon"
                                className="w-[200px] rounded-lg"
                            />

                        </div>

                        {/* Informasi Produk */}
                        <div className="max-w-[600px] text-left">

                            <p className="mb-1 leading-[1.6] text-black">

                                <strong>Harga :</strong>{" "}

                                {galon
                                    ? formatRupiah(galon.harga)
                                    : "-"
                                }

                            </p>

                            <p className="mb-4 leading-[1.6] text-black">

                                <strong>Stok :</strong>{" "}

                                {galon
                                    ? galon.stok
                                    : 0
                                }

                            </p>

                            <p className="mb-4 leading-[1.6] text-black">

                                Kami menyediakan air galon isi ulang
                                dengan kualitas terbaik, melalui proses
                                filtrasi dan sterilisasi berlapis sehingga
                                menghasilkan air yang bersih, segar, dan
                                aman untuk dikonsumsi setiap hari.

                            </p>

                            <p className="mb-4 leading-[1.6] text-black">

                                Kebersihan galon selalu dijaga dengan
                                pencucian khusus sebelum pengisian.
                                Layanan kami cocok untuk rumah tangga,
                                kantor, maupun usaha seperti warung dan
                                kafe. Tersedia layanan antar cepat dan
                                harga bersahabat.

                            </p>

                            {/* Tombol Pesan Sekarang */}
                            <button
                                className="
                                    btn
                                    btn-primary
                                    px-6
                                    py-3
                                    rounded-lg
                                    transition
                                    duration-300
                                "
                                onClick={() => onPesanSekarang(galon)}
                                disabled={!galon || galon.stok <= 0}
                            >

                                {galon && galon.stok <= 0
                                    ? "Stok Habis"
                                    : "Pesan Sekarang"
                                }

                            </button>

                        </div>

                    </div>

                    {/* Review Produk */}
                    <div className="mt-8">

                        <h3 className="text-[1.2rem] font-bold text-[#171718] mb-3">
                            Review Produk
                        </h3>

                        {reviewGalon.length === 0 ? (

                            <p className="text-black">
                                Belum ada review untuk produk ini.
                            </p>

                        ) : (

                            <div className="flex flex-col gap-3">

                                {reviewGalon.map((r) => (

                                    <div
                                        key={r.id}
                                        className="
                                            bg-[#d2dbdb]
                                            border
                                            border-[#334155]
                                            rounded-lg
                                            p-3
                                        "
                                    >

                                        <p className="font-semibold text-[#171718]">

                                            {r.customerName}

                                            {" — "}

                                            {"★".repeat(r.rating)}

                                            {"☆".repeat(5 - r.rating)}

                                        </p>

                                        <p className="text-black">
                                            {r.komentar}
                                        </p>

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

export default DetailGalon;
import { useState } from "react";

function ReviewProduk({

    reviewTarget,

    onSubmitReview,

    setHalamanAktif

}) {

    const [rating, setRating] = useState(0);

    const [komentar, setKomentar] = useState("");

    const [pesanError, setPesanError] = useState("");

    if (!reviewTarget) {

        return (

            <main className="pt-28 pb-10 px-6">

                <div className="max-w-md mx-auto text-center">

                    <p className="text-black">
                        Tidak ada produk yang dipilih untuk direview.
                    </p>

                    <button
                        className="btn btn-primary px-5 py-2 rounded-lg mt-4"
                        onClick={() => setHalamanAktif("riwayatPembelian")}
                    >
                        Kembali ke Riwayat Pembelian
                    </button>

                </div>

            </main>

        );

    }

    function handleSubmit(event) {

        event.preventDefault();

        if (rating === 0) {

            setPesanError("Silakan pilih rating bintang.");

            return;

        }

        if (komentar.trim() === "") {

            setPesanError("Komentar tidak boleh kosong.");

            return;

        }

        setPesanError("");

        onSubmitReview({ rating, komentar });

    }

    return (

        <main className="pt-28 pb-10 px-6">

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl p-8">

                <h2 className="text-[1.5rem] font-bold text-[#171718] text-center mb-2">
                    Review Produk
                </h2>

                <p className="text-center text-black leading-[1.6] mb-6">
                    {reviewTarget.productName}
                </p>

                <form onSubmit={handleSubmit}>

                    <label className="block font-semibold text-[#171718] mb-2 text-center">
                        Rating
                    </label>

                    <div className="flex justify-center gap-2 mb-4 text-[2rem]">

                        {[1, 2, 3, 4, 5].map((angka) => (

                            <span
                                key={angka}
                                onClick={() => setRating(angka)}
                                className="cursor-pointer"
                                style={{ color: angka <= rating ? "#f5b301" : "#d1d5db" }}
                            >
                                ★
                            </span>

                        ))}

                    </div>

                    <label className="block font-semibold text-[#171718] mb-2">
                        Komentar
                    </label>

                    <textarea
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                        rows="4"
                        placeholder="Tulis pengalaman Anda dengan produk ini"
                        value={komentar}
                        onChange={(e) => setKomentar(e.target.value)}
                    />

                    {pesanError && (
                        <p className="text-red-600 text-center text-sm mb-3">
                            {pesanError}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary w-full py-3 font-semibold transition duration-300"
                    >
                        Submit Review
                    </button>

                </form>

            </div>

        </main>

    );

}

export default ReviewProduk;
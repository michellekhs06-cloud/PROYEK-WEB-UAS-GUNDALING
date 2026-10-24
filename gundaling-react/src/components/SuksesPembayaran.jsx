import { formatRupiah } from "../utils/helpers.js";

function SuksesPembayaran({

    lastOrder,

    setHalamanAktif

}) {

    if (!lastOrder) {

        return (

            <main className="pt-28 pb-10 px-6">

                <div className="max-w-md mx-auto text-center">

                    <p className="text-black">
                        Tidak ada data pesanan.
                    </p>

                    <button
                        className="btn btn-primary px-5 py-2 rounded-lg mt-4"
                        onClick={() => setHalamanAktif("dashboard")}
                    >
                        Kembali ke Dashboard
                    </button>

                </div>

            </main>

        );

    }

    return (

        <main className="pt-28 pb-10 px-6">

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl p-8 text-center">

                <h2 className="text-[1.5rem] font-bold text-green-700 mb-3">
                    Pembayaran berhasil!
                </h2>

                <p className="text-black mb-2">
                    Pesanan berhasil dibuat!
                </p>

                <p className="text-black mb-4">
                    Nomor Pesanan: <strong>{lastOrder.nomorPesanan}</strong>
                </p>

                <div className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-4 mb-4 text-left">

                    <p className="text-black"><strong>Metode Pembayaran:</strong> {lastOrder.metodePembayaran}</p>
                    <p className="text-black"><strong>Total Pembayaran:</strong> {formatRupiah(lastOrder.total)}</p>

                </div>

                <div className="flex flex-col gap-3">

                    <button
                        className="btn btn-primary px-5 py-2 rounded-lg transition duration-300"
                        onClick={() => setHalamanAktif("riwayatPembelian")}
                    >
                        Lihat Riwayat Pembelian
                    </button>

                    <button
                        className="btn btn-outline px-5 py-2 rounded-lg transition duration-300"
                        onClick={() => setHalamanAktif("dashboard")}
                    >
                        Kembali ke Dashboard
                    </button>

                </div>

            </div>

        </main>

    );

}

export default SuksesPembayaran;
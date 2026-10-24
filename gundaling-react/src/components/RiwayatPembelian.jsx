import { formatRupiah, formatTanggal } from "../utils/helpers.js";

function RiwayatPembelian({

    currentCustomer,

    dataPesanan,

    dataReview,

    onKonfirmasiTerima,

    onBukaReview,

    setHalamanAktif

}) {

    const pesananSaya = dataPesanan.filter(

        (p) => p.customerId === currentCustomer.id

    );

    function sudahDireview(orderId, productId) {

        return dataReview.some(

            (r) =>
                r.orderId === orderId &&
                r.productId === productId &&
                r.customerId === currentCustomer.id

        );

    }

    return (

        <main className="pt-28 pb-10 px-6">

            <div className="max-w-[900px] mx-auto px-6">

                <h2 className="text-[1.5rem] font-bold text-[#171718] mb-2">
                    Riwayat Pembelian
                </h2>

                <p className="text-black leading-[1.6] mb-6">
                    Berikut adalah seluruh pesanan yang pernah Anda buat.
                </p>

                {pesananSaya.length === 0 ? (

                    <div className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-6 text-center">

                        <p className="text-black mb-4">
                            Anda belum memiliki riwayat pembelian.
                        </p>

                        <button
                            className="btn btn-primary px-5 py-2 rounded-lg transition duration-300"
                            onClick={() => setHalamanAktif("barang")}
                        >
                            Lihat Katalog
                        </button>

                    </div>

                ) : (

                    <div className="flex flex-col gap-5">

                        {pesananSaya
                            .slice()
                            .reverse()
                            .map((order) => (

                                <div
                                    key={order.id}
                                    className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-4"
                                >

                                    <div className="flex justify-between items-start mb-2">

                                        <h3 className="text-[1.1rem] font-bold text-[#171718]">
                                            Pesanan #{order.nomorPesanan}
                                        </h3>

                                        <span className="text-sm text-[#334155]">
                                            {formatTanggal(order.tanggal)}
                                        </span>

                                    </div>

                                    <div className="mb-3">

                                        {order.items.map((item) => (

                                            <div key={item.productId} className="flex justify-between text-black mb-1">

                                                <span>{item.namaBarang} x {item.qty}</span>

                                                <span>{formatRupiah(item.subtotal)}</span>

                                            </div>

                                        ))}

                                    </div>

                                    <p className="text-black">
                                        <strong>Total:</strong> {formatRupiah(order.total)}
                                    </p>

                                    <p className="text-black">
                                        <strong>Pembayaran:</strong> {order.metodePembayaran} ({order.statusPembayaran})
                                    </p>

                                    <p className="text-black mb-3">
                                        <strong>Barang:</strong> {order.statusPenerimaan}
                                    </p>

                                    {order.statusPenerimaan === "Belum Diterima" && (

                                        <button
                                            className="btn btn-primary px-5 py-2 rounded-lg transition duration-300"
                                            onClick={() => onKonfirmasiTerima(order.id)}
                                        >
                                            Barang Sudah Diterima
                                        </button>

                                    )}

                                    {order.statusPenerimaan === "Sudah Diterima" && (

                                        <div className="flex flex-wrap gap-2">

                                            {order.items.map((item) => (

                                                sudahDireview(order.id, item.productId) ? (

                                                    <span
                                                        key={item.productId}
                                                        className="text-sm text-[#334155] italic"
                                                    >
                                                        {item.namaBarang}: sudah direview
                                                    </span>

                                                ) : (

                                                    <button
                                                        key={item.productId}
                                                        className="btn btn-outline px-4 py-2 rounded-lg transition duration-300"
                                                        onClick={() => onBukaReview(order.id, item.productId, item.namaBarang)}
                                                    >
                                                        Berikan Review — {item.namaBarang}
                                                    </button>

                                                )

                                            ))}

                                        </div>

                                    )}

                                </div>

                            ))}

                    </div>

                )}

            </div>

        </main>

    );

}

export default RiwayatPembelian;
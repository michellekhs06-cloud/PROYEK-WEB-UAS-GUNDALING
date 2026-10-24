import { useState } from "react";
import { formatRupiah } from "../utils/helpers.js";

function Checkout({

    currentCustomer,

    cart,

    onBayarSekarang,

    setHalamanAktif

}) {

    const [alamat, setAlamat] = useState(currentCustomer.alamat || "");

    const [metodePembayaran, setMetodePembayaran] = useState("Transfer Bank");

    const [pesanError, setPesanError] = useState("");

    const [sedangProses, setSedangProses] = useState(false);

    const subtotal = cart.reduce(

        (sum, item) => sum + item.harga * item.qty,

        0

    );

    const ongkir = cart.length > 0 ? 10000 : 0;

    const total = subtotal + ongkir;

    function handleBayar() {

        if (alamat.trim() === "") {

            setPesanError("Alamat pengiriman wajib diisi.");

            return;

        }

        setPesanError("");
        setSedangProses(true);

        // simulasi proses pembayaran
        setTimeout(() => {

            onBayarSekarang(alamat, metodePembayaran);

            setSedangProses(false);

        }, 800);

    }

    return (

        <main className="pt-28 pb-10 px-6">

            <div className="max-w-[700px] mx-auto px-6">

                <h2 className="text-[1.5rem] font-bold text-[#171718] mb-2">
                    Checkout
                </h2>

                <p className="text-black leading-[1.6] mb-6">
                    Periksa kembali data dan pesanan Anda sebelum melakukan pembayaran.
                </p>

                <div className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-4 mb-4">

                    <h3 className="text-[1.1rem] font-bold text-[#171718] mb-2">
                        Data Penerima
                    </h3>

                    <p className="text-black"><strong>Nama:</strong> {currentCustomer.nama}</p>
                    <p className="text-black mb-3"><strong>Nomor HP:</strong> {currentCustomer.noHP}</p>

                    <label className="block font-semibold text-[#171718] mb-2">
                        Alamat Pengiriman
                    </label>

                    <textarea
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#002366]"
                        rows="3"
                        placeholder="Masukkan alamat lengkap pengiriman"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                    />

                </div>

                <div className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-4 mb-4">

                    <h3 className="text-[1.1rem] font-bold text-[#171718] mb-3">
                        Ringkasan Pesanan
                    </h3>

                    {cart.map((item) => (

                        <div key={item.productId} className="flex justify-between text-black mb-2">

                            <span>{item.namaBarang} x {item.qty}</span>

                            <span>{formatRupiah(item.harga * item.qty)}</span>

                        </div>

                    ))}

                    <hr className="my-3" />

                    <div className="flex justify-between text-black mb-1">
                        <span>Subtotal</span>
                        <span>{formatRupiah(subtotal)}</span>
                    </div>

                    <div className="flex justify-between text-black mb-1">
                        <span>Ongkir</span>
                        <span>{formatRupiah(ongkir)}</span>
                    </div>

                    <div className="flex justify-between text-[#171718] font-bold text-[1.1rem] mt-2">
                        <span>Total Pembayaran</span>
                        <span>{formatRupiah(total)}</span>
                    </div>

                </div>

                <div className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-4 mb-4">

                    <h3 className="text-[1.1rem] font-bold text-[#171718] mb-3">
                        Metode Pembayaran
                    </h3>

                    <div className="flex flex-col gap-2">

                        {["Transfer Bank", "QRIS", "COD"].map((metode) => (

                            <label key={metode} className="flex items-center gap-2 text-black">

                                <input
                                    type="radio"
                                    name="metodePembayaran"
                                    value={metode}
                                    checked={metodePembayaran === metode}
                                    onChange={(e) => setMetodePembayaran(e.target.value)}
                                />

                                {metode}

                            </label>

                        ))}

                    </div>

                </div>

                {pesanError && (
                    <p className="text-red-600 text-center text-sm mb-3">
                        {pesanError}
                    </p>
                )}

                <div className="flex justify-between">

                    <button
                        className="btn btn-outline px-5 py-2 rounded-lg transition duration-300"
                        onClick={() => setHalamanAktif("cart")}
                    >
                        ← Kembali ke Keranjang
                    </button>

                    <button
                        className="btn btn-primary px-6 py-3 rounded-lg transition duration-300"
                        onClick={handleBayar}
                        disabled={sedangProses || cart.length === 0}
                    >
                        {sedangProses ? "Memproses..." : "Bayar Sekarang"}
                    </button>

                </div>

            </div>

        </main>

    );

}

export default Checkout;
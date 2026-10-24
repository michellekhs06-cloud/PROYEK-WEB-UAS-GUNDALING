import { formatRupiah } from "../utils/helpers.js";

function Cart({

    cart,

    dataBarang,

    onUbahQty,

    onHapusItem,

    setHalamanAktif

}) {

    function getStok(productId) {

        const barang = dataBarang.find((b) => b.id === productId);

        return barang ? barang.stok : 0;

    }

    const total = cart.reduce(

        (sum, item) => sum + item.harga * item.qty,

        0

    );

    return (

        <main className="pt-28 pb-10 px-6">

            <div className="max-w-[900px] mx-auto px-6">

                <h2 className="text-[1.5rem] font-bold text-[#171718] mb-2">
                    Keranjang / Pemesanan
                </h2>

                <p className="text-black leading-[1.6] mb-6">
                    Atur jumlah produk yang ingin Anda pesan sebelum melanjutkan ke checkout.
                </p>

                {cart.length === 0 ? (

                    <div className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-6 text-center">

                        <p className="text-black mb-4">
                            Keranjang Anda masih kosong.
                        </p>

                        <button
                            className="btn btn-primary px-5 py-2 rounded-lg transition duration-300"
                            onClick={() => setHalamanAktif("barang")}
                        >
                            Lihat Katalog
                        </button>

                    </div>

                ) : (

                    <>

                        <div className="flex flex-col gap-4">

                            {cart.map((item) => {

                                const stok = getStok(item.productId);

                                return (

                                    <div
                                        key={item.productId}
                                        className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-4 flex items-center gap-4"
                                    >

                                        <img
                                            src={item.gambar}
                                            alt={item.namaBarang}
                                            className="w-[80px] h-[80px] object-cover rounded-md"
                                        />

                                        <div className="flex-1 text-left">

                                            <h3 className="text-[1.1rem] font-bold text-[#171718] mb-1">
                                                {item.namaBarang}
                                            </h3>

                                            <p className="text-black mb-1">
                                                {formatRupiah(item.harga)}
                                            </p>

                                            <p className="text-sm text-[#334155]">
                                                Stok tersedia: {stok}
                                            </p>

                                        </div>

                                        <div className="flex items-center gap-2">

                                            <button
                                                className="btn btn-outline px-3 py-1 rounded-lg"
                                                onClick={() => onUbahQty(item.productId, item.qty - 1)}
                                            >
                                                -
                                            </button>

                                            <span className="px-2 font-semibold text-black">
                                                {item.qty}
                                            </span>

                                            <button
                                                className="btn btn-outline px-3 py-1 rounded-lg"
                                                onClick={() => onUbahQty(item.productId, item.qty + 1)}
                                                disabled={item.qty >= stok}
                                            >
                                                +
                                            </button>

                                        </div>

                                        <div className="text-right min-w-[120px]">

                                            <p className="font-bold text-[#171718]">
                                                {formatRupiah(item.harga * item.qty)}
                                            </p>

                                            <button
                                                className="text-red-600 text-sm underline mt-1"
                                                onClick={() => onHapusItem(item.productId)}
                                            >
                                                Hapus
                                            </button>

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                        <div className="bg-white border border-[#334155] rounded-lg p-4 mt-6 flex justify-between items-center">

                            <h3 className="text-[1.2rem] font-bold text-[#171718]">
                                Total
                            </h3>

                            <p className="text-[1.2rem] font-bold text-[#171718]">
                                {formatRupiah(total)}
                            </p>

                        </div>

                        <div className="flex justify-end mt-6">

                            <button
                                className="btn btn-primary px-6 py-3 rounded-lg transition duration-300"
                                onClick={() => setHalamanAktif("checkout")}
                            >
                                Checkout
                            </button>

                        </div>

                    </>

                )}

            </div>

        </main>

    );

}

export default Cart;
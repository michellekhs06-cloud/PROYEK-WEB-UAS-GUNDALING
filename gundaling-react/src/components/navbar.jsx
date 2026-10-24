function Navbar({

    halamanAktif,

    setHalamanAktif,

    currentCustomer,

    jumlahKeranjang,

    onBukaKeranjang,

    onBukaRiwayat,

    onLogoutCustomer

}) {
    return (
        <header className="fixed top-0 left-0 z-[10000] w-full border-b border-[#3b4552] bg-[#002366] px-4 py-4">

            <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 gap-4 flex-wrap">

                <a
                    href="#"
                    className="flex items-center gap-2 text-xl font-bold text-slate-100"
                    onClick={(e) => {
                        e.preventDefault();
                        setHalamanAktif("dashboard");
                    }}
                >
                    <img
                        src="/1000231741-removebg-preview.png"
                        alt="Logo"
                        className="w-[150px] h-auto"
                    />

                    Pusat Grosir Depot Air Minum Gundaling
                </a>

                <nav>
                    <ul className="flex list-none items-center gap-2 m-0 p-0">

                        <li>
                            <a
                                href="#"
                                className={halamanAktif === "dashboard" ? "active" : ""}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setHalamanAktif("dashboard");
                                }}
                            >
                                Dashboard
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className={halamanAktif === "barang" ? "active" : ""}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setHalamanAktif("barang");
                                }}
                            >
                                Barang
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className={halamanAktif === "mitra" ? "active" : ""}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setHalamanAktif("mitra");
                                }}
                            >
                                Mitra
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={halamanAktif === "cart" ? "active" : ""}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onBukaKeranjang();
                                }}
                            >
                                Keranjang{jumlahKeranjang > 0 ? ` (${jumlahKeranjang})` : ""}
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className={halamanAktif === "riwayatPembelian" ? "active" : ""}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onBukaRiwayat();
                                }}
                            >
                                Riwayat Pembelian
                            </a>
                        </li>

                    </ul>
                </nav>

                <div className="flex items-center gap-3">

                    {currentCustomer ? (

                        <>
                            <span className="text-slate-100 font-semibold">
                                Hai, {currentCustomer.nama}
                            </span>

                            <button
                                className="text-[#94a3b8] hover:text-slate-100 text-sm underline"
                                onClick={onLogoutCustomer}
                            >
                                Logout
                            </button>
                        </>

                    ) : (

                        <a
                            href="#"
                            className="text-slate-100 hover:text-white"
                            onClick={(e) => {
                                e.preventDefault();
                                setHalamanAktif("loginCustomer");
                            }}
                        >
                            Login Customer
                        </a>

                    )}

                    <button
                        className="text-slate-100 hover:text-white text-sm"
                        onClick={() => setHalamanAktif("login")}
                    >
                        Login Admin
                    </button>

                </div>

            </div>

        </header>
    );
}

export default Navbar;
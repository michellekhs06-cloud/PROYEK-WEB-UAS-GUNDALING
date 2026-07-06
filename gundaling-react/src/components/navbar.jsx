function Navbar({ halamanAktif, setHalamanAktif }) {
    return (
        <header className="fixed top-0 left-0 z-[10000] w-full border-b border-[#3b4552] bg-[#002366] px-4 py-4">

            <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">

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
                                className={halamanAktif === "transaksi" ? "active" : ""}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setHalamanAktif("transaksi");
                                }}
                            >
                                Transaksi Pembelian
                            </a>
                        </li>

                    </ul>
                </nav>

            </div>

        </header>
    );
}

export default Navbar;
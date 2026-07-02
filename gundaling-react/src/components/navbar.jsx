function Navbar({ halamanAktif, setHalamanAktif }) {

    return (

        <header className="navbar">

            <div className="container navbar-inner">

                <a
                    href="#"
                    className="logo"
                    onClick={() => setHalamanAktif("dashboard")}
                >

                    <img
                        src="/1000231741-removebg-preview.png"
                        width="150"
                        alt="Logo"
                    />

                    Pusat Grosir Depot Air Minum Gundaling

                </a>

                <nav>

                    <ul className="nav-menu">

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
                    className={halamanAktif === "dashboard" ? "active" : ""}
                    onClick={(e) => {
                        e.preventDefault();
                        setHalamanAktif("dashboard");
                    }}
                >
                    Dashboard
                </a>

                        </li>

                    </ul>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;
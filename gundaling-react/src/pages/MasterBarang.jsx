function MasterBarang({

    dataBarang,

    setHalamanAktif,

    setBarangEdit,

    setBarangHapus,

    setModeForm

}) {


        return (

            <main>

                <section className="section">

                    <div className="container mx-auto px-6">

                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Produk
                        </h2>

                        <p className="section-desc text-gray-600 mb-6">
                            Hi pelanggan setia! Temukan berbagai produk berkualitas
                            dengan harga terbaik hanya di sini.
                        </p>

                        <div className="cards-grid">

                            <article className="card">

                                <h3>Galon</h3>

                                <img src="/GALON.jpeg" alt="Galon" />

                                <div className="card-button">
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => setHalamanAktif("detailGalon")}
                                    >
                                        Selengkapnya
                                    </button>
                                </div>

                            </article>

                            <article className="card">

                            <h3>Saringan</h3>

                            <img
                                src="/SARINGAN.jpeg"
                                alt="Saringan"
                            />

                            <div className="card-button">

                                <button
                                    className="btn btn-outline"
                                    onClick={() => setHalamanAktif("detailSaringan")}
                                >
                                    Selengkapnya
                                </button>

                            </div>

                        </article>

                            <article className="card rounded-xl shadow-md hover:shadow-xl transition duration-300">

                                <h3>Tangki Air</h3>

                                <img
                                    src="/TANGKIAIR.jpeg"
                                    alt="Tangki Air"
                                />

                                <div className="card-button">

                                    <button
                                        className="btn btn-outline"
                                        onClick={() => setHalamanAktif("detailTangki")}
                                    >
                                        Selengkapnya
                                    </button>

                                </div>

                            </article>

                        </div>

                    </div>

                </section>

                <section className="section">

                    <div className="container">

                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Data Stok Barang
                        </h2>

                        <p className="section-desc">

                            Data stok barang yang telah tersimpan.

                        </p>

                        <button
                            className="btn btn-primary"
                            onClick={() => {

                                setModeForm("tambah");

                                setBarangEdit(null);

                                setHalamanAktif("login");

                            }}
                        >
                            Tambah Barang
                        </button>

                        <br />
                        <br />

                        <table className="tabel-barang w-full border-collapse shadow-md rounded-lg overflow-hidden">

                            <thead>

                                <tr>

                                    <th>No</th>
                                    <th>Nama Barang</th>
                                    <th>Kategori</th>
                                    <th>Merk</th>
                                    <th>Stok</th>
                                    <th>Harga</th>
                                    <th>Supplier</th>
                                    <th>Tanggal</th>
                                    <th>Aksi</th>

                                </tr>

                            </thead>
                            <tbody>

                                {dataBarang.map((item, index) => (

                                    <tr key={item.id}>

                                        <td>{index + 1}</td>

                                        <td>{item.namaBarang}</td>

                                        <td>{item.kategori}</td>

                                        <td>{item.merk}</td>

                                        <td>{item.stok}</td>

                                        <td>{item.harga}</td>

                                        <td>{item.supplier}</td>

                                        <td>{item.tanggal}</td>
                                        <td>

                                            <button
                                                className="btn btn-primary px-5 py-2 rounded-lg"
                                                onClick={() => {

                                                    setBarangEdit(item);

                                                    setModeForm("edit");

                                                    setHalamanAktif("login");

                                                }}
                                            >
                                                Edit
                                            </button>

                                            {" "}

                                            <button
                                                className="btn btn-outline px-5 py-2 rounded-lg"
                                                onClick={() => {

                                                    setBarangHapus(item);

                                                    setModeForm("delete");

                                                    setHalamanAktif("login");

                                                }}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </section>

            </main>

        );

    }

    export default MasterBarang;
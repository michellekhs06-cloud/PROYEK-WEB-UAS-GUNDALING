import { useState } from "react";

function MasterBarang({ setHalamanAktif }) {

    const [dataBarang] = useState([
        {
            id: 1,
            nama: "Galon",
            stok: 20,
            kategori: "Galon"
        },
        {
            id: 2,
            nama: "Saringan Air",
            stok: 15,
            kategori: "Filter"
        },
        {
            id: 3,
            nama: "Tangki Air",
            stok: 8,
            kategori: "Tangki Air"
        }
    ]);

    return (

        <main>

            <section className="section">

                <div className="container">

                    <h2>Produk</h2>

                    <p className="section-desc">
                        Hi pelanggan setia! Temukan berbagai produk berkualitas
                        dengan harga terbaik hanya di sini.
                    </p>

                    <div className="cards-grid">

                        <article className="card">

                            <h3>Galon</h3>

                            <img
                                src="/GALON.jpeg"
                                alt="Galon"
                            />

                            <br />

                            <button
                                className="btn btn-outline"
                                onClick={() => setHalamanAktif("detailGalon")}
                            >
                                Selengkapnya
                            </button>

                        </article>

                        <article className="card">

                            <h3>Saringan</h3>

                            <img
                                src="/SARINGAN.jpeg"
                                alt="Saringan"
                            />

                            <br />

                            <button
                                className="btn btn-outline"
                                onClick={() => setHalamanAktif("detailSaringan")}
                            >
                                Selengkapnya
                            </button>

                        </article>

                        <article className="card">

                            <h3>Tangki Air</h3>

                            <img
                                src="/TANGKIAIR.jpeg"
                                alt="Tangki Air"
                            />

                            <br />

                            <button
                                className="btn btn-outline"
                                onClick={() => setHalamanAktif("detailTangki")}
                            >
                                Selengkapnya
                            </button>

                        </article>

                    </div>

                </div>

            </section>

            <section className="section">

                <div className="container">

                    <h2>Data Stok Barang</h2>

                    <p className="section-desc">

                        Data stok barang yang telah tersimpan.

                    </p>

                    <button
                        className="btn btn-primary"
                        onClick={() => setHalamanAktif("login")}
                    >
                        Tambah Barang
                    </button>

                    <br />
                    <br />

                    <table className="tabel-barang">

                        <thead>

                            <tr>

                                <th>No</th>
                                <th>Nama Barang</th>
                                <th>Kategori</th>
                                <th>Stok</th>
                                <th>Aksi</th>

                            </tr>

                        </thead>

                        <tbody>

                            {dataBarang.map((item, index) => (

                                <tr key={item.id}>

                                    <td>{index + 1}</td>

                                    <td>{item.nama}</td>

                                    <td>{item.kategori}</td>

                                    <td>{item.stok}</td>

                                    <td>

                                        <button
                                            className="btn btn-primary"
                                            onClick={() => setHalamanAktif("login")}
                                        >
                                            Edit
                                        </button>

                                        {" "}

                                        <button
                                            className="btn btn-outline"
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
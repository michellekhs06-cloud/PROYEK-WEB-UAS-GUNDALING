function DetailSaringan({

    dataBarang,

    setHalamanAktif

}) {

    const saringan = dataBarang.find(

        (item) => item.kategori === "Saringan"

    );

    return (

        <main>

            <section className="section">

                <div className="container">

                    <button
                        className="btn btn-outline"
                        onClick={() => setHalamanAktif("barang")}
                    >
                        ← Kembali
                    </button>

                    <h2>Saringan</h2>

                    <div className="produk-detail">

                        <div className="produk-img">

                            <img
                                src="/SARINGAN.jpeg"
                                alt="Saringan"
                            />

                        </div>

                        <div className="produk-desc">

                            <p>

                                <strong>Stok :</strong>

                                {saringan ? saringan.stok : 0}

                            </p>

                            <p>
                                Saringan air berkualitas tinggi yang dirancang
                                untuk menghasilkan air yang lebih jernih dan
                                bersih. Produk ini mampu menyaring kotoran
                                halus, pasir, serta partikel berbahaya sehingga
                                air menjadi lebih aman digunakan.
                            </p>

                            <p>
                                Cocok digunakan untuk berbagai kebutuhan
                                seperti depot air isi ulang, galon, maupun
                                penggunaan sehari-hari di rumah. Dengan sistem
                                penyaringan yang efektif, kualitas air dapat
                                tetap terjaga secara optimal.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>

    );

}

export default DetailSaringan;
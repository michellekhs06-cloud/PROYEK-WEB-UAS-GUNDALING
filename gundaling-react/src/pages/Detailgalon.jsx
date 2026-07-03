function DetailGalon() {

    return (

        <main>

            <section className="section">

                <div className="container">

                    <button
                        className="btn btn-outline"
                        onClick={() => window.history.back()}
                    >
                        ← Kembali
                    </button>

                    <h2>Galon</h2>

                    <div className="produk-detail">

                        <div className="produk-img">

                            <img
                                src="/GALON.jpeg"
                                alt="Galon"
                            />

                        </div>

                        <div className="produk-desc">

                            <p><strong>Stok :</strong> 31</p>

                            <p>
                                Kami menyediakan air galon isi ulang dengan kualitas terbaik,
                                melalui proses filtrasi dan sterilisasi berlapis sehingga
                                menghasilkan air yang bersih, segar, dan aman untuk
                                dikonsumsi setiap hari.
                            </p>

                            <p>
                                Kebersihan galon selalu dijaga dengan pencucian khusus
                                sebelum pengisian. Layanan kami cocok untuk rumah tangga,
                                kantor, maupun usaha seperti warung dan kafe. Tersedia
                                layanan antar cepat dan harga bersahabat.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>

    );

}

export default DetailGalon;
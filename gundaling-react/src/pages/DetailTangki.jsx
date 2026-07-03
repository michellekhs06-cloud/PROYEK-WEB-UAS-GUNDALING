function DetailTangki() {

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

                    <h2>Tangki Air</h2>

                    <div className="produk-detail">

                        <div className="produk-img">

                            <img
                                src="/TANGKIAIR.jpeg"
                                alt="Tangki Air"
                            />

                        </div>

                        <div className="produk-desc">

                            <p><strong>Stok :</strong> 1</p>

                            <p>
                                Tangki air berkualitas tinggi yang dirancang
                                untuk menyimpan air tetap bersih dan aman.
                                Terbuat dari bahan yang kuat dan tahan terhadap
                                panas matahari sehingga tidak mudah bocor atau
                                retak dalam penggunaan jangka panjang.
                            </p>

                            <p>
                                Produk ini cocok digunakan untuk berbagai
                                kebutuhan, mulai dari rumah tangga, kos-kosan,
                                hingga usaha seperti depot air minum. Kapasitas
                                penyimpanan yang besar membantu menjaga
                                ketersediaan air tetap stabil setiap saat.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>

    );

}

export default DetailTangki;
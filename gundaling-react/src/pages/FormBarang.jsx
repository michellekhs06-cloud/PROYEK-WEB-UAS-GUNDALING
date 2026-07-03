import { useState } from "react";

function FormBarang() {

    const [formData, setFormData] = useState({
        namaBarang: "",
        kategori: "",
        merk: "",
        stok: "",
        harga: "",
        supplier: "",
        tanggal: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }

    function handleSubmit(event) {

        event.preventDefault();

        if (
            formData.namaBarang === "" ||
            formData.kategori === "" ||
            formData.merk === "" ||
            formData.stok === "" ||
            formData.harga === "" ||
            formData.supplier === "" ||
            formData.tanggal === ""
        ) {

            alert("Semua data harus diisi.");

            return;

        }

        alert("Data berhasil disimpan.");

        console.log(formData);

        setFormData({
            namaBarang: "",
            kategori: "",
            merk: "",
            stok: "",
            harga: "",
            supplier: "",
            tanggal: ""
        });

    }

    return (

        <section className="section">

            <div className="container">

                <h2>Tambah Data Barang</h2>

                <p className="section-desc">
                    Tambahkan data stok barang ke dalam sistem.
                </p>

                <form
                    className="form-card"
                    onSubmit={handleSubmit}
                >

                    <fieldset>

                        <legend>Data Barang</legend>

                        <div className="form-group">

                            <label>Nama Barang</label>

                            <input
                                type="text"
                                name="namaBarang"
                                value={formData.namaBarang}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-row">

                            <div className="form-group">

                                <label>Kategori</label>

                                <select
                                    name="kategori"
                                    value={formData.kategori}
                                    onChange={handleChange}
                                >

                                    <option value="">-- Pilih Kategori --</option>

                                    <option value="Galon">Galon</option>

                                    <option value="Tangki Air">Tangki Air</option>

                                    <option value="Saringan">Saringan</option>

                                </select>

                            </div>

                            <div className="form-group">

                                <label>Merk</label>

                                <input
                                    type="text"
                                    name="merk"
                                    value={formData.merk}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <div className="form-row">

                            <div className="form-group">

                                <label>Jumlah Stok</label>

                                <input
                                    type="number"
                                    name="stok"
                                    value={formData.stok}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="form-group">

                                <label>Harga</label>

                                <input
                                    type="number"
                                    name="harga"
                                    value={formData.harga}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <div className="form-row">

                            <div className="form-group">

                                <label>Supplier</label>

                                <input
                                    type="text"
                                    name="supplier"
                                    value={formData.supplier}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="form-group">

                                <label>Tanggal Masuk</label>

                                <input
                                    type="date"
                                    name="tanggal"
                                    value={formData.tanggal}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <div className="form-actions">

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Simpan
                            </button>

                            <button
                                type="reset"
                                className="btn btn-outline"
                            >
                                Reset
                            </button>

                        </div>

                    </fieldset>

                </form>

            </div>

        </section>

    );

}

export default FormBarang;
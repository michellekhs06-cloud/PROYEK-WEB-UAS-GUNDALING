import { useState, useEffect } from "react";
function FormBarang({

    dataBarang,

    setDataBarang,

    barangEdit,

    setBarangEdit,

    modeForm,

    setModeForm,

    setHalamanAktif

}) {

    const [formData, setFormData] = useState({
        namaBarang: "",
        kategori: "",
        merk: "",
        stok: "",
        harga: "",
        supplier: "",
        tanggal: ""
    });

    useEffect(() => {

    if (modeForm === "edit" && barangEdit) {

        setFormData({

            namaBarang: barangEdit.namaBarang,

            kategori: barangEdit.kategori,

            merk: barangEdit.merk,

            stok: barangEdit.stok,

            harga: barangEdit.harga,

            supplier: barangEdit.supplier,

            tanggal: barangEdit.tanggal

        });

    }

}, [barangEdit, modeForm]);

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }

    function handleReset() {

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

 if (modeForm === "edit") {

    const dataBaru = dataBarang.map((item) =>

        item.id === barangEdit.id

            ? {

                ...item,

                namaBarang: formData.namaBarang,

                kategori: formData.kategori,

                merk: formData.merk,

                stok: formData.stok,

                harga: formData.harga,

                supplier: formData.supplier,

                tanggal: formData.tanggal

            }

            : item

    );

    setDataBarang(dataBaru);

    alert("Data berhasil diupdate.");

} else {

    const barangBaru = {

        id: dataBarang.length + 1,

        namaBarang: formData.namaBarang,

        kategori: formData.kategori,

        merk: formData.merk,

        stok: formData.stok,

        harga: formData.harga,

        supplier: formData.supplier,

        tanggal: formData.tanggal

    };

    setDataBarang([

        ...dataBarang,

        barangBaru

    ]);

    alert("Data berhasil disimpan.");

}

        setFormData({
            namaBarang: "",
            kategori: "",
            merk: "",
            stok: "",
            harga: "",
            supplier: "",
            tanggal: ""
        });

        setBarangEdit(null);

        setModeForm("tambah");

        setHalamanAktif("barang");

    }

    return (

        <section className="section">

            <div className="container">

                <h2>

                    {modeForm === "edit"
                        ? "Edit Data Barang"
                        : "Tambah Data Barang"}

                </h2>

                <p className="section-desc">

                    {modeForm === "edit"
                        ? "Ubah data stok barang yang dipilih."
                        : "Tambahkan data stok barang ke dalam sistem."}

                </p>

                <form
                    className="form-card"
                    onSubmit={handleSubmit}
                >

                    <fieldset>

                        <legend>

                            {modeForm === "edit"
                                ? "Edit Data Barang"
                                : "Tambah Data Barang"}

                        </legend>

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

                                {modeForm === "edit"
                                    ? "Update"
                                    : "Simpan"}

                            </button>

                            <button
                                type="button"
                                className="btn btn-outline"
                                onClick={handleReset}
                            >
                                Reset
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline"
                                onClick={() => setHalamanAktif("barang")}
                            >

                            Kembali

                            </button>

                        </div>

                    </fieldset>

                </form>

            </div>

        </section>

    );

}

export default FormBarang;
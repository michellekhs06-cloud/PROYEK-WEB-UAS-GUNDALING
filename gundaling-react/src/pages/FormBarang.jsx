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

const idBaru =
    dataBarang.length > 0
        ? Math.max(...dataBarang.map(item => item.id)) + 1
        : 1;

    const barangBaru = {

    id: idBaru,

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

        <section className="pt-10 pb-5 px-6">

            <div className="max-w-[900px] mx-auto px-6">

                <h2 className="text-[1.5rem] font-bold text-[#171718] mb-2">

                    {modeForm === "edit"
                        ? "Edit Data Barang"
                        : "Tambah Data Barang"}

                </h2>

                <p className="text-black leading-[1.6] mb-6">

                    {modeForm === "edit"
                        ? "Ubah data stok barang yang dipilih."
                        : "Tambahkan data stok barang ke dalam sistem."}

                </p>

                <form
                className="bg-white rounded-xl shadow-lg p-6"
                    onSubmit={handleSubmit}
                >

                    <fieldset className="border border-gray-300 rounded-xl p-6">

                        <legend className="text-lg font-bold px-2 text-[#171718]">

                            {modeForm === "edit"
                                ? "Edit Data Barang"
                                : "Tambah Data Barang"}

                        </legend>

                        <div className="form-group flex flex-col mb-5">

                            <label className="font-semibold text-[#171718] mb-2">Nama Barang</label>

                            <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                                type="text"
                                name="namaBarang"
                                value={formData.namaBarang}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="form-group flex flex-col mb-5">

                                <label className="font-semibold text-[#171718] mb-2">Kategori</label>

                                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002366]"
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

                            <div className="form-group flex flex-col mb-5">

                                <label className="font-semibold text-[#171718] mb-2">Merk</label>

                                <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                                    type="text"
                                    name="merk"
                                    value={formData.merk}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="form-group flex flex-col mb-5">

                                <label className="font-semibold text-[#171718] mb-2">Jumlah Stok</label>

                                <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                                    type="number"
                                    name="stok"
                                    value={formData.stok}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="form-group flex flex-col mb-5">

                                <label className="font-semibold text-[#171718] mb-2">Harga</label>

                                <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                                    type="number"
                                    name="harga"
                                    value={formData.harga}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="form-group flex flex-col mb-5">

                                <label className="font-semibold text-[#171718] mb-2">Supplier</label>

                                <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                                    type="text"
                                    name="supplier"
                                    value={formData.supplier}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="form-group flex flex-col mb-5">

                                <label className="font-semibold text-[#171718] mb-2">Tanggal Masuk</label>

                                <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                                    type="date"
                                    name="tanggal"
                                    value={formData.tanggal}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <div className="flex gap-3 mt-5 flex-wrap">

                            <button
                                type="submit"
                                className="btn btn-primary px-5 py-2 rounded-lg transition duration-300"
                            >

                                {modeForm === "edit"
                                    ? "Update"
                                    : "Simpan"}

                            </button>

                            <button
                                type="button"
                                className="btn btn-outline px-5 py-2 rounded-lg transition duration-300"
                                onClick={handleReset}
                            >
                                Reset
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline px-5 py-2 rounded-lg transition duration-300"
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
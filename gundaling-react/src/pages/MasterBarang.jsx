function MasterBarang({

    dataBarang,

    setHalamanAktif,

    setBarangEdit,

    setBarangHapus,

    setModeForm

}) {


        return (

            <main>

                <section className="pt-10 pb-5 px-6">

                    <div className="max-w-[1200px] mx-auto px-6">

                        <h2 className="text-[1.5rem] font-bold text-[#171718] mb-2">
                            Produk
                        </h2>

                        <p className="text-black leading-[1.6] mb-4">
                            Hi pelanggan setia! Temukan berbagai produk berkualitas
                            dengan harga terbaik hanya di sini.
                        </p>

                        <div className="grid grid-cols-3 gap-4 mt-4">

                            <article className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-4 mb-3 transition-all duration-300">

                                <h3 className="text-[1.1rem] font-bold text-[#171718] mb-1">
    Galon
</h3>

                                <img
    src="/GALON.jpeg"
    alt="Galon"
    className="w-[180px] h-[290px] object-cover rounded-md my-[5px]"
/>

                                <div className="mt-auto text-left">
                                    <button
                                        className="btn btn-outline px-5 py-2 rounded-lg transition duration-300 hover:scale-105"
                                        onClick={() => setHalamanAktif("detailGalon")}
                                    >
                                        Selengkapnya
                                    </button>
                                </div>

                            </article>

                            <article className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-4 mb-3 transition duration-300">

                            <h3 className="text-[1.1rem] font-bold text-[#171718] mb-1">
    Saringan
</h3>

                            <img
    src="/SARINGAN.jpeg"
    alt="Saringan"
    className="w-[180px] h-[290px] object-cover rounded-md my-[5px]"
/>


                            <div className="card-button mt-auto text-left">

                                <button
                                    className="btn btn-outline px-5 py-2 rounded-lg transition duration-300 hover:scale-105"
                                    onClick={() => setHalamanAktif("detailSaringan")}
                                >
                                    Selengkapnya
                                </button>

                            </div>

                        </article>

                            <article className="bg-[#d2dbdb] border border-[#334155] rounded-lg p-4 mb-3 transition-all duration-300">

                                <h3 className="text-[1.1rem] font-bold text-[#171718] mb-1">
    Tangki Air
</h3>


    <img
        src="/TANGKIAIR.jpeg"
        alt="Tangki Air"
        className="w-[180px] h-[290px] object-cover rounded-md my-[5px]"
    />


                                <div className="card-button mt-auto text-left">

                                    <button
                                        className="btn btn-outline px-5 py-2 rounded-lg transition duration-300 hover:scale-105"
                                        onClick={() => setHalamanAktif("detailTangki")}
                                    >
                                        Selengkapnya
                                    </button>

                                </div>

                            </article>

                        </div>

                    </div>

                </section>

                <section className="py-5 px-6">

                    <div className="max-w-[1200px] mx-auto px-6">

                        <h2 className="text-[1.5rem] font-bold text-[#171718] mb-2">
                            Data Stok Barang
                        </h2>

                        <p className="text-black leading-[1.6] mb-4">

                            Data stok barang yang telah tersimpan.

                        </p>

                        <div className="flex justify-start my-5">

                            <button
                                className="btn btn-primary px-5 py-2 rounded-lg transition duration-300"
                                onClick={() => {
                                    setModeForm("tambah");
                                    setBarangEdit(null);
                                    setHalamanAktif("login");
                                }}
                            >
                                Tambah Barang
                            </button>

</div>

                        <table className="w-full border-collapse">

                            <thead>

                                <tr>

                                    <th className="px-[10px] py-[10px] text-center">
    No
</th>
                                    <th className="px-[10px] py-[10px] text-center">
    Nama Barang
</th>
                                    <th className="px-[10px] py-[10px] text-center">
    Kategori
</th>
                                    <th className="px-[10px] py-[10px] text-center">
    Merk
</th>
                                    <th className="px-[10px] py-[10px] text-center">
    Stok
</th>
                                    <th className="px-[10px] py-[10px] text-center">
    Harga
</th>
                                    <th className="px-[10px] py-[10px] text-center">
    Supplier
</th>
                                    <th className="px-[10px] py-[10px] text-center">
    Tanggal
</th>
                                    <th className="px-[10px] py-[10px] text-center">
    Aksi
</th>

                                </tr>

                            </thead>
                            <tbody>

                                {dataBarang.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="px-[10px] py-[10px] text-center">
    {index + 1}
</td>

                                        <td className="px-[10px] py-[10px] text-left">
    {item.namaBarang}
</td>
                                        <td className="px-[10px] py-[10px] text-left">
    {item.kategori}
</td>

                                        <td className="px-[10px] py-[10px] text-left">
    {item.merk}
</td>

                                        <td className="px-[10px] py-[10px] text-center">
    {item.stok}
</td>

                                        <td className="px-[10px] py-[10px] text-right">Rp {Number(item.harga).toLocaleString("id-ID")}</td>

                                        <td className="px-[10px] py-[10px] text-left">{item.supplier}</td>

                                        <td className="px-[10px] py-[10px] text-center">{item.tanggal}</td>
                                        <td className="px-[10px] py-[10px]">
    <div className="flex justify-center gap-2">

        <button
            className="btn btn-primary px-5 py-2 rounded-lg transition duration-300"
            onClick={() => {

                setBarangEdit(item);

                setModeForm("edit");

                setHalamanAktif("login");

            }}
        >
            Edit
        </button>

        <button
            className="btn btn-outline px-5 py-2 rounded-lg transition duration-300"
            onClick={() => {

                setBarangHapus(item);

                setModeForm("delete");

                setHalamanAktif("login");

            }}
        >
            Delete
        </button>

    </div>
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
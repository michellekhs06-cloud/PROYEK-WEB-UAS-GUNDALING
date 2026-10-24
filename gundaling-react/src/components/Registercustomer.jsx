import { useState } from "react";

function RegisterCustomer({

    dataCustomer,

    setDataCustomer,

    onRegisterBerhasil,

    setHalamanAktif

}) {

    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        noHP: "",
        password: "",
        konfirmasiPassword: ""
    });

    const [pesanError, setPesanError] = useState("");

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }

    function handleSubmit(event) {

        event.preventDefault();

        const { nama, email, noHP, password, konfirmasiPassword } = formData;

        if (nama === "" || email === "" || noHP === "" || password === "" || konfirmasiPassword === "") {

            setPesanError("Semua field wajib diisi.");

            return;

        }

        if (password !== konfirmasiPassword) {

            setPesanError("Konfirmasi Password tidak sama.");

            return;

        }

        const sudahAda = dataCustomer.some(

            (c) => c.email.toLowerCase() === email.toLowerCase()

        );

        if (sudahAda) {

            setPesanError("Email sudah terdaftar. Silakan login.");

            return;

        }

        const customerBaru = {
            id: Date.now(),
            nama,
            email,
            noHP,
            password,
            alamat: ""
        };

        setDataCustomer([...dataCustomer, customerBaru]);

        setPesanError("");

        onRegisterBerhasil(customerBaru);

    }

    return (

        <main className="pt-28 pb-10 px-6">

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl p-8">

                <h2 className="text-[1.5rem] font-bold text-[#171718] text-center mb-2">
                    Daftar Akun Customer
                </h2>

                <p className="text-center text-black leading-[1.6] mb-6">
                    Buat akun untuk mulai berbelanja.
                </p>

                <form onSubmit={handleSubmit}>

                    <label className="block font-semibold text-[#171718] mb-2">
                        Nama
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                        type="text"
                        name="nama"
                        placeholder="Masukkan Nama"
                        value={formData.nama}
                        onChange={handleChange}
                    />

                    <label className="block font-semibold text-[#171718] mb-2">
                        Email
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                        type="email"
                        name="email"
                        placeholder="Masukkan Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label className="block font-semibold text-[#171718] mb-2">
                        Nomor HP
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                        type="text"
                        name="noHP"
                        placeholder="Masukkan Nomor HP"
                        value={formData.noHP}
                        onChange={handleChange}
                    />

                    <label className="block font-semibold text-[#171718] mb-2">
                        Password
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                        type="password"
                        name="password"
                        placeholder="Masukkan Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <label className="block font-semibold text-[#171718] mb-2">
                        Konfirmasi Password
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                        type="password"
                        name="konfirmasiPassword"
                        placeholder="Ulangi Password"
                        value={formData.konfirmasiPassword}
                        onChange={handleChange}
                    />

                    {pesanError && (
                        <p className="text-red-600 text-center text-sm mb-3">
                            {pesanError}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary w-full py-3 font-semibold transition duration-300"
                    >
                        Daftar
                    </button>

                </form>

                <p className="text-center text-black mt-4">
                    Sudah punya akun?{" "}
                    <a
                        href="#"
                        className="text-[#002366] font-semibold underline"
                        onClick={(e) => {
                            e.preventDefault();
                            setHalamanAktif("loginCustomer");
                        }}
                    >
                        Login
                    </a>
                </p>

            </div>

        </main>

    );

}

export default RegisterCustomer;
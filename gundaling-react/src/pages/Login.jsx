import { useState } from "react";

function Login({

    modeForm,

    barangHapus,

    dataBarang,

    setDataBarang,

    setHalamanAktif,

    setBarangHapus,

    setModeForm

}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [pesanError, setPesanError] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        if (username === "" || password === "") {

            setPesanError("Username dan Password harus diisi.");

            return;

        }

if (username === "admin" && password === "12345") {

    sessionStorage.setItem("isAdmin", "true");

    alert("Login berhasil.");
    
    setUsername("");
    setPassword("");
    setPesanError("");

    if (modeForm === "delete") {

        const dataBaru = dataBarang.filter(

            (item) => item.id !== barangHapus.id

        );

        setDataBarang(dataBaru);

        setBarangHapus(null);

        setModeForm("tambah");

        setHalamanAktif("barang");

    }

    else {

        setHalamanAktif("formBarang");

    }

} else {

            setPesanError("Username atau Password salah.");

        }

    }

    return (

        <main className="pt-28 pb-10 px-6">

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl p-8">

                <h2 className="text-[1.5rem] font-bold text-[#171718] text-center mb-2">
    Login Admin
</h2>

                <p className="text-center text-black leading-[1.6] mb-6">
    Silakan login untuk mengakses fitur Tambah/Edit/Delete.
</p>

                <form onSubmit={handleSubmit}>

                    <label className="block font-semibold text-[#171718] mb-2">
    Username
</label>

                    <input
    className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#002366]"
    type="text"
                        placeholder="Masukkan Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label className="block font-semibold mb-2">
    Password
</label>

                    <input
    className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
    type="password"
                        placeholder="Masukkan Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className="text-red-600 text-center text-sm mb-3">

                        {pesanError}

                    </p>

                    <button
                        type="submit"
                        className="
btn
btn-primary
w-full
py-3
font-semibold
transition
duration-300
">

                        Login

                    </button>

                </form>

            </div>

        </main>

    );

}

export default Login;
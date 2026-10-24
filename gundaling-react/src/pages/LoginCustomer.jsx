import { useState } from "react";

function LoginCustomer({

    dataCustomer,

    onLoginBerhasil,

    setHalamanAktif

}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pesanError, setPesanError] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        if (email === "" || password === "") {

            setPesanError("Email dan Password harus diisi.");

            return;

        }

        const customer = dataCustomer.find(

            (c) => c.email.toLowerCase() === email.toLowerCase() && c.password === password

        );

        if (customer) {

            setPesanError("");
            setEmail("");
            setPassword("");

            onLoginBerhasil(customer);

        } else {

            setPesanError("Email atau Password salah.");

        }

    }

    return (

        <main className="pt-28 pb-10 px-6">

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl p-8">

                <h2 className="text-[1.5rem] font-bold text-[#171718] text-center mb-2">
                    Login Customer
                </h2>

                <p className="text-center text-black leading-[1.6] mb-6">
                    Silakan login untuk melanjutkan pemesanan Anda.
                </p>

                <form onSubmit={handleSubmit}>

                    <label className="block font-semibold text-[#171718] mb-2">
                        Email
                    </label>

                    <input
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                        type="email"
                        placeholder="Masukkan Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="block font-semibold text-[#171718] mb-2">
                        Password
                    </label>

                    <input
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#002366]"
                        type="password"
                        placeholder="Masukkan Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        Login
                    </button>

                </form>

                <p className="text-center text-black mt-4">
                    Belum punya akun?{" "}
                    <a
                        href="#"
                        className="text-[#002366] font-semibold underline"
                        onClick={(e) => {
                            e.preventDefault();
                            setHalamanAktif("registerCustomer");
                        }}
                    >
                        Daftar
                    </a>
                </p>

            </div>

        </main>

    );

}

export default LoginCustomer;
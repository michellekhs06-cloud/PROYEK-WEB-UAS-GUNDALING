import { useState } from "react";

function Login({ onLogin }) {

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

            if (onLogin) {

                onLogin();

            }

        } else {

            setPesanError("Username atau Password salah.");

        }

    }

    return (

        <main>

            <div className="login-container">

                <h2>Login Admin</h2>

                <p>Silakan login untuk mengakses fitur Tambah, Edit, dan Delete.</p>

                <form onSubmit={handleSubmit}>

                    <label>Username</label>

                    <input
                        type="text"
                        placeholder="Masukkan Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Masukkan Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className="error-text">

                        {pesanError}

                    </p>

                    <button
                        type="submit"
                        className="btn btn-primary">

                        Login

                    </button>

                </form>

            </div>

        </main>

    );

}

export default Login;
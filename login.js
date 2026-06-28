// ======================================
// Inisialisasi Login
// ======================================
function initLogin() {

    var form = document.getElementById("formLogin");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var pesanError = document.getElementById("pesanError");

        pesanError.innerHTML = "";

        if (username == "" || password == "") {

            pesanError.innerHTML = "Username dan Password harus diisi.";

            return;

        }

if (username == "admin" && password == "12345") {
    sessionStorage.setItem("isAdmin", "true");
    alert("Login berhasil.");
    const urlParams = new URLSearchParams(window.location.search);
    const aksi = urlParams.get("aksi");

    if (aksi == "tambah") {

    window.location.href = "form_barang.html";

    }
    else if (aksi == "edit") {

        window.location.href = "form_barang.html";

    }
    else if (aksi == "delete") {

        window.location.href = "master_barang.html";

    }
    else {

        window.location.href = "master_barang.html";

    }

} else {
    pesanError.innerHTML = "Username atau Password salah.";
}

    });

}

// ======================================
// Saat Halaman Dibuka
// ======================================
document.addEventListener("DOMContentLoaded", function () {

    initLogin();

});
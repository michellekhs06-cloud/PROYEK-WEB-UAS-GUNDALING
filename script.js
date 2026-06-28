// ======================================
// Mengambil Data Barang
// ======================================
var editMode = false;
var editId = null;
function getBarang() {

    var data = localStorage.getItem("data_barang");

    if (data == null) {
        return [];
    }

    return JSON.parse(data);

}

// ======================================
// Menyimpan Data Barang
// ======================================
function saveBarang(data) {

    localStorage.setItem("data_barang", JSON.stringify(data));

}

// ======================================
// Inisialisasi Form Barang
// ======================================
function initBarang() {

    var form = document.getElementById("formBarang");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        var namaBarang = document.getElementById("namaBarang").value;
        var kategori = document.getElementById("kategori").value;
        var merk = document.getElementById("merk").value;
        var stok = document.getElementById("stok").value;
        var harga = document.getElementById("harga").value;
        var supplier = document.getElementById("supplier").value;
        var tanggal = document.getElementById("tanggal").value;

        var formError = document.getElementById("formError");

        formError.innerHTML = "";

        if (
            namaBarang == "" ||
            kategori == "" ||
            merk == "" ||
            stok == "" ||
            harga == "" ||
            supplier == "" ||
            tanggal == ""
        ) {

            formError.innerHTML = "Semua data harus diisi.";

            return;

        }

        var daftarBarang = getBarang();

if (editMode == false) {

    var barang = {

        id: daftarBarang.length + 1,

        nama: namaBarang,

        kategori: kategori,

        merk: merk,

        stok: stok,

        harga: harga,

        supplier: supplier,

        tanggal: tanggal

    };

    daftarBarang.push(barang);

} else {

    for (var i = 0; i < daftarBarang.length; i++) {

        if (daftarBarang[i].id == editId) {

            daftarBarang[i].nama = namaBarang;
            daftarBarang[i].kategori = kategori;
            daftarBarang[i].merk = merk;
            daftarBarang[i].stok = stok;
            daftarBarang[i].harga = harga;
            daftarBarang[i].supplier = supplier;
            daftarBarang[i].tanggal = tanggal;

            break;

        }

    }

    editMode = false;
    editId = null;

    sessionStorage.removeItem("editBarang");
    sessionStorage.removeItem("isAdmin");

}

saveBarang(daftarBarang);

renderBarang();

alert("Data berhasil disimpan.");

sessionStorage.removeItem("isAdmin");

window.location.href = "master_barang.html";

    });

}

// ======================================
// Menampilkan Data Barang
// ======================================
function renderBarang() {

    var tableBody = document.getElementById("tableBody");

    if (!tableBody) {
        return;
    }

    var daftarBarang = getBarang();

    tableBody.innerHTML = "";

    for (var i = 0; i < daftarBarang.length; i++) {

        var barang = daftarBarang[i];

        tableBody.innerHTML +=
        "<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + barang.nama + "</td>" +
            "<td>" + barang.kategori + "</td>" +
            "<td>" + barang.merk + "</td>" +
            "<td>" + barang.stok + "</td>" +
            "<td>Rp " + barang.harga + "</td>" +
            "<td>" + barang.supplier + "</td>" +
            "<td>" + barang.tanggal + "</td>" +
            "<td>" +
                "<button class='btn-edit' onclick='editBarang(" + barang.id + ")'>Edit</button> " +
                "<button class='btn-delete' onclick='hapusBarang(" + barang.id + ")'>Delete</button>" +
            "</td>" +
        "</tr>";

    }

}

// ======================================
// Edit Barang
// ======================================
function editBarang(id) {

    sessionStorage.setItem("editBarang", id);

    if (sessionStorage.getItem("isAdmin") == "true") {
        window.location.href = "form_barang.html";
    } else {
        window.location.href = "login.html?aksi=edit";
    }
}

// ======================================
// Hapus Barang
// ======================================
function hapusBarang(id) {

    sessionStorage.setItem("hapusBarang", id);

    if (sessionStorage.getItem("isAdmin") == "true") {

        prosesHapus();

    } else {

        window.location.href = "login.html?aksi=delete";

    }

}

function prosesHapus() {

    var id = parseInt(sessionStorage.getItem("hapusBarang"));

    var daftarBarang = getBarang();

    for (var i = 0; i < daftarBarang.length; i++) {

        if (daftarBarang[i].id == id) {

            daftarBarang.splice(i, 1);

            break;

        }

    }

    saveBarang(daftarBarang);

    renderBarang();

    sessionStorage.removeItem("hapusBarang");
    sessionStorage.removeItem("isAdmin");

    alert("Data berhasil dihapus.");

}

// ======================================
// Mengecek Mode Edit
// ======================================
function cekModeEdit() {

    var id = sessionStorage.getItem("editBarang");

    if (id == null) {
        return;
    }

    editMode = true;
    editId = parseInt(id);

}

// ======================================
// Mengecek Delete Setelah Login
// ======================================
function cekModeDelete() {

    var id = sessionStorage.getItem("hapusBarang");

    if (id == null) {
        return;
    }

    if (confirm("Yakin ingin menghapus data ini?")) {

        prosesHapus();

    }

}

// ======================================
// Mengisi Form Saat Edit
// ======================================
function isiFormEdit() {

    if (editMode == false) {
        return;
    }

    var daftarBarang = getBarang();

    for (var i = 0; i < daftarBarang.length; i++) {

        if (daftarBarang[i].id == editId) {

            document.getElementById("namaBarang").value = daftarBarang[i].nama;
            document.getElementById("kategori").value = daftarBarang[i].kategori;
            document.getElementById("merk").value = daftarBarang[i].merk;
            document.getElementById("stok").value = daftarBarang[i].stok;
            document.getElementById("harga").value = daftarBarang[i].harga;
            document.getElementById("supplier").value = daftarBarang[i].supplier;
            document.getElementById("tanggal").value = daftarBarang[i].tanggal;

            break;

        }

    }

}

// ======================================
// Cek Login Admin
// ======================================
function cekLoginAdmin() {

    var form = document.getElementById("formBarang");

    if (!form) {
        return;
    }

    if (sessionStorage.getItem("isAdmin") != "true") {

        alert("Silakan login terlebih dahulu.");

        window.location.href = "login.html";

    }

}

// ======================================
// Mengubah Tampilan Saat Edit
// ======================================
function ubahTampilanEdit() {

    if (editMode == false) {
        return;
    }

    document.getElementById("judulForm").innerHTML = "Edit Data Barang";

    document.getElementById("legendForm").innerHTML = "Edit Data Barang";

    document.getElementById("btnSimpan").innerHTML = "Update";

}

// ======================================
// Saat Halaman Dibuka
// ======================================
document.addEventListener("DOMContentLoaded", function () {

    cekLoginAdmin();

    cekModeEdit();

    initBarang();

    renderBarang();

    isiFormEdit();

    ubahTampilanEdit();

    cekModeDelete();

});

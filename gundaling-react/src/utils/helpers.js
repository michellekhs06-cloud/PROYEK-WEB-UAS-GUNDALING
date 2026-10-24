export function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(angka);
}

export function gambarUntukKategori(kategori) {

    if (kategori === "Galon") {
        return "/GALON.jpeg";
    }

    if (kategori === "Saringan") {
        return "/SARINGAN.jpeg";
    }

    if (kategori === "Tangki Air") {
        return "/TANGKIAIR.jpeg";
    }

    return "";
}

export function formatTanggal(tanggal) {

    if (!tanggal) {
        return "-";
    }

    return new Date(tanggal).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}

export function buatNomorPesanan(dataPesanan = []) {

    const nomorUrut = dataPesanan.length + 1;

    return `ORD-${String(nomorUrut).padStart(4, "0")}`;
}
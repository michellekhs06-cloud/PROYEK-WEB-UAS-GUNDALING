// Kumpulan fungsi bantu yang dipakai fitur Customer (Pemesanan, Checkout, Riwayat, Review)

export function formatRupiah(angka) {
    const nilai = Number(angka) || 0;
    return "Rp" + nilai.toLocaleString("id-ID");
}

// Memetakan kategori barang ke gambar yang sudah ada di /public
export function gambarUntukKategori(kategori) {
    if (kategori === "Galon") return "/GALON.jpeg";
    if (kategori === "Saringan") return "/SARINGAN.jpeg";
    if (kategori === "Tangki Air") return "/TANGKIAIR.jpeg";
    return "/GALON.jpeg";
}

// Membuat nomor pesanan otomatis, contoh: ORD-20260926-001
export function buatNomorPesanan(dataPesananSaatIni) {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const tanggalStr = `${yyyy}${mm}${dd}`;

    const jumlahHariIni = dataPesananSaatIni.filter((p) =>
        p.nomorPesanan && p.nomorPesanan.includes(tanggalStr)
    ).length;

    const urut = String(jumlahHariIni + 1).padStart(3, "0");

    return `ORD-${tanggalStr}-${urut}`;
}

export function formatTanggal(isoString) {
    if (!isoString) return "-";
    const d = new Date(isoString);
    return d.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}
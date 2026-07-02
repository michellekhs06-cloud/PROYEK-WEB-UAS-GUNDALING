import { useState } from "react";
 
function MasterBarang() {
  const [dataBarang] = useState([
    { id: 1, nama: "Galon", stok: 20 },
    { id: 2, nama: "Saringan Air", stok: 15 },
    { id: 3, nama: "Tangki Air", stok: 8 },
  ]);
 
  return (
<section className="master-barang">
<div className="container">
<h2>Master Barang</h2>
 
        <table className="tabel-barang">
<thead>
<tr>
<th>No</th>
<th>Nama Barang</th>
<th>Stok</th>
</tr>
</thead>
 
          <tbody>
            {dataBarang.map((item, index) => (
<tr key={item.id}>
<td>{index + 1}</td>
<td>{item.nama}</td>
<td>{item.stok}</td>
</tr>
            ))}
</tbody>
</table>
</div>
</section>
  );
}
 
export default MasterBarang;
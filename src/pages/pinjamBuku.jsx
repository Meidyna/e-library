import React, { useState } from "react";
import "../styles/pinjamBuku.css";

export default function PinjamBuku() {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [tanggalPinjam, setTanggalPinjam] = useState("");
  const [tanggalTempo, setTanggalTempo] = useState("");
  const [catatan, setCatatan] = useState("");

  const daftarBuku = [
    "Matahari - Tere Liye",
    "Bumi - Tere Liye",
    "Hujan - Tere Liye",
    "Laskar Pelangi - Andrea Hirata",
    "Negeri 5 Menara - A. Fuadi",
    "Dilan 1990 - Pidi Baiq",
    "Ayat-Ayat Cinta - Habiburrahman El Shirazy",
  ];

  const filteredBooks = daftarBuku.filter((b) =>
    b.toLowerCase().includes(judul.toLowerCase())
  );

  // otomatis hitung tanggal jatuh tempo
  const handleTanggalPinjam = (e) => {
    const selectedDate = e.target.value;
    setTanggalPinjam(selectedDate);

    if (selectedDate) {
      const tanggal = new Date(selectedDate);
      tanggal.setDate(tanggal.getDate() + 10);
      const formatted = tanggal.toISOString().split("T")[0];
      setTanggalTempo(formatted);
    } else {
      setTanggalTempo("");
    }
  };

  // ✅ gunakan validasi bawaan browser
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity(); // munculkan pesan "Please fill out this field"
      return;
    }

    // kalau semua valid
    alert("✅ Data peminjaman berhasil disimpan!");

    // 🧹 reset semua input setelah simpan
    setNama("");
    setJudul("");
    setTanggalPinjam("");
    setTanggalTempo("");
    setCatatan("");

    // reset validasi form HTML
    form.reset();
  };

  return (
    <div className="pinjam-container">
      <h1>Peminjaman Buku</h1>

      {/* ✅ ubah jadi <form> agar validasi HTML bisa jalan */}
      <form className="pinjam-form" onSubmit={handleSubmit} noValidate={false}>
        <div className="form-group">
          <label>
            Nama Lengkap <span className="required">*</span>
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama di sini"
            required
          />
        </div>

        <div className="form-group">
          <label>
            Judul Buku dan Penulis <span className="required">*</span>
          </label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Ketik atau pilih judul buku"
            list="buku-list"
            required
          />
          <datalist id="buku-list">
            {filteredBooks.map((buku, index) => (
              <option key={index} value={buku} />
            ))}
          </datalist>
        </div>

        <div className="form-group">
          <label>
            Tanggal Pinjam <span className="required">*</span>
          </label>
          <input
            type="date"
            value={tanggalPinjam}
            onChange={handleTanggalPinjam}
            required
          />
        </div>

        <div className="form-group">
          <label>Tanggal Jatuh Tempo</label>
          <input type="date" value={tanggalTempo} readOnly />
        </div>

        <div className="form-group">
          <label>Catatan (opsional)</label>
          <textarea
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            placeholder="Tambahkan catatan di sini..."
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Simpan
        </button>
      </form>
    </div>
  );
}

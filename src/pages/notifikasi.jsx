import React from "react";
import "../styles/notifikasi.css";

function Notifikasi() {
  return (
    <div className="notifikasi-container">
      <h2 className="notifikasi-title">Notifikasi</h2>

      <div className="notifikasi-box success">
        <div className="icon">✔</div>
        <div className="text">
          <h4>Berhasil</h4>
          <p>Peminjaman buku berhasil dibuat</p>
        </div>
      </div>

      <div className="notifikasi-box reminder">
        <div className="icon">!</div>
        <div className="text">
          <h4>Pengingat</h4>
          <p>
            Buku yang dipinjam pada tanggal 24/06/2025 akan segera jatuh tempo
          </p>
        </div>
      </div>

      <div className="notifikasi-box warning">
        <div className="icon">✖</div>
        <div className="text">
          <h4>Peringatan</h4>
          <p>Buku yang dipinjam pada tanggal 26/03/2025 sudah jatuh tempo</p>
        </div>
      </div>
    </div>
  );
}

export default Notifikasi;

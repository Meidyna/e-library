import React, { useEffect, useState } from "react";
import "../styles/peminjamanAktif.css";

export default function PeminjamanAktif() {
  const [user, setUser] = useState(null);
  const [peminjaman, setPeminjaman] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const peminjamanData =
      JSON.parse(localStorage.getItem("peminjamanAktif")) || [];

    setUser(userData);
    setPeminjaman(peminjamanData);
  }, []);

  return (
    <div className="peminjaman-container">
      <h2 className="judul-halaman">Peminjaman Aktif</h2>

      <div className="info-section">
        {user && <h3>Halo {user.username}!</h3>}
        {peminjaman.length > 0 ? (
          <p>Kamu sedang meminjam {peminjaman.length} buku.</p>
        ) : (
          <p>Belum ada buku yang dipinjam.</p>
        )}
      </div>

      <div className="daftar-buku">
        {peminjaman.map((buku, index) => (
          <div className="buku-card" key={index}>
            <img src={buku.cover} alt={buku.judul} className="buku-cover" />
            <p className="buku-judul">{buku.judul}</p>
            <div className="buku-status">
              <span
                className={`status-dot ${
                  buku.status === "Masih Aktif"
                    ? "hijau"
                    : buku.status === "Terlambat"
                    ? "merah"
                    : "oranye"
                }`}
              ></span>
              <span>{buku.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

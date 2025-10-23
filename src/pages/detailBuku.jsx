import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/detailBuku.css";

const gambarBuku = new URL("../asset/hujancover.png", import.meta.url).href;

const DetailBuku = () => {
  const navigate = useNavigate();

  const handlePinjamClick = () => {
    navigate("/pinjamBuku");
  };

  return (
    <div className="detailbuku-container">
      <div className="detailbuku-header">
        <p className="back-text"></p>
        <h2>Detail Buku</h2>
      </div>

      <div className="detailbuku-content">
        <img src={gambarBuku} alt="Hujan" className="cover-buku" />
        <h3 className="judul-buku">Hujan</h3>
        <p className="penulis">Tere Liye</p>

        <div className="detail-card">
          <p>
            <strong>Judul Buku dan Penulis</strong>
            <br />
            Hujan – Tere Liye
          </p>
          <p>
            <strong>Penerbit</strong>
            <br />
            Gramedia Pustaka Utama
          </p>
          <p>
            <strong>Kategori</strong>
            <br />
            Fiksi / Novel
          </p>
          <p>
            <strong>Tahun Terbit</strong>
            <br />
            2016
          </p>
          <p>
            <strong>Jumlah Halaman</strong>
            <br />
            320 Halaman
          </p>
          <p>
            <strong>ISBN</strong>
            <br />
            978-602-03-2478-2
          </p>
          <p>
            <strong>Sinopsis</strong>
            <br />
            Novel Hujan menceritakan kisah Lail dan Esok yang kehilangan orang
            tua akibat letusan gunung berapi dahsyat. Dalam perjalanan hidup
            yang penuh perjuangan, keduanya tumbuh bersama dan menghadapi
            pilihan sulit antara cinta, pengorbanan, dan pengharapan. Cerita ini
            mengajarkan arti kehilangan, waktu, dan kekuatan hati manusia.
          </p>
          <p>
            <strong>Stok Buku</strong>
            <br />
            <span className="stok tersedia">Tersedia: 2</span>
            <br />
            <span className="stok dipinjam">Dipinjam: 3</span>
          </p>
        </div>

        <button className="btn-pinjam" onClick={handlePinjamClick}>
          Pinjam Buku
        </button>
      </div>
    </div>
  );
};

export default DetailBuku;

import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import "../styles/profil.css";
import { Link } from "react-router-dom";

const defaultAvatar = new URL("../asset/profil.png", import.meta.url).href;

export default function Profil() {
  const [nama, setNama] = useState("Fahtymah");
  const [email, setEmail] = useState("fahtymah@gmail.com");
  const [fotoProfil, setFotoProfil] = useState(defaultAvatar);

  const [editNama, setEditNama] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [notif, setNotif] = useState({ show: false, message: "", type: "" });

  const handleUploadFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoProfil(reader.result);
        setIsChanged(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditNama = () => setEditNama(true);
  const handleEditEmail = () => setEditEmail(true);

  const handleChangeNama = (e) => {
    setNama(e.target.value);
    setIsChanged(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setIsChanged(true);
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSimpan = () => {
    if (!nama.trim() || !email.trim()) {
      setNotif({
        show: true,
        message: "Nama dan email tidak boleh kosong!",
        type: "error",
      });
      setTimeout(() => setNotif({ show: false }), 3000);
      return;
    }

    if (!validateEmail(email)) {
      setNotif({
        show: true,
        message: "Format email tidak valid!",
        type: "error",
      });
      setTimeout(() => setNotif({ show: false }), 3000);
      return;
    }

    setEditNama(false);
    setEditEmail(false);
    setIsChanged(false);
    setNotif({
      show: true,
      message: "✅ Perubahan berhasil disimpan!",
      type: "success",
    });
    setTimeout(() => setNotif({ show: false }), 3000);
  };

  return (
    <div className="profil-container">
      <div className="profil-card">
        <h2>Profil Saya</h2>

        <div className="profil-foto-container">
          <img src={fotoProfil} alt="Foto Profil" className="profil-foto" />
          <label htmlFor="upload-foto" className="edit-foto-icon">
            <FaPen />
          </label>
          <input
            id="upload-foto"
            type="file"
            accept="image/*"
            onChange={handleUploadFoto}
            style={{ display: "none" }}
          />
        </div>

        <p className="profil-info">
          Informasi mengenai profil anda ada disini !
        </p>

        <div className="profil-form">
          <label>Nama Lengkap</label>
          <div className="input-with-icon">
            <input
              type="text"
              value={nama}
              disabled={!editNama}
              onChange={handleChangeNama}
              placeholder="Masukkan nama lengkap"
            />
            <FaPen className="edit-icon" onClick={handleEditNama} />
          </div>

          <label>Email</label>
          <div className="input-with-icon">
            <input
              type="email"
              value={email}
              disabled={!editEmail}
              onChange={handleChangeEmail}
              placeholder="Masukkan email anda"
            />
            <FaPen className="edit-icon" onClick={handleEditEmail} />
          </div>

          <Link to="/ubahPassword">
            <button className="ubah-password-btn">Ubah Password</button>
          </Link>

          {isChanged && (
            <button className="simpan-btn" onClick={handleSimpan}>
              Simpan Perubahan
            </button>
          )}
        </div>

        {notif.show && (
          <div className={`notif-popup ${notif.type}`}>{notif.message}</div>
        )}
      </div>
    </div>
  );
}

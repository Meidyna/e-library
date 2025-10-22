import React from "react";
import "../styles/logoutPopup.css";
import { useNavigate } from "react-router-dom";

// 🔥 samakan cara import gambar seperti di Login.jsx
const gambarlogout = new URL("../asset/keluar.png", import.meta.url).href;

export default function LogoutPopup({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>Keluar dari akun ini?</h2>

        {/* ✅ tampil dengan cara sama seperti Login.jsx */}
        <img src={gambarlogout} alt="Confirm Logout" className="popup-image" />

        <div className="popup-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Batal
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}

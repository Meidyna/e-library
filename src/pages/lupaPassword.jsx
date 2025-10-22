import React, { useState } from "react";
import "../styles/ubahPassword.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ⬅️ tambahkan ini

const UbahPassword = () => {
  const [showPassword, setShowPassword] = useState({
    lama: false,
    baru: false,
    verifikasi: false,
  });

  const navigate = useNavigate(); // ⬅️ tambahkan ini

  const togglePassword = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password berhasil disimpan!");
    navigate("/login"); // ⬅️ arahkan ke halaman login setelah submit
  };

  return (
    <div className="ubahpassword-container">
      <div className="ubahpassword-box">
        <h2 className="ubahpassword-title">Ubah Password</h2>
        <p className="ubahpassword-subtitle">Ubah Password Anda Disini</p>

        <form onSubmit={handleSubmit}>
          {/* Password Baru */}
          <div className="form-group">
            <label>Password Baru</label>
            <div className="input-wrapper">
              <input
                type={showPassword.baru ? "text" : "password"}
                placeholder=""
                required
              />
              <span onClick={() => togglePassword("baru")}></span>
            </div>
          </div>

          {/* Verifikasi Password */}
          <div className="form-group">
            <label>Verifikasi Password Baru</label>
            <div className="input-wrapper">
              <input
                type={showPassword.verifikasi ? "text" : "password"}
                placeholder=""
                required
              />
              <span onClick={() => togglePassword("verifikasi")}></span>
            </div>
          </div>

          <button type="submit" className="simpan-btn">
            Simpan Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UbahPassword;

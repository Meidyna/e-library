import React, { useState } from "react";
import "../styles/ubahPassword.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UbahPassword = () => {
  const [showPassword, setShowPassword] = useState({
    lama: false,
    baru: false,
    verifikasi: false,
  });

  const togglePassword = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password berhasil disimpan!");
  };

  return (
    <div className="ubahpassword-container">
      <div className="ubahpassword-box">
        <h2 className="ubahpassword-title">Ubah Password</h2>
        <p className="ubahpassword-subtitle">Ubah Password Anda Disini</p>

        <form onSubmit={handleSubmit}>
          {/* Password Lama */}
          <div className="form-group">
            <label>Password Lama</label>
            <div className="input-wrapper">
              <input
                type={showPassword.lama ? "text" : "password"}
                placeholder=""
                required
              />
              <span onClick={() => togglePassword("lama")}></span>
            </div>
          </div>

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

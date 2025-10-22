import React, { useState } from "react";
import "../styles/register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// ✅ Gunakan new URL agar path gambar selalu benar di semua bundler
const logo = new URL("../asset/logo.png", import.meta.url).href;
const gambarregister = new URL("../asset/gambarregister.png", import.meta.url)
  .href;
const gambarorange = new URL("../asset/gambarorange.png", import.meta.url).href;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ Tambahkan untuk navigasi antar halaman

  // ✅ Fungsi ketika tombol Sign Up diklik
  const handleSubmit = (e) => {
    e.preventDefault(); // supaya halaman tidak reload
    // 👉 Di sini kamu bisa tambahkan logika validasi atau API call nanti
    navigate("/home"); // setelah sukses, langsung pindah ke halaman Home
  };

  return (
    <div className="register-container">
      {/* === Kiri: Box putih === */}
      <div className="register-left">
        <div className="signup-box">
          <h3 className="register-title">
            Please Fill this form to create an Account
          </h3>

          {/* ✅ Panggil handleSubmit di form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Full Name <span>*</span>
              </label>
              <input type="text" placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label>
                Email Address <span>*</span>
              </label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>
                Username <span>*</span>
              </label>
              <input type="text" placeholder="Enter your username" required />
            </div>

            <div className="form-group password-group">
              <label>
                Password <span>*</span>
              </label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                ></span>
              </div>
            </div>

            {/* ✅ Tombol Sign Up */}
            <button type="submit" className="signup-btn">
              Sign Up
            </button>

            <p className="login-link">
              Already have an account? <Link to="/login">LOGIN</Link>
            </p>
          </form>
        </div>
      </div>

      {/* === Kanan: Gambar dan teks === */}
      <div className="register-right">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="register-text">
          Explore the World <br />
          <span className="highlight">with BOOKS</span>
        </h2>
        <img
          src={gambarregister}
          alt="Register Illustration"
          className="gambarregister"
        />
        <img src={gambarorange} alt="Orange Shape" className="gambarorange" />
      </div>
    </div>
  );
};

export default Register;

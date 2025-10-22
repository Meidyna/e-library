import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const gambarlogin = new URL("../asset/gambarlogin.png", import.meta.url).href;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ gunakan useNavigate dari react-router

  const handleLogin = (e) => {
    e.preventDefault();

    // di sini nanti kamu bisa tambahkan validasi login, misal cek email & password
    // sementara kita langsung arahkan ke halaman Home
    navigate("/home"); // ✅ pindah ke route /home setelah klik tombol login
  };

  return (
    <div className="login-container">
      {/* === Bagian kiri === */}
      <div className="login-left">
        <div className="welcome-section">
          <img
            src={new URL("../asset/logo.png", import.meta.url).href}
            alt="logo aplikasi"
            className="login-logo"
          />
          <div className="welcome-text-inline">
            <span className="welcome">Welcome</span>
            <span className="back">Back!</span>
          </div>
        </div>

        <img src={gambarlogin} alt="gambarlogin" className="gambarlogin" />
      </div>

      {/* === Bagian kanan === */}
      <div className="login-right">
        <div className="login-box">
          <h2>Hello! Welcome back.</h2>
          <p>Login with the data you entered during Registration.</p>

          <form onSubmit={handleLogin}>
            <label>
              Email Address<span className="required">*</span>
            </label>
            <input type="email" placeholder="fatima001@gmail.com" required />

            <label>
              Password<span className="required">*</span>
            </label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=""
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            {/* ✅ tombol login yang akan pindah ke Home */}
            <button type="submit" className="login-button">
              Login Now
            </button>
          </form>

          <p className="register-text">
            Don’t have an Account? <Link to="/register">register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profil";
import DetailBuku from "../pages/detailBuku";
import LogoutPopup from "../pages/logoutPopup";
import Notifikasi from "../pages/notifikasi";
import PeminjamanAktif from "../pages/peminjamanAktif";
import PinjamBuku from "../pages/pinjamBuku";
import TotalBuku from "../pages/totalBuku";
import UbahPassword from "../pages/ubahPassword";
import LupaPassword from "../pages/lupaPassword";
import Sidebar from "../components/sidebar"; // pastikan path sudah benar

// Komponen pembungkus agar Sidebar bisa beradaptasi dengan route
function AppRoutes() {
  const location = useLocation();

  // Daftar halaman yang TIDAK menampilkan sidebar
  const hideSidebar = ["/", "/login", "/register", "/lupaPassword"].includes(
    location.pathname
  );

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar hanya tampil jika bukan halaman login/register */}
      {!hideSidebar && <Sidebar />}

      {/* Konten utama */}
      <div
        style={{
          flex: 1,
          marginLeft: hideSidebar ? "0" : "230px", // beri jarak agar konten tidak tertutup sidebar
          padding: "20px",
          transition: "margin 0.3s ease",
        }}
      >
        <Routes>
          {/* Halaman tanpa sidebar */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lupaPassword" element={<LupaPassword />} />

          {/* Halaman dengan sidebar */}
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/detail-buku/:id" element={<DetailBuku />} />
          <Route path="/notification" element={<Notifikasi />} />
          <Route path="/peminjaman" element={<PeminjamanAktif />} />
          <Route path="/pinjamBuku" element={<PinjamBuku />} />
          <Route path="/totalBuku" element={<TotalBuku />} />
          <Route path="/ubahPassword" element={<UbahPassword />} />
        </Routes>
      </div>
    </div>
  );
}

// Komponen utama router aplikasi
export default function AppRouter() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

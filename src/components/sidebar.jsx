import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import LogoutPopup from "../pages/logoutPopup"; // ⬅️ import popup
import {
  FaThLarge,
  FaBook,
  FaClipboardList,
  FaCalendarAlt,
  FaCog,
  FaUser,
  FaBell,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaHome,
} from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openSettings, setOpenSettings] = useState(false);
  const [showLogout, setShowLogout] = useState(false); // ⬅️ state untuk popup

  const menuItems = [
    { path: "/home", label: "Beranda", icon: <FaHome /> },
    { path: "/totalBuku", label: "Total Buku", icon: <FaBook /> },
    { path: "/pinjamBuku", label: "Pinjam Buku", icon: <FaBookOpenReader /> },
    {
      path: "/peminjaman",
      label: "Peminjaman Aktif",
      icon: <FaClipboardList />,
    },
  ];

  const settingsItems = [
    { path: "/profil", label: "Profil", icon: <FaUser /> },
    { path: "/notification", label: "Notifikasi", icon: <FaBell /> },
  ];

  return (
    <>
      <div className="sidebar">
        <h2 className="sidebar-title">E-Library</h2>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={currentPath === item.path ? "active" : ""}
            >
              <Link to={item.path}>
                <span className="icon">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}

          <li
            className="dropdown"
            onClick={() => setOpenSettings(!openSettings)}
          >
            <span className="icon">
              <FaCog />
            </span>
            <span>Pengaturan</span>
            {openSettings ? (
              <FaChevronUp className="arrow-icon" />
            ) : (
              <FaChevronDown className="arrow-icon" />
            )}
          </li>

          {openSettings && (
            <ul className="submenu">
              {settingsItems.map((item) => (
                <li
                  key={item.path}
                  className={currentPath === item.path ? "active" : ""}
                >
                  <Link to={item.path}>
                    <span className="icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Tombol keluar */}
          <li onClick={() => setShowLogout(true)} style={{ cursor: "pointer" }}>
            <span className="icon">
              <FaSignOutAlt />
            </span>
            <span>Keluar</span>
          </li>
        </ul>
      </div>

      {/* Popup Logout */}
      <LogoutPopup isOpen={showLogout} onClose={() => setShowLogout(false)} />
    </>
  );
};

export default Sidebar;

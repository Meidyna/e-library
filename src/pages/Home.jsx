import React, { useEffect, useState } from "react";
import "../styles/home.css";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("asc");
  const [error, setError] = useState("");

  const API_BASE = "https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book";

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchBooks();
    }, 500);
    return () => clearTimeout(delay);
  }, [keyword, genre, year, sort, page]);

  const fetchBooks = async () => {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        sort,
        page,
        year,
        genre,
        keyword,
      });

      const response = await fetch(`${API_BASE}?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`Gagal memuat data (status: ${response.status})`);
      }

      const data = await response.json();
      const bookList =
        data.books || data.data || data.results || data.items || [];

      setBooks(bookList);
    } catch (error) {
      console.error("Gagal memuat data buku:", error);
      setError("Terjadi kesalahan saat memuat data buku.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchBooks();
  };

  return (
    <div className="home-container">
      {/* 🔍 Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search your book"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>
          <i className="fa fa-search"></i>
        </button>
      </div>

      {/* 🧩 Filter */}
      <div className="filter-container">
        <div className="filter-group">
          <label>Genre</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">Pilih Genre Buku</option>
            <option value="Romance">Romance</option>
            <option value="Fiksi">Fiksi</option>
            <option value="Edukasi">Edukasi</option>
            <option value="Motivasi">Motivasi</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Tahun Terbit</label>
          <input
            type="number"
            placeholder="Contoh: 2022"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
      </div>

      {/* 📚 Daftar Buku */}
      <div className="books-container">
        {loading ? (
          <p className="loading">Memuat data buku...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : books.length === 0 ? (
          <p className="no-data">Tidak ada buku ditemukan</p>
        ) : (
          books.map((book, index) => {
            const title =
              typeof book.title === "object"
                ? book.title?.name || "Tanpa Judul"
                : book.title || "Tanpa Judul";

            const image =
              book.image?.url ||
              book.image ||
              "https://via.placeholder.com/150?text=No+Image";

            return (
              <div className="book-card" key={index}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

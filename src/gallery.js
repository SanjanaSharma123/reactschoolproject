import React from "react";
import "./navbar.css";  // Importing CSS File

const GalleryFooter = () => {
  return (
    <div>
      {/* Gallery Section */}
      <section className="gallery-container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {[
            "https://source.unsplash.com/400x300/?education",
            "https://source.unsplash.com/400x300/?students",
            "https://source.unsplash.com/400x300/?books",
            "https://source.unsplash.com/400x300/?school",
            "https://source.unsplash.com/400x300/?classroom",
            "https://source.unsplash.com/400x300/?teacher",
          ].map((src, index) => (
            <img key={index} src={src} alt={`Gallery ${index + 1}`} />
          ))}
        </div>
        <button className="more-button">More</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section footer-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Logo.png/200px-Logo.png" alt="School Logo" />
            <p>Jl. Silihwangi No. 123, Cibadak, Sukabumi, Jawa Barat 43351, Indonesia</p>
            <p>Email: info@sekolah.ac.id</p>
          </div>

          <div className="footer-section">
            <h3>Jelajah</h3>
            <ul>
              <li><a href="#">Sambutan</a></li>
              <li><a href="#">Profil Sekolah</a></li>
              <li><a href="#">Berita</a></li>
              <li><a href="#">Galeri</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Halaman Umum</h3>
            <ul>
              <li><a href="#">Data Guru</a></li>
              <li><a href="#">PPDB SMPN 1 Cibadak</a></li>
              <li><a href="#">Panduan PPDB</a></li>
              <li><a href="#">Lokasi</a></li>
              <li><a href="#">Kontak</a></li>
            </ul>
          </div>
        </div>
        <p>Copyright &copy; SMP Negeri 1 Cibadak. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default GalleryFooter;

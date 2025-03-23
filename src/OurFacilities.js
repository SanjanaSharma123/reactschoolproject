import React from "react";
import "./OurFacilities.css"; // CSS File

const facilities = [
  {
    title: "Library",
    description: "Lorem ipsum dolor sit amet adipiscing amet adipiscing aqua lorem ipsum.",
    date: "20 Juni",
    image: "https://source.unsplash.com/100x100/?library",
  },
  {
    title: "Classrooms",
    description: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet aqua lorem ipsum.",
    date: "20 Juni",
    image: "https://source.unsplash.com/100x100/?classroom",
  },
  {
    title: "Smart Labs",
    description: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet aqua lorem ipsum.",
    date: "20 Juni",
    image: "https://source.unsplash.com/100x100/?computerlab",
  },
  {
    title: "Activity Rooms",
    description: "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet aqua lorem ipsum.",
    date: "20 Juni",
    image: "https://source.unsplash.com/100x100/?activity",
  },
];

const newsUpdates = [
  {
    title: "Deklarasi Sekolah Ramah Anak",
    date: "01 - 06 - 2021",
    image: "https://source.unsplash.com/50x50/?school",
  },
  {
    title: "Pembagian Ijazah",
    date: "01 - 06 - 2021",
    image: "https://source.unsplash.com/50x50/?certificate",
  },
  {
    title: "Pemberitahuan PPDB 2020/2021",
    date: "01 - 06 - 2021",
    image: "https://source.unsplash.com/50x50/?announcement",
  },
];

const Facilities = () => {
  return (
    <div className="main-container">
      {/* Left Section */}
      <div className="left-section">
      <div className="header-container">
        <h2>Our Facilities</h2>
        <input type="text" placeholder="Search" className="search-box" />
        </div>
        <div className="facility-list">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card">
              <img src={facility.image} alt={facility.title} className="facility-image" />
              <div className="facility-content">
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
                <p className="date">{facility.date}</p>
              </div>
              <span className="arrow">→</span>
              </div>
            
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {newsUpdates.map((news, index) => (
          <div key={index} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <p className="news-date">{news.date}</p>
              <h4>{news.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;

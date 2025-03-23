import React from "react";
import "./CampusTour.css";
import OurFacilities from "./OurFacilities";

const CampusTour = () => {
  return (
    <div className="campus-tour-section">
  
<div className="campus-tour-section">
            <div className="campus-container">
                <div className="campus-image">
                    <img src="images/school.jpg" alt="Campus" />
                </div>

                <div className="campus-content">
                    {/* Underline and style the heading */}
                    <h3 className="campus-heading">Our Campus Tour</h3>

                    {/* Styled paragraph */}
                    <p className="campus-description">
                        Doon Public School is a very ambitious project of Kusum Vihar Education Trust. 
                        It was established keeping in view the dire necessity of good educational institutions 
                        in the Coal City of Dhanbad.
                    </p>
                    <p className="campus-description">
                        It believes in giving a holistic approach to education by giving them expert guidance, 
                        freedom to be creative to inspire our students to be innovative.
                    </p>

                    <button className="campus-button">School Overview</button>
                </div>
            </div>
        </div>


        <section className="choose-us-section">
      <div className="container">
        <div className="choose-us-content">
          <h2>Why Choose Us?</h2>
          <p>
            Di samping adalah profil sekolah kami secara keseluruhan dari mulai
            bagian depan hingga seluruh fasilitas yang terdapat di sekolah kami.
          </p>
          <button className="learn-more-btn">Lebih Lanjut</button>
        </div>
        <div className="choose-us-cards">
          <div className="card">
            <img src="safe-campus-icon.png" alt="Safe Campus" />
            <h3>Safe Campus</h3>
            <p>Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.</p>
          </div>
          <div className="card">
            <img src="smart-classes-icon.png" alt="Smart Classes" />
            <h3>Smart Classes</h3>
            <p>Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.</p>
          </div>
          <div className="card">
            <img src="qualified-teachers-icon.png" alt="Qualified Teachers" />
            <h3>Qualified Teachers</h3>
            <p>Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.</p>
          </div>
          <div className="card">
            <img src="extracurriculars-icon.png" alt="Extracurriculars" />
            <h3>Extracurriculars</h3>
            <p>Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.</p>
          </div>
        </div>
      </div>
    </section>
<OurFacilities />

    </div>
  );
};

export default CampusTour;

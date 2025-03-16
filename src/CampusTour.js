import React from "react";
import "./CampusTour.css";

const CampusTour = () => {
  return (
    <div className="campus-tour-section">
  
<div className="campus-tour-section">
            <div className="campus-container">
                <div className="campus-image">
                    <h2 className="campus-title">Our Campus Tour</h2>
                    <img src="images/school.jpg" alt="Campus" />
                </div>

                <div className="campus-content">
                    {/* Underline and style the heading */}
                    <h3 className="campus-heading">School Name & Details</h3>

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

                    {/* Styled link */}
                    <a href="#" className="campus-link">School Overview</a>
                </div>
            </div>
        </div>


<div className="notice-section">
            <div className="notice-container">
                
                <div className="notice-image">
                    <img src="images/school.jpg" alt="Notice Board" />
                </div>

                
                <div className="notice-content">
                    <div className="notice-header">
                        <h2 className="notice-title">Notice</h2>
                        <h2 className="view-all">View All →</h2>
                    </div>

                   
                    <button className="latest-btn">Latest....</button>

                    
                    <ul className="notice-list">
                        <li>
                            <span className="notice-date">20 Jan</span> 
                            <a href="#" className="notice-link">
                                Notice Regarding Upcoming Campus Event: Spring Fling Carnival.
                            </a>
                        </li>
                        <li>
                            <span className="notice-date">22 Jan</span> 
                            <a href="#" className="notice-link">
                                Important Notice: Changes to Examination Schedule for Fall Semester 2024.
                            </a>
                        </li>
                        <li>
                            <span className="notice-date">24 Jan</span> 
                            <a href="#" className="notice-link">
                                Notice Regarding Deadline Extension for Assignment Submission in Biology 101.
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

<div className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery">
        <img src="images\Study.avif" alt="Gallery" />
        <img src="images\Study1.jpeg" alt="Gallery"  />
        <img src="images\Study2.jpeg" alt="Gallery"  />
        <img src="images\Study3.jpeg" alt="Gallery"  />
        <img src="images\Study4.jpg" alt="Gallery" />
        </div>
        <button class="more-button">More...</button>
      
</div>


    </div>
  );
};

export default CampusTour;

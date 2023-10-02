import React, { useEffect, useState } from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5002/about')
      .then(response => response.json())
      .then(data => {
        setAboutData(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <p>{aboutData.message}</p>
      </div>
      <div className="about-us-image">
        <img src={aboutData.imageUrl} alt="My Picture" />
      </div>
    </div>
  );
};

export default AboutUs;

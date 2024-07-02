import React from 'react';
import campusImage1 from '../assets/images/campusImage1.jpeg';
import campusImage2 from '../assets/images/campusImage2.webp';
import campusImage3 from '../assets/images/campusImage3.jpg';
import './CampusInfo.css'; // Import the CSS file for styling

const CampusInfo = () => {
    return (
        <div className="campus-info">
            <h2>Campus Information</h2>
            <div className="campus-description">
                <p>
                    Our campus is located in the heart of the city, offering state-of-the-art facilities and a vibrant learning environment. We provide a range of amenities including modern classrooms, libraries, sports complexes, and more.
                </p>
            </div>
            <div className="campus-gallery">
                <img src={campusImage1} alt="Campus Image 1" />
                <img src={campusImage2} alt="Campus Image 2" />
                <img src={campusImage3} alt="Campus Image 3" />
            </div>
        </div>
    );
};

export default CampusInfo;

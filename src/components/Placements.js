// Placements.js
import React from 'react';
import './Placements.css'; // Import CSS file for styling
import { FaGraduationCap, FaBuilding } from 'react-icons/fa'; // Import Font Awesome icons
import placementImage1 from '../assets/images/placements1.webp';
import placementImage2 from '../assets/images/placements2.webp';

const Placements = () => {
    return (
        <div className="placements">
            <h2>Placements</h2>
            <p className="placements-description">
                Our students have achieved remarkable success in their career journeys. Here are some highlights:
            </p>
            <ul className="achievements-list">
                <li><FaBuilding className="icon" /> Over 90% of our graduates are placed in reputed companies within six months of graduation.</li>
                <li><FaGraduationCap className="icon" /> Students have secured placements in leading organizations such as Google, Microsoft, and Amazon.</li>
                <li><FaGraduationCap className="icon" /> Several alumni have pursued higher education at prestigious universities worldwide, including Harvard and Oxford.</li>
            </ul>
            <p className="placements-description">
                Our dedicated placement cell provides comprehensive support, including career counseling, resume building workshops, and mock interviews. Through industry collaborations and campus recruitment drives, we ensure our students are well-prepared for their professional careers.
            </p>
            <div className="placement-images">
                <img src={placementImage1} alt="Placement Image 1" className="placement-image" />
                <img src={placementImage2} alt="Placement Image 2" className="placement-image" />
            </div>
        </div>
    );
};

export default Placements;

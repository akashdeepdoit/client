import React from 'react';
import achievementImage1 from '../assets/images/achievement1.jpg';
import achievementImage2 from '../assets/images/achievement2.jpeg';
import achievementImage3 from '../assets/images/achievement3.webp';
import './Achievements.css'; // Import the CSS file for styling

const Achievements = () => {
    return (
        <div className="achievements">
            <h2>Achievements</h2>
            <ul>
                <li>
                    <img src={achievementImage1} alt="Achievement 1" />
                    <p>Best School Award 2023</p>
                </li>
                <li>
                    <img src={achievementImage2} alt="Achievement 2" />
                    <p>Top Ranking in National Exams 2022</p>
                </li>
                <li>
                    <img src={achievementImage3} alt="Achievement 3" />
                    <p>Excellence in Sports 2021</p>
                </li>
            </ul>
        </div>
    );
};

export default Achievements;

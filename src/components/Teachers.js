import React from 'react';
import './Teachers.css'; // Import the CSS file for styling
import principalImage from '../assets/teachers/principal.jpeg'; // Add an image for the principal
import teacherImage1 from '../assets/teachers/teacher1.jpeg';
// import teacherImage2 from '../assets/teachers/teacher2.jpeg';
import teacherImage3 from '../assets/teachers/teacher3.webp';
import teacherImage4 from '../assets/teachers/teacher4.jpeg';
import teacherImage5 from '../assets/teachers/teacher5.jpg';

const teachers = [
    { name: "Dr. Manish Kumar", subject: "Mathematics", image: teacherImage1 },
    // { name: "Ms. Jane Smith", subject: "Science", image: teacherImage2 },
    { name: "Mr. NV Singh", subject: "History", image: teacherImage3 },
    { name: "Ms.Pankaj Jain", subject: "Computer Science", image: teacherImage4 },
    { name: "Mr. Alakh Pandey", subject: "Art and Design", image: teacherImage5 }
];

const Teachers = () => {
    return (
        <div className="teachers">
            <h2>Our Principal</h2>
            <div className="principal">
                <img src={principalImage} alt="Principal" />
                <p>Dr. Rajesh Maheswari</p>
                <p>Dr. Rajesh Maheswari is the visionary leader of our school, bringing decades of experience in education and administration. Under her guidance, our school has achieved numerous accolades and continues to strive for excellence.</p>
            </div>
            <h2>Our Teachers</h2>
            <div className="teachers-grid">
                {teachers.map((teacher, index) => (
                    <div className="teacher" key={index}>
                        <img src={teacher.image} alt={`Teacher ${index + 1}`} />
                        <p>{teacher.name} - {teacher.subject}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teachers;

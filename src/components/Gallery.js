import React from 'react';
import './Gallery.css'; // Import CSS file for styling
import Image1 from '../assets/gallery/image1.jpg';
import Image2 from '../assets/gallery/image2.jpg';
import Image3 from '../assets/gallery/image3.jpg';
import Image4 from '../assets/gallery/image4.avif';
import Image5 from '../assets/gallery/image5.jpeg';
import Image6 from '../assets/gallery/image6.jpg';



const Gallery = () => {
    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
                <img src={Image1} alt="Gallery Image 1" />
                <img src={Image2} alt="Gallery Image 2" />
                <img src={Image3} alt="Gallery Image 3" />
                <img src={Image4} alt="Gallery Image 4" />
                <img src={Image5} alt="Gallery Image 5" />
                <img src={Image6} alt="Gallery Image 6" />
            
            </div>
        </div>
    );
};

export default Gallery;

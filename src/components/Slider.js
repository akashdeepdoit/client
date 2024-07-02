import React, { useState, useEffect } from 'react';
import slide1 from '../assets/images/slide1.jpeg';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.jpg';



const slides = [
    { src: slide1, caption: "Welcome to Our School" },
    { src: slide2, caption: "Empowering Students" },
    { src: slide3, caption: "Excellence in Education" }
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(slideInterval);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider">
            <div className="slides">
                {slides.map((slide, index) => (
                    <div
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        key={index}
                        style={{ display: index === currentSlide ? 'block' : 'none' }}
                    >
                        <img src={slide.src} alt={slide.caption} />
                        <p>{slide.caption}</p>
                    </div>
                ))}
            </div>
            <button onClick={goToPrevSlide}>←</button>
            <button onClick={goToNextSlide}>→</button>
            <div className="dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;

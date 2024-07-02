import React, { useState, useEffect } from 'react';
import './Testimonials.css'; // Import the CSS file for styling
import testimonialImage1 from '../assets/images/testimonial1.jpg';
import testimonialImage2 from '../assets/images/testimonial2.jpeg';
import testimonialImage3 from '../assets/images/testimonial3.avif';

const testimonials = [
    {
        text: "The best school ever!",
        author: "Akashdeep",
        image: testimonialImage1
    },
    {
        text: "Excellent teachers and facilities.",
        author: "Nishant Singh",
        image: testimonialImage2
    },
    {
        text: "A wonderful learning environment.",
        author: "Vedansh Singh",
        image: testimonialImage3
    },
    {
        text: "Great place for holistic development.",
        author: "Vipul Kumar",
        image: testimonialImage1
    }
];

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
        }, 2000); // Change slide every 3 seconds

        return () => clearInterval(slideInterval);
    }, []);

    const goToNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % testimonials.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonial-slider">
                <div className="testimonial-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial" key={index}>
                            <img src={testimonial.image} alt={`Testimonial by ${testimonial.author}`} />
                            <p>{`"${testimonial.text}"`}</p>
                            <p className="author">{`- ${testimonial.author}`}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={goToPrevSlide} className="prev">&lt;</button>
            <button onClick={goToNextSlide} className="next">&gt;</button>
        </div>
    );
};

export default Testimonials;

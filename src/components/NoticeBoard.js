import React, { useEffect } from 'react';
import './NoticeBoard.css'; // Import the CSS file

const NoticeBoard = () => {
    useEffect(() => {
        const listContainers = document.querySelectorAll('.sliding-list-container');
        listContainers.forEach(container => {
            const list = container.querySelector('.sliding-list');
            const items = list.children;
            const totalHeight = Array.from(items).reduce((acc, item) => acc + item.clientHeight, 0);

            let scrollHeight = 0;

            const scrollList = () => {
                scrollHeight += items[0].clientHeight;
                list.style.transform = `translateY(-${scrollHeight}px)`;
                list.style.transition = 'transform 1s linear';

                setTimeout(() => {
                    const firstItem = list.firstElementChild;
                    list.appendChild(firstItem);
                    list.style.transition = 'none';
                    list.style.transform = 'translateY(0)';
                    scrollHeight = 0;
                }, 1000); // Change to match the CSS transition duration
            };

            const intervalId = setInterval(scrollList, 2000); // Change slides every 2 seconds

            return () => clearInterval(intervalId);
        });
    }, []);

    return (
        <div className="notice-board">
            <h2>Notice Board</h2>
            <div className="sliding-list-container">
                <ul className="sliding-list">
                    <li>New semester starts on September 1st</li>
                    <li>Annual sports event on October 15th</li>
                    <li>Parent-Teacher meeting on November 10th</li>
                    <li>Winter break from December 20th to January 5th</li>
                    <li>Spring festival on April 20th</li>
                    <li>Mid-term exams starting March 1st</li>
                </ul>
            </div>
            {/* <h2>Recent Events</h2>
            <div className="sliding-list-container">
                <ul className="sliding-list">
                    <li>Science Fair 2024</li>
                    <li>Art Exhibition 2024</li>
                    <li>Graduation Ceremony 2023</li>
                    <li>Annual Debate Competition 2024</li>
                    <li>School Picnic 2024</li>
                    <li>Music Concert 2023</li>
                </ul>
            </div> */}
        </div>
    );
};

export default NoticeBoard;

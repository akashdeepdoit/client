import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Slider from './components/Slider';
import NoticeBoard from './components/NoticeBoard';
import CampusInfo from './components/CampusInfo';
import Achievements from './components/Achievements';
import PopularCourses from './components/PopularCourses';
import Testimonials from './components/Testimonials';
import Placements from './components/Placements';
import Gallery from './components/Gallery';
import Teachers from './components/Teachers';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import StudentForm from './components/StudentForm'; // Import the form component
import './App.css';

function App() {
    return (
      <div>
        <Router>
       
                <TopHeader />
                <Header />
                <Slider />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/add-student" element={<StudentForm />} /> */}
                 </Routes>  
                <NoticeBoard />
                <CampusInfo />
                <Achievements />
                <PopularCourses />
                <Testimonials />
                <Placements />
                <Gallery />
                <Teachers />
                <Footer />
            
        </Router>
        </div>
    );
}

export default App;

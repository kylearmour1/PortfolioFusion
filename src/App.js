import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;




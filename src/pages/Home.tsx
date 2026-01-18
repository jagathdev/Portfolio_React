import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Internship from '../components/Internship';
import Certificates from '../components/Certificates';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-gray-900 dark:text-slate-100 transition-colors duration-300">
            <Navbar />
            <main>
                <Banner />
                <About />
                <Skills />
                <Projects />
                <Internship />
                <Certificates />
                <Education />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Home;

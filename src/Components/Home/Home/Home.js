import React from 'react';
import AboutMe from '../../About/About';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;
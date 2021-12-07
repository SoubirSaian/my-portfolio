import React from 'react';
import AboutMe from '../../About/About';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;
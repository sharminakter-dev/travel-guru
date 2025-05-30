import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import image from '../../resources/images/Rectangle 1.png'

const Home = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
        }}>
            <Header />
            <Slider/>
        </div>
    );
};

export default Home;
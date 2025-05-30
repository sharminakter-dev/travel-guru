import React from 'react';
import image from '../../resources/images/Rectangle 1.png'
import Header from '../Header/Header';
import Destination from '../Destination/Destination';

const Booking = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
        }}>
            <Header />
            <Destination/>
        </div>
    );
};

export default Booking;
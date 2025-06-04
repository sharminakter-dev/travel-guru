import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useParams } from 'react-router';

const Map = () => {
    const {destination} = useParams();
    const apiKey =  import.meta.env.GOOGLE_MAP_API_KEY
    return (
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145476.87939469205!2d91.9285486338727!3d21.428678142249932
        !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2
        sbd!4v1749047269405!5m2!1sen!2sbd" 
        width="500" height="450"allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        {/* <iframe
            width="600"
            height="450"
            // style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(destination)}`}>
        </iframe> */}
       </div>
    );
};

export default Map;
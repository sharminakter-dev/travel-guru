import React from 'react';
import { Card } from 'react-bootstrap';
import star from '../../resources/images/icons/star_1_.png'
import { useSelector } from 'react-redux';

const images = import.meta.glob('../../resources/images/*.png',  {eager: true });

const Hotel = (props) => {
    const hotel = props.acc;

    const formData = useSelector(state=>state.bookingForm);
    const to = new Date(formData.toDate);
    const from = new Date(formData.fromDate);
    const totalDay = ( to-from)/(1000 * 60 * 60 * 24);

    const totalCost = totalDay*(hotel.price);
    const imageModule = images[`../../resources/images/${hotel.img}`];

    return (
    <Card style={{ width: '18rem' }} className='d-flex flex-row mt-5 w-100 border-0'>
        <Card.Img variant="top" src={imageModule?.default} style={{width:'40%',  objectFit: 'cover' }} />
        <Card.Body style={{width:'60%'}}>
            <Card.Title>{hotel.title}</Card.Title>
                <div  className='text-secondary' >
                    <small> {hotel.guests} guests | </small>
                    <small> {hotel.bedrooms} bedrooms | </small>
                    <small> {hotel.beds} beds | </small>
                    <small> {hotel.baths} baths</small>
                </div>
                <div className='text-secondary'>
                    <span>{hotel.features[0]} |</span> 
                    <span> {hotel.features[1]} |</span> 
                    <span> {hotel.features[2]} </span> 
                </div>
                <div style={{gap:2}} className='text-secondary' >
                    <span>{hotel.features[3]} </span> 
                </div>
                <div className='d-flex flex-row gap-2 align-items-center justify-center text-dark fw-bolder'>
                    <div className='d-flex flex-row gap-1 align-items-center'>
                        <img src={star} alt="rating" style={{height:'15px'}} />
                        <small>{hotel.rating} ({hotel.reviews}) </small>
                    </div>
                    <div> ${hotel.price}/<span className='text-secondary fw-normal'>night</span> </div>
                    <small className="text-black-50 fw-lighter" >${totalCost} total</small>
                    
                </div>
        </Card.Body>
    </Card>
    );
};

export default Hotel;
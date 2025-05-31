import React from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import data from '../../data/data';
import { useDispatch } from 'react-redux';
import { setDestination } from '../../redux/slice/destinationSlice';
import { useNavigate } from 'react-router';

const images = import.meta.glob('../../resources/images/*.png', { eager: true});

const Slider = () => {
  const [index, setIndex] = React.useState(0);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleSelect = (idx) => {
    setIndex(idx);
  }
  const handleClick = (destination) => {
    dispatch(setDestination(destination));
    navigate(`/booking/${destination.name}`);
  }
  // console.log(index);
  return (
     
    <Carousel activeIndex={index} onSelect={handleSelect} className='slider m-3' >

      {data.map((destination,idx)=>(
        <Carousel.Item key={idx} >
          <Row className='text-white align-items-center m-4 p-4 '  >
            <Col md={6} className='ml-5'>
              <h1 style={{marginLeft:'100px'}} >{destination.name}</h1>
              <p style={{marginLeft:'100px'}} >{destination.short_description}</p>
              <Button 
                style={{marginLeft:'100px'}} 
                variant="warning" 
                className=" mt-2 mt-lg-0 "
                onClick={()=>{handleClick(destination)}} >
                Booking <FontAwesomeIcon icon={faArrowRight} className="ms-lg-2 mt-3 mt-lg-0 " />
              </Button>
            </Col>
            <Col md={6} > 
              <img 
                src={images[`../../resources/images/${destination.img}`]?.default} 
                width={250} 
                alt={`slider${idx+1}`}
                className='ml-5 cursor-pointer'
                onClick={()=>{handleClick(destination)}} />
            </Col>
          </Row>
        </Carousel.Item>
      ))}      
    </Carousel>
    );
};

export default Slider;

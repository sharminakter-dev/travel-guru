import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { setBookingForm } from '../../redux/slice/bookingFormSlice';
import { useNavigate } from 'react-router';

const Destination = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const destination = useSelector((state) => state.destination.destination);
    // console.log(destination);
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const threeDaysFromNow = new Date(today);
    threeDaysFromNow.setDate(threeDaysFromNow.getDate()+3);
    const formattedThreeDaysFromNow = threeDaysFromNow.toISOString().split('T')[0]; // Format it to YYYY-MM-DD

    // form submission handler
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(e.target);
        // console.log(formData);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);

        for (const [key, value] of Object.entries(data)) {
            // empty input check   
            if (!value.trim()) {
                const input = form.elements[key];
                if(input) input.focus();
                return;
            }
        }

        dispatch(setBookingForm(data));
        navigate(`/search/${destination.name}`);
    }

    return (
            <Container className='mt-5' >
                <Row>
                    <Col md={6} className="text-start text-white">
                        <h1> {destination.name} </h1>
                        <p> {destination.long_description} </p>
                    </Col>
                    <Col md={6} className="text-center">
                         <Form className='bg-white p-3 rounded text-start ms-5' onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label >Origin</Form.Label>
                                <Form.Control type="text" name='origin' className='bg-light fw-bold ' defaultValue='dhaka' />
                            </Form.Group>

                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label >Destination</Form.Label>
                                <Form.Control type="text" name='destination' className='bg-light fw-bold ' value={destination.name} />
                            </Form.Group>
                            <Row>
                                <Col md={6}>
                                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label >From</Form.Label>
                                        <Form.Control name='fromDate' type="date" className='bg-light' defaultValue={today} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label >To</Form.Label>
                                        <Form.Control name='toDate' type="date" className='bg-light' defaultValue={formattedThreeDaysFromNow} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button 
                              variant="warning" 
                              type="submit" 
                              className='w-100'
                             >
                                Start Booking
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
    );
};

export default Destination;
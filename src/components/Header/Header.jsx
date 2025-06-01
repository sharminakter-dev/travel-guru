import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../resources/logo.png'
import { Link, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { logoutUser } from '../Auth/authManager';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../redux/slice/authSlice';


const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    const showFilter = path === '/home' ||path === '/' || path.startsWith('/booking');

    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);
    const user = useSelector(state=>state.auth.user);
    const dispatch = useDispatch();
    // console.log(isAuthenticated);
    const handleLogOut = () => {
        logoutUser()
        .then(res=> dispatch(signOutUser(res)))
    }
    return (    
        <Container>
            <Navbar  style={{ maxHeight:'58px'}}>
            <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center">
                <img src={logo} alt="" style={{ width: '70px', filter: showFilter?'brightness(0) invert(1)':null }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex mx-auto my-2 my-lg-0 " style={{ maxWidth: 400, flex: 1 }}>
                    <Form.Control
                        type="search"
                        placeholder="Search Your Destination"
                        className="me-2 text-dark"
                        aria-label="Search"
                        />
                </Form>
                <Nav
                    className="me-auto my-2 my-lg-0 "
                    style={{ maxHeight: '200px' }}
                    navbarScroll

                    
                >
                    <Nav.Link href="#action1"  className={`${showFilter?'text-white':null}`} >News</Nav.Link>
                    <Nav.Link href="#action2"  className={`${showFilter?'text-white':null}`} >Destination</Nav.Link>
                    <Nav.Link href="#action3"   className={`${showFilter?'text-white':null}`} >Blog</Nav.Link>
                    <Nav.Link href="#action4"   className={`${showFilter?'text-white':null}`} >Contact</Nav.Link>
                    <Nav.Link href="#action5"   className={`${showFilter?'text-white':null}`} >Link</Nav.Link>
                </Nav>
                {isAuthenticated? 
                  <>
                     {/* <Container className="mt-5">
                        <Row className="justify-content-center">
                            <Col md={6}>
                            <Card className="text-center shadow p-3">
                                <Card.Img variant="top" src={user.image} rounded="true" className="rounded-circle mx-auto mt-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                                <Card.Text>
                                    <strong>Phone:</strong> {user.phone}<br />
                                    <strong>Address:</strong> {user.address}<br />
                                    <strong>Bio:</strong> {user.bio}
                                </Card.Text>
                                <Button variant="primary">Edit Profile</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Container> */}
                    <Link to='/login'> 
                      <Button variant="danger" className="ms-lg-3 mt-2 mt-lg-0" onClick={handleLogOut}>Logout</Button>
                    </Link>
                  </>:
                  <Link to='/login'> <Button variant="warning" className="ms-lg-3 mt-2 mt-lg-0">Login</Button> </Link>
                  }
                
            </Navbar.Collapse>
        </Navbar>
    </Container>
        
    );
};

export default Header;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../resources/logo.png'
import { Link, useLocation } from 'react-router';


const Header = () => {
    const location = useLocation();
    const path = location.pathname
    const showFilter = path === '/home' ||path === '/' || path.startsWith('/booking');
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
                <Link to='/login'> <Button variant="warning" className="ms-lg-3 mt-2 mt-lg-0">Login</Button> </Link>
            </Navbar.Collapse>
        </Navbar>
    </Container>
        
    );
};

export default Header;

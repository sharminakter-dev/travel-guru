import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../resources/logo.png'
import { Link } from 'react-router';
import Row from './../../../node_modules/react-bootstrap/esm/Row';
import { Col } from 'react-bootstrap';

const Header = () => {
    return (
        
            <Container>
                <Navbar  className=" text-white" style={{ maxHeight:'58px'}}>
                <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center">
                    <img src={logo} alt="" style={{ width: '70px', filter:'brightness(0) invert(1)' }} />
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
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                        
                    >
                        <Nav.Link href="#action1" className='text-white' >News</Nav.Link>
                        <Nav.Link href="#action2"  className='text-white' >Destination</Nav.Link>
                        <Nav.Link href="#action3"  className='text-white' >Blog</Nav.Link>
                        <Nav.Link href="#action4"  className='text-white' >Contact</Nav.Link>
                        <Nav.Link href="#action5"  className='text-white' >Link</Nav.Link>
                    </Nav>
                    <Button variant="warning" className="ms-lg-3 mt-2 mt-lg-0">Login</Button>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        
    );
};

export default Header;

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
import { Link, useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { logoutUser } from '../Auth/authManager';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../redux/slice/authSlice';
import { Dropdown } from 'react-bootstrap';
import dummyUser from '../../resources/images/user.png';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const from = location.state?.from.pathname||'/';
    const path = location.pathname;
    const showFilter = path === '/home' ||path === '/' || path.startsWith('/booking');

    const isAuthenticated = useSelector(state=>state.auth.user.success);
    const user = useSelector(state=>state.auth.user);
    // console.log(user)

     

    
    // console.log(isAuthenticated);
    const handleLogOut = () => {
        logoutUser()
        .then(res=> {
            dispatch(signOutUser(res));
            navigate(from);
        })
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
                    <Dropdown className='me-5'>
                        <Dropdown.Toggle className='bg-transparent border-0' id="dropdown-basic">
                           <img 
                             src={user.dp||dummyUser} alt="user" 
                             className='rounded-circle  mt-2' 
                             style={{ width: "30px", height: "30px" }}  />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='bg-light' >
                            <Dropdown.Item as={Link} to="/user">
                                Your Profile
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleLogOut} >
                                Logout
                                <FontAwesomeIcon icon={faRightFromBracket} className='ms-3' />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                  </>:
                  <Link to='/login'> <Button variant="warning" className="ms-lg-3 mt-2 mt-lg-0">Login</Button> </Link>
                  }
                
            </Navbar.Collapse>
        </Navbar>
    </Container>
        
    );
};

export default Header;

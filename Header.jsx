import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom' ;
//import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/Header.css' ;


/* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {

  const Logout = () => {}

  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <Link className = 'nav-link' to = {'/'}> 
          Bus Booking Dashboard
        </Link>
        </Navbar.Brand>
      <Nav className="me-auto">
        <Link className = 'nav-link' to = {'/home'}>
          Products list</Link>
        <Link className = 'nav-link' to = {'/login'}>
          Login</Link>
        <Link className = 'nav-link' to = {'/register'}>
          Register</Link>
        <Link className = 'nav-link' to = {'/manage-destinations'}>
          Destinations</Link>
        <Link className = 'nav-link' to = {'/manage-appointments'}>
          Appointments</Link>
      </Nav>

      <Nav className = 'ms-auto'>
        <Nav.Link onClick = {Logout}>Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header

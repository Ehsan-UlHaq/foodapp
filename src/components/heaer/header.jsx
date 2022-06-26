import React from 'react'
import './header.css'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo/logo.jpg'
import userService from '../../services/userService'
export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} height="70px" width="70px" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/contact_us" >Contact us</Nav.Link>
            <Nav.Link as={Link} to="/restaurants" >Restaurants</Nav.Link>
            {userService.isLoggedIn()?<>
              <Nav.Link as={Link} to="/orders" >Order</Nav.Link>
              <Nav.Link as={Link} to="/items" >Items</Nav.Link>
            </>:<></>}
           
            {userService.isLoggedIn() && userService.isSeller()?<>
              <Nav.Link as={Link} to="/items" >Items</Nav.Link>
            </>:<>
            
            </>}
            
            {userService.isLoggedIn()?<>
              <Nav.Link as={Link} to="/cart" >Cart</Nav.Link>
              <Nav.Link  onClick={()=>{
                userService.logout()
                 window.location.href = "/";
              }} >Logout</Nav.Link>
            
            </>:<>
            <Nav.Link as={Link} to="/restaurants_signup" >Restaurant signup</Nav.Link>
            <Nav.Link as={Link} to="/restaurants_login" >Restaurant login</Nav.Link>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" >Sign up</Nav.Link>
            </>}
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

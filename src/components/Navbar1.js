import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from "../components/ss3.png";
import {Link} from "react-router-dom";
import "../components/Navbar.css"


function Navbar1() {
  return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/home"> <img src={img1} className="img1"  alt=''/></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>   
  )
}

export default Navbar1
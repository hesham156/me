import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Navbar,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Naveg = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">MR.Robot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='f-g-0' id="basic-navbar-nav">
        <Nav className="me-auto">
     
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Naveg
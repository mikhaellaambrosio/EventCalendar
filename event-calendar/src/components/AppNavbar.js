import {Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button} from 'react-bootstrap'
import './Components.css'

export default function AppNavbar() {
    return (

        <Navbar sticky='top' className='navbar' expand="lg">
        <Container>
            <Navbar.Brand href="#home">Glyph Studios</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                <Nav.Link href="#profile" className='nav-link'>Profile</Nav.Link>
                <Nav.Link href="#events" className='nav-link'>Events</Nav.Link>
                <Nav.Link href="#calendar" className='nav-link'>Calendar</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>


    )
}
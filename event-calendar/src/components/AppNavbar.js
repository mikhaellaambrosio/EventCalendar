import {Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button} from 'react-bootstrap'
import './Components.css'

export default function AppNavbar() {
    return (

        <Navbar sticky='top' className='navbar' expand="lg">
        <Container>
            <Navbar.Brand href="/">Glyph Studios</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='nav-group'>
                <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
                <Nav.Link href="/allEvents" className='nav-link'>Events</Nav.Link>
                <Nav.Link href="#calendar" className='nav-link'>Calendar</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>


    )
}
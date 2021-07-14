import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';


export default class NavBar extends Component {
    render() {
        return (

            <div>
                <Navbar fixed="top" bg="light" expand="lg">
                    <Navbar.Brand href="#">Mr Tax</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">asked</Nav.Link>
                            <Nav.Link href="#action2">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

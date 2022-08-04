import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarX() {
    return (
      
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link" style={({ isActive }) =>
                            isActive ? { color: 'white' } : undefined
                        }>Task 1</NavLink>
                        <NavLink to="/task2" className="nav-link" style={({ isActive }) =>
                            isActive ? { color: 'white' } : undefined}>Task 2</NavLink>
                        <NavLink to="/task3" className="nav-link" style={({ isActive }) =>
                            isActive ? { color: 'white' } : undefined}>Task 3</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );

}

export default NavbarX;


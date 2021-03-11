import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './NavbarComp.css';
import logo from '../../data/logo.svg';

function NavbarComp() {
    const routerPath = useLocation().pathname;

    return(
        <Navbar
            className="navbar-font text-uppercase navbar-border"
            bg="dark"
            variant="dark"
            expand="sm" >
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    height="35"
                    alt="Atlas Studio logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle className="navbar-toggle" aria-controls="navbar-collapse" />
            <Navbar.Collapse id="navbar-collapse">
                <Nav className="nav-container" activeKey={routerPath}>
                    <NavDropdown title="Projects">
                        <NavDropdown.Item href="/zillow-home-value-index">Zillow Home Value Index</NavDropdown.Item>
                        <NavDropdown.Item href="/ca-native-american-tribal-boundaries">CA Native American Tribes</NavDropdown.Item>
                        <NavDropdown.Item href="/usa-wildfire-air-quality">USA Wildfire and Air Quality</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/projects">All Projects</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/videos">Videos</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComp;
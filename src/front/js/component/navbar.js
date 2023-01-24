import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Navbar, NavbarBrand, Nav, Image } from "react-bootstrap";

export const ProjectNavbar = () => {
	return (
		<Navbar>
			<NavbarBrand>
				<Link to="/">
					<Image rounded src="https://upload.wikimedia.org/wikipedia/commons/d/db/Tipos_de_verde.png" height="60" alt="Project" />
				</Link>				
			</NavbarBrand>
			<h5>App Name</h5>
			<Nav>
				<Link className="nav-link" to="/profile">Profile</Link>
				<Link className="nav-link" to="/track">Track</Link>
				<Link className="nav-link" to="/new">New</Link>
				<Link className="nav-link" to="/information">Info.</Link>
				<Link className="nav-link" to="/notes">Notes</Link>
			</Nav> 
			<Container className="justify-content-end">
				<Button variant="info"><Link className="nav-link" style={{color: 'white'}} to="/login">Log In</Link></Button>
				<Button variant="primary"><Link className="nav-link" style={{color: 'white'}} to="/register">Register, Free</Link></Button>
			</Container>
		</Navbar>
	);
};

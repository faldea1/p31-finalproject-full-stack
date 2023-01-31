import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Button, Container, Navbar, NavbarBrand, Nav, Image } from "react-bootstrap";

export const ProjectNavbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<Navbar>
			<NavbarBrand>
				<Link to="/">
					<Image rounded src="https://upload.wikimedia.org/wikipedia/commons/d/db/Tipos_de_verde.png" height="60" alt="Project" />
				</Link>				
			</NavbarBrand>
			<h5 style={{fontWeight: 'bolder'}}><span style={{color: 'limegreen'}}>Sow</span><span style={{color: 'yellowgreen'}}>Cra</span><span style={{color: 'forestgreen'}}>ft</span></h5>		
					<Container className="justify-content-end">
						{!store.token ?
						<>
							<Button variant="success"><Link className="nav-link" style={{color: 'white'}} to="/login">Log In</Link></Button>
							<div style={{color: 'white'}}>aa</div>
							<Button variant="primary"><Link className="nav-link" style={{color: 'white'}} to="/register">Register, Free</Link></Button>
						</>
						:
						<>
							<Nav style={{marginRight: 50}}>
								<Link className="nav-link" to="/profile">Profile</Link>
								<Link className="nav-link" to="/track">Track</Link>
								<Link className="nav-link" to="/new">New</Link>
								<Link className="nav-link" to="/information/vegetables">Info.</Link>
								<Link className="nav-link" to="/notes">Notes</Link>
							</Nav>
							<Button onClick={() => actions.logout() } variant="danger"><Link className="nav-link" style={{color: 'white'}} to="/">Log Out</Link></Button>
						</>
						}						
					</Container>
		</Navbar>
	);
};

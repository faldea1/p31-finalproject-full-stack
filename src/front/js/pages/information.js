import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, Outlet } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export const Information = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="information">
			<Container style={{textAlign: 'center', marginTop: 60}}>
				<Button variant="success" style={{marginRight: 10}}><Link className="nav-link" style={{color: 'white'}} to="/information/vegetables">Vegetables</Link></Button>
				<Button variant="warning" style={{marginRight: 10}}><Link className="nav-link" style={{color: 'white'}} to="/information/herbs">Herbs</Link></Button>
				<Button variant="secondary" style={{marginRight: 10}}><Link className="nav-link" style={{color: 'white'}} to="/information/flowers">Flowers</Link></Button>
				<Button variant="dark"><Link className="nav-link" style={{color: 'white'}} to="/information/orchards">Orchards</Link></Button>
				</Container>
			<Outlet />
		</div>
	);
};
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
			<Container>
				<Button variant="success"><Link className="nav-link" style={{color: 'white'}} to="/information/vegetables">Vegetables</Link></Button>
				<Button variant="warning"><Link className="nav-link" style={{color: 'white'}} to="/information/herbs">Herbs</Link></Button>
				<Button variant="secondary"><Link className="nav-link" style={{color: 'white'}} to="/information/orchards">Orchards</Link></Button>
				</Container>
			<Outlet />
		</div>
	);
};
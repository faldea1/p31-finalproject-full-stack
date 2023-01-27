import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const Flowers = () => {
	const { store, actions } = useContext(Context);

	return (
		<div style={{textAlign: 'center', color: 'grey', fontWeight: 'bold', marginTop: 10}}>
			Probando Flowers...
		</div>
	);
};
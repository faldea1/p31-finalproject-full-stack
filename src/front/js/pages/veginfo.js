import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const Vegetables = () => {
	const { store, actions } = useContext(Context);

	return (
		<div style={{textAlign: 'center', color: 'green', fontWeight: 'bold', marginTop: 10}}>
			Probando Vegs...
		</div>
	);
};
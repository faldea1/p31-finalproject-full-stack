import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container } from "react-bootstrap";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			Probando Login...
		</div>
	);
};
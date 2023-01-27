import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSun } from 'react-icons/fa';
import { Context } from "../store/appContext";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if(store.token && store.token != "" && store.token != undefined) actions.getMessage();
	}, [store.token])

	return (
		<Container>
		<div style={{textAlign: 'end'}}>
			<div style={{color: 'green', fontWeight: 'bold'}}>{store.message}</div>	
		</div>
			<div>probando Profile...</div>
		</Container>
		
	);
};


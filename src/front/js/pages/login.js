import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const userLogin = () => {
		actions.login(email, password);
	};
	

	if(store.token && store.token != "" & store.token != undefined) navigate("/");

	return (
		<Container>
			<h1>Welcome!</h1>
				{(store.token && store.token != "" && store.token != undefined)  ? "You are logged in with a token" + store.token : 
				<div>			
					<input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
					<input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value) } /> 
					<Button onClick={userLogin}>Log In</Button>
				</div>
				}
			
		</Container>
	);
};
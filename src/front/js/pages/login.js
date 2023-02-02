import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


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
		<Container style={{ textAlign: 'center', marginBottom: 229 }}>
			<h1 style={{marginTop: 60, fontWeight: 'bolder'}}><span style={{color: 'limegreen'}}>Wel</span><span style={{color: 'yellowgreen'}}>com</span><span style={{color: 'forestgreen'}}>e</span><span style={{color: 'darkgreen'}}>!</span></h1>
				{(store.token && store.token != "" && store.token != undefined)  ? "You are logged in with a token" + store.token : 
				<form>
					<div>		
						<input type="text" placeholder="email" style={{margin: 8}} value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div>	 
						<input type="password" placeholder="password" style={{margin: 8}} value={password} onChange={(e) => setPassword(e.target.value) } />
					</div>
					<div>
						<Button style={{margin: 15, color: 'white', backgroundColor: 'green', border: 'none'}} onClick={userLogin}>Log In</Button>
					</div> 
				</form>
				}
				<Link style={{color: 'blue', fontStyle: 'italic' }} to='/register'>Dont't have an Account? Register here.</Link>
		</Container>
	);
};
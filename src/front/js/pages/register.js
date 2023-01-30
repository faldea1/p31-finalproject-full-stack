import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [ email, setEmail] = useState('');
	const [ password, setPassword ] = useState('');
	const [ reppassword, setrepPassword ] = useState('');
	const [ name, setName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	}

	return (
	<Container style={{ textAlign: 'center' }}>
		<h1 style={{marginTop: 60}}><span style={{color: 'limegreen'}}>Re</span><span style={{color: 'yellowgreen'}}>gis</span><span style={{color: 'forestgreen'}}>ter</span></h1>
		<div style={{fontSize: 'small', marginTop: 20, marginBottom: 20}}>Please fill in this form to create an account</div>
		<form onSubmit={handleSubmit}>
			<div>
			<input style={{margin: 8}} value={name} name="name" id="name" placeholder="Enter First Name"/>
			</div>
			<div>
			<input style={{margin: 8}} value={name} name="name" id="name" placeholder="Enter Last Name"/>
			</div>
			<div>
			<input style={{margin: 8}} value={email} type="email" placeholder="Enter email" name="Enter email" onChange={(e) => setEmail(e.target.value)}/>
			</div>
			<div>
			<input style={{margin: 8}} value={password} type="password" placeholder="Enter password" name="password" onChange={(e) => setPassword(e.target.value)}/>
			</div>
			<div>
			<input style={{margin: 8}} value={reppassword} type="password" placeholder="Repeat password" name="reppassword" onChange={(e) => setrepPassword(e.target.value)}/>
			</div>
			<div style={{fontSize: 'small', marginTop: 20, marginBottom: 8, fontStyle: 'italic'}}>By creating an account you agree to our <span style={{textDecoration: 'underline'}}>Terms & Privacy</span></div>
			<Button style={{marginBottom: 20}} type="submit" >Register</Button>	
		</form>
		<Link style={{color: 'green', fontStyle: 'italic'}} to='/login'>Already have an Account? Log In here.</Link>
		</Container>
	);
};
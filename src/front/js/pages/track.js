import React, { useState, useEffect, useContext } from "react";
import { Container, Form, Row, Nav, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaListUl } from 'react-icons/fa';
import { Context } from "../store/appContext";

export const Track = () => {
	const { store, actions } = useContext(Context);

	const { register, formState: { errors }, watch, handleSubmit } = useForm();
  
	const onSubmit = (data) => {
		console.log(data);
	}

	return (



		<p style={{color: 'white'}}>Country: {watch('Country')}</p>
	);
};


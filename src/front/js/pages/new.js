import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const New = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			probando New...
		</div>
	);
};
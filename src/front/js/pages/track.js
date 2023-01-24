import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Container } from "react-bootstrap";

export const Track = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			probando Track...
		</div>
	);
};


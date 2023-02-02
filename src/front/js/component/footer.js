import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Footer } from "react-bootstrap";

export const ProjectFooter = () => (
  <footer className="text-center py-5" style={{marginTop: 60, backgroundColor: 'darkseagreen   '}}>
    <p style={{color: 'white', fontWeight: 'bolder', fontSize: 'large'}}>Info - Support - Terms & Use</p>
		<p style={{color: 'white', fontStyle: 'italic'}}>&copy; 2023 Copyright: sowcraft.com</p>
  </footer>
);

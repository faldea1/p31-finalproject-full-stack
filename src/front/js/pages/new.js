import React, { useState, useEffect, useContext } from "react";
import { Container, Form, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const New = () => {
  const { store, actions } = useContext(Context);

  return (
    <Form>
      <Container>
        <Row>
          <Nav>
            <h3>New Orchard</h3>
          </Nav>
          	<div class="px-2.5">
            	<div id="myalert" class="alert alert-danger px-3" role="alert">
              		Some fields are missing
            	</div>
			</div>
        </Row>
      </Container>
    </Form>
  );
};

import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSun, FaUserEdit } from "react-icons/fa";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getMessage();
  }, [store.token]);

  return (
    <Container style={{ marginTop: 60 }}>
      <Row>
        <Col style={{ display: "flex" }}>
          <img
            style={{ borderRadius: 200, height: 150, width: 150 }}
            src="https://e7.pngegg.com/pngimages/462/848/png-clipart-pixel-art-drawing-design-plant-stem-grass.png"
          />
          <div style={{ marginLeft: 25 }}>
            <div style={{ marginTop: 15 }}>
              <div
                style={{ color: "green", fontWeight: "bold", marginBottom: 10 }}
              >
                {store.message}
                <span>
                  <Button
                    variant="light"
                    style={{ fontSize: "small", size: "small", marginLeft: 5 }}
                  >
                    Edit Profile <FaUserEdit />
                  </Button>
                </span>
              </div>
              <span>
                <span style={{ fontWeight: "bold" }}>1</span>
                <span style={{ marginRight: 20 }}> orchard </span>
              </span>
              <span>
                <span style={{ fontWeight: "bold" }}>200</span>
                <span style={{ marginRight: 20 }}> followers</span>
              </span>
              <span>
                <span style={{ fontWeight: "bold" }}>260</span> following
              </span>
              <div style={{ marginTop: 10, fontWeight: "bold" }}>Tester</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{marginTop:60}}>
        <Col>
		<Dropdown style={{marginLeft: 5}}>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              Favorites
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Vegetables</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Herbs</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Flowers</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
	  <Row style={{marginTop:150}}>
		<Col>
		<Dropdown style={{marginLeft: 5}}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              History
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">2021</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2022</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2023</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
		</Col>
	  </Row>
    </Container>
  );
};

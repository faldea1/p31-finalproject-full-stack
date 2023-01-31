import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container, Row, Col, Carousel, Item, Caption } from "react-bootstrap";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ textAlign: "center", marginTop: 60, marginBottom: 15, fontWeight: 'bolder'}}>
            <span style={{ color: "limegreen" }}>Join</span>
            <span style={{ color: "yellowgreen" }}> the</span>
            <span style={{ color: "forestgreen" }}> Community</span>
          </h1>
        </Col>
        <Row>
          <Col>
            <Carousel className="d-block w-75 start-50 translate-middle-x" fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://noticias.unsam.edu.ar/wp-content/uploads/2018/02/iStock_000019965368Large_agriculture.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Harvest</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.abc.com.py/resizer/9yHtlICe11XPRjlNO0925jQeIhQ=/fit-in/770x495/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/abccolor/N5EYXKEGMFH2PHSOWEILNXL3WE.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Nutrients</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 height-80"
                  src="https://huertoygarden.com/wp-content/uploads/2021/11/cultivar-huerto-vertical-huertoygarden.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Vertical for your balcony</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

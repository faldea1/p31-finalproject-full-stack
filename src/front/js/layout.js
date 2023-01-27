import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Container, Row, Col } from 'react-bootstrap';

import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Track } from "./pages/track";
import injectContext from "./store/appContext";

import { ProjectNavbar } from "./component/navbar";
import { ProjectFooter } from "./component/footer";
import { New } from "./pages/new";
import { Notes } from "./pages/notes";
import { Information } from "./pages/information";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Vegetables } from "./pages/veginfo";
import { Herbs } from "./pages/herbsinfo";
import { Orchards } from "./pages/orchardsinfo";
import { Flowers } from "./pages/flowersinfo";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
      <Container>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <Row>
              <Col>
                <ProjectNavbar />
              </Col>
            </Row>
            <Row>
              <Col>
                <Routes>
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/profile" element={<Profile />} />
                  <Route exact path="/track" element={<Track />} />
                  <Route exact path="/new" element={<New />} />
                  <Route exact path="/information" element={<Information />}>
                    <Route exact path="vegetables" element={ <Vegetables /> } />
                    <Route exact path="herbs" element={ <Herbs /> } />
                    <Route exact path="flowers" element={ <Flowers /> } />
                    <Route exact path="orchards" element={ <Orchards /> } />
                  </Route>
                  <Route exact path="/notes" element={<Notes />} />
                  <Route exact path="*" element={<h1 style={{color: 'purple'}}>Route not found!</h1>} />
                </Routes>
              </Col>
            </Row>
            <ProjectFooter />
          </ScrollToTop>
        </BrowserRouter>
      </Container>
  );
};

export default injectContext(Layout);

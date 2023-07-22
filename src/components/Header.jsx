import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import logo from '../assets/images/logo.svg';
import '../assets/css/Header.scss';
const Header = () => {
  return (
    <header className="header-area header-sticky">
      <Container>
        <Row>
          <Col>
            <Nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="/" className="logo">
                <img src={logo} alt="" />
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li><a href="index.html" className="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="deals.html">Deals</a></li>
                <li><a href="reservation.html">Reservation</a></li>
                <li><a href="reservation.html">Book Yours</a></li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

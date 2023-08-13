import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col
            sm="6"
            className="text-center py-3 border-top border-light contact-info"
          >
            <h2 style={{ color: "white" }}>Contact Us:</h2>
            <p> Phone: 555-555-5555</p>
            <p>Email: info@falocnersclub.com</p>
            <p>Location: 123 Main St, Anytown USA</p>
          </Col>
          <Col sm="6" className="text-center py-3 border-top border-light">
            <h2 className="socials-heading" style={{ color: "white" }}>
              Check out our socials:
            </h2>
            <Row className="justify-content-center">
              <Col xs="auto">
                <Link to="/" className="social-link">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </Col>
              <Col xs="auto">
                <Link to="/" className="social-link">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </Col>
              <Col xs="auto">
                <Link to="/" className="social-link">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3 border-top border-light"></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

/*eslint-disable*/
import React from "react";
import logo from "./Asset-6-grey.svg";
import '../../../node_modules/@fortawesome/react-fontawesome'
import '../../views/index-sections/ContactUs/IconsLib/IconLib'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black" style={{ backgroundColor: ' #1C2C30 ' }}>
      <Container>
        <Row className="justify-content-center">
          <Col></Col>
          <Col style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={logo}
                alt="white_logo"
                style={{
                  height: "320px",
                  textAlign: "center",
                  display: "block",
                  margin: "-50px auto",
                  marginBottom: '50px'
                }}
              ></img>
              <p>
                Made With{" "}
                <span>
                  <FontAwesomeIcon style={{ height: '20px', width: '35px',color:'red' }} icon={["fas", "heart"]} />
                </span>{" "}
                By Nmit Hacks
              </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;

/*eslint-disable*/
import React from "react";
import logo from "../../assets/img/new.png";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row className="justify-content-center">
          <Col></Col>
          <Col style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={ logo }
                alt="white_logo"
                style={{
                  height: "250px",
                  textAlign: "center",
                  display: "block",
                  margin: "-50px auto"
                }}
              ></img>
              <p>
                Made With{" "}
                <span>
                  <i
                    className="fas fa-heart img-fluid"
                    style={{ color: "red" }}
                  ></i>
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

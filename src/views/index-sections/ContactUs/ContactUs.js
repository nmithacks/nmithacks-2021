import React from "react";
import nmitLogo from "../../../assets/img/nitte_nmit_logo.png";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './IconsLib/IconLib'
//import '../../../../node_modules/@fortawesome/react-fontawesome'


 

const ContactUs = () => {
  return (
    <div
      className="section section-contactUs"
      data-background-color="black"
      id="contactUs-section"
      style={ { backgroundColor:' #1C2C30 '}}
    >
      <Container>
        <p className={["section-about-header h1", styles.title].join(" ")} style={{ color:'#7AF6D1' }}>
          Contact Us
        </p>
        <div className={styles.under}></div>

        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <div style={{ textAlign: "center" }}>
              <a
                href="https://goo.gl/maps/8wwXNWAup9Mw3puDA"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="img-fluid"
                  src={nmitLogo}
                  alt="nmit logo"

                ></img>
                <br></br>
                <p className={["pt-4", styles.text].join(" ")}>
                  Nitte Meenakshi Institute of Technology, P.B.No.6429,
                  Yelahanka, Bangalore 560064
                </p>
              </a>
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "center" }}>
              <span className={styles.icon}>
                <i className="fas fa-phone img-fluid"></i>
              </span>
              <br></br>
              <div className="pt-4">
                {/* <p>
                  <strong>Some Name :</strong> &nbsp;
                  <a href="tel:9992288116">Number</a>
                </p>
                <p>
                  {" "}
                  <strong>Some Name : </strong> &nbsp;
                  <a href="tel:9964217178">Number</a>
                </p> */}
              </div>
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <div style={{ textAlign: "center" }}>
              <span className={styles.icon}>
                <i className="fas fa-envelope img-fluid"></i>
              </span>
              <br></br>
              <div>
                <p className="text-center">
                  <a
                    href="mailto:support@hackbout.tech"
                    target="_BLANK"
                    rel="noopener noreferrer"
                  >
                    support@hackbout.tech
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <p className=" h4 text-center">Follow Us</p>
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <div className="" style={{ margin: "auto 1%" }}>
            <Button
              className="btn-neutral btn-icon  text-center"
              color="twitter"
              href="#"
              id="tooltip86114138"
              size="lg"
              target="_blank"
              style={{ padding:'10px' }}
            >
              {/* <i className="fab fa-twitter" ></i> */}
              <FontAwesomeIcon style={{ height:'35px' ,width:'35px' }} icon={["fab", "twitter"]} />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip86114138">
              Follow us
            </UncontrolledTooltip>
          </div>
          <div className="" style={{ margin: "auto 1%" }}>
            <Button
              className="btn-neutral btn-icon  text-center"
              color="pink"
              href="#"
              id="tooltip735272548"
              size="lg"
              target="_blank"
              style={{ padding:'10px' }}
            >
              <FontAwesomeIcon style={{ height:'35px' ,width:'35px' }} icon={["fab", "instagram"]} />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip735272548">
              Like us
            </UncontrolledTooltip>
          </div>
          <div className="" style={{ margin: "auto 1%" }}>
            <Button
              className="btn-neutral btn-icon  text-center"
              color="blue"
              href="#"
              id="tooltip352725"
              size="lg"
              target="_blank"
              style={{ padding:'10px' }}
            >
              <FontAwesomeIcon style={{ height:'35px' ,width:'35px',color:'#4267B2' }} icon={["fab", "facebook"]} />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip352725">
              Follow Us
            </UncontrolledTooltip>
          </div>
          {/* <div className="" style={{ margin: "auto 1%" }}>
            <Button
              className="btn-neutral btn-icon btn-round text-center"
              color="#29a0da"
              href="#"
              id="tooltip735272532"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-telegram" style={{ color: "#29a0da" }}></i>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip735272532">
              Join Us
            </UncontrolledTooltip>
          </div> */}
        </div>
        <div
          style={{ textAlign: "center", marginTop: "30px", fontSize: "17px" }}
        >
          <a
            href="https://devfolio.co/code-of-conduct"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            Code of Conduct
          </a>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;

// CONTACT US
// Nitte Meenakshi Institute of Technology, P.B.No.6429, Yelahanka, Bangalore 560064.
// Ph : +91 80 22167800

// E-mail: admissions@nmit.ac.in, principal@nmit.ac.in

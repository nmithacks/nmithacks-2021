import React from "react";
import nmitLogo from "../../../assets/img/nitte_nmit_logo.png";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './IconsLib/IconLib'
import logo from '../../../components/Footers/Asset-6-grey.svg'
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
              </a>
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "center" }}>
            <img
                src={logo}
                alt="white_logo"
                style={{
                  height: "120px",
                  textAlign: "center",
                  display: "block",
                  margin: "-50px auto",
                  marginBottom: '50px'
                }}
              ></img>
            </div>
          </Col>
        </Row>
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
              href="https://twitter.com/NMIT_Hacks"
              id="tooltip86114138"
              size="lg"
              target="_blank"
              style={{ padding:'10px' }}
            >
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
              href="https://www.instagram.com/nmit_hacks/"
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
              href="https://www.facebook.com/nmit.hacks.50"
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
          <div className="" style={{ margin: "auto 1%" }}>
            <Button
              className="btn-neutral btn-icon  text-center"
              color="blue"
              href="https://www.linkedin.com/in/nmit-hacks-8082531bb/"
              id="tooltip352725"
              size="lg"
              target="_blank"
              style={{ padding:'10px' }}
            >
              <FontAwesomeIcon style={{ height:'35px' ,width:'35px',color:'#4267B2' }} icon={["fab", "linkedin"]} />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip352725">
              Follow Us
            </UncontrolledTooltip>
          </div>
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

import React from "react";
import "aos/dist/aos.css";
import styles from "./About.module.css";

import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <div className="section section-about" id="about-section">
      <Container className=" ">
        <p className={["section-about-header h1", styles.title].join(" ")}>
          About The Event
        </p>
        <div className={styles.under}></div>
        <Row>
          <Col>
            <p className={styles.text} style={{ fontWeight: "500" }}>
              In this ever advancing age of Technology NMIT Hacks is an open hackathon where participants get to find innovative solutions 
              to their own problem statements. Our Mission is to provide a fun space for learning , innovating and helping participants achieve
              their goal by connecting them with like-minded individuals and top experts from the industry and academia within a timeframe of 48 hours.
              The competition will be judged by a panel of experts and the winners stand a chance towin exciting cash prizes.
            </p>
          </Col>
        </Row>
        <Row>
          {/* <Col
            className="p-5"
            style={{ textAlign: "center" }}
            data-aos="fade-up"
          >
            <img
              src={require("../../../assets/img/logos/food.svg")}
              alt="food"
              style={{ maxWidth: "65%", maxHeight: "65%" }}
            />
            <h5 className={["pt-3", styles.text].join(" ")}>
              Free Snacks and Drinks
            </h5>
          </Col>
          <Col
            className="p-5"
            style={{ textAlign: "center" }}
            data-aos="fade-up"
          >
            <img
              src={require("../../../assets/img/logos/goodies.svg")}
              alt="hackclub-logo"
              style={{ maxWidth: "65%", maxHeight: "65%" }}
            />
            <h5 className={["pt-3", styles.text].join(" ")}>
              Awesome Swags and Goodies!
            </h5>
          </Col>
          <Col
            className="p-5"
            style={{ textAlign: "center" }}
            data-aos="fade-up"
          >
            <img
              src={require("../../../assets/img/logos/24_hour_hack.svg")}
              alt="hackclub-logo"
              style={{ maxWidth: "65%", maxHeight: "65%" }}
            />
            <h5 className={["pt-3", styles.text].join(" ")}>36 Hour Hack</h5>
          </Col>
          <Col
            className="p-5"
            style={{ textAlign: "center" }}
            data-aos="fade-up"
          >
            <img
              src={require("../../../assets/img/logos/bounties.svg")}
              alt="hackclub-logo"
              style={{ maxWidth: "65%", maxHeight: "65%" }}
            />
            <h5 className={["pt-3", styles.text].join(" ")}>Bounties</h5>
          </Col>
          <Col
            className="p-5"
            style={{ textAlign: "center" }}
            data-aos="fade-up"
          >
            <img
              src={require("../../../assets/img/logos/workshop.svg")}
              alt="hackclub-logo"
              style={{ maxWidth: "65%", maxHeight: "65%" }}
            />
            <h5 className={["pt-3", styles.text].join(" ")}>
              Pre-event Workshop
            </h5>
          </Col>
          <Col
            className="p-5"
            style={{ textAlign: "center" }}
            data-aos="fade-up"
          >
            <img
              className={styles.trophy}
              src={require("../../../assets/img/logos/prizes.svg")}
              alt="hackclub-logo"
            />
            <h5 className={["pt-3", styles.text].join(" ")}>Huge Prizes</h5>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default About;

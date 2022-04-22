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
              their goal by connecting them with like-minded individuals and top experts from the industry and academia within a timeframe of 36 hours.
              The competition will be judged by a panel of experts and the winners stand a chance to win exciting cash prizes.
            </p>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    </div>
  );
};

export default About;

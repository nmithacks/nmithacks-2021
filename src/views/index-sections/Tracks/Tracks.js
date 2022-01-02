// eslint-disable-next-line
import React from "react";
import {
  Container,
  Row,
  Col,
  // Card,
  // CardTitle,
  // CardText,
  // CardImgOverlay
} from "reactstrap";

import styles from "./Tracks.module.css";


const Tracks = (props) => {
  return (
    <div
      className={styles.sectionTracks}
      style={{
        background: "#1C2C30"
      }}
      id="tracks-section"
    >
      <Container className="">
        <p
          className={["section-tracks-header h1", styles.title].join(" ")}
          style={{ color: " #A2F6DD" }}
        >
          Tracks
        </p>
        <div className={styles.under}></div>
        <Row style={{ textAlign: "center", margin: "auto" }}>
          <Col>
           
            <div className={styles.flip}>
              <div className={styles.front} >
                <h1>  Blockchain </h1>
              </div>
              <div className={styles.back}>
                <h2>  Blockchain  </h2>
                <p> Join Blockchain enthusiasts, developers and entrepreneurs and explore the convergence of blockchain with other advanced technologies </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.flip}>
              <div className={styles.front} >
              <h1>  AI & ML </h1>
              </div>
              <div className={styles.back}>
                <h2> AI & ML  </h2>
                <p> From the financial sector to the automobile industry, AI has a wide range of applications. If you are an innovator with a passion for AI, this is the perfect platform to meet other AI enthusiasts and build innovative solutions </p>
              </div>
            </div>
            
           
          </Col>
        </Row>
        <Row style={{ textAlign: "center", margin: "auto" }}>

          <Col>
            
        
            <div className={styles.flip}>
              <div className={styles.front} >
                <h1>  IoT </h1>
              </div>
              <div className={styles.back}>
                <h2>  IoT  </h2>
                <p> The Internet of Things, or IoT, refers to the billions of physical devices around the world that are now connected to the internet, all collecting and sharing data. </p>
              </div>
            </div>
          </Col>
          <Col>
          <div className={styles.flip}>
              <div className={styles.front} >
                <h1>  Open Innovation </h1>
              </div>
              <div className={styles.back}>
                <h2>  Open Innovation </h2>
                <p> The theme of this Hackathon is Open-Innovation , which gives you the liberty to find innovative solutions to your own problem statements. Whether you’re a rookie coder or a seasoned veteran, all you need is a laptop, an idea, and a passion to code, to be a part of this event! </p>
              </div>
            </div>
           
          </Col>
        </Row>
        <Row style={{ textAlign: "center", margin: "auto" }}>
          
       
        </Row>
        
      </Container>
    </div>
  );
};

export default Tracks;

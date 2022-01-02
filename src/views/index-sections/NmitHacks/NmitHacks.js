import React from "react";
import {
  Container,
   Row,
   Col
} from "reactstrap";
import styles from "./NmitHacks.module.css";


const NmitHacks = () => {
  

  return (
    <div
      className=" section-hackclub pt-5"
      id="hackclub-section"
      style={{ background: "#ffffff" }}
    >
      <Container style={{ textAlign: "left" }}>
        <p className={["section-about-header h1", styles.title].join(" ")}>
          About NMIT HACKS
        </p>
        <div className={styles.under}></div>
      </Container>
      <Container className=" pt-5">
        <div className="text-center">
          <Row style={{ textAlign: "center" }} data-aos="fade-up">
            
            <Col lg={11}>
              <p style={{ color: "#000", alignContent:'center' ,justifyContent:'center' }} className={styles.text}>
                <b>
                  NMIT Hacks, the Annual National Level Hackathon of CSE Department, NMIT, has been going strong since the year 2015 and has been providing all the enthusiastic participants with a platform to bring any ideas, small or big, into life. <br/><br/>

The theme of this Hackathon is <strong>Open-Innovation </strong> , which gives you the liberty to find innovative solutions to your own problem statements. Whether you’re a rookie coder or a seasoned veteran, all you need is a laptop, an idea, and a passion to code, to be a part of this event! <br/> <br/>

To all the aspiring technopreneurs out there, here is your perfect opportunity to deal with a real-time problem that can bring about a change, and give wings to your imagination by providing the most innovative solution in the due course of 48 hours. <br/> <br/>
                </b>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default NmitHacks;
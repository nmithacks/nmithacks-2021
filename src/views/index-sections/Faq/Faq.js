import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { Card, CardHeader, CardBody, Collapse } from "reactstrap";
//import { Accordion, Card } from "react-bootstrap";
import styles from "./Faq.module.css";
//import { AccordionWrapper, AccordionItem } from 'custom-react-accordion'
//import 'custom-react-accordion/dist/Accordion.css'

import { AccordionWrapper,AccordionItem } from "./index";
import './Accordion.css'

const Faq = () => {
  return (
    <div
      className="section section-faq"
      id="faq-section"
      // style={{ backgroundImage: "linear-gradient(to bottom,#eeeeee,#ffffff)" }}
      style={{ background: "#ffffff" }}
    >
      <Container className=" mt-5">
        <p className={["section-about-header h1", styles.title].join(" ")} style={{ color: "#1C2C30" }}>
          FAQ's
        </p>
        <div className={styles.under}></div>

        <Row>
          <Col>
                <AccordionWrapper  >
                  <AccordionItem index={0} title={"What is a hackathon?"} description={" A hackathon is a design sprint-like event in which computerprogrammers and others involved in software development,including graphic designers, interface designers, projectmanagers, and others, often including domain experts collaborate intensively on projects."}></AccordionItem>
                  <AccordionItem index={1} title={"Who can register?"} description={"Everyone's welcome. Student or Professional."} />
                  <AccordionItem index={2} title={"This is my first hackathon. What if I'm clueless?"} description={"Then we'll be happy that we were the one to guide you through your problems. It’s helpful to have some programming or technical experience, but it’s not a requirement. We’ll have talks, mentors and workshops to help you with your project."} />
                  <AccordionItem index={3} title={"Do I need to have any specific qualifications to be a participant for the hackathon?"} description={"None at all! All you require is the passion to code.."} />
                  <AccordionItem index={4} title={"Can I start working on my hack before the event?"} description={"No! That would amount to cheating and you would be disqualified. This is to ensure that all participants stand on equal footing at the start of the hack."} />
                </AccordionWrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;

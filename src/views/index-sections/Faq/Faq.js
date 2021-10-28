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
            {/* <Accordion data-aos="fade-up" > */}
              {/* defaultActiveKey="1" */}
             
                <AccordionWrapper  >
                  <AccordionItem index={0} title={"What is a hackathon?"} description={" A hackathon is a design sprint-like event in which computerprogrammers and others involved in software development,including graphic designers, interface designers, projectmanagers, and others, often including domain experts collaborate intensively on projects."}></AccordionItem>
                  <AccordionItem index={1} title={"Who can register?"} description={"Everyone's welcome. Student or Professional."} />
                  <AccordionItem index={2} title={"This is my first hackathon. What if I'm clueless?"} description={"Then we'll be happy that we were the one to guide you through your problems. It’s helpful to have some programming or technical experience, but it’s not a requirement. We’ll have talks, mentors and workshops to help you with your project."} />
                  <AccordionItem index={3} title={"Do I need to have any specific qualifications to be a participant for the hackathon?"} description={"None at all! All you require is the passion to code.."} />
                  <AccordionItem index={4} title={"Can I start working on my hack before the event?"} description={"No! That would amount to cheating and you would be disqualified. This is to ensure that all participants stand on equal footing at the start of the hack."} />
                </AccordionWrapper>
                {/* <Accordion.Header as={Card.Header} eventKey="1">
                  <p>
                    <b>Q. What is a hackathon? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    A hackathon is a design sprint-like event in which computer
                    programmers and others involved in software development,
                    including graphic designers, interface designers, project
                    managers, and others, often including domain experts,
                    collaborate intensively on projects.
                  </Card.Body>
                </Accordion.Collapse> */}
                {/* <Accordion.Item eventKey="0" flush  style={{  backgroundColor:'purple' }} >
                  <Accordion.Header > <span >Accordion Item #1 </span> </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor:'#3D2C8D' , color:'antiquewhite' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item> */}
                {/* <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item> */}
              {/* <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="2">
                  <p>
                    <b>Q. Who can register? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Everyone's welcome. Student or Professional.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="545">
                  <p>
                    <b>Q. Is there a registration fee? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="545">
                  <Card.Body>
                    Absolutely not. This event is totally free of cost {":)"}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="869">
                  <p>
                    <b>Q. What's the last date of registrations? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="869">
                  <Card.Body>
                    Registrations close on <strong>29th February, 2020</strong>{" "}
                    at <strong>23:59</strong>. So, giddy up and submit your
                    ideas ASAP and don't wait for the last minute!
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="969">
                  <p>
                    <b>Q. What are Bounties? How to win them? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="969">
                  <Card.Body>
                    Bounties are special side prizes which you and your team can
                    win with/without the main prizes. Just make sure your teams
                    follows the requirements of the specific bounty to stand a
                    chance to win it. PS Your team can win more than one bounty.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="3">
                  <p>
                    <b>Q. This is my first hackathon. What if I'm clueless? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines "></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Then we'll be happy that we were the one to guide you
                    through your problems. It’s helpful to have some programming
                    or technical experience, but it’s not a requirement. We’ll
                    have talks, mentors and workshops to help you with your
                    project.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="4">
                  <p>
                    <b>Q. How many members are required in a team? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines "></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    The maximum team size is 4. The minimum is 2. Because we
                    want you to have company and not be alone on this amazing
                    journey :){" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="13">
                  <p>
                    <b>Q. What if I haven't formed a team yet !</b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines "></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="13">
                  <Card.Body>
                    Don't worry you can collaborate with other hackers on our
                    telegram group to work on an idea in the same track to form
                    a team !
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="5">
                  <p>
                    <b>
                      Q. Do I need to have any specific qualifications to be a
                      participant for the hackathon?{" "}
                    </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    None at all! All you require is the passion to code.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="6">
                  <p>
                    <b>Q. What shouldn't I bring to the Hackathon? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    Anything that would cause a disturbance in the atmosphere of
                    pure awesomeness is not allowed. Yeah we're talking about
                    weapons of any kind, drugs, or alcohol. If you're not sure
                    ask ahead.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="7">
                  <p>
                    <b>Q. Can I start working on my hack before the event? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    No! That would amount to cheating and you would be
                    disqualified. This is to ensure that all participants stand
                    on equal footing at the start of the hack.{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="8">
                  <p>
                    <b>Q. How does judging work? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>
                    A panel of some experienced professionals will evaluate
                    hacks based on creativity, technical difficulty, design, and
                    usefulness.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="9">
                  <p>
                    <b>Q. Do we have to be present at the site to hack? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>
                    Absolutely! This is an offline hack. So, yes, you need to be
                    present at the venue.{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="10">
                  <p>
                    <b>Q. Do I get travel reimbursement? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    Unfortunately, we are unable to provide reimbursements this
                    time.{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="light" text="black" className={styles.mt}>
                <Accordion.Button as={Card.Header} eventKey="11">
                  <p>
                    <b>Q. I didn't find my question here, what can i do? </b>
                    <span style={{ float: "right" }}>
                      <i className="fas fa-grip-lines"></i>
                    </span>
                  </p>
                </Accordion.Button>
                <Accordion.Collapse eventKey="11">
                  <Card.Body>
                    If you have any other questions or concerns, reach out to us
                    using the contact details below
                  </Card.Body>
                </Accordion.Collapse>
              </Card> */}
            {/* </Accordion> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;

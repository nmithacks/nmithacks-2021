// eslint-disable-next-line
import React from "react";
import {
  Container,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

import styles from "./Schedule.module.css";

const Schedule = () => {
  const [pills, setPills] = React.useState("1"); // setPills removed
  return (
    <div
      className="section section-schedule"
      style={{ background: "#ffffff" }}
      id="schedule-section"
    >
      <Container className=" mt-5">
        <p className={["section-bounties-header h1 ", styles.title].join(" ")} style={{ color:' #1C2C30' }}>
          Schedule
        </p>
        <div className={styles.under}></div>

        <Row className="">
          <Col className="">
            <Nav
              className="nav-pills-success nav-pills-just-icons float-right"
              pills
              role="tablist"
              tabs
              
            >
              <NavItem data-aos="fade-up" >
                <NavLink
                  className={pills === "1" ? "active" : ""}
                  style={{ float: "right" }}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills("1");
                  }}
                  // eslint-disable-next-line
                  style={{ backgroundColor:' #1C2C30' }}
                >
                  <div style={{ color:' #A2F6DD' }}>Day</div>
                  <div className="h1" style={{ color:' #A2F6DD' }}>1</div>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col className="">
            <Nav
              className="nav-pills-success nav-pills-just-icons float-left"
              pills
              role="tablist"
              tabs
            >
              <NavItem data-aos="fade-up">
                <NavLink
                  className={pills === "2" ? "active" : ""}
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setPills("2");
                  }}
                  style={{ backgroundColor:' #1C2C30' }}
                >
                  <div style={{ color:' #A2F6DD' }}>Day</div>
                  <div className="h1" style={{ color:' #A2F6DD' }}>2</div>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>

        <TabContent
          className="text-center mt-3"
          activeTab={"pills" + pills}
          data-aos="fade-up"
        >
          <TabPane tabId="pills1" className={styles.tab}>
            <h4 className={ styles.large_text }>
              {/* <b> To be announced </b>{" "} */}
            </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div style={{ float: "left" }}>
                  <b>10:00 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Reporting and Registration</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>11:00 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Inauguration ceremony</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>11:40 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Hack Begins!</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>12:00 PM to 12:45 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Lunch</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>4:30 PM - 5:00 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Snacks</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>7:00 PM - 8:00 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Judging Round 1</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>8:00 PM - 8:45 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Dinner</b>
                </div>
              </li>
              {/* <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>6:30 PM - 8:30 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>First Round of Mentorship !</b>
                </div>
              </li> */}
              {/* <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>8:30 PM - 9:30 PM </b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Dinner!</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>9:30 PM - 12:00 AM </b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Hacking Continues</b>
                </div>
              </li> */}
            </ul>
          </TabPane>
          <TabPane tabId="pills2" className={styles.tab}>
            <h4>
              {" "}
              {/* <b>To be announced</b> */}
            </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>1:30 AM - 2:30 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Midnight Surprise & Snacks</b>
                </div>
              </li>
              {/* <li className="list-group-item">
                <div style={{ float: "left" }}>
                  <b>8:00 AM - 9:00 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Breakfast</b>
                </div>
              </li> */}
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>7:30 AM - 9:00 AM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Breakfast</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>11:00 AM - 12:00 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Judging Round 2</b>
                </div>
              </li>
              {/* <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>11:00 AM - 1:30 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Judging Round</b>
                  <br></br>
                  <b>&</b>
                  <br></br>
                  <b>Hack Submission</b>
                </div>
              </li> */}
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>12:00 PM - 1:00 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Lunch </b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>4:00 PM - 5:00 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Final Judging Round</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>5:00 PM - 6:00 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Closing Ceremony and Prize Distribution</b>
                </div>
              </li>
              <li className="list-group-item">
                {" "}
                <div style={{ float: "left" }}>
                  <b>6:00 PM</b>
                </div>
                <div style={{ float: "right" }}>
                  <b>Afterparty!!</b>
                  {/* <br></br>
                  <b>+</b>
                  <br></br>
                  <b style={{ float: "right" }}>Prize Distribution </b> */}
                </div>
              </li>
            </ul>
          </TabPane>
        </TabContent>
      </Container>
    </div>
  );
};

export default Schedule;

//ignore-eslint
import React from "react";
import { Container, Row, Col } from "reactstrap";

import devfolio from "./Devfolio_Logo_Colored.png"
import polygon from "./Polygon_Logo_Colored.png"
import celo from "./Celo_Logo_Color.png"
import tezos from "./Tezos_Logo_Colored.png"
import filecoin from "./Filecoin_Coloured_White_Text.png"
import newton from "../../../assets/img/Logo2.jpeg"
import task from "./taskade-logo.png";
import Styles from "./Sponsors.module.css";
import cape from './Capgemini_Logo_Color_RGB.svg';
import fly from './Circular_logo.png';
import sakha from './Sakha-Global.png';
const Sponsors = () => {
  return (
    <div
      className=" section-sponsors pt-5"
      id="sponsors-section"
      style={{ background: "#ffffff" }}
    >
      <Container className=" pt-5">
        <p className={["section-bounties-header h1 ", Styles.title].join(" ")} style={{ color:' #1C2C30' }}>
          Sponsors
        </p>
        <div className={Styles.under}></div>

        <div className="text-center">
        <Row>
          <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.capgemini.com/in-en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cape}
                  alt="capegemini-logo"
                  className={Styles.inVision}
                  style={{height:'320px',width:'420px',top:'70px'}}
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
              lg={true}
              className={["p-3 mb-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://flycamp.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={fly}
                  alt="devfolio-logo"
                  className={[Styles.mainSponsors, Styles.devfolio].join(" ")}
                  style={{height:'180px',width:'220px'}}
                />
              </a>
            </Col>
             
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.sakhaglobal.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sakha} alt="ieee-logo" className={Styles.ieee} style={{height:'180px',width:'370px'}} />
              </a>
            </Col>
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
              lg={true}
              className={["p-3 mb-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://devfolio.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={devfolio}
                  alt="devfolio-logo"
                  className={[Styles.mainSponsors, Styles.devfolio].join(" ")}
                />
              </a>
            </Col>
             
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://polygon.technology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={polygon} alt="ieee-logo" className={Styles.ieee} style={{marginTop:'20px'}} />
              </a>
            </Col>
          </Row>
          
          <Row>
          <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.taskade.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={task}
                  alt="taskade-logo"
                  className={Styles.inVision}
                  
                />
              </a>
            </Col>
           

            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a href="https://celo.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src={celo}
                  alt="girlGeeks-logo"
                  className={Styles.girlGeeks}
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://tezos.com/"
                target="_blank"
                rel="noopener noreferrer"
               
              >
                <img
                  style={{marginTop:'20px'}}
                  src={tezos}
                  alt="gatsbyjs-logo"
                  className={Styles.gatsby}
                />
              </a>
            </Col>
            <Col
              data-aos="fade-up"
              md={true}
              className={["mt-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://filecoin.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={filecoin}
                  alt="inVision-logo"
                  className={Styles.inVision}
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col
              data-aos="fade-up"
              lg={true}
              className={["p-3 mb-5 text-center", Styles.sponsors].join(" ")}
            >
              <a
                href="https://www.newtonschool.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={newton}
                  alt="newton-logo"
                  style={{ top:'20px',height:'170px',width:'350px'}}
                  className={[Styles.mainSponsors, Styles.devfolio].join(" ")}
                />
              </a>
            </Col>
          </Row>
          
        </div>
      </Container>
    </div>
  );
};

export default Sponsors;
import React, {  } from "react";
import { Container, Row, Col,  } from "reactstrap";
import styles from "./Prizes.module.css";
import first from "./first.png";
// import image1 from './father-day03.svg'
import second from "./second.png";
import third from "./third.png";

const Bounties = () => {
  return (
    <div className=" section-sponsors pt-5" id="prizes-section">
      <Container className=" pt-5">
        <p className={["section-bounties-header h1 ", styles.title].join(" ")} style={{ color:'#1C2C30' }}>
          Prizes
        </p>
        <div className={styles.under}></div>

        <Row style={{ textAlign: "center" }}>
          <Col>
            <div className={ styles.cont}>
              <div className={ styles.card2 }>
                 <img src={ first } alt='Hey' />
                <p style ={ { fontSize:'2.5em', padding:'10px' } } className={styles.first} > <span> 1st Prize </span> </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col>
          <div className={ styles.cont}>
              <div className={ styles.card2 }>
                 <img src={ second } alt='Hey' />
                <p style ={ { fontSize:'2.5em', padding:'10px' } } className={styles.second} > <span> 2nd Prize </span> </p>
              </div>
            </div>
          </Col>
          <Col>
          <div className={ styles.cont}>
              <div className={ styles.card2 }>
                 <img src={ third } alt='Hey' />
                <p style ={ { fontSize:'2.5em', padding:'10px' } } className={styles.third} > <span> 3rd Prize </span> </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bounties;

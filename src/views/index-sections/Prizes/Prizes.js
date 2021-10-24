import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import styles from "./Prizes.module.css";
import first from "./first.png";
import image1 from './father-day03.svg'
import second from "./second.png";
import third from "./third.png";
//import PrizeCards from "../../../components/Cards/PrizeCards";

const Bounties = () => {
  return (
    <div className=" section-sponsors pt-5" id="prizes-section">
      <Container className=" pt-5">
        <p className={["section-bounties-header h1 ", styles.title].join(" ")}>
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
            {/* <PrizeCards title='1st Prize' val='INR 25,000' /> */}
            {/* <Card className={styles.card1} data-aos="fade-up">
              <img src={first} alt="first" className={styles.img} />
              <h2>₹ 1,00,000 </h2>
            </Card> */}
            {/* <div data-aos="fade-up">
            <div className={styles.prizes_card1}>
                <div className={styles.imgBx}>
                <img  src={ first } alt='1st Prize'  />
                </div>
                <p className='random'> INR 50,000 </p>
            </div>
            </div> */}
          </Col>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col>
          <div className={ styles.cont}>
              <div className={ styles.card2 }>
                 <img src={ second } alt='Hey' />
                <p style ={ { fontSize:'2.5em', padding:'10px' } } className={styles.first} > <span> 2nd Prize </span> </p>
              </div>
            </div>
            {/* <Card className={styles.card1} data-aos="fade-up">
              <img src={second} alt="Second" className={styles.img} />
              <h2>₹ 50,000 </h2>
            </Card> */}
            {/* <div data-aos="fade-up">
            <div className={styles.prizes_card1}>
                <div className={styles.imgBx}>
                <img  src={ first } alt='1st Prize'  />
                </div>
                <p className='random'> INR 50,000 </p>
            </div>
            </div> */}
          </Col>
          <Col>
          <div className={ styles.cont}>
              <div className={ styles.card2 }>
                 <img src={ third } alt='Hey' />
                <p style ={ { fontSize:'2.5em', padding:'10px' } } className={styles.first} > <span> 3rd Prize </span> </p>
              </div>
            </div>
            {/* <Card className={styles.card1} data-aos="fade-up">
              <img src={third} alt="Third" className={styles.img} />
              <h2>₹ 25,000 </h2>
            </Card> */}
            {/* <div className={ styles.container } data-aos="fade-up">
            <div className={styles.prizes_card1}>
                <div className={styles.imgBx}>
                <img  src={ first } alt='1st Prize'  />
                </div>
                <p className='random'> INR 50,000 </p>
            </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bounties;

import React from "react";
import {
  Container,
  Row,
  Col,
  // Card,
  // CardBody,
  // CardTitle,
  // CardImg,
  // CardText
} from "reactstrap";
import mOne from "../../../components/Slider/Aditya_Vijaykumar-min.jpg";
import mTwo from "../../../components/Slider/Onkar.jpg";
import mThree from "../../../components/Slider/Bhargav.jpg";
import mFour from "../../../components/Slider/Ekeswar_Reddy-min.jpg";
import mFive from "../../../components/Slider/Archita_Bhatnagar-min.jpeg";
import mSix from "../../../components/Slider/Tejashree_Krishna_Murthy-min.jpg";
import mSeven from "../../../components/Slider/V_V_Sree_Harsha_1-min.jpg";
import mEight from "../../../components/Slider/Vasudeva_S_1-min.jpeg";
import mNine from "../../../components/Slider/Harshitha_K-min.jpg";
import mTen from "../../../components/Slider/Harshitha_S_A_1-min.jpeg";
// import meleven from "../../../assets/img/rachana.jpg";
// import mTwelve from "../../../assets/img/swayam.jpg";
// import mThiretten from "../../../assets/img/abhitej.jpg";
// import mFourteen from "../../../assets/img/Nagaraja.jpg";
// import mFifteen from "../../../assets/img/Vishwas.jpg";
// import mSixteen from "../../../assets/img/Anand.jpeg";
// import mSeventeen from "../../../assets/img/Kartik.jpg";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../ContactUs/IconsLib/IconLib';
import Slider from "../../../components/Slider/Slider";
import styles from "./Mentor.module.css";

const Mentors = () => {

  const slideData = [
    {
      index: 0,
      headline: 'Aditya Vijaykumar',
      button: 'Coordinator',
      src: mOne
    },
    {
      index: 1,
      headline: 'Onkar Bharatesh',
      button: 'Coordinator',
      src: mTwo
    },
    {
      index: 2,
      headline: 'Bhargav D Bhat',
      button: 'Coordinator',
      src: mThree
    },
    {
      index: 3,
      headline: 'Ekeshwar Reddy',
      button: 'Coordinator',
      src: mFour
    },
    {
      index: 4,
      headline: 'Architha Bhatnagar',
      button: 'Coordinator',
      src: mFive
    },
    {
      index: 5,
      headline: 'Tejashree K Murthy',
      button: 'Coordinator',
      src: mSix
    },
    {
      index: 6,
      headline: 'V V Sree Harsha',
      button: 'Coordinator',
      src: mSeven
    },
    {
      index: 7,
      headline: 'Vasudeva S',
      button: 'Coordinator',
      src: mEight
    },
    {
      index: 8,
      headline: 'Harshitha K',
      button: 'Coordinator',
      src: mNine
    },
    {
      index: 9,
      headline: 'Harshitha S A',
      button: 'Coordinator',
      src: mTen
    }
  ]
  return (
    <div
      className={styles.sectionMentors}
      style={{
        background: "#1C2C30",
        marginTop: '30px'
      }}
      id="Mentors-section"
    >
      <Container className=" pt-5">
        <p
          className={["section-bounties-header h1 ", styles.title].join(" ")}
          style={{ color: "#7AF6D1", marginTop: '-40px' }}
        >
          Teams
        </p>
        <div className={styles.under}></div>
        {/* <p style={{color:'#7AF6D1',fontSize:'40px',marginTop:'80px',display:'inline',textTransform:'capitalize'}}>Coming Soon...</p> */}

        <Row id="none" style={{ textAlign: "center" }}>
          <Slider heading="Mentors" slides={slideData} />
          <Col>
            <div className={styles.card_container}>
              <div className={styles.inside}>
                <div className={styles.imgBx}>
                  <img src={mOne} alt="alternate" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Aditya Vijaykumar</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.card_container}>
              <div className={styles.inside}>
                <div className={styles.imgBx}>
                  <img src={mTwo} alt="alternate" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Onkar Bharatesh</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.card_container}>
              <div className={styles.inside}>
                <div className={styles.imgBx}>
                  <img src={mThree} alt="alternate" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Bhargav D Bhat</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.card_container}>
              <div className={styles.inside}>
                <div className={styles.imgBx}>
                  <img src={mFour} alt="alternate" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Ekeswar Reddy</h3>
                </div>
              </div>
            </div>
          </Col>
          
        </Row>
        <Row>
        <Col>
            <div className={styles.card_container}>
              <div className={styles.inside}>
                <div className={styles.imgBx}>
                  <img src={mFive} alt="alternate" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Archita Bhatnagar</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.card_container}>
              <div className={styles.inside}>
                <div className={styles.imgBx}>
                  <img src={mSix} alt="alternate" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Tejashree Krishna Murthy</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.card_container}>
              <div className={styles.inside}>
                <div className={styles.imgBx}>
                  <img src={mSeven} alt="alternate" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>V V Sree Harsha</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.card_container}>
              <div className={styles.inside}>
                <div className={styles.imgBx}>
                  <img src={mEight} alt="alternate" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Vasudeva S</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
        <Col>
            <div style={{marginLeft:'360px'}}>
            <div className={styles.card_container}>
              <div className={styles.inside}>
                <div className={styles.imgBx}>
                  <img src={mNine} alt="alternate" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Harshitha K</h3>
                </div>
              </div>
            </div>
            </div>
          </Col>
          <Col>
            <div className={styles.card_container}>
              <div className={styles.inside}>
                <div className={styles.imgBx}>
                  <img src={mTen} alt="alternate" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentBx}>
                  <h3>Harshitha S A</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Button
          color=""
          size="lg"
          style={{
            borderRadius: "20px",
            backgroundImage: "linear-gradient(45deg, #27b574 0%, #24fe41 100%)"
          }}
        >
          Become a Mentor!
        </Button> */}
      </Container>
    </div>
  );
};

export default Mentors;
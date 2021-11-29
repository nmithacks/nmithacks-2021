import React from "react";
import {
  Container,
  Row,
  //Col,
  // Card,
  // CardBody,
  // CardTitle,
  // CardImg,
  // CardText
} from "reactstrap";
//import mOne from "../../../assets/img/kanirudh.jpg";
// import mTwo from "../../../assets/img/Manav.jpg";
// import mThree from "../../../assets/img/mThree.jpeg";
// import mFour from "../../../assets/img/vasanth.jpg";
// import mFive from "../../../assets/img/karthikeyan.jpg";
// import mSix from "../../../assets/img/himanshu.jpg";
// import mSeven from "../../../assets/img/kalai.PNG";
// import mEight from "../../../assets/img/sneha.jpg";
// import mNine from "../../../assets/img/Swathi.jpg";
// import mTen from "../../../assets/img/chandra.jpg";
// import meleven from "../../../assets/img/rachana.jpg";
// import mTwelve from "../../../assets/img/swayam.jpg";
// import mThiretten from "../../../assets/img/abhitej.jpg";
// import mFourteen from "../../../assets/img/Nagaraja.jpg";
// import mFifteen from "../../../assets/img/Vishwas.jpg";
// import mSixteen from "../../../assets/img/Anand.jpeg";
// import mSeventeen from "../../../assets/img/Kartik.jpg";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../ContactUs/IconsLib/IconLib';
//import Slider from "../../../components/Slider/Slider";
import styles from "./Mentor.module.css";

const Mentors = () => {
  // const slideData = [
  //   {
  //     index: 0,
  //     headline: 'Some Name',
  //     button: 'Coordinator',
  //     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
  //   },
  //   {
  //     index: 1,
  //     headline: 'Some Name',
  //     button: 'Coordinator',
  //     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  //   },
  //   {
  //     index: 2,
  //     headline: 'Some Name',
  //     button: 'Coordinator',
  //     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  //   },
  //   {
  //     index: 3,
  //     headline: 'Some Name',
  //     button: 'Coordinator',
  //     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
  //   },
  //   {
  //     index: 4,
  //     headline: 'Some Name',
  //     button: 'Coordinator',
  //     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
  //   },
  //   {
  //     index: 5,
  //     headline: 'Some Name',
  //     button: 'Coordinator',
  //     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  //   },
  //   {
  //     index: 6,
  //     headline: 'Some Name',
  //     button: 'Coordinator',
  //     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  //   },
  //   {
  //     index: 7,
  //     headline: 'Some Name',
  //     button: 'Coordinator',
  //     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
  //   }
  // ]
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
        <p style={{color:'#7AF6D1',fontSize:'40px',marginTop:'80px',display:'inline',textTransform:'capitalize'}}>Coming Soon...</p>

        <Row style={{ textAlign: "center" }}>
          {/* <Slider heading="Mentors" slides={slideData} /> */}
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
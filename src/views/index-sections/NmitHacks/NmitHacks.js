import React from "react";
import {
  Container,
   Row,
   Col,
  // Carousel,
  // CarouselItem,
  // CarouselIndicators
} from "reactstrap";
import styles from "./NmitHacks.module.css";
// import hackClub from "../../../assets/img/hack-club.svg";

const NmitHacks = () => {
  // const items = [
  //   {
  //     src: require("../../../assets/img/cp4.jpg")
  //   },
  //   {
  //     src: require("../../../assets/img/cp2.jpg")
  //   },
  //   {
  //     src: require("../../../assets/img/cp3.jpg")
  //   },
  //   {
  //     src: require("../../../assets/img/cp1.jpg")
  //   },
  //   {
  //     src: require("../../../assets/img/cp5.jpg")
  //   },
  //   {
  //     src: require("../../../assets/img/cp6.jpg")
  //   },
  //   {
  //     src: require("../../../assets/img/cp7.jpg")
  //   },
  //   {
  //     src: require("../../../assets/img/cp8.jpg")
  //   }
  // ];

  // const [activeIndex, setActiveIndex] = React.useState(0);
  // const [animating, setAnimating] = React.useState(false);
  // const onExiting = () => {
  //   setAnimating(true);
  // };
  // const onExited = () => {
  //   setAnimating(false);
  // };
  // const next = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };
  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };
  // const goToIndex = newIndex => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

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
      {/* <img
        data-aos="slide-right"
        className={styles.hack}
        src="https://hackclub.com/banners/2020.svg"
        alt="Hack Club"
      /> */}
      <Container className=" pt-5">
        <div className="text-center">
          <Row style={{ textAlign: "center" }} data-aos="fade-up">
            {/* <Col lg={6}>
              <Carousel
                data-aos="fade-up"
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className={styles.Carousel}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col> */}
            <Col lg={11}>
              <p style={{ color: "#000", alignContent:'center' ,justifyContent:'center' }} className={styles.text}>
                <b>
                  {/* We’re <strong>Hack Club NMIT</strong>, the official student
                  chapter of {"  "}
                  <span>
                    <img
                      src={hackClub}
                      alt="hackclub-logo"
                      className={styles.club}
                    />
                  </span>{" "}
                  , a global nonprofit network of student lead coding clubs.
                  It’s a great way for us to try out the best ideas from our
                  community, develop curriculum, and stay sharp as teachers. We
                  also just love doing it! Hack Clubs meet weekly at their
                  schools, typically for 1.5hrs after school. There are no
                  teachers or lectures, members work at their own pace making
                  websites, apps, & games, and presenting them. */}
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
import React from "react";
import { Container } from "reactstrap";

//import Cards from "../../../components/Cards/Cards";
import styles from "./Team.module.css";

const Team = () => {
  return (
    <div
      className={styles.sectionTeam}
      style={{
        background: "#fff"
      }}
    >
      <Container>
        <p className={["section-team-header h1 ", styles.title].join(" ")}>
          Team
        </p>
        <div className={styles.under}></div>
        <div style={{ textAlign: "center" }}>
          {/* <Cards
            title="Anurag"
            path="https://raw.githubusercontent.com/HackClub-NMIT/hackbout/master/src/assets/img/Team/Anurag.jpg"
            top="-48px"
            left="-48px"
            size="220px"
            linked="https://www.linkedin.com/in/ashleymavericks/"
          >
            Club Lead
          </Cards>
          <Cards
            title="Rachet"
            path="https://raw.githubusercontent.com/HackClub-NMIT/hackbout/master/src/assets/img/Team/Rachet.jpeg"
            linked="https://www.linkedin.com/in/rachetm"
            top="-10px"
            left="-50px"
            size="300px"
          >
            Club Co-Lead
          </Cards>
          <br></br>
          <Cards
            title="Abhishek"
            top="-10px"
            left="-25px"
            size="260px"
            path="https://raw.githubusercontent.com/HackClub-NMIT/hackbout/master/src/assets/img/Team/Abhishek.jpg"
            linked="https://www.linkedin.com/in/abhikedia/"
          >
            Head of Finances
          </Cards>
          <Cards
            title="Arpit"
            top="-20px"
            left="-55px"
            size=""
            path="https://raw.githubusercontent.com/HackClub-NMIT/hackbout/master/src/assets/img/Team/Arpit.jpg"
            linked="https://www.linkedin.com/in/arpit-giri-553a2a131/"
          >
            Design Head
          </Cards>
          <Cards
            title="Avinash"
            top="-50px"
            left="-55px"
            size="300px"
            path="https://raw.githubusercontent.com/HackClub-NMIT/hackbout/master/src/assets/img/Team/Avinash.jpg"
            linked="https://www.linkedin.com/in/avinash-singh-0b127017b"
          >
            Logistics Head
          </Cards>
          <Cards
            title="Dheemanth"
            top="-35px"
            left="-5px"
            size="390px"
            path="https://raw.githubusercontent.com/HackClub-NMIT/hackbout/master/src/assets/img/Team/Dheemanth.jpg"
            linked="https://www.linkedin.com/in/dheemanth-m-d/"
          >
            Sponsorship Head
          </Cards>
          <Cards
            title="Fazal"
            top="-14px"
            left="-50px"
            size="220px"
            path="https://raw.githubusercontent.com/HackClub-NMIT/hackbout/master/src/assets/img/Team/Fazal.jpg"
            linked="https://www.linkedin.com/in/fazal-rehman-826a2a156"
          >
            Social Media Head
          </Cards>

          <Cards
            title="Uday"
            top="0px"
            left="-49px"
            size="430px"
            path="https://raw.githubusercontent.com/HackClub-NMIT/hackbout/master/src/assets/img/Team/Uday.jpg"
            linked="https://www.linkedin.com/in/uday-uday-08956617b"
          >
            Mentorship Support
          </Cards>
          <Cards
            title="Rudransh"
            top="-40px"
            left="-48px"
            size="220px"
            path="https://raw.githubusercontent.com/HackClub-NMIT/hackbout/master/src/assets/img/Team/Rudy.jpg"
            linked="https://www.linkedin.com/in/rudransh-tewari-3008891a2/"
          >
            Web Design Head
          </Cards>

          <Cards
            title="Sagar"
            top="-20px"
            left="-35px"
            size="750px"
            path="https://raw.githubusercontent.com/HackClub-NMIT/hackbout/master/src/assets/img/Team/Sagar.jpg"
            linked="https://www.linkedin.com/in/sagar-m-2489901a1"
          >
            Public Relations Head
          </Cards>
          <Cards
            title="Yash"
            top="-40px"
            left="-35px"
            size="450px"
            path="https://raw.githubusercontent.com/HackClub-NMIT/hackbout/master/src/assets/img/Team/Yash.jpg"
            linked="https://www.linkedin.com/in/yashjaiswal1/"
          >
            Marketing Head
          </Cards> */}
          {/* <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.imgBx}>

              </div>
              <div className={styles.content}>
                <h2> Random Name </h2><br />
                <p> Tech Team </p>
              </div>
              <div className={styles.icon}>
              </div>
            </div>

          </div> */}

        </div>
      </Container>
    </div>
  );
};

export default Team;

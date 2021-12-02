// eslint-disable-next-line
import React from "react";
import logo1 from './Asset-5-grey.svg'
// import { Link } from "react-router-dom";

// reactstrap components
import {
  // Button,
  Collapse,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
  // UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  // const [navItemColor, setNavbarItemColor] = React.useState("navbar-transparent");
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 199 ||
        document.body.scrollTop > 199
      ) {
        setNavbarColor("");
        // setNavbarItemColor("white");
      } else if (
        document.documentElement.scrollTop < 200 ||
        document.body.scrollTop < 200
      ) {
        setNavbarColor("navbar-transparent");
        // setNavbarItemColor("black");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });




  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.remove("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" style={{ height: '60px', background: ' #1C2C30' }}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="" id="navbar-brand">
              <img
                src={logo1}
                alt="Hackathon_logo"
                style={{ height: "40px", width: '220px' }}
              ></img>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span
                className="navbar-toggler-bar top-bar"
                style={{ background: "#A2F6DD" }}
              ></span>
              <span
                className="navbar-toggler-bar middle-bar"
                style={{ background: "#A2F6DD" }}
              ></span>
              <span
                className="navbar-toggler-bar bottom-bar"
                style={{ background: "#A2F6DD" }}
              ></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
            style={{ backgroundColor: "black" }}
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document.documentElement.classList.remove("nav-open");
                    document.querySelector(".page-header").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <h5
                    style={{
                      color: "#A2F6DD",
                      position: "relative",
                      top: "5px"
                    }}
                  >
                    <b>Home</b>
                  </h5>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document.documentElement.classList.remove("nav-open");
                    document.getElementById("tracks-section").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <h5
                    style={{ color: "#A2F6DD", position: "relative", top: "5px" }}
                  >
                    <b>Tracks</b>
                  </h5>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document.documentElement.classList.remove("nav-open");
                    document.getElementById("bounties-section").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <h5
                    style={{ color: "black", position: "relative", top: "5px" }}
                  >
                    <b>Bounties</b>
                  </h5>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document.documentElement.classList.remove("nav-open");
                    document.getElementById("prizes-section").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <h5
                    style={{ color: "#A2F6DD", position: "relative", top: "5px" }}
                  >
                    <b>Prizes</b>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document.documentElement.classList.remove("nav-open");
                    document.getElementById("schedule-section").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <h5
                    style={{ color: "#A2F6DD", position: "relative", top: "5px" }}
                  >
                    <b>Schedule</b>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document.documentElement.classList.remove("nav-open");
                    document.getElementById("sponsors-section").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <h5
                    style={{ color: "#A2F6DD", position: "relative", top: "5px" }}
                  >
                    <b>Sponsors</b>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>

                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document.documentElement.classList.remove("nav-open");
                    document.getElementById("Mentors-section").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <h5
                    style={{ color: "#A2F6DD", position: "relative", top: "5px" }}
                  >
                    <b>Teams</b>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document.documentElement.classList.remove("nav-open");
                    document.getElementById("faq-section").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <h5
                    style={{ color: "#A2F6DD", position: "relative", top: "5px" }}
                  >
                    <b>FAQ</b>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document.documentElement.classList.remove("nav-open");
                    document
                      .getElementById("contactUs-section")
                      .scrollIntoView({
                        behavior: "smooth"
                      });
                  }}
                >
                  <h5
                    style={{ color: "#A2F6DD", position: "relative", top: "5px" }}
                  >
                    <b>Contact Us</b>
                  </h5>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;

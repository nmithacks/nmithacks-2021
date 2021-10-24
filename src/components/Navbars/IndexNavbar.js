import React from "react";
import logo from "../../assets/img/logos/hbLogo1.png";
import logo1 from '../../assets/img/new.png'
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
  const [navItemColor, setNavbarItemColor] = React.useState("navbar-transparent");
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 199 ||
        document.body.scrollTop > 199
      ) {
        setNavbarColor("");
        setNavbarItemColor("white");
      } else if (
        document.documentElement.scrollTop < 200 ||
        document.body.scrollTop < 200
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarItemColor("black");
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
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="white" style={{ height: '60px' }}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="" id="navbar-brand">
              <img
                src={logo1}
                alt="Hackathon_logo"
                style={{ height: "70px" }}
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
                style={{ background: "black" }}
              ></span>
              <span
                className="navbar-toggler-bar middle-bar"
                style={{ background: "black" }}
              ></span>
              <span
                className="navbar-toggler-bar bottom-bar"
                style={{ background: "black" }}
              ></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
            style={{ backgroundColor: "#22B573" }}
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document.documentElement.classList.remove("nav-open");
                    document.querySelector(".header-main").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <h5
                    style={{
                      color: "black",
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
                    style={{ color: "black", position: "relative", top: "5px" }}
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
                    style={{ color: "black", position: "relative", top: "5px" }}
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
                    style={{ color: "black", position: "relative", top: "5px" }}
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
                    document.getElementById("Mentors-section").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <h5
                    style={{ color: "black", position: "relative", top: "5px" }}
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
                    document.getElementById("sponsors-section").scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  <h5
                    style={{ color: "black", position: "relative", top: "5px" }}
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
                  document.getElementById("faq-section").scrollIntoView({
                    behavior: "smooth"
                  });
                }}
              >
                <h5
                  style={{ color: "black", position: "relative", top: "5px" }}
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
                    style={{ color: "black", position: "relative", top: "5px" }}
                  >
                    <b>Contact Us</b>
                  </h5>
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >

                  <p style={{ color: "black" }}>Sponsors</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    <p style={{ color: "black" }}>Contact Us</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;

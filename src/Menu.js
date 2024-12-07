import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import UserDetails from "./UserDetails"; // Import UserDetails component

const Menu = ({ user, userData, setIsEditing, handleSignOut }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle the offcanvas menu
  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  // Show/hide navbar on scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Hide navbar when scrolling down
    } else {
      setShowNavbar(true); // Show navbar when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <Navbar
        expand="lg"
        fixed="top"
        bg="light"
        className={`shadow-sm ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}
      >
        <Container>
          {/* Hamburger Icon */}
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={toggleOffcanvas}
            className="p-0 me-3 d-lg-none border-0"
          >
            <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
          </Navbar.Toggle>

          {/* App Name */}
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <i className="bi bi-palette-fill text-primary me-2"></i>
            LearningBoxPro
          </Navbar.Brand>

          {/* Desktop Menu */}
          <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex">
            <Nav className="me-auto">
              <Nav.Link href="#motivational">
                <i className="bi bi-lightbulb-fill me-2 text-warning"></i>
                Motivational Content
              </Nav.Link>
              <Nav.Link href="#health">
                <i className="bi bi-heart-pulse-fill me-2 text-danger"></i>
                Health Content
              </Nav.Link>
              <Nav.Link href="#songs">
                <i className="bi bi-music-note-list me-2 text-success"></i>
                Songs
              </Nav.Link>
            </Nav>

            {/* User Profile Dropdown with name to the left of the profile icon */}
            {userData && (
            <div className="d-flex align-items-center ms-auto">
              <span className="me-2">
                {userData.firstName} {userData.lastName}
              </span>
                <Dropdown align="end">
                  <Dropdown.Toggle variant="light" className="border-0">
                    <i className="bi bi-person-circle" style={{ fontSize: "1.5rem" }}></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {/* User Info */}
                    <Dropdown.ItemText>
                      <div className="p-2">
                        <h6>{userData?.firstName} {userData?.lastName}</h6>
                        <small>{userData?.email}</small>
                      </div>
                    </Dropdown.ItemText>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => setIsEditing(true)}>
                      <i className="bi bi-pencil-square me-2"></i> Edit Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleSignOut}>
                      <i className="bi bi-box-arrow-right me-2"></i> Sign Out
                    </Dropdown.Item>
                    <Dropdown.Item href="#settings">
                      <i className="bi bi-gear-fill me-2"></i> Settings
                    </Dropdown.Item>
                    <Dropdown.Item href="#plans">
                      <i className="bi bi-credit-card-fill me-2"></i> Plans & Pricing
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas for mobile */}
      <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#motivational" onClick={toggleOffcanvas}>
              <i className="bi bi-lightbulb-fill me-2 text-warning"></i>
              Motivational Content
              <i className="bi bi-chevron-right float-end"></i>
            </Nav.Link>
            <Nav.Link href="#health" onClick={toggleOffcanvas}>
              <i className="bi bi-heart-pulse-fill me-2 text-danger"></i>
              Health Content
              <i className="bi bi-chevron-right float-end"></i>
            </Nav.Link>
            <Nav.Link href="#songs" onClick={toggleOffcanvas}>
              <i className="bi bi-music-note-list me-2 text-success"></i>
              Songs
              <i className="bi bi-chevron-right float-end"></i>
            </Nav.Link>
          </Nav>
          <hr />
          <UserDetails
            user={user}
            userData={userData}
            isEditing={false}
            setIsEditing={setIsEditing}
            handleSignOut={handleSignOut}
          />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Styling for navbar visibility on scroll */}
      <style jsx="true">{`
        .navbar-visible {
          transform: translateY(0);
          transition: transform 0.3s ease-in-out;
        }
        .navbar-hidden {
          transform: translateY(-100%);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Menu;

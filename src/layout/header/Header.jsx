// Header.js
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const HeaderV2 = () => {
  return (
    <Navbar expand="lg" className="header-container">
      <Navbar.Brand as={Link} to="/" className="ms-2 nav-title">
        <img
          src={logo}
          className="d-inline-block align-top nav-logo"
          alt="Logo"
        />
        {" Rentorium"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            className="text-blue"
            href="#home"
            style={{ fontSize: "15px" }}
          >
            Home
          </Nav.Link>
          <NavDropdown
            className="text-blue"
            title="Resources"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item as={Link} to="/payment" className="text-blue">
              {" "}
              {/* Added 'text-blue' class */}
              Payment
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/completion" className="text-blue">
              {" "}
              {/* Added 'text-blue' class */}
              Completion
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderV2;

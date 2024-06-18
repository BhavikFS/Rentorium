// ResponsiveNavbar.js
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className="navbar-expand-lg"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="ms-2 nav-title">
          <img
            src={logo}
            className="d-inline-block align-top nav-logo"
            alt="Logo"
          />
          {" Rentorium"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-blue">
              {" "}
              {/* Added 'text-blue' class */}
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
              <NavDropdown.Item
                as={Link}
                to="/completion"
                className="text-blue"
              >
                {" "}
                {/* Added 'text-blue' class */}
                Completion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

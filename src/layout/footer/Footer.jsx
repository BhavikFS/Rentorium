import { Col, Container, Form, Nav, Row, Stack } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./Footer.css";
import CustomButton from "../../components/common/CustomButton";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="p-4" style={{ background: "#F6F6F6" }}>
          <Col md={3} className="firstFooter">
            <Stack>
              <div className="nav-title d-flex align-items-center">
                <img
                  src={logo}
                  className="d-inline-block align-top nav-logo"
                  alt="Logo"
                />
                {" Rentorium"}
              </div>
              <p className="footer-text-section1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <h3 className="footer-newsletter-title">Newsletter</h3>
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  className="me-2"
                />
                <CustomButton className="primary-button" label="Send" type="button" />
              </Form>
            </Stack>
          </Col>
          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link href="#" className="mb-2 footer-link-title">Lorem Ipsum</Nav.Link>
              <Nav.Link href="#" className="mb-2 footer-link">Lorem Ipsum</Nav.Link>
              <Nav.Link href="#" className="mb-2 footer-link">Lorem Ipsum</Nav.Link>
              <Nav.Link href="#" className="mb-2 footer-link">Lorem Ipsum</Nav.Link>
              <Nav.Link href="#" className="mb-2 footer-link">Lorem Ipsum</Nav.Link>
              <Nav.Link href="#" className="mb-2 footer-link">Lorem Ipsum</Nav.Link>
            </Nav>
          </Col>
          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link href="#" className="mb-2 footer-link-title">Lorem Ipsum</Nav.Link>
              <Nav.Link href="#" className="mb-2 footer-link">Lorem Ipsum</Nav.Link>
              <Nav.Link href="#" className="mb-2 footer-link">Lorem Ipsum</Nav.Link>
              <Nav.Link href="#" className="mb-2 footer-link">Lorem Ipsum</Nav.Link>
              <Nav.Link href="#" className="mb-2 footer-link">Lorem Ipsum</Nav.Link>
              <Nav.Link href="#" className="mb-2 footer-link">Lorem Ipsum</Nav.Link>
            </Nav>
          </Col>
          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link href="#" className="mb-2 footer-link-title">Lorem Ipsum</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import { Col, Container, Form, Nav, Row, Stack } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./Footer.css";
import CustomButton from "../../components/common/CustomButton";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="p-4" style={{background: "#F6F6F6"
}}>
          <Col className="mx-5">
            <Stack>
              <div className="nav-title d-none d-md-flex">
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
              <div className="d-md-flex">
                <Form.Control type="text" placeholder="Normal text" />
                <CustomButton className="primary-button" label="Send" type="button" />
              </div>
            </Stack>
          </Col>
          <Col>
            <Nav className="mb-2" style={{fontWeight:500, fontSize:"20px"}}>Lorem Ipsum</Nav>
            <Nav className="mb-2" style={{fontWeight:400, fontSize:"16px"}}>Lorem Ipsum</Nav>
            <Nav className="mb-2" style={{fontWeight:400, fontSize:"16px"}}>Lorem Ipsum</Nav>
            <Nav className="mb-2" style={{fontWeight:400, fontSize:"16px"}}>Lorem Ipsum</Nav>
            <Nav className="mb-2" style={{fontWeight:400, fontSize:"16px"}}>Lorem Ipsum</Nav>
            <Nav className="mb-2" style={{fontWeight:400, fontSize:"16px"}}>Lorem Ipsum</Nav>

          </Col>
          <Col>
            <Nav className="mb-2" style={{fontWeight:500, fontSize:"20px"}}>Lorem Ipsum</Nav>
            <Nav className="mb-2" style={{fontWeight:400, fontSize:"16px"}}>Lorem Ipsum</Nav>
            <Nav className="mb-2" style={{fontWeight:400, fontSize:"16px"}}>Lorem Ipsum</Nav>
            <Nav className="mb-2" style={{fontWeight:400, fontSize:"16px"}}>Lorem Ipsum</Nav>
            <Nav className="mb-2" style={{fontWeight:400, fontSize:"16px"}}>Lorem Ipsum</Nav>
            <Nav className="mb-2" style={{fontWeight:400, fontSize:"16px"}}>Lorem Ipsum</Nav>

          </Col>
          <Col>
          <Col>
            <Nav className="mb-2" style={{fontWeight:500, fontSize:"20px"}}>Lorem Ipsum</Nav>

          </Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

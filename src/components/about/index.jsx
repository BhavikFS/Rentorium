import { Container, Row } from "react-bootstrap";
import About from "../../assets/images/about.png";
import "./About.css";
import Footer from "../../layout/footer/Footer";
import AboutUsContent from "./AboutUsContent";


const AboutSection = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Row className="d-flex justify-content-center m-0">
          <div className="about-image-wrapper">
            <img
              className="about-image-section2 img-fluid"
              src={About}
              alt="about-section2"
            />
          </div>
        </Row>
      <AboutUsContent />
      </Container>
      <Footer />
    </>
  );
};

export default AboutSection;

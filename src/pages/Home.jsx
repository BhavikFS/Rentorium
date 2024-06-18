// App.js
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import VerifiedAccount from "../assets/images/verified-account.png";
import CustomButton from "../components/common/CustomButton";
import HomeSection1 from "../assets/images/home-section1.png";
import HomeSection2 from "../assets/images/home-section2.png";

const Home = () => {
  return (
    <>
      <Container fluid className="home-gradient-background-section1 my-0 py-2">
        <Row className="home-container-section1">
          <Col md={6}>
            <h1 className="home-text-title-section1">
              Empowering renters and <br className="d-none d-sm-inline" />{" "}
              owners alike.
            </h1>
            <h6 className="home-text-section1">
              <img src={VerifiedAccount} alt="verified-account" />
              Shape the rental community with your feedback.
            </h6>
            <h6 className="home-text-section1">
              <img src={VerifiedAccount} alt="verified-account" />
              Foster trust through transparent reviews.
            </h6>
            <h6 className="home-text-section1">
              <img src={VerifiedAccount} alt="verified-account" />
              Make informed rental decisions.
            </h6>
            <h6 className="home-text-section1">
              <img src={VerifiedAccount} alt="verified-account" />
              Financial tools for stability and security
            </h6>
            <h6 className="home-text-section1">
              <img src={VerifiedAccount} alt="verified-account" />
              Promoting sustainability for a better future
            </h6>
            <div className="centered-button">
              {" "}
              {/* Apply custom CSS class for centered button */}
              <CustomButton
                className="primary-button"
                type="button"
                style={{
                  color: "white",
                  width: "128px", // Adjust width as needed
                  height: "44.3px", // Adjust height as needed
                  borderRadius: "50px",
                  padding: "11px 24px", // Adjust padding as needed
                }}
                label="Sign Up"
              />
            </div>
          </Col>
          <Col md={6} className="position-relative">
            <div>
              <img
                className="home-image-section1 d-none d-md-flex"
                src={HomeSection1}
                alt="home-section1"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-0 py-2">
        <Row className="home-container-section2">
        <Col md={6} className="position-relative">
            <div>
              <img
                className="home-image-section2 d-none d-md-flex"
                src={HomeSection2}
                alt="home-section2"
              />
            </div>
          </Col>
          <Col md={6}>
          <p className="home-mission-section1">Our Mission</p>
            <h2 className="home-text-title-section2">
            Streamlining Rentals, Empowering Both Sides
            </h2>
            <p className="home-text-section2">
            Rentorium provides a multifaceted solution catering to the needs of both tenants and landlords, consolidating every aspect of the rental journey into one user-friendly platform. From property listings and tenant screening to lease management and maintenance requests.
            </p>
            <div className="centered-button">
              {" "}
              {/* Apply custom CSS class for centered button */}
              <CustomButton
                className="primary-button"
                type="button"
                style={{
                  color: "white",
                  width: "135px", // Adjust width as needed
                  height: "44.3px", // Adjust height as needed
                  borderRadius: "50px",
                  padding: "11px 24px", // Adjust padding as needed
                }}
                label="Learn More"
              />
            </div>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Home;

import { Container, Row } from "react-bootstrap";
import About from "../../assets/images/about.png";
import "./About.css";
import Footer from "../../layout/footer/Footer";

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
        <Row className="d-flex justify-content-center m-4">
          <Row className="section">
            <p className="about-description">
              <strong className="about-title">Welcome to Rentorium,</strong>{" "}
              your premier destination for transparent and trustworthy landlord
              and tenant ratings. At Rentorium, we understand the significance
              of finding the perfect rental property or tenant. That's why we've
              created a platform that empowers both landlords and tenants alike,
              fostering a community built on reliability, accountability, and
              mutual respect.
            </p>
          </Row>
          <Row className="section">
            <h3 className="about-title">Our Mission</h3>
            <p className="about-description">
              Our mission is simple: to revolutionize the rental industry by
              providing a reliable source of information for landlords and
              tenants to make informed decisions. We believe that every rental
              experience should be positive, fair, and transparent.
            </p>
          </Row>
          <Row className="section">
            <p className="about-description">
              <strong className="about-title">For tenants, </strong>
              Rentorium offers a valuable resource to research and evaluate
              potential landlords and properties. By accessing detailed ratings
              and reviews from fellow tenants, you can gain valuable insights
              into the rental experience before making a commitment. Whether
              you're searching for your first apartment or your next long-term
              rental, Rentorium equips you with the knowledge to find the
              perfect fit.
            </p>
          </Row>
          <Row className="section">
            <p className="about-description">
              <strong className="about-title">Landlords</strong> also benefit
              from Rentorium's platform by showcasing their commitment to
              providing exceptional rental experiences. By maintaining high
              ratings and positive feedback from tenants, landlords can attract
              quality renters and build a reputation for reliability and
              professionalism.
            </p>
          </Row>
          <Row className="section">
            <p className="about-description">
              At Rentorium, we believe in the power of community-driven feedback
              to improve the rental process for everyone involved. By promoting
              transparency and accountability, we aim to create a rental
              marketplace where trust and integrity are the cornerstone of every
              transaction. Join us in shaping the future of rental experiences.
              Whether you're a landlord or a tenant, Rentorium is here to
              empower you on your rental journey.
            </p>
          </Row>
          <Row className="section">
            <h6 className="about-welcome-text">
              Welcome to Rentorium, where renting has never been more
              transparent or trustworthy.
            </h6>
          </Row>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutSection;

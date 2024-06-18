import { Col } from "react-bootstrap";
import SignUpImage from "../../assets/images/signup-image.png";
const LeftSection = () => {
  return (
    <Col md={7}>
      <img
        src={SignUpImage}
        alt="Your Image"
        className="img-fluid d-none d-md-flex h-100 align-items-center justify-content-center image-container"
      />
    </Col>
  );
};

export default LeftSection;

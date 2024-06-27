import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
const LeftSection = ({ image }) => {
  return (
    <Col md={7}>
      <img
        src={image}
        alt="Your Image"
        className="img-fluid d-none d-md-flex h-100 align-items-center justify-content-center image-container"
      />
    </Col>
  );
};

LeftSection.propTypes = {
  image: PropTypes.string.isRequired,
};

export default LeftSection;

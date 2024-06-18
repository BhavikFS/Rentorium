import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
const CustomButton = ({ label, type, style, className }) => {
  return (
    <Button variant="primary" type={type} className={className} style={style}>
      {label}
    </Button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CustomButton;

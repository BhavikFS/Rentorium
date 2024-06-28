import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
const CustomButton = ({
  label,
  type,
  style,
  className,
  clickHandler,
  disabled,
}) => {
  return (
    <Button
      variant="primary"
      onClick={clickHandler}
      type={type}
      className={className}
      style={style}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  clickHandler: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CustomButton;

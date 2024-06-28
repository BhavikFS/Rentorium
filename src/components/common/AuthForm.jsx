import CustomButton from "./CustomButton";
import { Col, Form } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthForm = ({
  className,
  formDescription,
  title,
  btnStyle,
  btnLabel,
  children,
  btnClassName,
  isFooterSection = false,
  subTitle = false,
  onSubmit,
  disabled
}) => {
  return (
    <Col md={5} className={className}>
      <Form
        className="d-flex flex-column"
        style={{ marginLeft: "15px", marginRight: "15px" }}
        onSubmit={onSubmit}
      >
        <div className="nav-title d-none d-md-flex">
          <img
            src={logo}
            className="d-inline-block align-top nav-logo"
            alt="Logo"
          />
          {" Rentorium"}
        </div>
        {(formDescription !== "" && !subTitle) && (
          <p className="form-description mt-2">{formDescription}</p>
        )}
        <h4 className="page-title mt-2">{title}</h4>
        {subTitle && (
          <p className="form-description">{formDescription}</p>
        )}
        {children}
        <div className="d-flex justify-content-center">
          <CustomButton
          disabled={disabled}
            type="submit"
            className={`mt-2 primary-button ${btnClassName}`}
            style={btnStyle}
            label={btnLabel}
          />
        </div>
        {isFooterSection && (
          <>
            <Link to="/forgot-password" className="mt-3 d-flex justify-content-center terms">
              Forgot Password?
            </Link>
            <div className="mt-3 d-flex justify-content-center">
              <p className=" new-user-link">New User?</p>
              <Link to="/register" style={{ marginLeft: "4px" }} className="terms">
                SIGN UP
              </Link>
            </div>
          </>
        )}
      </Form>
    </Col>
  );
};

AuthForm.propTypes = {
  isFooterSection: PropTypes.bool,
  formDescription: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  subTitle: PropTypes.bool,
  btnClassName: PropTypes.string.isRequired,
  btnStyle: PropTypes.object,
  btnLabel: PropTypes.string.isRequired,
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default AuthForm;

import CustomButton from "./CustomButton";
import { Col, Form } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import PropTypes from "prop-types";

const AuthForm = ({ formDescription, title, btnStyle, btnLabel, children }) => {
  return (
    <Col md={5}>
      <Form
        className="d-flex flex-column"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <div className="nav-title d-none d-md-flex">
          <img
            src={logo}
            className="d-inline-block align-top nav-logo"
            alt="Logo"
          />
          {" Rentorium"}
        </div>
        {formDescription !== "" && (
          <p className="form-description mt-2">{formDescription}</p>
        )}
        <h4 className="page-title">{title}</h4>
        {children}
        <div className="d-flex justify-content-center">
          <CustomButton
            type="submit"
            className="mt-2 primary-button"
            style={btnStyle}
            label={btnLabel}
          />
        </div>
      </Form>
    </Col>
  );
};

AuthForm.propTypes = {
  formDescription: PropTypes.string,
  title: PropTypes.string.isRequired,
  btnStyle: PropTypes.object,
  btnLabel: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default AuthForm;

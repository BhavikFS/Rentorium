import CustomButton from "../common/CustomButton";
import { Col, Form } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
const SignUpForm = () => {
  const fields = [
    "First Name",
    "Last Name",
    "Email Address",
    "Mobile No.",
    "Password",
    "Confirm Password",
    "User Type",
    "Tenant Question 1",
    "Tenant Question 2",
    "Tenant Question 3",
  ];
  return (
    <Col md={5}>
      <Form
        className="d-flex flex-column justify-content-center"
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
        <p className="mt-2">
          Register now to take advantage of our membership offer.
        </p>
        <h4 className="page-title">Sign Up</h4>
        {fields.map((field, index) => (
          <Form.Group key={index} controlId={`formBasic${field}`}>
            <Form.Control
              style={{ backgroundColor: "#EFEFEF", borderRadius: "none" }}
              className="mt-3"
              type={field === "Password" ? "password" : "text"}
              placeholder={`${field}`}
            />
          </Form.Group>
        ))}
        <p className="mt-3 d-flex justify-content-center terms">
          Terms & Condition
        </p>
        <div className="d-flex justify-content-center">
          <CustomButton
            type="submit"
            className="mt-2 sign-up-button"
            style={{ width: "30%" }}
            label="Sign Up"
          />
        </div>
      </Form>
    </Col>
  );
};

export default SignUpForm;

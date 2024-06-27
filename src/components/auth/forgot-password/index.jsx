import { Row } from "react-bootstrap";
import LeftSection from "../LeftSection";
import "./ForgotPassword.css"
import ForgotPasswordImage from "../../../assets/images/forgot-password-image.png";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <Row className="forgot-password-container">
      <LeftSection image={ForgotPasswordImage} />
      <ForgotPasswordForm />
    </Row>
  );
};

export default ForgotPassword;

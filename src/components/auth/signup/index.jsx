import { Row } from "react-bootstrap";
import LeftSection from "../../auth/LeftSection";
import SignUpForm from "../../auth/signup/SignUpForm";
import "./SignUp.css";
import SignUpImage from "../../../assets/images/signup-image.png";
import { ToastContainer } from "react-toastify";

const SignUp = () => {
  return (
    <>
      <ToastContainer />
      <Row>
        <LeftSection image={SignUpImage} />
        <SignUpForm />
      </Row>
    </>
  );
};

export default SignUp;

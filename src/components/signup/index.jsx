import { Row } from "react-bootstrap";
import LeftSection from "./LeftSection";
import SignUpForm from "./SignUpForm";
import "./SignUp.css"
const SignUp = () => {
  return (
    <Row>
      <LeftSection />
      <SignUpForm />
    </Row>
  );
};

export default SignUp;

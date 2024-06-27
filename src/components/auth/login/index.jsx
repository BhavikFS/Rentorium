import { Row } from "react-bootstrap";
import LeftSection from "../../auth/LeftSection";
import "./Login.css"
import LoginImage from "../../../assets/images/login-image.png";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Row className="login-container">
      <LeftSection image={LoginImage} />
      <LoginForm />
    </Row>
  );
};

export default Login;

import { Form } from "react-bootstrap";
import AuthForm from "../../common/AuthForm";
const LoginForm = () => {
  const fields = [
    "Email",
    "Password",
  ];

  return (
    <AuthForm
      title="Login to get started"
      btnStyle={{
        width: "30%",
        color: "#16254c",
        borderRadius: "0.25rem",
        fontWeight: "600px",
        padding: "0.5rem 1rem",
      }}
      btnLabel="Login"
    >
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
    </AuthForm>
  );
};

export default LoginForm;

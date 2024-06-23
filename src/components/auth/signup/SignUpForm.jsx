import { Form } from "react-bootstrap";
import AuthForm from "../../common/AuthForm";
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
    <AuthForm
      formDescription="Register now to take advantage of our membership offer."
      title="Sign Up"
      btnStyle={{
        width: "30%",
        color: "#16254c",
        borderRadius: "0.25rem",
        fontWeight: "600px",
        padding: "0.5rem 1rem",
      }}
      btnLabel="Sign Up"
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
      <p className="mt-3 d-flex justify-content-center terms">
        Terms & Condition
      </p>
    </AuthForm>
  );
};

export default SignUpForm;

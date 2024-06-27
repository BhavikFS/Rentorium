import { Form } from "react-bootstrap";
import AuthForm from "../../common/AuthForm";
const ForgotPasswordForm = () => {
  const fields = ["Email"];

  return (
    <AuthForm
      className="custom-col"
      btnClassName="mt-4"
      title="Forgot Password?"
      btnStyle={{
        width: "30%",
        color: "#16254c",
        borderRadius: "0.25rem",
        fontWeight: "600px",
        padding: "0.5rem 1rem",
      }}
      btnLabel="Send OTP"
      isFooterSection={false}
      subTitle={true}
      formDescription="Enter your registered email"
    >
      {fields.map((field, index) => (
        <Form.Group key={index} controlId={`formBasic${field}`}>
          <Form.Control
            style={{ backgroundColor: "#EFEFEF", borderRadius: "none" }}
            type={field === "Password" ? "password" : "text"}
            placeholder={`${field}`}
          />
        </Form.Group>
      ))}
       <p className="mt-3 d-flex justify-content-center terms">
       An OTP will be send to your registered email
      </p>
    </AuthForm>
  );
};

export default ForgotPasswordForm;

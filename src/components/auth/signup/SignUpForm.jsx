import { Form, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import AuthForm from "../../common/AuthForm";

const SignUpForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleCheckboxChange = () => setTermsAccepted(!termsAccepted);
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
    <>
      <AuthForm
        formDescription="Register now to take advantage of our membership offer."
        title="Sign Up"
        btnStyle={{
          width: "100%", // Adjust the width for better responsiveness
          color: "#16254c",
          borderRadius: "0.25rem",
          fontWeight: "600",
          padding: "0.5rem 1rem",
          backgroundColor:" #F2CC15", // Custom button color
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
        <p
          className="mt-3 d-flex justify-content-center terms"
          onClick={handleShow}
          style={{ cursor: "pointer",color: "#16254c"}}
        >
          Terms & Condition
        </p>
      </AuthForm>

      <Modal show={showModal} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center" style={{
              color: "#16254c",

          }}>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
            color: "#16254c",
        }}>
          <p>
            <strong>Terms and Conditions </strong>for Sharing Personal Details on Rentorium Website**
          </p>
          <p>
            <strong>1. Acceptance of Terms:</strong> By accessing or using the XYZ website (hereinafter referred to as "the website"), you agree to abide by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the website.
          </p>
          <p>
            <strong> 2. Definitions: -</strong>
          </p>
          <p>"Website": Refers to the Rentorium website.</p>
          <p> - "User": Any individual accessing or using the website.</p>
          <p> - "Personal Details": Information that can be used to identify an individual, including but not limited to name, email address, phone number, address, etc.
          </p>
          <p>
            <strong> 3. Collection of Personal Details</strong>
          </p>
          <p>- The website may collect personal details provided voluntarily by users through forms, registrations, purchases, or other interactions.</p>
          <p> - We may also collect certain personal details automatically through the use of cookies and similar tracking technologies. Please refer to our Cookie Policy for more information.</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
        <Form.Group controlId="formBasicCheckbox" className="mt-3">
          <Form.Check 
            type="checkbox" 
            label="I accept the terms and conditions and privacy policy" 
            onChange={handleCheckboxChange} 
            style={{color: "#16254c"}}
          />
        </Form.Group>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: "#F2CC15", // Custom button color
              borderColor: "#F2CC15",
              color: "#16254c",
              fontWeight:"bold"
            }}
          >
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUpForm;

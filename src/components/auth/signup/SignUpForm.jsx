import { Form, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import AuthForm from "../../common/AuthForm";
import { Formik } from "formik";
import { signUpValidationSchema } from "../../../validators/AuthValidators";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

const fieldToKeyMap = {
  "First Name": "first_name",
  "Last Name": "last_name",
  "Email Address": "email",
  "Mobile No.": "phone",
  Password: "password",
  "Confirm Password": "confirm_password",
  "User Type": "user_type",
  "Tenant Question 1": "question_1",
  "Tenant Question 2": "question_2",
  "Tenant Question 3": "question_3",
};

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
  user_type: "",
  question_1: "",
  question_2: "",
  question_3: "",
};

const SignUpForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleCheckboxChange = () => setTermsAccepted(!termsAccepted);

  const onSubmit = async (values) => {
    setLoading(true);
    const payload = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      user_type: Number(values.user_type),
      address: "qwertyui",
      otp: 1111,
      country_code: "1234",
      question_1: values.question_1,
      question_2: values.question_2,
      question_3: values.question_3,
      is_termed_checked: 1,
      profile_image: "asdfghj",
      created_date: "2024-06-01",
      updated_on: "2024-06-05",
    };

    try {
      const response = await axios.post(
        "http://164.52.197.9:3003/create-client",
        payload
      );
      console.log(response.data);
      if (response.data.status === "success") {
        toast.success(response?.data?.message);
        setTimeout(() => {
          navigate("/user-profile");
        }, 1500);
      }
    } catch (error) {
      toast.error("Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <AuthForm
            disabled={loading ? true : false}
            formDescription="Register now to take advantage of our membership offer."
            title="Sign Up"
            btnStyle={{
              width: "100%",
              color: "#16254c",
              borderRadius: "0.25rem",
              fontWeight: "600",
              padding: "0.5rem 1rem",
              backgroundColor: "#F2CC15",
            }}
            btnLabel={`${loading ? "Processing..." : "Sign Up"}`}
            onSubmit={handleSubmit}
          >
            {fields.map((field, index) => {
              const key = fieldToKeyMap[field];
              return (
                <Form.Group key={index} controlId={`formBasic${field}`}>
                  {field === "User Type" ? (
                    <Form.Control
                      as="select"
                      name={key}
                      value={values[key]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched[key] && !!errors[key]}
                      style={{
                        backgroundColor: "#EFEFEF",
                        borderRadius: "none",
                      }}
                      className="mt-3"
                    >
                      <option value="">Select User Type</option>
                      <option value={1}>Landlord</option>
                      <option value={2}>Tenant</option>
                      {/* Add other user types as needed */}
                    </Form.Control>
                  ) : (
                    <Form.Control
                      style={{
                        backgroundColor: "#EFEFEF",
                        borderRadius: "none",
                      }}
                      className="mt-3"
                      type={key?.includes("password") ? "password" : "text"}
                      placeholder={field}
                      name={key}
                      value={values[key]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched[key] && !!errors[key]}
                    />
                  )}
                  <Form.Control.Feedback type="invalid">
                    {errors[key]}
                  </Form.Control.Feedback>
                </Form.Group>
              );
            })}
            <p
              className="mt-3 d-flex justify-content-center terms"
              onClick={handleShow}
              style={{ cursor: "pointer", color: "#16254c" }}
            >
              Terms & Condition
            </p>
          </AuthForm>
        )}
      </Formik>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title
            className="w-100 text-center"
            style={{
              color: "#16254c",
            }}
          >
            Terms and Conditions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            color: "#16254c",
          }}
        >
          <p>
            <strong>Terms and Conditions </strong>for Sharing Personal Details
            on Rentorium Website**
          </p>
          <p>
            <strong>1. Acceptance of Terms:</strong> By accessing or using the
            XYZ website (hereinafter referred to as "the website"), you agree to
            abide by these Terms and Conditions. If you do not agree with any
            part of these terms, you must not use the website.
          </p>
          <p>
            <strong> 2. Definitions: -</strong>
          </p>
          <p>"Website": Refers to the Rentorium website.</p>
          <p> - "User": Any individual accessing or using the website.</p>
          <p>
            {" "}
            - "Personal Details": Information that can be used to identify an
            individual, including but not limited to name, email address, phone
            number, address, etc.
          </p>
          <p>
            <strong> 3. Collection of Personal Details</strong>
          </p>
          <p>
            - The website may collect personal details provided voluntarily by
            users through forms, registrations, purchases, or other
            interactions.
          </p>
          <p>
            {" "}
            - We may also collect certain personal details automatically through
            the use of cookies and similar tracking technologies. Please refer
            to our Cookie Policy for more information.
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Form.Group controlId="formBasicCheckbox" className="mt-3">
            <Form.Check
              type="checkbox"
              label="I accept the terms and conditions and privacy policy"
              onChange={handleCheckboxChange}
              style={{ color: "#16254c" }}
            />
          </Form.Group>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: "#F2CC15", // Custom button color
              borderColor: "#F2CC15",
              color: "#16254c",
              fontWeight: "bold",
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

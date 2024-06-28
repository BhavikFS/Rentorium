import { Form } from "react-bootstrap";
import AuthForm from "../../common/AuthForm";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginValidationSchema } from "../../../validators/AuthValidators";
import { Formik } from "formik";
const fields = ["Email Address", "Password"];

const fieldToKeyMap = {
  "Email Address": "email",
  Password: "password",
};

const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setLoading(true);
    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axios.post(
        "http://164.52.197.9:3003/client-login",
        payload
      );
      console.log(response.data);
      if (response.data.status === "Success") {
        toast.success(response?.data?.message);
        setTimeout(() => {
          navigate("/user-profile");
        }, 1500);
      }
      console.log(response, "response");
    } catch (error) {
      if (error?.response?.data?.status === "Failed") {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("Internal Server Error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
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
            className="custom-col"
            btnClassName="mt-4"
            title="Login to get started"
            btnStyle={{
              width: "30%",
              color: "#16254c",
              borderRadius: "0.25rem",
              fontWeight: "600px",
              padding: "0.5rem 1rem",
            }}
            btnLabel={`${loading ? "Processing..." : "Login"}`}
            isFooterSection={true}
            onSubmit={handleSubmit}
          >
            {fields.map((field, index) => {
              const key = fieldToKeyMap[field];
              return (
                <Form.Group key={index} controlId={`formBasic${field}`}>
                  <Form.Control
                    style={{ backgroundColor: "#EFEFEF", borderRadius: "none" }}
                    className="mt-3"
                    type={key?.includes("password") ? "password" : "text"}
                    placeholder={field}
                    name={key}
                    value={values[key]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched[key] && !!errors[key]}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors[key]}
                  </Form.Control.Feedback>
                </Form.Group>
              );
            })}
          </AuthForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;

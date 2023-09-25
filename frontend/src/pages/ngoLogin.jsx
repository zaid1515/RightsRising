import { useContext, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormGroup from "../components/FormFields";
import { UserContext } from "../hooks/userContext";

const NgoLoginPage = () => {
  const userContext = useContext(UserContext);
  const { userInfo, setUserInfo } = userContext;
  const navigate = useNavigate();
  const [loginValidationErrors, setLoginValidationErrors] = useState({});
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginForm;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const validateLoginForm = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    const errors = validateLoginForm();

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("/api/ngo/auth", loginForm);
        console.log(response);

        if (response.status === 200) {
          console.log("authenticated successfully");
          setUserInfo(response.data);
          navigate("/");
        }
      } catch (error) {
        if (!error.response) {
          console.log(error);
        } else {
          console.log(error.response.data);
          // if the user submits a email that already has an account then add a pop-up component down below.
          // @vighnesh and @abuzaid.
        }
      }
    } else {
      setLoginValidationErrors(errors);
    }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={loginSubmitHandler}>
        <FormGroup
          controlId="email"
          label="Email Address"
          type="email"
          placeholder="Enter Email"
          value={email}
          name="email"
          onChange={handleChange}
          error={loginValidationErrors.email}
        />

        <FormGroup
          controlId="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          value={password}
          name="password"
          onChange={handleChange}
          error={loginValidationErrors.password}
        />

        <Button type="submit" variant="primary" className="mt-3">
          Sign In
        </Button>

        <Row className="py-3">
          <Col>
            New Customer <Link to="/register">Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default NgoLoginPage;

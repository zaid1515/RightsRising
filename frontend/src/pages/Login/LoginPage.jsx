// import { useContext, useState } from "react";
// // import { Form, Button, Col, Row } from "react-bootstrap";
// import FormContainer from "../../components/FormContainer";
// import { Link, useNavigate} from "react-router-dom";
// import FormGroup from "../../components/FormFields";
import { AuthContext } from "../../hooks/authContext";
import React, { useContext, useState } from "react";
import loginimg from "../../images/login-pic2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {

  const navigate = useNavigate();
  const {login, setIsAuthenticated} = useContext(AuthContext);
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
        const response = await login(0 ,loginForm);
        console.log(response);
        if(response.data.client){
          console.log('from LoginPage : client received properly.');
          navigate('/');
        }
      } catch (error) {
        console.log('login page : ',error);
      }
    } else {
      setLoginValidationErrors(errors);
    }
  };

  return (
    // <FormContainer>
    //   <h1>Sign In</h1>

    //   <Form onSubmit={loginSubmitHandler}>
    //     <FormGroup
    //       controlId="email"
    //       label="Email Address"
    //       type="email"
    //       placeholder="Enter Email"
    //       value={email}
    //       name="email"
    //       onChange={handleChange}
    //       error={loginValidationErrors.email}
    //     />

    //     <FormGroup
    //       controlId="password"
    //       label="Password"
    //       type="password"
    //       placeholder="Enter Password"
    //       value={password}
    //       name="password"
    //       onChange={handleChange}
    //       error={loginValidationErrors.password}
    //     />

    //     <Button type="submit" variant="primary" className="mt-3">
    //       Sign In
    //     </Button>

    //     <Row className="py-3">
    //       <Col>
    //         New Customer <Link to="/register">Register</Link>
    //       </Col>
    //     </Row>
    //   </Form>
    // </FormContainer>

<div className="loginContainer">
<div className="loginWrapper">
  <div className="imgcol">
    <img src={loginimg} alt="login img" className="login-img" />
  </div>
  <div className="formContainer">
    <div>
      <h2>Welcome Back!! SIGN UP</h2>
    </div>
    <hr></hr>
    <form onSubmit={loginSubmitHandler} className="loginForm">
      <div className="col-sm-10">
        <input
          type="email"
          className="signupItem"
          id="signupEmail"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>

      <div className="col-sm-10">
        <input
          type="password"
          className="signupItem"
          id="signupPass"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </div>

      <button className="signupSubmit" type="submit">Sign Up</button>
    </form>
    <p>Dont have an account? <span ><NavLink to={"/register"} className="link">Sign Up</NavLink></span></p> 
  </div>
</div>
</div>
  );
};

export default LoginPage;

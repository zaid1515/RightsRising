// import { useState } from "react";
// import { Form, Button, Col, Row } from "react-bootstrap";
// import FormContainer from "../../components/FormContainer";
import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../../components/FormFields";
import React, { useContext, useState } from "react";
import loginimg from "../../images/login-pic2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";



const RegisterPage = () => {

    const navigate = useNavigate();
    const [validationErrors, setValidationErrors] = useState({});
    const [formData, setFormData] = useState({
        username : '',
        email : '',
        password : '',
        confirmPassword : '',
        age : ''
    });

    const { username, email, age, password, confirmPassword } = formData;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const validateForm = () => {
        const errors = {};

        if(!username.trim()){
            errors.username = `Username is required.`
        }

        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email format";
        }

        if(!age){
            errors.age = `Please provide the age`;
        }

        if (!password.trim()) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        return errors;
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if(Object.keys(errors).length === 0){
            // Form is valid proceed with regsitration.
            try{
                const response = await axios.post('/api/users/', formData)
                console.log(response);

                if(response.status === 200){ 
                    /*
                    here add a registeration successfull page, this page will contain registered successfully text and  a button with link to go to the sign-in page. and a and navigate to that page by using 
                    "navigate('/registrationsuccess')" add the protectd routes that user cannot access the
                    registrationsuccess page directly without registering. 
                    @vighnesh and @abuzaid.
                    */
                    console.log(`registered Successfully`);
                    navigate('/login');
                }
            } catch(error){
                if(!error.response){
                    console.log(error);
                } else {
                    console.log(error.response.data.message);
                    // if the user submits a email that already has an account then add a pop-up component down below.
                    // @vighnesh and @abuzaid. 
                }
            }
        } else {
            setValidationErrors(errors);
        }
    };

    return (
        // <FormContainer>
        //     <h1>Sign Up</h1>

        //     <Form onSubmit={submitHandler}>

        //         <FormGroup 
        //             controlId='username'
        //             label='username'
        //             type='text'
        //             placeholder='Enter Name'
        //             name='username'
        //             value={username}
        //             onChange={handleChange}
        //             error={validationErrors.username}
        //         />

        //         <FormGroup 
        //             controlId='email'
        //             label='Email Address'
        //             type='email'
        //             placeholder='Enter Email'
        //             name='email'
        //             value={email}
        //             onChange={handleChange}
        //             error={validationErrors.email}
        //         />

        //         <FormGroup 
        //             controlId='age'
        //             label='age'
        //             type='number'
        //             placeholder='age'
        //             name='age'
        //             value={age}
        //             onChange={handleChange}
        //             error={validationErrors.age}
        //         />

        //         <FormGroup 
        //             controlId='password'
        //             label='Enter Password'
        //             type='password'
        //             placeholder='password'
        //             name='password'
        //             value={password}
        //             onChange={handleChange}
        //             error={validationErrors.password}
        //         />

        //         <FormGroup 
        //             controlId='confirmPassword'
        //             label='Confirm Password'
        //             type='password'
        //             placeholder='confirm'
        //             name='confirmPassword'
        //             value={confirmPassword}
        //             onChange={handleChange}
        //             error={validationErrors.confirmPassword}
        //         />

        //         <Button type="submit" variant="primary" className="mt-3">
        //             Sign Up
        //         </Button>

        //         <Row className="py-3">
        //             <Col>
        //             Already Have An Account? <Link to="/login">Login</Link>
        //             </Col>
        //         </Row>
        //     </Form>
        // </FormContainer>

<div className="loginContainer">
<div className="loginWrapper">
  <div className="imgcol">
    <img src={loginimg} alt="login img" className="login-img" />
  </div>
  <div className="formContainer">
    <h2>Sign Up</h2>
    <form onSubmit={submitHandler} className="loginForm">
      <div className="col-sm-10">
        <input
          type="text"
          className="signupItem"
          id="signupName"
          name="name"
          value={username}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </div>
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
          type="number"
          className="signupItem"
          id="signupAge"
          name="age"
          value={age}
          placeholder="Age"
          onChange={handleChange}
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
      <div className="col-sm-10">
        <input
          type="password"
          className="signupItem"
          id="signupConfPass"
          name="password"
          value={confirmPassword}
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </div>

      <button className="signupSubmit">Sign Up</button>
    </form>
  <p>Dont have an account? <span ><NavLink to={"/login"} className="link">Sign In</NavLink></span></p> 
  </div>
</div>
</div>
    );
};

export default RegisterPage;

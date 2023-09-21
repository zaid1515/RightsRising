import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegsiterPage = () => {

    const navigate = useNavigate();
    const [validationErrors, setValidationErrors] = useState({});
    const [formData, setFormData] = useState({
        username : '',
        email : '',
        password : '',
        confirmPassword : '',
    });

    const { username, email, password, confirmPassword } = formData;

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

                if(response.status === 201){
                    navigate('/registrationsuccess')
                }
            } catch(error){
                console.log(error);
            }
        } else {
            setValidationErrors(errors);
        }
    };

    return (
        <FormContainer>
            <h1>Sign Up</h1>

            <Form onSubmit={submitHandler}>
            <Form.Group className="my-2" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter Name"
                name="username"
                value={username}
                onChange={handleChange}
                >
                </Form.Control>
                {validationErrors.username && (
                    <p className="text-danger">{validationErrors.username}</p>
                )}
            </Form.Group>

            <Form.Group className="my-2" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                name="email"
                onChange={handleChange}
                >
                </Form.Control>
                {validationErrors.email && (
                    <p className="text-danger">{validationErrors.email}</p>
                )}
            </Form.Group>

            <Form.Group className="my-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                name="password"
                onChange={handleChange}
                >
                </Form.Control>
                {validationErrors.password && (
                    <p className="text-danger">{validationErrors.password}</p>
                )}
            </Form.Group>

            <Form.Group className="my-2" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Confirm"
                value={confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                >
                </Form.Control>
                {validationErrors.confirmPassword && (
                    <p className="text-danger">{validationErrors.confirmPassword}</p>
                )}
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3">
                Sign Up
            </Button>

            <Row className="py-3">
                <Col>
                Already Have An Account? <Link to="/login">Login</Link>
                </Col>
            </Row>
            </Form>
        </FormContainer>
    );
};

export default RegsiterPage;

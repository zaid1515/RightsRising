import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import FormContainer from '../components/FormContainer';
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const [loginForm, setLoginForm] = useState({
        email: "", 
        password: "",
    });

    const {email, password} = loginForm;

    const handleChange = (e) => {
        const {name, value} = e.target;

        setLoginForm({
            ...loginForm,
            [name] : value
        });
    }

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
    }

    const loginSubmitHandler = async(e) => {
        e.preventDefault();
        const errors = validateLoginForm();

        if(Object.keys(errors).length === 0){
            try{
                const response = await axios.post('/api/users/auth', loginForm);
                console.log(response);
            } catch(err){
                console.log()
            }
        }
    }


    return (
    <FormContainer>
        <h1>Sign In</h1>

        <Form>
            <Form.Group className="my-2" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3" >
                Sign In
            </Button>

            <Row className="py-3" >
                <Col>
                    New Customer <Link to='/register' >Register</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
    );
}

export default LoginPage
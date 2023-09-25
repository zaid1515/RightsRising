import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../../components/FormFields";

const NgoRegister = () => {

    const navigate = useNavigate();
    const [validationErrors, setValidationErrors] = useState({});
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        password : '',
        confirmPassword : '',
    });

    const { name, email, password, confirmPassword } = formData;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const validateForm = () => {
        const errors = {};

        if(!name.trim()){
            errors.name = `name is required.`
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
                const response = await axios.post('/api/ngo/', formData)
                console.log(response);

                if(response.status === 200){ 
                    /*
                    here add a registeration successfull page, this page will contain registered successfully text and  a button with link to go to the sign-in page. and a and navigate to that page by using 
                    "navigate('/registrationsuccess')" add the protectd routes that user cannot access the
                    registrationsuccess page directly without registering. 
                    @vighnesh and @abuzaid.
                    */
                    navigate('/ngologin');
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
        <FormContainer>
            <h1>Sign Up</h1>

            <Form onSubmit={submitHandler}>

                <FormGroup 
                    controlId='name'
                    label='name'
                    type='text'
                    placeholder='Enter Name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    error={validationErrors.name}
                />

                <FormGroup 
                    controlId='email'
                    label='Email Address'
                    type='email'
                    placeholder='Enter Email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    error={validationErrors.email}
                />

                <FormGroup 
                    controlId='password'
                    label='Enter Password'
                    type='password'
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    error={validationErrors.password}
                />

                <FormGroup 
                    controlId='confirmPassword'
                    label='Confirm Password'
                    type='password'
                    placeholder='confirm'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    error={validationErrors.confirmPassword}
                />

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

export default NgoRegister;

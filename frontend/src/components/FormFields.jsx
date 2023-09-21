    import React from "react";
    import { Form } from "react-bootstrap";

    const FormGroup = ({
    controlId,
    label,
    type,
    placeholder,
    value,
    name,
    onChange,
    error,
    }) => {
    return (
        <Form.Group className="my-2" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
        />
        {error && <p className="text-danger">{error}</p>}
        </Form.Group>
    );
    };

    export default FormGroup;

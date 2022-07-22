import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../index.css'

const SignUp = () => {
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/Family-Mart/', inputs).then(function (response) {
            console.log(response.data);
        });
        console.log(inputs);
        event.target.reset()
    }
    return (
        <div style={{ height: "80vh" }}>
            <h1>Please sign-up!!</h1>
            <Form
                onSubmit={handleSubmit}
                className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"
                        name="name" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        name="email" onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        name="Password" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" className='text-start' label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;
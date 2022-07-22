
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
// import '../index.css'

const Additems = () => {
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        console.log(inputs);
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
            <h1>Add Items!!!</h1>
            <Form
                onSubmit={handleSubmit}
                className='w-50 mx-auto h-100vh'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Product Name"
                        name="name" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" placeholder="Enter quantity"
                        name="quantity" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price per unit
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter quantity"
                        name="price" onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control type="text" placeholder="Image Link"
                        name="img" onChange={handleChange} />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" className='text-start' label="Check me out" />
                </Form.Group> */}
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Additems;
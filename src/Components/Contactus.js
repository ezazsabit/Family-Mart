import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contactus = () => {
    const handleopinion = (e) => {

        e.preventDefault();
        console.log(e);
        e.target.reset();
        alert('thanks for your important opinion!!')

    }
    return (
        <Form className='w-50 mx-auto my-5' action="mailto:ezazsabit03@gmail.com" method="post" enctype="text/plain" onSubmit={handleopinion}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='mail' type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Opinion</Form.Label>
                <Form.Control name='opinion' type="text" placeholder="write yours..." />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Contactus;
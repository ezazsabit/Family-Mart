import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Modalp = (props) => {
    const handlecookie = () => {
        const date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = `Email=${props.Email}; User=${props.User}; expires=${date.toUTCString()}; path=/`;
    }
    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title >ATTENTION!!!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Would you want to accept all cookies?</p>
                </Modal.Body>

                <Modal.Footer>

                    <Button onClick={handlecookie} variant="dark">Accept</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default Modalp;
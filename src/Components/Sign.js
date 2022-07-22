import React, { useRef, useState } from 'react';

import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';




const Login = () => {
    const emailRef = useRef('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const resetPass = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);

    }
    const handlePassBlur = event => {
        setPassword(event.target.value);
        // console.log(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
        // console.log(event.target.value)
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    let errorHandle;
    if (error) {
        errorHandle =
            <div>
                <p className='text-danger'>Error: {error?.message}</p>
            </div>
    }
    return (
        <div className='App LogIn'>
            <h1>Please Sign-in</h1>
            <div className="container w-50 mx-auto mb-5 ">
                <form onSubmit={handleUserSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassBlur} type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <p style={{color:'red'}}>{error?.message}</p> */}
                    <Button variant="warning" type="submit">
                        Log-In
                    </Button>
                    {errorHandle}
                </form>
            </div>
            <p>New to babubhai? <Link to='/signUp' className='text-decoration-none'> <span className='text-danger'>Please Register</span></Link></p>
            <p>Forget Password? <span onClick={() => resetPass()} className='text-decoration-none'> <span className='text-danger'>Reset Password</span></span></p>

            {/* <SocialAuth></SocialAuth>
          <ToastContainer /> */}


        </div>
    );
};

export default Login;
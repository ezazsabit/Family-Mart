import axios from 'axios';
import React from 'react';
import { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({ email: '', password: '' })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        const sendData = {
            email: user.email,
            password: user.password

        }
        console.log(sendData);

        axios.post('http://localhost/Family-mart/login.php', sendData).then(function (result) {

            console.log(result.status)
            if (result.status === 200) {
                window.localStorage.setItem('email', result.data.Email);
                window.localStorage.setItem('userName', result.data.name);
                // eslint-disable-next-line no-restricted-globals
                navigate('/home');

            }
            else {
                // eslint-disable-next-line no-restricted-globals
                alert('Invalid User');
            }
        })


    }
    return (
        <div className='body'>
            <form onSubmit={submitForm} name="frmUser" method="post" action="">

                <table border="0" cellpadding="10" cellspacing="1" width="500"
                    align="center" class="tblLogin">
                    <tr class="tableheader">
                        <td align="center" colspan="2">Enter Login Details</td>
                    </tr>
                    <tr class="tablerow">
                        <td>Email: <input type="email" name="email" placeholder="User Email"
                            class="login-input" onChange={handleChange} value={user.email} /></td>
                    </tr>
                    <tr class="tablerow">
                        <td>Password: <input type="password" name="password" placeholder="Password"
                            class="login-input" onChange={handleChange} value={user.password} /></td>
                    </tr>
                    <tr class="tableheader">
                        <td align="center" colspan="2"><input type="submit" name="submit"
                            value="Submit" class="btnSubmit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default Login;
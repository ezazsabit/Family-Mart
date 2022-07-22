import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './secondnav.css'

const SecondNavbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='secNav'>
            <Navbar bg={'dark'.toLowerCase()} variant="dark">
                <Container>

                    <Nav className="mx-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        {/* <Nav.Link href="/login">Log-in</Nav.Link> */}
                        <Nav.Link>
                            {user ? <div className='d-flex nAv'>
                                <p className='logOut my-auto text-danger signout' onClick={logout}>Log-Out</p>
                                <Link to='/manageitems' className='text-decoration-none text-light d-flex align-items-center px-2 mx-auto'>Manage-Items</Link>
                                <Link to='/additems' className='text-decoration-none text-light d-flex align-items-center px-2 mx-auto'>Add-Items</Link>
                                <Link to={'/myitems/' + auth.currentUser.email} className='text-decoration-none text-light d-flex align-items-center px-2 mx-auto'>My-Items</Link>
                            </div> : <Link to='/login' className='text-decoration-none text-light d-flex align-items-center px-2 mx-auto'>Sign-In</Link>}</Nav.Link>
                        <Nav.Link href="/signUp">Sign-up</Nav.Link>
                        <Nav.Link href="/allitems">All products</Nav.Link>
                        <Nav.Link href="/contactus">Contact-Us</Nav.Link>
                        {/* <Nav.Link href="userList">User-List</Nav.Link> */}
                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default SecondNavbar;
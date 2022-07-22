import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../firebase.init'

const Myitems = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get(`http://localhost/Family-Mart/myitemdb.php/${auth?.currentUser?.email}`).then(function (response) {
            setUsers(response.data)
            console.log(response.data)
            // console.log(response.data[0]);

        });



    }
    return (
        <div>

            <h1>Total Items {users.length} </h1>
            <table className='w-70 mx-auto'>
                <thead>
                    <tr>
                        <th className='p-3'>Name</th>
                        <th className='p-3'>Image</th>
                        <th className='p-3'>Quantity</th>
                        <th className='p-3'>Price</th>
                        <th className='p-3'>Total Price</th>
                        {/* <th className='p-3'>Action</th> */}

                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>

                        <tr key={key}>
                            <td className='p-3'>{user.product_name}</td>
                            <td className='p-3'> <img src={user.imglink} alt="" /></td>
                            <td className='p-3'>{user.quantity}</td>
                            <td className='p-3'>{user.price}</td>
                            <td className='p-3'>{parseInt(user.quantity) * user.price}</td>

                            <td className='p-3'>
                                {/* onClick={() => deleteUser(user.id)} */}
                                {/* <Button className='my-5' variant="dark" >Remove from Cart</Button> */}
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
            <Link className='btn btn-dark my-5' to='/finalsubmit'>Confirm Purchase</Link>
        </div>
    );
};

export default Myitems;


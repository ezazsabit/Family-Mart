import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Myitems = () => {
    const [users, setUsers] = useState([]);
    //


    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost/Family-Mart/myitemdb.php').then(function (response) {
            setUsers(response.data)
            console.log(response.data)
            // console.log(response.data[0]);

        });



    }
    return (
        <div>

            <h1>Total Items {users.length - 1} </h1>
            <table className='w-50 mx-auto'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>

                        <tr key={key}>
                            <td>{user.product_name}</td>
                            <td> <img src={user.imglink} alt="" /></td>
                            <td>{user.quantity}</td>
                            <td>{user.price}</td>
                            <td>{parseInt(user.price) * user.quantity}</td>
                            {/* <td>{user.mobile}</td> */}
                            <td>

                                {/* <Button variant="dark" onClick={() => deleteUser(user.id)}>Delete</Button> */}
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


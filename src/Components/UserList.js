import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const UserList = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [users, setUsers] = useState([]);
    //


    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost/Family-Mart/get.php').then(function (response) {
            setUsers(response.data)
            console.log(response.data)
            console.log(response.data[0]);

        });
    }
    const deleteUser = (id) => {
        axios.delete(`http://localhost/Family-Mart/deleteitem.php/${id}/delete`).then(function (response) {
            console.log(response.data);
            getUsers();
        });
    }

    return (
        <div>

            <h1>Total Items {users.length} </h1>
            <table className='w-50 mx-auto'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Updated_at</th>


                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.product_name}</td>
                            <td>{user.quantity}</td>
                            <td>{user.updated_at}</td>
                            {/* <td>{user.mobile}</td> */}
                            <td>
                                <Link className='btn btn-primary' to={`/items/${user.id}/edit`} style={{ marginRight: "10px" }}>Edit</Link>
                                <Button variant="dark" onClick={() => deleteUser(user.id)}>Delete</Button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    );
};

export default UserList;
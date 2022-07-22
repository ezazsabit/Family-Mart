import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Allitems = () => {
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
    return (
        <div>
            <h1 >All Products!!</h1>
            <div className='mx-5 row'> {
                users.map((user, key) =>
                    <Card className='col-xl-4  gx-5 mx-auto my-5 ' key={key} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={user.imglink} />
                        <Card.Body>
                            <Card.Title>{user.product_name}</Card.Title>
                            <Card.Text>
                                <b>Price:</b>{user.price} TK
                            </Card.Text>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link className='btn btn-dark' to={'/singleitem/' + user.id} >Add to cart</Link>
                        </Card.Body>
                    </Card>
                )
            }</div>

        </div>
    );
};

export default Allitems;
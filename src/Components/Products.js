import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css'
import '../App.css'
const Products = () => {
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
            <h1 >Our Products!!</h1>
            <div className='mx-5 row firstgrid' style={{ display: "grid" }}> {
                users.slice(0, 6).map((user, key) =>
                    <Card className='col-lg-4  gx-5 mx-auto my-3' key={key} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={user.imglink} />
                        <Card.Body>
                            <Card.Title>{user.product_name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Text>
                                <b>Price:</b>{user.price} TK
                            </Card.Text>
                            <Link className='btn btn-dark' to={'/singleitem/' + user.id} >Add to cart</Link>
                        </Card.Body>
                    </Card>
                )
            }</div>
            <Link to='/allitems' className='btn btn-dark m-5'>
                See all items
            </Link>
        </div>
    );
};

export default Products;
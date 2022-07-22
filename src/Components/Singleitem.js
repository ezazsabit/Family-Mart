import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Singleitem = () => {
    const [users, setUsers] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get(`http://localhost/Family-Mart/get.php/${id}`).then(function (response) {
            setUsers(response.data)
            console.log(response.data)
            console.log(response.data[0]);

        });
    }
    const handleconfirm = () => {
        // console.log(e.target)
        // var object = t;
        // console.log(object);
        const namep = document.getElementById("namep").innerHTML;
        const imglink = users.imglink;
        const pricep = document.getElementById("price").innerHTML;
        const quantityp = document.getElementById("quantity").value;
        const inputs = { namep, imglink, pricep, quantityp };
        console.log(inputs);
        axios.post('http://localhost/Family-Mart/myitemdb.php', inputs).then(function (response) {
            console.log(response.data);
        });
        alert('Succesfully added!!');
        document.getElementById("quantity").value = null;


    }




    return (
        <div >

            <h1 id='namep'>{users.product_name}</h1>
            <img id='imglink' src={users.imglink} alt="" />
            <h3 >Price:: <span id='price'>{users.price}</span>TK</h3>
            <div className='my-5'>
                {/* <label htmlFor="" for='quantitu'>Quantity:</label> */}Quantity:
                <input id='quantity' type="number" name='quantity' placeholder='enter quantity' />
            </div>
            <button type='submit' onClick={handleconfirm} className="btn btn-dark my-3">Confirm to Cart</button>

        </div>
    );
};

export default Singleitem;
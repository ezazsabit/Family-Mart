import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';

const Singleitem = () => {
    const [users, setUsers] = useState([]);
    const { id } = useParams();
    // const { currentUser } = auth;
    // console.log(currentUser);
    // const [loading] = useAuthState(auth);
    // setInterval(console.log(auth?.currentUser?.email), 5000);


    console.log(auth?.currentUser);


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
    // if (loading) {
    //     return (
    //         <div>
    //             <p>Initialising User...</p>
    //         </div>
    //     );
    // }


    const day = 24 * 60 * 60 * 1000;
    // eslint-disable-next-line no-undef
    cookieStore.set({
        name: "cookie1",
        value: "cookie1-value",
        expires: Date.now() + day,
        domain: "localhost:3000"
    })
        .then(
            function () {
                console.log("It worked!");
            },
            function (reason) {
                console.error("It failed: ", reason);
            }
        );

    console.log(auth?.currentUser?.email)
    const handleconfirm = () => {
        // console.log(e.target)
        // var object = t;
        // console.log(object);
        const namep = document.getElementById("namep").innerHTML;
        const imglink = users.imglink;
        const pricep = document.getElementById("price").innerHTML;
        const quantityp = document.getElementById("quantity").value;

        //--------------------for geting email of logged in user---------------------------------
        const email = auth?.currentUser?.email
        const inputs = { namep, imglink, pricep, quantityp, email };

        console.log(inputs);
        axios.post(`http://localhost/Family-Mart/myitemdb.php/${email}`, inputs).then(function (response) {
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
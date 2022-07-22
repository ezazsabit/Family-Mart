import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img1 from '../360_F_291522205_XkrmS421FjSGTMRdTrqFZPxDY19VxpmL.jpg';
import auth from '../firebase.init';

const Finalsubmit = () => {
    const [users, setUsers] = useState([]);
    //


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
    let a = 0;
    users.map(user => {

        a = a + parseInt(user.quantity) * user.price;
        console.log(a);

    })
    return (
        <div>
            <img src={img1} alt="" />
            <h3 className='text-danger'>Your Total bill : {a}</h3>
            <h5 >You can pay the bill via bkash no or visa card!!You will get your product with 1 hour after payment.</h5>
        </div>
    );
};

export default Finalsubmit;
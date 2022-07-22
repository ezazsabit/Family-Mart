import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img1 from '../360_F_291522205_XkrmS421FjSGTMRdTrqFZPxDY19VxpmL.jpg'

const Finalsubmit = () => {
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
    let a = 0;
    users.slice(1).map(user => {

        a = a + parseInt(user.price) * user.quantity;

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
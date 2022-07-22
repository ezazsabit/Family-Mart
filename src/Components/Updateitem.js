import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Updateitem = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    useEffect(() => {
        getUser();
    }, [id]);
    //for showing the previous data in the input field before editing
    function getUser() {
        axios.get(`http://localhost/Family-Mart/get.php/${id}`).then(function (response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }
    const handleChange = async (event) => {
        const name = event.target.name;

        const value = event.target.value;
        console.log(value)
        await setInputs(values => ({ ...values, [name]: value }));
        console.log(inputs);
    }
    //for updating the updated data into the sql database
    const handleSubmit = (event) => {


        event.preventDefault();
        axios.put(`http://localhost/Family-Mart/put1.php/${id}/edit`, inputs).then(function (response) {
            console.log(response.data);
            // navigate('/');
        });

        event.target.reset();

    }
    return (
        <div>
            <h1>Edit Your Item!!!</h1>

            <form onSubmit={handleSubmit} className="w-50 mx-auto my-5">
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Product Name: </label>
                            </th>
                            <td>

                                <input className="my-2" defaultValue={inputs.product_name} type="text" name="name" onBlur={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Price: </label>
                            </th>
                            <td>

                                <input className="my-2" defaultValue={inputs.price} type="text" name="price" onBlur={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Quantity:</label>
                            </th>
                            <td>
                                <input className="my-2" defaultValue={inputs.quantity} type="text" name="quantity" onBlur={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Image Link: </label>
                            </th>
                            <td>
                                <input className="my-2" defaultValue={inputs.imglink} type="text" name="img" onBlur={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <button className="btn btn-primary my-3">Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Updateitem;
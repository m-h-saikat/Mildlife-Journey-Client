import React, { useEffect, useState } from 'react';
import './AllOrders.css'





const AllOrders = () => {
    const [orders, setOrders] = useState([])

    const [status, setStatus] = useState('')
    // const { user } = allContexts
    useEffect(() => {
        fetch(`https://mildlife-journey-mehedi.vercel.app/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, );
    // [user?.email]


    const handleUpdate = (id) => {
        fetch(` https://mildlife-journey-mehedi.vercel.app/statusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('update')
    }

    const handleSelectValue = (e) => {
        setStatus(e.target.value)
    }



    console.log(orders);
    return (

        < div className="container all-order-container" >
            <div className="text-center pb-3">
                <h1 className="mb-5 text-center pt-5">Your Ordered <span className="text-danger">{orders.length}</span>  Package....!!!!!</h1>
            </div>

            <table className="table table-dark table-responsive" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ border: "1px solid red" }}>

                        <th  className="text-center">Number</th>
                        <th  className="text-center">Package</th>
                        <th  className="text-center">Image</th>
                        <th  className="text-center">Cost</th>
                        <th  className="text-center">Person</th>
                        <th  className="text-center">Amount</th>
                        <th  className="text-center">Date</th>
                        <th  className="text-center">User Email</th>
                        <th  className="text-center">User Address</th>
                        <th  className="text-center">Contact Number</th>
                        <th  className="text-center">Payment Method</th>
                        <th  className="text-center">Payment Number</th>
                        <th  className="text-center">Txn Id</th>
                        <th  className="text-center">Status</th>
                        <th  className="text-center">Update</th>
                    </tr>
                </thead>
                {orders?.map((order, index) => (
                    <tbody key={order._id}>
                        <tr role="row" style={{ border: "2px solid gray" }} >
                            <th className="text-center" scope="row">{index + 1}</th>
                            <td className="text-center">{order.name}</td>
                            <td className="text-center"><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td>
                            <td className="text-center">{order.price}</td>
                            <td className="text-center">{order.person}</td>
                            <td className="text-center">{order.totalCost}</td>
                            <td className="text-center">{order.date}</td>
                            <td className="text-center">{order.email}</td>
                            <td className="text-center">{order.address}</td>
                            <td className="text-center">{order.contact}</td>
                            <td className="text-center">{order.payment_method}</td>
                            <td className="text-center">{order.payment_number}</td>
                            <td className="text-center">{order.txn_id}</td>
                            <td className="text-center">
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={order.status}>{order.status}</option>
                                        <option defaultValue="approved">approved</option>
                                     
                                        <option defaultValue="pending">Cancelled</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleUpdate(order._id)}>update</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >











    );
};


export default AllOrders;
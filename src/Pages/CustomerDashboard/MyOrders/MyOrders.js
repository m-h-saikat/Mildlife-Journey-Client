import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import './MyOrder.css'
const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://morning-waters-52432.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);



    const handleOrderCancel = id => {
        const proceed = window.confirm('Are you sure you want to Cancel this Order')
        if (proceed) {
            const url = `https://morning-waters-52432.herokuapp.com/cancelOrder/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = orders?.filter(order => order._id !== id);
                        setOrders(remaining);

                    }
                })
        }
    }

    return (
        < div className="container my-order-container custom-body" >
            <div className="text-center pb-3">
                <h1 className="mb-5 text-center pt-5">Your Ordered <span className="text-danger">{orders.length}</span> </h1>
            </div>

            <table className="table table-dark text-center table-responsive" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ border: "1px solid red" }}>
                        <th  className="text-center" >Package</th>
                        <th  className="text-center">Image</th>
                        <th  className="text-center">Cost</th>
                        <th  className="text-center">Person</th>
                        <th  className="text-center">Amount</th>
                        <th  className="text-center">Date</th>
                        <th  className="text-center">Contact</th>
                        <th  className="text-center">Payment Method</th>
                        <th  className="text-center">Payment Number</th>
                        <th  className="text-center">Txn Id</th>
                        <th  className="text-center">Status</th>
                        <th  className="text-center">Action</th>
                    </tr>
                </thead>
                {orders?.map((order) => (
                    <tbody>
                        <tr role="row" style={{ border: "2px solid gray" }} >
                            <td className="text-center">{order.name}</td>
                            <td className="text-center"><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td>
                            <td className="text-center">{order.price}</td>
                            <td className="text-center">{order.person}</td>
                            <td className="text-center">{order.totalCost}</td>
                            <td className="text-center">{order.date}</td>
                            <td className="text-center">{order.contact}</td>
                            <td className="text-center">{order.payment_method}</td>
                            <td className="text-center">{order.payment_number}</td>
                            <td className="text-center">{order.txn_id}</td>
                            <td className="text-center">{order.status}</td>
                            <td className="text-center"> <button
                                className="btn btn-danger"
                                onClick={() => handleOrderCancel(order._id)}
                            >
                                Cancel Order
                            </button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >

    );
};

export default MyOrders;
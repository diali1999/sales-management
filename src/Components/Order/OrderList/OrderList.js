import React, {useEffect, useState} from 'react'
import {Table, Spinner, Button} from 'react-bootstrap';

function OrderList() {
    const [orders, setOrders] = useState([]);
    const [isBusy, setBusy] = useState(true);
    async function getOrder(){
        return fetch('http://localhost:5000/api/orders',{
            method:'GET',
            headers:{
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
            }
        })
        .then(data=>data.json());
    }
    async function changeStatus(e){
        e.preventDefault();
        const orderId = e.target.getAttribute('id');
        console.log(orderId);
        const statusChange = await fetch(`http://localhost:5000/api/orders/status`, {
            method: 'POST',
            headers:{
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id: orderId})
        });
        console.log(statusChange);
        getOrder().then(data=>{
            console.log(data);
            setOrders(data);
        });
    }
    useEffect(() => {
        getOrder()
        .then(data=>{
            setOrders(data);
            setBusy(false);
        })
    }, []);
    if(!isBusy){
        return (
        <div>
            <h2>Order List</h2>
            <Table striped bordered hover>
        <thead>
            <tr>
                <th>orderId</th>
                <th>userId</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {orders.map(order=>{
                return(
                    <tr key={`${order.id}`}>
                        <td>{order.id}</td>
                        <td>{order.userId}</td>
                        <td>{typeof(order.product) =="object" && order.product.map((item,i) =>{
                            return <li key={i}>{item.productName}</li>})}
                            {typeof(order.product) =="string" && JSON.parse(order.product).map((item,i) =>{
                            return <li key={i}>{item.productName}</li>
                        })} 
                        </td>
                        <td>
                        {typeof(order.product) =="object" && order.product.map((item,i) =>{
                        return <li key={i}>{item.quantity}</li>})}
                        {typeof(order.product)=="string" && JSON.parse(order.product).map((item,i) =>{
                            return <li key={i}>{item.quantity}</li>
                        })}
                        </td>
                        <td>{order.date}</td>
                        <td>{order.customer}</td>
                        <td>{order.status}</td>
                        <td id={`${order.id}`}><Button id={`${order.id}`} variant="danger" onClick={changeStatus}>Change Status</Button></td>
                    </tr>
                )
            })}
        </tbody>
        </Table>
        <br />
        </div>
        )
    }
    else{
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
}

export default OrderList
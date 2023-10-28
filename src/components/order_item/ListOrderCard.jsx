import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard';

const ListOrderCard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7156/api/Driver/OrdersList")
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error('Lỗi khi gọi API: ', error));
    }, []);

    return (
        <div>
            <h2>Danh sách đơn hàng</h2>
            {orders.map(order => (
                <OrderCard key={order.orderId} order={order} />
            ))}
        </div>
    );
}

export default ListOrderCard;

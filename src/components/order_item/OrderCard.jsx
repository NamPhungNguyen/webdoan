import React, { useState, useEffect } from 'react';
import './ordercard.scss'; // Import tệp SCSS

const OrderCard = () => {
    const [orders, setOrders] = useState([]); // Sử dụng useState để lưu trữ dữ liệu từ API

    useEffect(() => {
        fetch("https://localhost:7156/api/Driver/OrdersList")
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error('Lỗi khi gọi API: ', error));
    }, []); // Tham số thứ hai là một mảng rỗng để đảm bảo hiệu suất gọi API một lần khi thành phần được tạo ra

    return (
        <div className="order-container">
            {orders.map((order, index) => (
                <div className="order-card" key={index}>
                    <h2>Đơn hàng số: {order.orderId}</h2>
                    <p>Khách hàng: {order.customerId}</p>
                    <p>OviID: {order.oviId}</p>
                    <p>Ngày order: {order.orderedDate}</p>
                    <p>ArrivedDate: {order.arrivedDate}</p>
                    <p>Total Amount: {order.totalAmount}</p>
                    <p>Position Come Id: {order.positionComeId}</p>
                    <p>Position Go Id: {order.positionGoId}</p>

                    <p>Trạng thái: {order.status ? 'Hoàn thành' : 'Chưa hoàn thành'}</p>
                </div>
            ))}
        </div>
    );
}

export default OrderCard;

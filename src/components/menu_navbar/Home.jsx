import React from "react"
import { Link } from 'react-router-dom';
import ListOrderCard from "../order_item/ListOrderCard";
import OrderCard from "../order_item/OrderCard";
import './home.scss'
const Home = () => {
    return (
        <>
            {/* <Link to='/admin'>
                <li>Admin</li>
            </Link> */}
            <div id="container" style={{ background: '#efefef', padding: '0 120px' }}>
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <OrderCard />
                </div>
            </div>
        </>

    )
}

export default Home
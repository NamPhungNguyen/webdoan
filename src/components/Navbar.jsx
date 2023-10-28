import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { FaShippingFast } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    }

    return (
        <nav className='navbar'>
            <button className='mobile-menu-icon' onClick={toggleMobileMenu}>
                {isMobile ? <ImCross /> : <FaBars />}
            </button>
            <FaShippingFast className="icon-shipping" />
            <h3 className='title'>Vận chuyển</h3>

            <div className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
                <Link to='/'>
                    <li>Trang chủ</li>
                </Link>
                <Link to='/about'>
                    <li>Về chúng tôi</li>
                </Link>
                <div className="nav-dropdown">
                    <li className="dropdown">
                        Dịch vụ <BiChevronDown className="icon-down" />
                        <ul className="dropdown-content">
                            <Link to='/delivery-service'><li>Dịch vụ giao hàng</li></Link>
                            <Link to='/car-service'><li>Dịch vụ xe</li></Link>
                            <Link to='/business-service'><li>Dịch vụ doanh nghiệp</li></Link>
                        </ul>
                    </li>
                </div>
                <div className="nav-dropdown">
                    <li className="dropdown">
                        Tài xế <BiChevronDown className="icon-down" />
                        <ul className="dropdown-content">
                            <Link to='/driver-registration'><li>Đăng ký tài xế</li></Link>
                            <Link to='/driver-guide'><li>Cẩm nang tài xế</li></Link>
                        </ul>
                    </li>
                </div>
                <Link to='/contact'>
                    <li>Liên hệ</li>
                </Link>
                <Link to='/login'>
                    <button className="delivery-button">Giao hàng ngay</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

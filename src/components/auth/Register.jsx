import React, { useState } from "react";
import './register.scss';
import RegisterUser from './RegisterUser';
import RegisterBusiness from "./RegisterBussiness";

const Register = () => {
    const [currentTab, setCurrentTab] = useState(1);
    const [showRegister, setShowRegister] = useState(true); // mặc định để tab1 hiện dữ liệu

    const tabs = [
        {
            id: 1,
            tabTitle: 'Đăng ký người dùng',
        },
        {
            id: 2,
            tabTitle: 'Đăng ký doanh nghiệp',
        },
    ];

    const handleTabClick = (tabId) => {
        setCurrentTab(tabId);

        if (tabId === 1) {
            setShowRegister(true);
        } else {
            setShowRegister(false);
        }
    }

    return (
        <div className="container">
            <div className="tabs">
                {tabs.map((tab) =>
                    <button
                        key={tab.id}
                        id={tab.id}
                        disabled={currentTab === tab.id}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.tabTitle}
                    </button>
                )}
            </div>
            <div className="content">
                {currentTab === 1 ? (
                    <RegisterUser />
                ) : (
                    <RegisterBusiness />
                )}
            </div>
        </div>
    )
}

export default Register;

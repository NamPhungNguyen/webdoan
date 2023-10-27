import React, { useState } from "react";
import './registerbussiness.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterBusiness = () => {
    const [formData, setFormData] = useState({
        businessName: "",
        businessLicenseNumber: "",
        address: "",
        bussinessPassword: "",
        contactEmail: "",
        phoneNumber: "",
        businessWebsite: "",
        confirmBussinessPassword: "",
    });

    const { businessName, businessLicenseNumber, address, bussinessPassword, contactEmail, phoneNumber, businessWebsite, confirmBussinessPassword } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const isValidInputs = () => {
        if (!businessName || !businessLicenseNumber || !address || !contactEmail || !phoneNumber || !businessWebsite || !bussinessPassword || bussinessPassword !== confirmBussinessPassword) {
            toast.error("Vui lòng kiểm tra lại thông tin nhập.");
            return false;
        }

        let emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(contactEmail)) {
            toast.error("Vui lòng nhập đúng định dạng Email.");
            return false;
        }

        return true;
    }

    const handleRegisterBussiness = (e) => {
        e.preventDefault();
        if (isValidInputs()) {
            axios.post("https://localhost:7156/api/SignIn/bussiness", {
                businessName,
                contactEmail,
                bussinessPassword

            })
                .then(response => {
                    toast.success("Đăng ký tài xế thành công!");
                })
                .catch(error => {
                    if (error.response && error.response.data) {
                        toast.error(error.response.data);
                    } else {
                        toast.error("Đã xảy ra lỗi không xác định.");
                    }
                });
        }
    };



    return (
        <div>
            <h1>Đăng ký doanh nghiệp</h1>
            <form onSubmit={handleRegisterBussiness} className="form-registerbussiness">
                <div>
                    <label htmlFor="businessName">Tên doanh nghiệp</label>
                    <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="businessLicenseNumber">Giấy phép kinh doanh</label>
                    <input
                        type="text"
                        id="businessLicenseNumber"
                        name="businessLicenseNumber"
                        value={formData.businessLicenseNumber}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="address">Địa chỉ</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="businessEmail">Email doanh nghiệp</label>
                    <input
                        type="text"
                        id="businessEmail"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="phoneNumber">Số điện thoại</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="businessWebsite">Website doanh nghiệp (nếu có)</label>
                    <input
                        type="text"
                        id="businessWebsite"
                        name="businessWebsite"
                        value={formData.businessWebsite}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                        type="password"
                        id="password"
                        name="bussinessPassword"
                        value={formData.bussinessPassword}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="confirm">Xác nhận mật khẩu</label>
                    <input
                        type="password"
                        id="confirm"
                        name="confirmBussinessPassword"
                        value={formData.confirmBussinessPassword}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
}

export default RegisterBusiness;

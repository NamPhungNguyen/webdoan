import React, { useState } from "react";
import './registeruser.scss'
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterUser = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        address: "",
        phoneNumber: "",
        birthday: "",
        gender: true,
        password: "",
        confirmPassword: ""
    });

    const { fullName, email, address, phoneNumber, birthday, gender, password, confirmPassword } = formData;

    const handleChange = (e) => {
        const value = e.target.value === true ? (e.target.value === false) : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const isValidInputs = () => {
        if (!fullName || !email || !address || !phoneNumber || !birthday || !gender || !password || password !== confirmPassword) {
            toast.error("Vui lòng kiểm tra lại thông tin nhập.");
            return false;
        }

        let emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            toast.error("Vui lòng nhập đúng định dạng Email.");
            return false;
        }

        return true;
    };

    const handleRegisterUser = (e) => {
        e.preventDefault();
        if (isValidInputs()) {
            axios.post("https://localhost:7156/api/SignIn/customer", {
                fullName,
                email,
                address,
                phoneNumber,
                birthday,
                password,
                confirmPassword,
                gender
            })
                .then(response => {
                    toast.success("Đăng ký người dùng thành công!");
                })
                .catch(error => {
                    console.error(error);
                    if (error.response && error.response.data) {
                        toast.error(error.response.data);
                    } else {
                        toast.error("Đã xảy ra lỗi không xác định.");
                    }
                });
        }
    };



    return (
        <div className="register-page">
            <div className="register-form-container">
                <h1 className="title">Đăng ký tài khoản</h1>

                <form onSubmit={handleRegisterUser} className="small-form">
                    <div>
                        <label htmlFor="full-name" className="form-label">
                            Họ và Tên
                        </label>
                        <input
                            id="full-name"
                            className="form-control"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            id="email"
                            className="form-control"
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="address" className="form-label">
                            Địa chỉ
                        </label>
                        <input
                            id="address"
                            className="form-control"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone-number" className="form-label">
                            Số điện thoại
                        </label>
                        <input
                            id="phone-number"
                            className="form-control"
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="birthday" className="form-label">
                            Ngày sinh
                        </label>
                        <input
                            id="birthday"
                            className="form-control"
                            type="date"
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="gender-radio">
                        <label className="form-label">Giới tính</label>
                        <div className="select-gender">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === true}
                                    onChange={handleChange}
                                />
                                Nam
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === false}
                                    onChange={handleChange}
                                />
                                Nữ
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="form-label">
                            Mật khẩu
                        </label>
                        <input
                            id="password"
                            className="form-control"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="form-label">
                            Nhập lại mật khẩu
                        </label>
                        <input
                            id="confirm-password"
                            className="form-control"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="btn-register" type="submit">Đăng ký</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterUser;

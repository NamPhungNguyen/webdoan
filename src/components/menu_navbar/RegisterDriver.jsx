import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './registerdriver.scss';
const RegisterDriver = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        address: "",
        phoneNumber: "",
        birthday: "",
        gender: true, // true cho  "Nam", false cho "Nữ"
        idcard: "",
        password: "",
        confirm: "",
    });

    const { fullName, email, address, phoneNumber, birthday, gender, idcard, password, confirm } = formData;


    // hàm xử lý các sự kiện khi giá trị trong các trường thay đổi
    const handleChange = (e) => {
        // Xử lý sự kiện thay đổi input và cập nhật formData
        const value = e.target.type === 'radio' ? (e.target.value === 'male') : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const isValidInputs = () => {
        if (!fullName || !email || !address || !phoneNumber || !idcard || !password || password !== confirm) {
            toast.error("Vui lòng kiểm tra lại thông tin nhập.");
            return false;
        }

        let emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            toast.error("Vui lòng nhập đúng định dạng Email.");
            return false;
        }

        return true;
    }


    // hàm xử lý sự kiện khi click đăng ký
    const handleRegisterDriver = (e) => {
        e.preventDefault();
        if (isValidInputs()) {
            axios.post("https://localhost:7156/api/SignIn/driver", {
                fullName,
                address,
                email,
                phoneNumber,
                birthday,
                password,
                confirm,
                gender
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
            <h1>Đăng ký tài xế</h1>
            <form className="form-registerdriver" onSubmit={handleRegisterDriver}>
                <div>
                    <label htmlFor="fullName">Họ và Tên</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="address">Địa chỉ</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Số điện thoại</label>
                    <input
                        type="text"
                        id="phone"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="birthday">Ngày sinh</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={birthday}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">Giới tính</label>
                    <div className="gt">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === true}
                                onChange={handleChange}
                            />
                            Nam
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === false}
                                onChange={handleChange}
                            />
                            Nữ
                        </label>
                    </div>
                </div>
                <div>
                    <label htmlFor="idcard">Chứng minh nhân dân</label>
                    <input
                        type="text"
                        id="idcard"
                        name="idcard"
                        value={idcard}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="confirm">Xác nhận mật khẩu</label>
                    <input
                        type="password"
                        id="confirm"
                        name="confirm"
                        value={confirm}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
}

export default RegisterDriver;

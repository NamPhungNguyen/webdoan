import React, { useState } from 'react';
import './login.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [roleId, setRoleId] = useState(0); // Khởi tạo roleId là 1
    const history = useHistory();

    const loginApi = (email, password) => {
        return axios.post("https://localhost:7156/api/Login", { email, password });
    }

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email/Password là bắt buộc");
            return;
        }

        // Thực hiện đăng nhập và lấy roleId từ API
        try {
            const res = await loginApi(email, password);
            if (res.data && res.data.roleId) {
                const roleId = res.data.roleId;

                // Điều hướng dựa trên roleId
                if (roleId === 1) {
                    history.push('/admin');
                } else if (roleId === 4) {
                    history.push('/');
                } else if (roleId === 3) {
                    history.push('/');
                } else {
                    // Xử lý trường hợp khác
                }

                localStorage.setItem("token", res.data.token);
            }
        } catch (error) {
            console.error("Đăng nhập thất bại: ", error);
        }
    };

    return (
        <>
            <div className='login-container col-4'>
                <div className='title-login'>Đăng nhập</div>
                <div className='txtE_U'>Email hoặc Username</div>
                <input className='input' type='text' placeholder='Email hoặc Username...' value={email} onChange={(event) => setEmail(event.target.value)} />
                <div className='input-2'>
                    <input className='input'
                        type={isShowPassword === true ? 'text' : 'password'}
                        placeholder='Password...'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <div className='eye-container' onClick={() => setIsShowPassword(!isShowPassword)} >
                        {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
                <a href='#' className='forgot-password'>Quên mật khẩu?</a>
                <button id='btn-login'
                    className={email && password ? "active" : ""}
                    disabled={email && password ? false : true}
                    onClick={handleLogin}
                >Đăng nhập</button>
                <div className='back'>
                    <IoIosArrowBack className="icon-back" /> <a className='btn-back' href='/'>Quay lại</a>
                </div>
                <div className='question-signup'>
                    <p>Bạn chưa có tài khoản?<a href='/register' className='link-signup'> Đăng ký ngay</a> </p>
                </div>
            </div>
        </>
    )
};

export default Login;

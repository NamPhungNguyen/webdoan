import React, { useState } from 'react';
import './login.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { FaEyeSlash } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await fetch('https://localhost:7156/api/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Xử lý dữ liệu trả về từ API ở đây
            } else {
                // Xử lý lỗi
            }
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
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
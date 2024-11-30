import React, { useState } from 'react'
import { register } from '@/services/auth.ts'
import { Link } from 'react-router-dom'
import './styles/register.scss'


const RegisterPage = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const [submitLoading, setSubmitLoading] = React.useState(false)
    const [error, setError] = useState('')
    const onFinish = async (values: any) => {
        setError('')
        setPasswordVisible(true)
        try {
            await register(values)
        } catch (e: any) {
            console.error(e)
            setError(e.message)
        } finally {
            setSubmitLoading(false)
        }
    }

    return (
        <div className="register">
            <div className="formContainer">
                <form>
                    <h1>Đăng kí</h1>
                    <input name="username" type="text" placeholder="Nhập tên người dùng" />
                    <input name="email" type="text" placeholder="Nhập email" />
                    <input name="password" type="password" placeholder="Nhập mật khẩu" />
                    <input name="password" type="password" placeholder="Nhập xác nhận mật khẩu" />
                    <button>Register</button>
                    <Link to="/login">Bạn đã có tài khoản?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default RegisterPage
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { PATHS } from '@/router/path.ts'
import './styles/login.scss'
import { loginAction } from '@/store/authAction.ts'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const [submitLoading, setSubmitLoading] = React.useState(false)
    const [error, setError] = useState('')
    const onFinish = async (values: any) => {
        setError('')
        setPasswordVisible(true)
        try {
            await dispatch(loginAction(values))
            navigate(PATHS.HOME)
        } catch (e: any) {
            console.error(e)
            setError(e.message)
        } finally {
            setSubmitLoading(false)
        }
    }

    return (
        <div className="login">
            <div className="formContainer">
                <form>
                    <h1>Đăng nhập</h1>
                    <input name="username" type="text" placeholder="Nhập email" />
                    <input name="password" type="password" placeholder="Nhật mật khẩu" />
                    <button>Login</button>
                    <Link to="/register">{'Chưa'} có tài khoản?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default LoginPage
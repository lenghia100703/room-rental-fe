import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { PATHS } from '@/router/path.ts'
import './styles/login.scss'
import { loginAction } from '@/store/authAction.ts'
import { Link, useNavigate } from 'react-router-dom'
import { getCurrentUserAction } from '@/store/authAction.ts'

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({ email: '', password: '' })
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const [submitLoading, setSubmitLoading] = React.useState(false)
    const [error, setError] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }))
    }

    const onFinish = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setSubmitLoading(true)
        try {
            await dispatch(loginAction(formValues))
            await dispatch(getCurrentUserAction())
            navigate(PATHS.HOME)
        } catch (e: any) {
            console.error(e)
            setError(e.message || 'Đăng nhập thất bại, vui lòng thử lại!')
        } finally {
            setSubmitLoading(false)
        }
    }

    return (
        <div className="login">
            <div className="formContainer">
                <form onSubmit={onFinish}>
                    <h1>Đăng nhập</h1>
                    <input
                        name="email"
                        type="text"
                        placeholder="Nhập email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        name="password"
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Nhập mật khẩu"
                        value={formValues.password}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" disabled={submitLoading}>
                        {submitLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                    </button>
                    {error && <p className="error">{error}</p>}
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

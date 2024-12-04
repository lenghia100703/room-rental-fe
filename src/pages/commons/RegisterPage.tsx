import React, { useState } from 'react'
import { register } from '@/services/auth'
import { Link, useNavigate } from 'react-router-dom'
import './styles/register.scss'
import { PATHS } from '@/router/path'

const RegisterPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const [error, setError] = useState('')
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const navigate = useNavigate()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const resetForm = () => {
        setFormValues({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const onFinish = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        if (!validateEmail(formValues.email)) {
            setError('Email không hợp lệ.')
            return
        }

        if (formValues.password !== formValues.confirmPassword) {
            setError('Mật khẩu và xác nhận mật khẩu không khớp.')
            return
        }

        setSubmitLoading(true)

        try {
            await register({
                username: formValues.username,
                email: formValues.email,
                password: formValues.password,
            })
            alert('Đăng ký thành công!')
            resetForm()
            navigate(PATHS.LOGIN)
        } catch (e: any) {
            console.error(e)
            setError(e.message || 'Đã xảy ra lỗi.')
        } finally {
            setSubmitLoading(false)
        }
    }

    return (
        <div className="register">
            <div className="formContainer">
                <form onSubmit={onFinish}>
                    <h1>Đăng ký</h1>
                    {error && <div className="error">{error}</div>}
                    <input
                        name="username"
                        type="text"
                        placeholder="Nhập tên người dùng"
                        value={formValues.username}
                        onChange={handleInputChange}
                        required
                    />
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
                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Nhập xác nhận mật khẩu"
                        value={formValues.confirmPassword}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" disabled={submitLoading}>
                        {submitLoading ? 'Đang xử lý...' : 'Đăng kí'}
                    </button>
                    <Link to="/login">Bạn đã có tài khoản?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="Background" />
            </div>
        </div>
    )
}

export default RegisterPage

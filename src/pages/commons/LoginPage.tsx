import { Alert, Button, Card, Col, Form, Input, Row } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { PATHS } from '@/router/path.ts'
import './styles/login.css'
import { loginAction } from '@/store/authAction.ts'
import { useNavigate } from 'react-router-dom'

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
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
            }}
        >
            <Card
                className="login-card"
                style={{
                    width: '30vw',
                    margin: '50px 0',
                }}
            >
                <img src="https://uet.vnu.edu.vn/wp-content/uploads/2017/02/logo-2.png" alt="logo-phenikaa"
                     style={{ width: '10vw' }} />
                {error && <Alert message={error} type="error" />}
                <Form
                    name="normal_login"
                    className="login-form"
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập email!',
                            },
                        ]}
                    >
                        <Input allowClear size="large" prefix={<UserOutlined className="site-form-item-icon" />}
                               placeholder="Nhập email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Mật khẩu"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                    >
                        <Input.Password
                            allowClear
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                            size="large" prefix={<LockOutlined className="site-form-item-icon" />} type="password"
                            placeholder="Nhập mật khẩu" />
                    </Form.Item>
                    <Form.Item>
                        <Row align="middle" justify="space-between">
                            <Col span={18}>
                                <div style={{
                                    float: 'left',
                                }}>
                                    <div>
                                        Bạn chưa có tài khoản?
                                        <Button type="link" href={PATHS.REGISTER}>
                                            Đăng ký
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col span={6}>
                                <Button
                                    size="large"
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    loading={submitLoading}
                                    style={{
                                        float: 'right',
                                    }}
                                >
                                    Đăng nhập
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Card>
            <div className="img-container">
                <img src="https://raw.githubusercontent.com/lenghia100703/intro-web-store/refs/heads/main/bg.png"
                     alt="background" />
            </div>
        </div>
    )
}

export default LoginPage
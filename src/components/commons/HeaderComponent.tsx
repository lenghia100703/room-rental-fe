import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Button, Dropdown, Menu } from 'antd'
import { MenuOutlined, UserOutlined } from '@ant-design/icons'
import './styles/header.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/store/authSlice'
import { getCurrentUserAction } from '@/store/authAction'

function HeaderComponent() {
    const { isAuthenticated, user } = useSelector((state: any) => state.auth)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        dispatch(getCurrentUserAction())
    }, [dispatch])

    const menuItems = [
        { key: 'home', label: <Link to="/">Trang chủ</Link> },
        { key: 'map', label: <Link to="/map">Bản đồ</Link> },
        { key: 'info', label: <Link to="/info">Thông tin</Link> },
    ]

    const handleLogout = () => {
        dispatch(logout())
    }

    const userMenu = (
        <Menu>
            <Menu.Item key="profile">
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout" onClick={handleLogout}>Logout</Menu.Item>
        </Menu>
    )

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">
                    <span>LOGO</span>
                </Link>
                <Menu selectable={false} mode="horizontal" items={menuItems} className="navbar-menu-items" />
            </div>
            <div className="navbar-right">
                {isAuthenticated ? (
                    <Dropdown overlay={userMenu} trigger={['click']}>
                        <div className="navbar-user">
                            <Avatar src={user.avatar} icon={<UserOutlined />} size="large" />
                            <span>{user.username}</span>
                        </div>
                    </Dropdown>
                ) : (
                    <div>
                        <Link to="/login">
                            <Button type="primary">Login</Button>
                        </Link>
                        <Link to="/register" className="navbar-register">
                            <Button type="default">Register</Button>
                        </Link>
                    </div>
                )}
                <Button
                    icon={<MenuOutlined />}
                    type="text"
                    className="navbar-menuIcon"
                    onClick={() => setOpen(!open)}
                />
            </div>
        </nav>
    )
}

export default HeaderComponent

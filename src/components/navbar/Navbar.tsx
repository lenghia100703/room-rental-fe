import { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
    const [open, setOpen] = useState(false)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const user = useSelector((state) => state.auth.user)
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>Nhóm 4</span>
                </a>
                <a href="/">Trang chủ</a>
                <a href="/list-room">Danh sách phòng</a>
            </div>
            <div className="right">
                {isAuthenticated ? (
                    <div className="user">
                        <img
                            src={user.avatar}
                            alt=""
                        />
                        <span>{ user.username }</span>
                        <Link to="/profile" className="profile">
                            {/*<div className="notification">3</div>*/}
                            <span>Cá nhân</span>
                        </Link>
                    </div>
                ) : (
                    <>
                        <a href="/login">Đăng nhập</a>
                        <a href="/register" className="register">
                            Đăng kí
                        </a>
                    </>
                )}
                <div className="menuIcon">
                    <img
                        src="/menu.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                </div>
                <div className={open ? 'menu active' : 'menu'}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

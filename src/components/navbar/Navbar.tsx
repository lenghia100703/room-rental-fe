import { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
    const [open, setOpen] = useState(false)

    const user = false
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>Nhóm 4</span>
                </a>
                <a href="/">Trang chủ</a>
                <a href="/list-room">Bản đồ</a>
                <a href="/">Thông tin</a>
                <a href="/">SĐT</a>
            </div>
            <div className="right">
                {user ? (
                    <div className="user">
                        <img
                            src="/images.jfif"
                            alt=""
                        />
                        <span>John Doe</span>
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
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

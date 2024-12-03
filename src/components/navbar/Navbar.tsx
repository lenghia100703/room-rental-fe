import { useEffect, useState } from 'react'
import './navbar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/store/authSlice'
import { PATHS } from '@/router/path'

function Navbar() {
    const [open, setOpen] = useState(false)
    const [popupVisible, setPopupVisible] = useState(false)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.user')) {
                setPopupVisible(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const handleLogout = () => {
        dispatch(logout())
        navigate(PATHS.LOGIN)
    }

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>Nhóm 4</span>
                </a>
                <a href="/">Trang chủ</a>
                <a href="/list-room">Danh sách phòng</a>
                <a href="/about">Thông tin</a>
            </div>
            <div className="right">
                {isAuthenticated ? (
                    <div className="user" onClick={() => setPopupVisible((prev) => !prev)}>
                        <img
                            src={user.avatar}
                            alt=""
                        />
                        <span>{user.username}</span>
                        {popupVisible && (
                            <div className="popup">
                                <Link to="/profile" style={{ margin: 0 }}>Trang cá nhân</Link>
                                {(user?.role === 'owner') && (
                                    <Link to="/manage-rooms" style={{ margin: 0 }}>Quản lý phòng trọ</Link>)}
                                <button style={{fontSize: 16}} onClick={handleLogout}>Đăng xuất</button>
                            </div>
                        )}
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
            </div>
        </nav>
    )
}

export default Navbar

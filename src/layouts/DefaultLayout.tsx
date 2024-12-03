import Navbar from '@/components/navbar/Navbar.tsx'
import { Outlet } from 'react-router-dom'
import './styles/layout.scss'


function DefaultLayout() {
    return (
        <div className="layout">
            <div className="">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default DefaultLayout

import { Avatar, Dropdown, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './styles/header.css'

const HeaderComponent = () => {
    const menu = (
        <Menu>
            <Menu.Item key="profile">
                <a href="/profile">Trang cá nhân</a>
            </Menu.Item>
            <Menu.Item key="logout">
                <a
                    onClick={() => {
                        console.log('logout')
                    }}
                >
                    Đăng xuất
                </a>
            </Menu.Item>
        </Menu>
    )

    return (
        <div className="header-content">
            <h2
                style={{
                    color: '#F26526',
                }}
            >
                Logo
            </h2>
            <div>
                <Dropdown overlay={menu} trigger={['click']}>
                    <div className="user-info" onClick={(e) => e.preventDefault()}>
                        <Avatar icon={<UserOutlined />} />
                        <span className="username">{'Name'}</span>
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}

export default HeaderComponent
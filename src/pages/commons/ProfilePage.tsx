import Chat from '@/components/chat/Chat'
import List from '@/components/list/List'
import './styles/profilePage.scss'
import { useSelector } from 'react-redux'

function ProfilePage() {
    const user = useSelector((state) => state.auth.user)
    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>Thông tin cá nhân</h1>
                        <button>Cập nhật</button>
                    </div>
                    <div className="info">
                        <span>
              Tên người dùng: <b>{user?.username}</b>
            </span>
                        <span>
              E-mail: <b>{user?.email}</b>
            </span>
                        <span>
                            Vai trò: <b>{user?.role}</b>
                        </span>
                    </div>
                    <div className="title">
                        <h1>Danh sách</h1>
                        <button>Thêm mới</button>
                    </div>
                    {/*<List />*/}
                    <div className="title">
                        <h1></h1>
                    </div>
                    {/*<List />*/}
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    {/*<Chat />*/}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage

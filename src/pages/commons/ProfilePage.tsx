import './styles/profilePage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getMarkedRooms, updateUser } from '@/services/user'
import { useEffect, useState } from 'react'
import Card from '@/components/card/Card.tsx'
import EditUserModal from '@/components/modals/EditUserModal.tsx'
import { getCurrentUserAction } from '@/store/authAction'

function ProfilePage() {
    const user = useSelector((state) => state.auth.user)
    const [rooms, setRooms] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const dispatch = useDispatch()

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        fetchMarkedRooms(page)
    }

    const openModal = () => {
        setIsEditModalOpen(true)
    }

    const updateUserAction = async (userData: any) => {
        try {
            await updateUser(user?._id, userData)
            await dispatch(getCurrentUserAction())
        } catch (e) {
            console.error(e)
        }
    }

    const fetchMarkedRooms = async (page: any) => {
        try {
            const response = await getMarkedRooms({
                page: page,
                perPage: 10,
            })
            setRooms(response.data)
            setTotalPages(response.totalPages)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchMarkedRooms(currentPage)
    }, [])
    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>Thông tin cá nhân</h1>
                        <button onClick={() => openModal()}>Cập nhật</button>
                    </div>
                    <div className="info">
                        <span>
                            Tên người dùng: <b>{user?.username}</b>
                        </span>
                        <span>
                            E-mail: <b>{user?.email}</b>
                        </span>
                        <span>
                            Số điện thoại: <b>{user?.phone ? user?.phone : 'Chưa thiết lập'}</b>
                        </span>
                        <span>
                            Vai trò: <b>{user?.role === 'user' ? 'Người dùng' : 'Chủ trọ'}</b>
                        </span>
                    </div>

                    <div className="title">
                        <h1>Danh sách trọ đã lưu</h1>
                    </div>
                    {
                        rooms.length > 0 ? (
                            <>
                                <div className="wrapper">
                                    {rooms?.map((item: any) => (
                                        <Card key={item.id} item={item} />
                                    ))}
                                </div>
                                <div className="pagination">
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <button
                                            key={index}
                                            className={index + 1 === currentPage ? 'active' : ''}
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="wrapper">
                                Chưa đánh dấu phòng nào!
                            </div>
                        )
                    }
                </div>
            </div>
            {isEditModalOpen && (
                <EditUserModal
                    user={user}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={(updatedUser: any) => {
                        updateUserAction(updatedUser)
                    }}
                />
            )}
            <div className="chatContainer">
                <div className="wrapper">
                    {/*<Chat />*/}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage

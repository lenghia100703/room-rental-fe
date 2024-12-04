import { room } from '@/services/room.ts'
import { useEffect, useState } from 'react'
import './styles/manageRoom.scss'
import EditRoomModal from '@/components/modals/EditRoomModal.tsx'
import { numberWithComas } from '@/helpers/numberWithComas'
import CreateRoomModal from '@/components/modals/CreateRoomModal.tsx'

function ManageRoomsPage() {
    const [rooms, setRooms] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [selectedRoom, setSelectedRoom] = useState<any>(null)

    const fetchRoomByOwner = async (page: number) => {
        try {
            const response = await room.getRoomByOwner({
                page: page,
                perPage: 10,
            })
            setRooms(response.data)
            setTotalPages(response.totalPages)
        } catch (e) {
            console.error(e)
        }
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        fetchRoomByOwner(page)
    }

    const handleEdit = (room: any) => {
        setSelectedRoom(room)
        setIsEditModalOpen(true)
    }

    const handleDelete = (room: any) => {
        setSelectedRoom(room)
        setIsDeleteModalOpen(true)
    }

    const handleCreate = () => {
        setIsCreateModalOpen(true)
    }

    const confirmDelete = async () => {
        try {
            await room.deleteRoom(selectedRoom._id)
            await fetchRoomByOwner(currentPage)
            setIsDeleteModalOpen(false)
        } catch (e) {
            console.error('Error deleting room:', e)
        }
    }

    const confirmEdit = async (roomData: any) => {
        try {
            await room.updateRoom(selectedRoom._id, roomData)
            await fetchRoomByOwner(currentPage)
            setIsEditModalOpen(false)
        } catch (e) {
            console.error('Error editing room:', e)
        }
    }

    const confirmCreate = async (roomData: any) => {
        try {
            await room.createRoom(roomData)
            await fetchRoomByOwner(currentPage)
            setIsCreateModalOpen(false)
        } catch (e) {
            console.error('Error create room:', e)
        }
    }

    useEffect(() => {
        fetchRoomByOwner(currentPage)
    }, [])

    return (
        <div style={{ padding: 10 }}>
            <div className="title">
                <h1>Quản lý phòng</h1>
                <button onClick={() => handleCreate()}>Đăng phòng trọ</button>
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th style={{ width: 40, textAlign: 'center' }}>STT</th>
                        <th style={{ textAlign: 'center' }}>Tiêu đề</th>
                        <th style={{ width: 120, textAlign: 'center' }}>Giá (VND)</th>
                        <th style={{ textAlign: 'center' }}>Địa chỉ</th>
                        <th style={{ width: 120, textAlign: 'center' }}>Trạng thái</th>
                        <th style={{ width: 120, textAlign: 'center' }}>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rooms?.map((item: any, index: number) => (
                        <tr key={item.id}>
                            <td style={{ textAlign: 'center' }}>{index + 1}</td>
                            <td>{item.title}</td>
                            <td style={{ textAlign: 'center' }}>{numberWithComas(item.price, ',')}</td>
                            <td>{item.address.join(', ')}</td>
                            <td style={{ textAlign: 'center' }}>{item.status === 'available' ? 'Có sẵn' : 'Đã thuê'}</td>
                            <td style={{ textAlign: 'center' }}>
                                <button onClick={() => handleEdit(item)} className="btn-edit">
                                    Sửa
                                </button>
                                <button onClick={() => handleDelete(item)} className="btn-delete">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
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
            {isEditModalOpen && (
                <EditRoomModal
                    room={selectedRoom}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={(updatedRoom: any) => {
                        confirmEdit(updatedRoom).then(r => console.log(r))
                    }}
                />
            )}

            {
                isCreateModalOpen && (
                    <CreateRoomModal
                        onClose={() => setIsCreateModalOpen(false)}
                        onSave={(room: any) => {
                            confirmCreate(room).then(r => console.log(r))
                        }}
                    />
                )
            }

            {isDeleteModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Xác nhận xóa</h2>
                        <p>
                            Bạn có chắc chắn muốn xóa phòng <strong>{selectedRoom.title}</strong>?
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button onClick={() => setIsDeleteModalOpen(false)}>Hủy</button>
                            <button className="btn-delete" onClick={confirmDelete}>Xóa</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ManageRoomsPage

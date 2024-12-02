import './styles/roomDetail.scss'
import Slider from '@/components/slider/Slider'
import Map from '@/components/map/Map'
import { useEffect, useState } from 'react'
import { room } from '@/services/room.ts'
import { useParams } from 'react-router-dom'
import { numberWithComas } from '@/helpers/numberWithComas.ts'
import { getUserById } from '@/services/user.ts'
import { checkRoom } from '../../services/user.ts'
import { convertDateTime } from '../../helpers/convertDateTime.ts'

function RoomDetailPage() {
    const { id } = useParams()
    const [isMarked, setIsMarked] = useState(false)
    const [currentRoom, setRoom] = useState(null)
    const [owner, setOwner] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchRoomById = async () => {
        try {
            setLoading(true)
            const response = await room.getRoomById(id)
            if (response?.data) {
                setRoom(response.data)
            }
        } catch (error) {
            console.error('Error fetching room:', error)
        } finally {
            setLoading(false)
        }
    }

    const checkRoomAction = async (roomId: string | undefined) => {
        try {
            const response = await checkRoom(roomId)
            console.log(response)
            setIsMarked(response.data.isMarked)
        } catch (error) {
            console.error('Error marking room:', error)
        }
    }

    const fetchOwner = async (ownerId) => {
        try {
            setLoading(true)
            const response = await getUserById(ownerId)
            console.log(response)
            if (response?.data) {
                setOwner(response.data)
                console.log(owner)
            }
        } catch (error) {
            console.error('Error fetching owner:', error)
        } finally {
            setLoading(false)
        }
    }

    const markRoomAction = async (roomId: any) => {
        try {
            const response = await room.markRoom(roomId)
            setIsMarked(!isMarked)
            alert(response.message)
        } catch (error) {
            console.error('Error marking room:', error)
            alert('Có lỗi xảy ra khi đánh dấu phòng!')
        }
    }

    useEffect(() => {
        fetchRoomById()
        checkRoomAction(id)
    }, [id])

    useEffect(() => {
        if (currentRoom?.owner) {
            fetchOwner(currentRoom.owner)
        }
    }, [currentRoom])

    if (loading) {
        return <div>Đang tải...</div>
    }

    if (!currentRoom) {
        return <div>Không tìm thấy phòng!</div>
    }

    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={currentRoom?.images || []} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{currentRoom?.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="" />
                                    <span>{currentRoom?.address.join(', ') + ', ' + currentRoom?.city}</span>
                                </div>
                                <div className="address">
                                    <span>Ngày đăng tải: {convertDateTime(currentRoom?.createdAt)}</span>
                                </div>
                                <div className="price">{numberWithComas(currentRoom?.price, ',')} VND/tháng</div>
                                <div className="price">{currentRoom?.status === 'available' ? 'Còn phòng!' : 'Đã thuê!'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">Thông tin chung</p>
                    <div className="listVertical">
                        <div>{currentRoom?.description}</div>
                    </div>
                    <p className="title">Tình trạng</p>
                    <div className="listVertical">
                        <div>{currentRoom?.status === 'available' ? 'Còn phòng' : 'Đã thuê'}</div>
                    </div>
                    <p className="title">Chủ trọ</p>
                    <div className="listVertical">
                        <div>{owner?.username}</div>
                    </div>
                    <p className="title">Kích cỡ</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="/size.png" alt="" />
                            <span>{currentRoom?.size} m2</span>
                        </div>
                        <div className="size">
                            <img src="/bed.png" alt="" />
                            <span>{currentRoom?.bedroom} ngủ</span>
                        </div>
                        <div className="size">
                            <img src="/bath.png" alt="" />
                            <span>{currentRoom?.bathroom} tắm</span>
                        </div>
                    </div>
                    <p className="title">Địa điểm gần đó</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <img src="/school.png" alt="" />
                            <div className="featureText">
                                <span>Trường học</span>
                                <p>{currentRoom?.school}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Điểm xe bus</span>
                                <p>{currentRoom?.bus}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" alt="" />
                            <div className="featureText">
                                <span>Quán ăn</span>
                                <p>{currentRoom?.restaurant}</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Vị trí</p>
                    <div className="mapContainer">
                        <Map items={[currentRoom]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="" />
                            Nhắn tin
                        </button>
                        <button onClick={() => markRoomAction(currentRoom?._id)}>
                            <img src={isMarked ? '/saved.png' : '/save.png'} alt="save" />
                            {isMarked ? 'Bỏ lưu' : 'Lưu phòng trọ'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetailPage

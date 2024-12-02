import { Link, useNavigate } from 'react-router-dom'
import './card.scss'
import { numberWithComas } from '@/helpers/numberWithComas.ts'
import { useEffect, useState } from 'react'
import { room } from '@/services/room.ts'
import { checkRoom } from '../../services/user.ts'
import { PATHS } from '../../router/path.ts'

// @ts-ignore
function Card({ item }) {
    const [isMarked, setIsMarked] = useState<boolean | null>(null)
    const navigate = useNavigate()
    const checkRoomAction = async (roomId: string) => {
        try {
            const response = await checkRoom(roomId)
            console.log(response)
            if (response.status === 200) {
                setIsMarked(response.data.isMarked)
            }
            if (response.status === 401) {
                setIsMarked(false)
            }
        } catch (error: any) {
            console.error('Error marking room:', error)
            if (error.response.status === 401) {
                setIsMarked(false)
            }
        }
    }

    const markRoomAction = async (roomId: any) => {
        try {
            const response = await room.markRoom(roomId)
            setIsMarked(!isMarked)
            alert(response.message)
        } catch (error: any) {
            console.error('Error marking room:', error)
            if (error.response.status === 401) {
                alert('Bạn cần đăng nhập để có thể đánh dấu phòng!')
                navigate(PATHS.LOGIN)
            } else if (error.response.status === 500) {
                alert('Có lỗi xảy ra khi đánh dấu phòng!')
            }
        }
    }

    useEffect(() => {
        checkRoomAction(item._id)
    }, [item._id])
    return (
        <div className="card">
            <Link to={`/room/${item._id}`} className="imageContainer">
                <img src={item.images[0]} alt="" />
            </Link>
            <div className="textContainer">
                <h2 className="title">
                    <Link to={`/room/${item._id}`}>{item.title}</Link>
                </h2>
                <p className="address">
                    <img src="/pin.png" alt="" />
                    <span>{item.address.join(', ')}</span>
                </p>
                <p className="price">{numberWithComas(item.price, ',')} VND</p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="/bed.png" alt="" />
                            <span>{item.bedroom} ngủ</span>
                        </div>
                        <div className="feature">
                            <img src="/bath.png" alt="" />
                            <span>{item.bathroom} tắm</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon" onClick={() => markRoomAction(item._id)}>
                            <img src={isMarked ? '/saved.png' : '/save.png'} alt="save" />
                        </div>
                        <div className="icon">
                            <img src="/chat.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

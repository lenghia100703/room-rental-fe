import { Link } from 'react-router-dom'
import './card.scss'
import { numberWithComas } from '@/helpers/numberWithComas.ts'
import { useEffect, useState } from 'react'
import { room } from '@/services/room.ts'
import { checkRoom } from '../../services/user.ts'

// @ts-ignore
function Card({ item }) {
    const [isMarked, setIsMarked] = useState<boolean | null>(null)
    const checkRoomAction = async (roomId: string) => {
        try {
            const response = await checkRoom(roomId)
            console.log(response)
            setIsMarked(response.data.isMarked)
            console.log(isMarked)
        } catch (error) {
            console.error('Error marking room:', error)
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
        checkRoomAction(item._id)
    }, [item._id])

    if (isMarked === null) return null
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
                    <span>{item.address}</span>
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

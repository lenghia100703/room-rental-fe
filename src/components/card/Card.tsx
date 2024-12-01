import { Link } from 'react-router-dom'
import './card.scss'
import { numberWithComas } from '@/helpers/numberWithComas.ts'

// @ts-ignore
function Card({ item }) {
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
                        <div className="icon">
                            <img src="/save.png" alt="" />
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

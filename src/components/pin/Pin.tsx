import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'
import { numberWithComas } from '@/helpers/numberWithComas'

function Pin({ item }) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="card">
                    <Link to={`/room/${item._id}`} className="imageContainer">
                        <img src={item.images[0]} alt="" />
                    </Link>
                    <div className="textContainer">
                        <h2 className="title" style={{ fontSize: 14 }}>
                            <Link to={`/room/${item._id}`}>{item.title}</Link>
                        </h2>
                        <p className="address" style={{ margin: 4, fontSize: 12 }}>
                            <img src="/pin.png" alt="" />
                            <span>{item.address.join(', ')}</span>
                        </p>
                        <p className="price"
                           style={{ margin: 4, fontSize: 14 }}>{numberWithComas(item.price, ',')} VND</p>
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
                        </div>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin

import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import 'leaflet/dist/leaflet.css'
import Pin from '@/components/pin/Pin.tsx'

function Map({ items }) {
    return (
        <MapContainer center={[items[0]?.latitude, items[0]?.longitude]} zoom={12} scrollWheelZoom={false}
                      className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item => (
                <Pin item={item} key={item.id} />
            ))}
        </MapContainer>
    )
}

export default Map
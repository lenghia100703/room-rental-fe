import { useEffect, useState } from 'react'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import Map from '../../components/map/Map'
import { room } from '@/services/room'
import './styles/listRoom.scss'

function ListRoomPage() {
    const [rooms, setRooms] = useState([])
    const fetchRooms = async () => {
        try {
            const response = await room.getListRoom({
                page: 1,
                perPage: 10,
            })
            if (response?.data) {
                setRooms(response.data)
            }
        } catch (error) {
            console.error('Error fetching rooms:', error)
        }
    }
    useEffect(() => {
        fetchRooms()
    }, [])

    return (
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {rooms?.map((item: any) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={rooms} />
            </div>
        </div>
    )
}

export default ListRoomPage

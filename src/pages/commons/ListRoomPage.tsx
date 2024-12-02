import { useEffect, useState } from 'react'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import Map from '../../components/map/Map'
import { room } from '@/services/room'
import './styles/listRoom.scss'

function ListRoomPage() {
    const [rooms, setRooms] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        fetchRooms(page)
    }

    const fetchRooms = async (page) => {
        try {
            const response = await room.getListRoom({
                page: page,
                perPage: 10,
            })
            if (response?.data) {
                setRooms(response.data)
                setTotalPages(response.totalPages)
            }
        } catch (error) {
            console.error('Error fetching rooms:', error)
        }
    }
    useEffect(() => {
        fetchRooms(currentPage)
    }, [])

    return (
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {rooms?.map((item: any) => (
                        <Card key={item.id} item={item} />
                    ))}
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
                </div>
            </div>
            <div className="mapContainer">
                <Map items={rooms} />
            </div>
        </div>
    )
}

export default ListRoomPage

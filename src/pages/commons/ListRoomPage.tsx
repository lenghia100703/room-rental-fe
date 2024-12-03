import { useEffect, useState } from 'react'
import Filter from '@/components/filter/Filter'
import Card from '@/components/card/Card'
import Map from '@/components/map/Map'
import { room } from '@/services/room'
import './styles/listRoom.scss'
import { useSelector } from 'react-redux'

function ListRoomPage() {
    const query = useSelector((state: any) => state.query.query)
    const [rooms, setRooms] = useState([
        {
            latitude: 21.0285,
            longitude: 105.8542,
            images: [],
            address: [],
            title: '',
            price: 0,
            bedroom: 0,
            bathroom: 0,
        },
    ])
    const [currentParams, setCurrentParams] = useState(query || {})
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        fetchRooms(page, currentParams)
    }

    const fetchRooms = async (page: any, params: any) => {
        try {
            const response = await room.getListRoom({
                page: page,
                perPage: 10,
                ...params,
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
        fetchRooms(currentPage, currentParams)
    }, [currentPage, currentParams])

    return (
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter query={query} onSave={(params: any) => {
                        setCurrentParams(params)
                        fetchRooms(currentPage, params).then(r => console.log(r))
                    }} />
                    {rooms.length > 0 ? (rooms?.map((item: any) => (
                        <Card key={item.id} item={item} />
                    ))) : (
                        <div>
                            Không tìm thấy phòng nào!
                        </div>
                    )}
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
